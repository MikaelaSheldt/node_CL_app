// Use Node to connect to public dark sky API for practice

// API url  https://api.darksky.net/forecast/[key]/[latitude],[longitude]

const https = require("https")
const dotenv = require('dotenv');

// set environment variables (API keys)
dotenv.config()

// process.argv is an array that holds the args passed into the node call
// [<full path to node command>, <full path of executed file>, <...additional arguments>]
console.log(process.argv);

const key = process.env.DARK_SKY_KEY
// if the app if run with lat/long arguments then use them otherwise default to Manhattan lat/long
const latitude = process.argv[2] ? process.argv[2] : 40.7831
const longitude = process.argv[3] ? process.argv[3] : -73.9712


// get current weather information, log to console
https.get(`https://api.darksky.net/forecast/${key}/${latitude},${longitude}`, (res) => {
  // create string to collect streaming data chunks with
  let data = '';
  // A chunk of data has been recieved.
  res.on('data', (chunk) => {
    data += chunk;
  });
  // The whole response has been received. Print out the result.
  res.on('end', () => {
    console.log(JSON.parse(data).currently.summary);
  });

}).on("error", (err) => {
  console.log("ERROR --> " + err.message);
});
