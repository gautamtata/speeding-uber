## Uber-speeds
It's a visualization of Uber drivers who are speeding around school zones in San Francisco.

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

## Code style

[PEP-8](https://www.python.org/dev/peps/pep-0008/)
 
## Screenshots
![Project-Demo](https://github.com/gautamtata/speeding-uber/blob/master/assets/gif.gif)
![Schools-london](https://github.com/gautamtata/speeding-uber/blob/master/assets/kerpler-2.png)

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
![Iterating-thru-OSM-graph](https://github.com/gautamtata/speeding-uber/blob/master/assets/code_snippet_1.png)
![initializing-SQL-spark-session](https://github.com/gautamtata/speeding-uber/blob/master/assets/code_snippet_2.png)

## Installation && Download checklist
The project is done using Jupyter Notebooks. Most of the data isn't provided because the file size isn't compatible with Github.

### Things to download: 
1. A shapefile for your city. I found San Francisco's shapefile at [SF-Gov](https://data.sfgov.org)
2. Uber movement speed data set & OSM to ways data set [Uber movement speed & OSM2ways](movement.uber.com)
3. I also used external resources for schools and speed limits both found at [SF-Gov](https://data.sfgov.org)
4. You will need to convert the OSM data into spark suitable format [parquet](https://github.com/adrianulbona/osm-parquetizer)


## How to use?
### Check the readme inside the project folder to see further instructions and documentation.

## Credits
[Adrian-Ulbona](https://github.com/adrianulbona/osm-parquetizer) - To convert osm.pbf file to spark friendly files.

[Carnegie Melon University](https://github.com/cmubtg/UberMovement) - This cool project that analyzes traffic data in Pittsburgh.

[Alptekin Uzel](https://towardsdatascience.com/@alptuzel) - A machine learning approach for Uber Movements dataset.

[Carsten Jacobsen](https://eng.uber.com/kepler-data-visualization-traffic-safety/) - Visualizing traffic safety using Movement + Kepler.gl

[Alex Drake](https://github.com/alex-drake) - Analyzing speeds from Uber Movement data.

[SF-Gov](https://data.sfgov.org) - For keeping their data open sourced. 

[OSM](https://www.openstreetmap.org/#map=4/38.01/-95.84) - For maintaining the best standard for open source data.

[Aiswarya Srinivas](https://github.com/AiswaryaSrinivas/3D-GeoPlot-in-R) - Plotting Uber movements data in R.

[Georg Heiler](https://georgheiler.com/2019/05/07/analyze-osm-data-in-spark/) - For this great article on OSM analysis with pySpark.


## License
[MIT](https://opensource.org/licenses/MIT)

MIT © [Gautam Tata](https://www.gautamtata.com)
