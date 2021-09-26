import os
from pathlib import Path

from github import Github


ROOT_DIR = Path(__file__).resolve().parent
DB_DIR = f'{ROOT_DIR}/db'

GITHUB_TOKEN = os.getenv('GITHUBTOKEN')
GITHUB_REPO = os.getenv('REPOSITORY')

github = Github(GITHUB_TOKEN)
