/**
 * Binary Chop Code kata
 * searches a list for a specified value and returns the index of the item being searched for.
 * searches the list by splitting it in half such that each recusion halves the number of possible matches
 */

recurse = function(lowerBound, upperBound, list, target) {
  var index = Math.round((upperBound - lowerBound)/2)+lowerBound;
  var candidate = list[index];
  //console.log("candidate: " + candidate + ", index: " + index + ", lowerBound: " + lowerBound + ", upperBound: " + upperBound);
  if (target === candidate) {
    return index;
  } else if (target > candidate) {
    lowerBound = index;
    if (lowerBound === upperBound-1) {
        return upperBound;
    }
  } else {
    upperBound = index;
    if (upperBound === 1) {
        return 0;
    }
  }
  return recurse(lowerBound, upperBound, list, target);
}

indexOf = function(list, target) {
  var lowerBound = 0;
  var upperBound = list.length - 1;
  return recurse(lowerBound, upperBound, list, target);

}
exports.indexOf = indexOf;
var theList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(indexOf(theList, 20));

