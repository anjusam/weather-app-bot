# weather-app-bot
Rule based Weather app bot using node js and regular expressions

This is a very simple chat bot that that checks the weather for a place.
It uses regex to compare and match input to patterns and fetch responses accordingly.
This app depends on the Weather stack API for wether forecast information, which is free, but the 'forecast' api is not not availble in the free package anymore.
So weather forecast wont work. Only current weather of a place will. (https://weatherstack.com/)
You need to register at weatherstack and get yourself their api key, append this in /weather/index.js 'apikey'
and you are good to go.

A sample of the it working is captured as a png and available in the code folder.

npm packages used: xregexp, moment, colors, axios


