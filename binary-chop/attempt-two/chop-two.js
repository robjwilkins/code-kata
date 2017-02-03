exports.indexOf = function(list, target) {
    var size = list.length;
    var index = size / 2;
    while (true) {
        var candidate = list[index];
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
