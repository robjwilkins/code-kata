/**
 * Created by robinwilkins on 03/02/2017.
 */

const
    theList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    chopper = require('./../chop.js');

exports.testChopper = function(test) {
    test.expect(1);
    test.equal(chopper.indexOf(theList, 15), 14);
    test.done();
}