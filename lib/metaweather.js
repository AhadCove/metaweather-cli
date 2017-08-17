const got = require('got')
const { HTTP_REQUEST_OPTIONS } = require('./config')

const API_BASE = 'http://www.metaweather.com/api/'

function getLocation (lat, lng) {
  return got(`${API_BASE}location/search/?lattlong=${lat},${lng}`, HTTP_REQUEST_OPTIONS)
    .then(response => response.body[0])
}

function getWeather (woeid) {
  return got(`${API_BASE}location/${woeid}/`, HTTP_REQUEST_OPTIONS)
    .then(response => response.body.consolidated_weather)
}

module.exports = {
  getLocation,
  getWeather
}