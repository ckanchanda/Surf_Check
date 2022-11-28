# Import the requests library.
import requests
#from citipy import citipy
import pandas as pd
import matplotlib.pyplot as plt
#import numpy as np
import time
from datetime import datetime
import json as js

# Import the API key.
from config import api_key

#beach = beaches_df['beach_name']
#lat = beaches_df['latitude']
#long = beaches_df['longitude']
#coordinates = list(beaches_lat_lngs)


# Starting URL for Weather Map API Call.
#url = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?key=' + api_key + BEACH
#beach_url = url + "&format=json&q=" + str(lat) + "," + str(long)
#beach_url = url + "&format=json&q=" + str(coordinates[i-1][1]) + "," + str(coordinates[i-1][2])

#print(beach_url)
#response = requests.get(beach_url).json()