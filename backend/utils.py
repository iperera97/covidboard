import config


def commit_new_file_to_github(file_path: str, commit_msg: str) -> bool:
    git_path = f"backend{file_path.split('backend')[1]}"

    with open(file_path, "r") as f:
        repo = config.github.get_repo('iperera97/covidboard')
        repo.create_file(git_path, message=commit_msg, content=f.read())
        return True

