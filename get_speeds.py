import speedtest
import datetime
import time
import csv
import json
from os.path import exists

def run_speedtest():
    test = speedtest.Speedtest()
    test.get_servers()

    print(f"\---[ {curr_time} ]---/")
    
    download = round(test.download()*1E-6, 2)
    print(f"Download: \t {download}")

    upload = round(test.upload()*1E-6, 2)
    print(f"Upload: \t {upload}")

    ping = test.results.ping
    print(f"Ping: \t {ping}")

    return download, upload, ping


def write_results(download, upload, ping):
    json_results = {}

    if not exists("speedtest_chart/src/results.json"):
        with open('speedtest_chart/src/results.json', 'w+', encoding='utf-8') as f:
            json.dump(json_results, f, ensure_ascii=False, indent=4)
    else:
        with open('speedtest_chart/src/results.json', 'r', encoding='utf-8') as f:
            json_results = json.load(f)
    
    date_id = datetime.datetime.now().strftime("%m%d%y")

    if date_id in json_results:
        if download > json_results[date_id]["max_download"]:
            json_results[date_id]["max_download"] = download
        elif download < json_results[date_id]["min_download"]:
            json_results[date_id]["min_download"] = download

        if upload > json_results[date_id]["max_upload"]:
            json_results[date_id]["max_upload"] = upload
        elif upload < json_results[date_id]["min_upload"]:
            json_results[date_id]["min_upload"] = upload


        json_results[date_id]["times"].append(time.time())
        json_results[date_id]["download"].append(download)
        json_results[date_id]["upload"].append(upload)
        json_results[date_id]["ping"].append(ping)

        json_results[date_id]["avg_download"] = \
            round(sum(json_results[date_id]["download"])/len(json_results[date_id]["download"]), 2)
        
        json_results[date_id]["avg_upload"] = \
            round(sum(json_results[date_id]["upload"])/len(json_results[date_id]["upload"]), 2)

        json_results[date_id]["avg_ping"] = \
            round(sum(json_results[date_id]["ping"])/len(json_results[date_id]["ping"]), 2)
    else:
        json_results["datesRecorded"].insert(0, date_id)
        json_results[date_id] = {
            "date_str": datetime.datetime.now().strftime("%A, %B %d %Y"),
            "max_download": download,
            "min_download": download,
            "max_upload": upload,
            "min_upload": upload,
            "avg_download": download,
            "avg_upload": upload,
            "avg_ping": ping,
            "times": [time.time()],
            "download": [download],
            "upload": [upload],
            "ping": [ping]
        }

    with open('speedtest_chart/src/results.json', 'w+', encoding='utf-8') as f:
        json.dump(json_results, f, ensure_ascii=False, indent=4)

while True:
    curr_time = datetime.datetime.now().strftime("%m/%d/%y %H:%M:%S")
    download, upload, ping = run_speedtest()
    write_results(download, upload, ping)

    time.sleep(300)