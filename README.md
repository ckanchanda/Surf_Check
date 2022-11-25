# Surf_Check

![logo](https://user-images.githubusercontent.com/107447038/200466271-675c0d51-55e3-4ac8-a701-a31bbafb7582.png)

## Overview

As a diehard lover of the ocean and surfing, and a user of surf resources such as surfline and magicseaweed, we were inspired to create our own website that can predict surf forecasts in the Golden State of California. The purpose of this project will be to analyze the best surfing conditions in popular surfing locations within California using the given parameters of: temperature, swell size + period + direction, wind direction, etc.  

#### Questions we are trying to answer:

- What are the average for the parameters in these beaches? 
- What popular surfing location in CA provides the most ideal surfing conditions in a given season? 
- Temperature, swell size/period and how they reflect any specific trends


## Data Extraction Process

The list of different surfing beaches and their respective coordinates were scraped from [a Wikipedia article](https://en.wikipedia.org/wiki/List_of_beaches_in_California).  We utilized the  [The World Weather Online API](https://www.worldweatheronline.com/developer/api/marine-weather-api.aspx) to grab daily weather data for the different popular surfing beaches in California. JSON files from the World Weather API were restructured into a concise dataframe containing all the information that we specifically want. 

We found, however, that while the World Weather Online datasets offer variety in location, it does not offer variety in the time span covered. [The National Buoy Center](https://www.ndbc.noaa.gov/download_data.php?filename=46086h2021.txt.gz&dir=data/historical/stdmet/) provided historical data downloadable that spans years' worth of marine weather data. As finding all 252 instances of different beaches were not possible, we chose to specifically focus on the San Clemente beach, 2020-2021.


## Schema

![schema](https://user-images.githubusercontent.com/107447038/200467014-22c0b44f-0f66-487f-9dfe-6c681b06004d.jpg)


##  Machine Learning - Supervised

Wave (swell) height is a crucial determinator of whether a day's weather provides surfable conditions or not. Using the San Clemente weather data from 2020 to 2021, we wanted to see whether we:
1. would be able to predict the swell height of a given city given its different weather elements:
- date, time (down to minutes)
- wind direction and wind speed
- water temperature
- air temperature
- wave period
- sea level pressure
- air pressure
- station visibility (nautical miles)
- pressure tendency 
- water level (tide)

2. and determine which of the six given Supervised Machine Learning algorithms would best fit the data given.

#### Results

Balanced Random Forest
![balancedrandomforest](https://user-images.githubusercontent.com/107447038/203899481-f125fc21-31ca-4e05-a7c4-1f67b6930a0d.png)

Cluster Centroids
![clustercentroids](https://user-images.githubusercontent.com/107447038/203899488-344899d4-d907-444f-9c6b-25e3dbcd67c0.png)

Easy Ensemble
![easyensemble](https://user-images.githubusercontent.com/107447038/203899494-abb6d4cd-2141-4bfd-9a6f-f6bac0e970e6.png)

Naive Random
![naiverandom](https://user-images.githubusercontent.com/107447038/203899497-50953764-6b90-4bd6-a8b4-2f4f37023b1a.png)
 
SMOTE oversample
![smote oversample](https://user-images.githubusercontent.com/107447038/203899518-3511cd76-c89b-4d28-b46d-29a44903f689.png)


SMOTEEN
![smoteen](https://user-images.githubusercontent.com/107447038/203899533-ff2ef37b-5084-4f8c-9b7e-ca11aff92e80.png)


## Presentation
