/* createPermutations */
'use strict';

const assert = require('chai').assert;
const createPermutations = require('../lib/main.js').createPermutations

it('make an array for each word in the string, including the original and any abbreviations or lengthenings', ()=>{
    const arrayOfWordPairs = [['123'], ['North', 'N'], ['Main'], ['St', 'Street']]
    const expected = [
        "123 North Main St",
        "123 N Main St",
        "123 North Main Street",
        "123 N Main Street"
    ]
    assert.deepEqual(createPermutations(arrayOfWordPairs), expected)
})