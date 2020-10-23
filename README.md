# weather-app-bot
Rule based Weather app bot using node js and regular expressions

This is a very simple chat bot that that checks the weather for a place.
It uses regex to compare and match input to patterns and fetch responses accordigly.
This app depends ont he Weather stack API, which is free, but the 'forecast' api is not not availble ine the free package.
Soweather forecast wont work. only current weather of a place will.
You need to register at weatherstack and get yourself their api key, append this in /weather/index.js 'apikey'
and you are good to go.

A sample of the it working is captured as a png and available in the code folder.

npm packages used: xregexp, moment, colors, axios


