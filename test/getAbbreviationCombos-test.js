/* getAbbreviationCombos */
'use strict';

const assert = require('chai').assert;
const getAbbreviationCombos = require('../lib/main.js').getAbbreviationCombos

it('make an array for each word in the string, including the original and any abbreviations or lengthenings', ()=>{
    const expected = [['123'], ['North', 'N'], ['Main'], ['St', 'Street']]
    assert.deepEqual(getAbbreviationCombos('123 North Main St'), expected)
})