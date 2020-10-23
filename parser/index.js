'use strict';
const colors = require('colors');
const moment = require('moment');

const getFeel = (temperature) => {
    if(temperature<30)
        return 'quite chilly';
    else if(temperature>30 && temperature <51)
        return 'quite comfortable';  
    else if(temperature>50 && temperature <70)
        return 'quite warm';    
    else if(temperature>70)
        return 'like a sun burn'; 
    else return "meh";     
}

const  currentWeather = weatherResponse => {
    if(weatherResponse.location){
        const {location, temperature, description, feelslike} = weatherResponse; // extracting
        return `Right now, it is ${description.red} in ${location}. It is ${temperature} degree fahrenheit and feels ${getFeel(Number(feelslike))}.`;
        // red is a color used from colors package and can be appended to any string
    }    
}


// this will no longer work because weather stack api doesnt support forecast
let forecastWeather = (response, data) => {
    try{
        if (response.location) {
        // convert 'tomorrow', 'day after tomorrow', 'today' into date formats like 23 June 2016
        let parseDate = getDate(data.time);
        let { location } = response;
        let { condition, code } = response.forecast.filter(
            i => i.date === parseDate
        )[0];
    
        let regEx = new RegExp(data.weather, "i");
        let testConditions = regEx.test(condition); // true or false
        return `${testConditions ? "Yes" : "No"}, ${getPrefix(code, "future")} ${
            condition.toLowerCase().red
        } ${data.time} in ${location}`;
        } else {
        return "I don't seem to know anything about this place...Sorry :(";
        }
    }catch(e){
        return "I cant seem to find a forecast. Sorry :(";
    }
  };

  let getDate = day => {
    let dayStr = day.toLowerCase().trim();
    switch (dayStr) {
      case "tomorrow":
        return moment()
          .add(1, "d")
          .format("YYYY-MM-DD");
      case "day after tomorrow":
        return moment()
          .add(2, "d")
          .format("YYYY-MM-DD");
      default:
        return moment().format("YYYY-MM-DD");
    }
  };


module.exports = {currentWeather, forecastWeather};
