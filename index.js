'use strict';
const main = require('./lib/main.js').main;

/**
 * Creates all possible address strings based on abbreviations given by the USPS
 * @param {string} address string
 * @return {array}
 */

module.exports = (addressString) => main(addressString);
