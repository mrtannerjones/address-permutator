/* getAbbreviationCombos */
'use strict';

const assert = require('chai').assert;
const getAbbreviationCombos = require('../lib/main.js').getAbbreviationCombos

it('should get the correct abbreviations, or full length words for the matching strings', ()=>{
    const expected = [['123'], ['North', 'N'], ['Main'], ['St', 'Street']]
    assert.deepEqual(getAbbreviationCombos('123 North Main St'), expected)
})