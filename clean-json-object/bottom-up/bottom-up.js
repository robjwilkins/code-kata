isEmpty = function (obj) {
    'use strict';
    for (var prop in obj) {
        return false;
    }
    if (obj.length >= 0) {
        return false;
    }
       return true;
}

clean = function (obj) {
    'use strict';
    for (var prop in obj) {
        if (typeof obj[prop] === 'object') {
          clean(obj[prop]);
        }
        if (obj[prop] == null || isEmpty(obj[prop])) {
          delete obj[prop];
        }
    }
    return obj;
}

exports.clean = clean;
