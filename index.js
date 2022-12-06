// npm init

const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

const a = Quote.getRandomQuote();
console.log(
  cowsay.say({
    text: a,
    e: "oO",
    T: "U ",
  })
);
