# Surf_Check

![logo](https://user-images.githubusercontent.com/107447038/200466271-675c0d51-55e3-4ac8-a701-a31bbafb7582.png)

## Overview

As a diehard lover of the ocean and surfing, and a user of surf resources such as surfline and magicseaweed, we were inspired to create our own website that can predict surf forecasts in the Golden State of California. The purpose of this project will be to analyze the best surfing conditions in popular surfing locations within California using the given parameters of: temperature, swell size + period + direction, wind direction, etc.  

### Questions we are trying to answer:

- What are the average for the parameters in these beaches? 
- What popular surfing location in CA provides the most ideal surfing conditions in a given season? 
- Temperature, swell size/period. Leave out wind direction if its too hard
- Accessibility to beaches
- Peak surfing times/locations?
- Potentially information on # of surfer/instructors
- Categorize surf conditions by levels: beginner, intermediate, expert?


## Data Extraction Process

We utilized the  [The World Weather Online API](https://www.worldweatheronline.com/developer/api/marine-weather-api.aspx) to grab daily weather data for the different popular surfing beaches in California. The list of different surfing beaches and their respective coordinates were scraped from [a Wikipedia article](https://en.wikipedia.org/wiki/List_of_beaches_in_California).


## Schema



## Future Plans

#### Analysis

#### Machine Learning Portion
- We have yet to settle on a Machine Learning algorithm. 
- We are considering either unsupervised OR surfable/non-surfable logistic regression model for this surf-check analysis.
