import speedtest
import datetime
import time
import csv
import json
from os.path import exists

json_results = {
    "time": [],
    "download": [],
    "upload": [],
    "ping": []
}

if not exists("speedtest_chart/src/results.json"):
    with open('speedtest_chart/src/results.json', 'w+', encoding='utf-8') as f:
        json.dump(json_results, f, ensure_ascii=False, indent=4)
else:
    with open('speedtest_chart/src/results.json', 'r', encoding='utf-8') as f:
        json_results = json.load(f)

test = speedtest.Speedtest()
test.get_servers()

while True:
    curr_time = datetime.datetime.now().strftime("%m/%d/%y %H:%M:%S")

    print(f"\---[ {curr_time} ]---/\n")
    download = round(test.download()*1E-6, 2)

    print(f"Download: \t {download}")
    upload = round(test.upload()*1E-6, 2)

    print(f"Upload: \t {upload}")
    ping = test.results.ping

    print(f"Ping: \t {ping}")

    json_results["time"].append(round(time.time(), 2))
    json_results["download"].append(download)
    json_results["upload"].append(upload)
    json_results["ping"].append(ping)

    with open('speedtest_chart/src/results.json', 'w+', encoding='utf-8') as f:
        json.dump(json_results, f, ensure_ascii=False, indent=4)

    time.sleep(300)