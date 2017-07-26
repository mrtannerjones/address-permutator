'use strict';

function importTest(name, path) {
    describe(name, () => {
        require(path);
    });
}

describe('ALL', function () {
    this.timeout(0)
    importTest('main-test', './main-test.js');
    importTest('createPermutations', './createPermutations-test.js');
    importTest('getAbbreviationCombos', './getAbbreviationCombos-test.js');
    importTest('getAbbreviation', './getAbbreviation-test.js');

});