/* main */
'use strict';

const assert = require('chai').assert;
const main = require('../lib/main.js').main

it('make an array for each word in the string, including the original and any abbreviations or lengthenings', ()=>{
    const expected = [
        "123 North Main St",
        "123 N Main St",
        "123 North Main Street",
        "123 N Main Street"
    ]
    assert.deepEqual(main("123 North Main St"), expected)
})