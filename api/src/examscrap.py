import os
import requests
import json
from bs4 import BeautifulSoup

def extract_schedule():
    # go to exam schedule page
    url = 'https://www.tru.ca/current/enrolment-services/exam-schedule/exam.html'
    response = requests.get(url)
    # create soup object of web page
    soup = BeautifulSoup(response.content, "html.parser")
    # find tables on page
    # table = soup.find("table", attrs={'class':"small-12"})
    table = soup.select('div section div table')
    # print(table.prettify())
    data = []
    for sect in table:
        headings = [th.get_text() for th in sect.find('thead').find_all("th")]
        # create dict of headings (Key) and value
        for row in sect.find("tbody").find_all("tr"):
            dataset = dict(zip(headings, (td.get_text().strip('\t')
                                          for td in row.find_all("td"))))
            data.append(dataset)
    return data

def get_schedule():
    if(os.path.exists("./schedule.json")):
        out = open("schedule.json",'r')
        schedule = out.read() # json handled by jsonify later
        out.close()
        return schedule
    else:
        schedule = extract_schedule() #array
        out = open("schedule.json",'w')
        json_file =json.dumps(schedule, indent=4)
        print(json_file,file=out)
        out.close()
        return schedule
