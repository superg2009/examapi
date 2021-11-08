#!/bin/bash

export FLASK_APP=src/app.py
pipenv shell
pipenv lock -r >requirements.txt
