import json
from datetime import datetime

import requests

import config
import utils
from .base import BasePipeline


class LKStatsPipeline(BasePipeline):

    is_incremental_load: bool = True
    endpoint: str = "https://hpb.health.gov.lk/api/get-current-statistical"
    data: dict = {}
    update_date_time: str
    commit_msg = "added lk stats json file"

    def extract(self):
        http = requests.get(self.endpoint)
        http.raise_for_status()
        response = http.json()
        if response.get('success'):
            self.data = response.get('data', {})
            last_update_date_time = self.data.get('update_date_time')
            self.update_date_time = datetime.strptime(last_update_date_time, '%Y-%m-%d %H:%M:%S')  # noqa
            return True

    def transform(self):
        if not self.data:
            return False

        self.data.pop('hospital_data', None)
        return True

    def full_load(self):
        date = self.update_date_time.date()
        file_path = f'{config.DB_DIR}/lk-stats-{date}.json'
        with open(file_path, 'w') as file:
            json.dump(self.data, file, indent=4)

        return utils.commit_new_file_to_github(file_path, self.commit_msg)

    def incremental_load(self):
        raise NotImplementedError()
