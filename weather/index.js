'use strict'

const axios = require('axios');

///forecast is no longer supported in the base plan of weather stack api.
const formatData = (weatherConditions) => {
    var message = {
        location : weatherConditions.data.location.name,
        description:weatherConditions.data.current.weather_descriptions[0], 
        temperature: weatherConditions.data.current.temperature, 
        feelslike: weatherConditions.data.current.feelslike,
        // forecast : weatherConditions.data.forecast.map(day=>{
        //     return {
        //         code: day.date,
        //         day: day.code,
        //         condition: day.condition
        //     }
        // })
    };  
    return message;          
}

//forecast is no longer supported in the base plan of weather stack api.
const getWeatherForecast  = location =>{
    return new Promise(async(resolve, reject) =>{
        try{
            //const apikey = // include api key here;
            const url = 'http://api.weatherstack.com/current?access_key='+apikey+'&query='+location+'&units=f';
            //const url = 'http://api.weatherstack.com/forecast?access_key='+apikey+'&query='+location+'&forecast_days=2&units=f';
            const weatherConditions = await axios.get(url);
            //console.log(weatherConditions.data.current.temperature);
            resolve(formatData(weatherConditions));        
        }catch(error){
            reject(error);
        }
    })
}

module.exports = getWeatherForecast;