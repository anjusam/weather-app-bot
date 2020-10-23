'use strict'

// take input from user and match with pattern and return intent

const patterns = require('../patterns');
const XRegExp = require('xregexp');


let matchPattern = (str, cb) =>{
    //find iterates an array and returns item or else undefined
    let getResult = patterns.find(item=>{
        // i indicates ignore-case
        // need to cast pattern to XRegExp
        if(XRegExp.test(str,XRegExp(item.pattern, "i")))
            return true;
    })
    if(getResult){
        return cb({
            intent: getResult.intent,
            entity : createEntities(str,getResult.pattern)
        });
    }else {
        return cb({});
    }
};

// this is used to implement Named Capture Groups provided by xregexp
// For instance , if user says 'Hi Anju'
// thepattern would match Intent greeting and send a default response.
// If you would like to reply with the same salutation
// Named Capture Groups matches the exact entity used by user
// from our matched pattern.
// we cant send back the same input string instead because
// the name Anju would creep intot he response too.
// makes the bot smarter
let createEntities = (str, pattern) =>{
    return XRegExp.exec(str, XRegExp(pattern, "i"));
};

module.exports = matchPattern;