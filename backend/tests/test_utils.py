from utils import commit_new_file_to_github
from config import ROOT_DIR



def test_commit_file_to_github():
    file_path = f'{ROOT_DIR}/db/3.json'
    commit_msg = "added sample.json by test script"
    assert commit_new_file_to_github(file_path, commit_msg)
    