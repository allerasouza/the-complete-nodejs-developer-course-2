const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=8b595e7a08aace45ccae0bab1f96e1a8&query=37.8267,-122.4233&units=m';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degress out.");
  }
});

//
// Goal: Handle errors for geocoding request
//
// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxsZXJhc291emEiLCJhIjoiY2xleGg5ZGtiMDN0bzN5bzJobnB5enkyeiJ9.CoEfbjLrJeJ1yj3qhz_YMw&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services!');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search.');
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});