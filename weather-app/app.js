const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=8b595e7a08aace45ccae0bab1f96e1a8&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degress out.");
});

// Geocoding
// Address -> Lat/Long -> Weather

//
// Goal: Print the lat/long for Los Angeles
//
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work!

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxsZXJhc291emEiLCJhIjoiY2xleGg5ZGtiMDN0bzN5bzJobnB5enkyeiJ9.CoEfbjLrJeJ1yj3qhz_YMw&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});