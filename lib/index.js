'use strict'
const findMe = require('./findMe')
const interactiveMode = require('./interactiveMode')

const init = () => {
  var args = process.argv.slice(2)
  // Check if there is an interactive flag
  if (args.indexOf('-i') < 0) {
    findMe(1, 1)
  } else {
    interactiveMode()
  }
}

module.exports = init
