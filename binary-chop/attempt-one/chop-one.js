/**
 * Binary Chop Code kata
 * searches a list for a specified value and returns the index of the item being searched for.
 * searches the list by splitting it in half such that each recusion halves the number of possible matches
 */

let recurse = function(lowerBound, upperBound, list, target) {
  let
      index = Math.round((upperBound - lowerBound)/2)+lowerBound,
      candidate = list[index];
  if (target === candidate) {
    return index;
  } else if (target > candidate) {
    lowerBound = index;
    if (lowerBound === upperBound-1) {
        if (target == list[upperBound]){
            return upperBound;
        } else {
            return -1;
        }
    }
  } else {
    upperBound = index;
    if (upperBound === 1) {
        if (target != list[0]) {
            return -1;
        } else {
            return 0;
        }
    }
  }
  return recurse(lowerBound, upperBound, list, target);
};

exports.indexOf = function(list, target) {
  let
      lowerBound = 0,
      upperBound = list.length - 1;
  return recurse(lowerBound, upperBound, list, target);

};
