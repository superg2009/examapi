# Exam Scraper Web Server

Python and beautifulsoup 4 based web scraper for TRU Exams with Flask web server.

## Installation

```
pip install pipenv
pipenv --three

pipenv shell
pipenv install --ignore-pipfile or pipenv install --dev

```

when done developing

```
pipenv lock

```

to prevent shifting versions.

please use

```
pipenv install x
```

to add packages if contributing

## USAGE

```
./runserver.sh
```
remember to check chmod +x if if doesn't work.
Go to 127.0.0.1 or and request /api/schedule to get a JSON Response.

##  Pre Deployment on cloud PaaS
use below script to generate requirements.txt for deployment on services.
```
deploy.sh
```
A procfile has been provided for Heroku PaaS, requires requirements.txt which use can generate with deploy.  
You can use runserver.sh to run locally or manually.
## Notes

A more automated way to run or install may follow later but above works assuming you are in a pipenv shell.  
Currently server will attempt to open a local file 'schedule.json' before attempting to scrap TRU.  
No Authentication or UI yet or decided on.  
Routes: / and /index just return Hello World currently.
