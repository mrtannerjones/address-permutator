/* createPermutations */
'use strict';

const assert = require('chai').assert;
const createPermutations = require('../lib/main.js').createPermutations

it('make an array for each word in the string, including the original and any abbreviations or lengthenings', ()=>{
    const arrayOfWordPairs = [['123'], ['North', 'N'], ['Main'], ['St', 'Street']]
    assert.deepEqual(createPermutations(arrayOfWordPairs), expected)
})