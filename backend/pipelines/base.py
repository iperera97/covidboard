from abc import ABC, abstractmethod


class BasePipeline(ABC):

    is_incremental_load: bool = False
    is_full_load: bool = False

    @abstractmethod
    def extract(self) -> bool:
        pass

    @abstractmethod
    def transform(self) -> bool:
        pass

    @abstractmethod
    def incremental_load(self) -> bool:
        pass

    @abstractmethod
    def full_load(self) -> bool:
        pass

    def load(self):
        func = None

        if self.full_load:
            func = self.full_load
        elif self.is_incremental_load:
            func = self.incremental_load

        if func is None:
            raise ValueError('load function not defined')

        return func()

    def run(self) -> bool:
        self.extract()
        self.transform()
        self.load()
        return True
