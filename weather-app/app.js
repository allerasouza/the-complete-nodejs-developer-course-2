const request = require('request');

let url = 'http://api.weatherstack.com/current?access_key=8b595e7a08aace45ccae0bab1f96e1a8&query=37.8267,-122.4233';
url += '&units=f';

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degress out.");
});

//
// Goal: Print a small forecast to the user
//
// 1. Print: "It is currently 9 degrees out. It feels like 5 degress out."
// 2. Test your work!