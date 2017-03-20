/**
 * Test the chop using mocha and should
 */
const
  should = require('should'),
  theList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  chopperOne = require('./../attempt-one/chop-one.js'),
  chopperTwo = require('./../attempt-two/chop-two.js');

describe('chop-one.js', function () {
  describe('#indexOf', function () {
    it('should return 14 when chopping a sorted array where the number sought is in index 14', function () {
      chopperOne.indexOf(theList, 15).should.equal(14);
    });
    it('should return 0 when chopping a sorted array where the number sought is in the first element', function () {
      chopperOne.indexOf(theList, 1).should.equal(0);
    });
    it('should return the index of the last element when chopping a sorted array where the number sought is in the last element', function () {
      chopperOne.indexOf(theList, 20).should.equal(19);
    });
    it('should return -1 when chopping a sorted array where the number sought is smaller than the smallest entry in the array', function () {
      chopperOne.indexOf(theList, 0).should.equal(-1);
    });
    it('should return -1 when chopping a sorted array where the number sought is bigger than the largest entry in the array', function () {
      chopperOne.indexOf(theList, 21).should.equal(-1);
    });
  });
});

describe('chop-two.js', function () {
  describe('#indexOf', function () {
    it('should return 14 when chopping a sorted array where the number sought is in index 14', function () {
      chopperTwo.indexOf(theList, 15).should.equal(14);
    });
    it('should return 0 when chopping a sorted array where the number sought is in the first element', function () {
      chopperTwo.indexOf(theList, 1).should.equal(0);
    });
    it('should return the index of the last element when chopping a sorted array where the number sought is in the last element', function () {
      chopperTwo.indexOf(theList, 20).should.equal(19);
    });
    it('should return -1 when chopping a sorted array where the number sought is smaller than the smallest entry in the array', function () {
      chopperTwo.indexOf(theList, 0).should.equal(-1);
    });
    it('should return -1 when chopping a sorted array where the number sought is bigger than the largest entry in the array', function () {
      chopperTwo.indexOf(theList, 21).should.equal(-1);
    });
  });
});