# Virtual environments in python
# Are how we download external libraries or frameworks
# and keep them silo'd to one project/folder

# To create a virtual a virtual environment
# 1: python3 -m venv whatever-you-want-to-name-the-folder
# 2: just start installing packages using: pipenv install

# To go into your virtual env
# run: pipenv shell

# To get out of the shell run ctrl + d 

# To run a command inside of the shell really quickly without actually going into the shell
# you can run: pipenv run -YOUR COMMAND-

# Pipfile -> package.json
# Pipfile.lock -> package-lock.json

# to install a dev dependency
# pipenv install --dev PACKAGE-NAME

#  .venv -> node_modules

# pipenv uninstall PACKAGE-NAME

