
indexOf = function(list, target) {
    var candidate;
    var size = list.length;
    var index = size / 2;
    while (candidate != target) {
        candidate = list[index];
        if (candidate > target) {
            if (index === 1) {
                if (target != list[0]){
                    return -1;
                } else {
                    return 0;
                }
            }
            index = Math.round(index / 2);
        } else if (candidate < target) {
            index = Math.round(index + ((size-index)/2));
            if (index === size){
                return -1;
            }
        } else {
            return index;
        }
    }
}
exports.indexOf = indexOf;
//var theList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//console.log(indexOf(theList, 21));
