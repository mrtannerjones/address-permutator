/* getAbbreviation */
'use strict';

const assert = require('chai').assert;
const getAbbreviation = require('../lib/main.js').getAbbreviation

it('should get the correct abbreviations, or full length words for the matching strings', ()=>{
    console.log('moomoo')
    assert.deepEqual(getAbbreviation('Street'), 'St')
})