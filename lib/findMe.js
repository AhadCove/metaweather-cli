'use strict'
const ora = require('ora')
const geoIp = require('./geoip')
const weathercove = require('./weathercove')
const report = require('./report')

const findMe = (tempSelection, speedSelection) => {
  const spinner = ora('Locating you...')
  geoIp.getLocation()
    .then(location => {
      spinner.start()
      return weathercove.getLocations(location.latitude, location.longitude)
    })
    .then(locations => {
      spinner.stop()
      return weathercove.promptLocationSelection(locations)
    })
    .then(location => {
      spinner.text = 'Getting the weather for ' + location.option.title + '...'
      spinner.start()
      return weathercove.getWeather(location.option.woeid)
    })
    .then(response => {
      response.consolidated_weather.extraOptions = {
        tempSelection,
        speedSelection
      }
      spinner.stop()
      console.log(report.getSixDayWeatherReport(response.consolidated_weather))
      console.log(report.getSourcesReport(response.sources))
    })
    .catch(err => {
      spinner.fail(err)
    })
}

module.exports = findMe
