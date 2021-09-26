import pytest

from pipelines.govlk import LKStatsPipeline


@pytest.fixture(scope='function')
def pipeline():
    return LKStatsPipeline()


def test_extract(pipeline):
    assert pipeline.extract()
    assert pipeline.data


def test_transform(pipeline):
    pipeline.extract()
    assert pipeline.transform()
    assert "hospital_data" not in pipeline.data


def test_full_load(pipeline):
    pipeline.extract()
    pipeline.transform()
    pipeline.full_load()
