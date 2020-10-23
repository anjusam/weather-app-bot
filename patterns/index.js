// create a pattern dictionary to facilitate
// expanding the 'ai' of this bot

const patternDist = [{
    // pattern: '\\b(Hi|Hello|Hey)\\b',
    pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b', // uses Named Capture Groups provided by xregexp
    intent: 'Hello'
},{
    pattern: '\\b(bye|exit)\\b',
    intent: 'Exit'
},{
    // to match pattern 'like in New York' and to extract the city
    // . matches all characters
    pattern: '\\blike\\sin\\s(?<city>.+)\\b',
    intent: 'CurrentWeather'
},{
    // to match pattern 'Will it snow in new york tomorrow' and to extract the city, time and condition
    // $ marks the end of pattern matching
    //pattern: '\\b(?<weather>snow|rain|cloudy|sunny)\\b\\sin\\b\\s(?<city>[a-zA-Z])\\b\\sin(?<time>today|tomorrow|day after tomorrow)$',
    pattern: '\\b(?<weather>rain|rainy|sunny|cloudy|snow)\\b\\sin\\s\\b(?<city>[a-z]+[ a-z]+?)\\b(?<time>day\\safter\\stomorrow|tomorrow|today)$',
    intent: 'WeatherForecast'
},{
    pattern: "\\b(?<weather>rain|rainy|sunny|cloudy|snow|thunderstorms|windy|drizzle)\\b\\s\\b(?<time>day\\safter\\stomorrow|tomorrow|today)\\sin\\s\\b(?<city>[a-z]+[ a-z]+?)$",
    intent: "WeatherForecast"
}];

// need an extra / to comply with XRegExp library
module.exports = patternDist;