'use strict'

const Readline = require('readline');
// readline lets you to read in an  inputstream

// instantiate an interface
const rl = Readline.createInterface({
    input: process.stdin, // read input into readline from i/p terminal
    output: process.stdout, // output to terminal by accesing mc's standard output interface from readline
    //terminal: true // prevents cmd from behaving like tty terminal - prevents it from echoing back the first message typed into terminal
});

const weather = require('./weather');

const matcher = require('./matcher');

const {currentWeather, forecastWeather} = require('./parser');

rl.setPrompt('> '); // to prompt user

rl.prompt(); // renders the prompt on terminal

rl.on('line', reply =>{ // line signigifes each 'enter'
    
    //console.log(`You said ${reply}`); // template literal notation
    //rl.prompt(); // to prompt user to continute typing - starts a fresh instance of the interface

    matcher(reply, res =>{
        switch(res.intent){
            case "Hello" : 
            //console.log(res.entity);
            console.log(`${res.entity.greeting} back at you!`);
            rl.prompt();
            break;
            case 'Exit' : console.log("Bye!");
            process.exit(0);// exits node app
            case 'CurrentWeather':
                console.log(`Let me check!`);
                weather(res.entity.city)
                 .then(response => {
                    //console.log(response);
                    let parseResult = currentWeather(response);
                    console.log(parseResult);})
                 .catch(error => console.log(`I cant find this location ${res.entity.city}`));
                 rl.prompt();
                //console.log(`${res.entity.city}`);
                break;
            case 'WeatherForecast':
                console.log(`Let me check weather forecast for you!`);
                //console.log(res.entity.city + res.entity.time);
                weather(res.entity.city)
                 .then(response => {                    
                    let parseResult = forecastWeather(response, res.entity);
                    console.log(parseResult);})
                 .catch(error => console.log(`I cant find this location ${res.entity.city}`));
                 rl.prompt();
                break;
            default : 
            console.log("I dont understand");
            rl.prompt();
            break;
        }
    });


});