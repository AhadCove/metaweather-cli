# WeatherCove CLI

[![build](https://img.shields.io/travis/ahadcove/weathercove-cli.svg?style=flat-square)](https://travis-ci.org/ahadcove/weathercove-cli)
[![npm](https://img.shields.io/npm/v/weathercove-cli.svg?style=flat-square)](https://www.npmjs.com/package/weathercove-cli)
[![dependencies](https://img.shields.io/david/ahadcove/weathercove-cli.svg?style=flat-square)](https://david-dm.org/ahadcove/weathercove-cli)
[![license](https://img.shields.io/github/license/ahadcove/weathercove-cli.svg?style=flat-square)](https://github.com/ahadcove/weathercove-cli/blob/master/LICENSE)

> Command-line interface for weathercove.

[weathercove](https://www.weathercove.com/) is an automated weather data aggregator that
takes the weather predictions from various forecasters and calculates the most likely outcome.

<img src="screenshot.gif" width="600">

Report layout and ASCII art icons inspired by [wego](https://github.com/schachmat/wego).

## Installation

```
$ npm install -g weathercove-cli
```

## Usage

```
$ weather
```

## Interactive Mode
	
```
$ weather -i  
```
 By default the app uses Fahrenheit and Mph and will locate you automatically.
 Interactive mode gives you the option to choose between Fahrenheit or Celsius, Mph or Km/h, and adds the ability to manually enter a city

## License

This project is licensed under the terms of the
[MIT license](https://github.com/ahadcove/weathercove-cli/blob/master/LICENSE).
