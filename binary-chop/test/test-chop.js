/**
 *
 * Test the chop using node-unit
 */
const
    theList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    chopperOne = require('./../attempt-one/chop-one.js'),
    chopperTwo = require('./../attempt-two/chop-two.js');

exports.testChopperOne = function(test) {
    test.expect(8);
    test.equal(chopperOne.indexOf(theList, 15), 14);
    test.equal(chopperOne.indexOf(theList, 1), 0);
    test.equal(chopperOne.indexOf(theList, 2), 1);
    test.equal(chopperOne.indexOf(theList, 0), -1);
    test.equal(chopperOne.indexOf(theList, 19), 18);
    test.equal(chopperOne.indexOf(theList, 20), 19);
    test.equal(chopperOne.indexOf(theList, 21), -1);
    test.equal(chopperTwo.indexOf(theList, 12), 11);
    test.done();
};

exports.testChopperTwo = function(test) {
    //test.expect(8);
    test.equal(chopperTwo.indexOf(theList, 15), 14);
    test.equal(chopperTwo.indexOf(theList, 1), 0);
    test.equal(chopperTwo.indexOf(theList, 2), 1);
    test.equal(chopperTwo.indexOf(theList, 0), -1);
    test.equal(chopperTwo.indexOf(theList, 19), 18);
    test.equal(chopperTwo.indexOf(theList, 20), 19);
    test.equal(chopperTwo.indexOf(theList, 21), -1);
    test.equal(chopperTwo.indexOf(theList, 12), 11);
    test.equal(chopperTwo.indexOf(theList, 9), 8);
    test.done();
};