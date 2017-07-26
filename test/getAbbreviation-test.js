/* getAbbreviation */
'use strict';

const assert = require('chai').assert;
const getAbbreviation = require('../lib/main.js').getAbbreviation

it('should get the correct abbreviations, or full length words for the matching strings', ()=>{
    assert.deepEqual(getAbbreviation('Street'), 'St')
    assert.deepEqual(getAbbreviation('St'), 'Street')
})

it('should return the word if there is no abbreviation', ()=>{
    assert.deepEqual(getAbbreviation('Main'), 'Main')
    assert.deepEqual(getAbbreviation('123'), '123')
})