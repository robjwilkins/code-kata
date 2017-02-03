indexOf = function(list, target) {
    var size = list.length,
        index = size / 2,
        lowerBound = 0,
        upperBound = size -1;

    while (lowerBound <= upperBound) {
        index = (lowerBound + upperBound) / 2 | 0;
        var candidate = list[index];
        if (candidate < target) {
            lowerBound = index + 1;
        } else if (candidate > target) {
            upperBound = index - 1;
        } else {
            return index;
        }
    }
    return -1;
}

exports.indexOf = indexOf;
var theList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(indexOf(theList, 1));