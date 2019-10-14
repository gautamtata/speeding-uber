## Project title
The project title is Uber-speeds. It's a visualization of Uber drivers who are speeding around school zones in San Francisco.

## Motivation
San Francisco has been overrun with Uber and Lyft drivers who are a major cause in the traffic problems the city faces. Since Uber has become a lot more lucrative and there is often more than 1 driver per customer which makes it extremely competitive. Drivers for their own interest have to get to spots where is there is a surge in demand or they risk losing out on money. This visualization just shows which areas driver tend to speed the most and how it correlates with school locations.

## Things to know

1. The project uses Uber movement data which is averaged by mean speed of vehicles. This project does not aim to determine what is the cause of speeding nor is it to determine individual speeds of drivers.

2. The data set is taken midday after peek rush hours so that drivers "are given more opportunity to speed"
3. Color scheme is as follow : 
    - Green : Driver is following within reported speed limits.
    - Yellow : Driver is driving within 25% of the speed limits. (Ex: 28 mph in a 25 mph zone)
    - Red : Driver is driving at excessive speeds ( x > 25% of the speed limit)

4. Borrowed from Alex Drake (@alex-drake) : Since Uber only reports OSM speeds for 5 or more vehicles on the street and provides a mean speed and standard deviation any speed detection. Since Uber does not provide a vehicle count, mean speeds cannot be weighted appropriately. Therefore, 1/std_dev has been used as a weight.

5. I haven't done any OSM validation. This presumes that all the data included in Open Street Maps is 100% accurate. Some places have multiple speed limits. Therefore I used data from [SF-Gov](https://data.sfgov.org/Transportation/Speed-Limits/3t7b-gebn/data) to compare the data from OSM.

6. Although for analyzing OSM data for SF, [Apache spark and Apache Hive](https://spark.apache.org/docs/latest/sql-data-sources-hive-tables.html) was not neccesary because the data was small enough to make computation easy, it was used as a point of reference for future projects.

### Check the readme inside the project folder to see further instructions and documentation.

## Code style

[PEP-8](https://www.python.org/dev/peps/pep-0008/)
 
## Screenshots
![Project-Demo](https://github.com/gautamtata/speeding-uber/blob/master/assets/school-speeds.gif)

## Tech/framework used
1. [pySpark](https://spark.apache.org) - Makes it really easy to work with data requiring large computations. It works as a distrubuted computation engine. 
2. [Apache Hive](https://spark.apache.org/docs/latest/sql-data-sources-hive-tables.html) - Facilitates reading, writing and storing large datasets using SQL. Works really well with pySpark.
3. [OSMNX](https://github.com/gboeing/osmnx) - In a single line of code, OSMnx lets you download, construct, and visualize the street network. It makes it really easy to work with graphs.
4. [Uber Movement](https://movement.uber.com) - Open source data set for speeds in the city of San Francisco.
5. [GraphMl](http://graphml.graphdrawing.org/) - Comprehensive and easy to use file format for graphs.
6. [GeoPandas](http://geopandas.org/) - Python extension of Pandas which makes it easier to work with spatial data.
7. [Folium](https://python-visualization.github.io/folium/) - Quick and easy data visualization using leaflet.js
8. [SeaBorn](https://seaborn.pydata.org) - Statistical data visualization library based on matplotlib.
9. [Kepler.gl](https://kepler.gl) - A powerful open source geospatial analysis tool for large-scale data sets.


## Features
What makes your project stand out?

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
Provide step by step series of examples and explanations about how to get a development env running.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests
Describe and show how to run the tests with code examples.

## How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Contribute

Let people know how they can contribute into your project. A [contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md) will be a big plus.

## Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project. 

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Yourname]()
