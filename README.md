whata
---------------------------------
### save the planet - classify water
![Whata Logo](https://raw.githubusercontent.com/aerospaceresearch/whata/master/doc/logo_whata.small.png "Whata Logo")

## Welcome
Thanks for checking out the code we are submitting for [Nasa SpaceApps Challenge 2017](https://2017.spaceappschallenge.org/)! We're submitting this project to the [Where's the Water?](https://2017.spaceappschallenge.org/challenges/planetary-blues/wheres-water/details) challenge.

## Project details
Check out our [project page on Nasa SpaceApps Page](https://2017.spaceappschallenge.org/challenges/planetary-blues/wheres-water/teams/whata/stream) for some general information - namely, what we're going to build and what we're trying to achieve.

## Technical details
We don't have time left for any fancy diagrams, but I'll try my best in summarizing how we envision *Whata* to function:
* An **Existing Data Source** we can get our hands on will be extracted into a **Provider**. Providers are self contained applications responsible for fetching and processing of the given data source. An example for a provider is our sensor prototype, which (as of right now) measures temperature, pH and conductivity. Another example for a provider is [LUBW AWGN](http://www4.lubw.baden-wuerttemberg.de/servlet/is/78490/), a governmental institution that is local to us an providing measurments of oxygen content and pH. The providers will *provide* this data to our backend using a defined **Provider API**.
* The Backend is responsible for correlating the Data from the providers with a specific water source. By decoupling provider logic and backend logic, we hope to employ fuzzy matching: the providers will only be responsible for providing a reasonably accurate location along with measurements, the backend is going to correlate these approximate coordinates with the specific water source, reject duplicate data, and do sanity checking on the measurments. Our classification logic, which we envision to be some Machine Learning Classifier, will also reside in this component
* The Frontend is responsible for visualizing the Data. Users will be able to click on a Water source and check the measurments we have about it. The Frontend will also act as a **Provider**, since it will be possible to manually add measurements (and also water sources we are not yet tracking) through it.

# Sensor Prototype
Here are some Images of the sensor prototype. We'll add more infos later!
![LCD Display](https://raw.githubusercontent.com/aerospaceresearch/whata/master/doc/sensor-1.jpg "LCD Display")
![ESP Microcontroller](https://raw.githubusercontent.com/aerospaceresearch/whata/master/doc/sensor-2.jpg "ESP MicroController")
![Water Sensors](https://raw.githubusercontent.com/aerospaceresearch/whata/master/doc/sensor-3.jpg "Water Sensors")
