# address-permutator

Address Permutation
=========

Takes an address string, finds all USPS abbreviations within the string, and returns an array of all possible address strings based on potential use of USPS abbreviations

## Installation

  `npm install address-permutator`

## Usage

    const addressPermutator = require('address-permutator');
    const combos = addressPermutator('123 N Main St')
    console.log(combos)
    /*
        [
            "123 North Main St",
            "123 N Main St",
            "123 North Main Street",
            "123 N Main Street"
        ]
    */

## Tests

  `npm test`

## Contributing

Make a pull request, don't break any unit tests