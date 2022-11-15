//json in a json
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
const joke = getRandomJoke.body
//console.log(getRandomJoke.body)


var cowsay = require("cowsay");

console.log(cowsay.say({
    text : joke ,
    e : "oO",
    T : "👅"
}));

var getRandomJoke = oneLinerJoke.getRandomJoke();
//console.log(getRandomJoke.body)
