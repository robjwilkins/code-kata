isEmpty = function (obj) {
    'use strict';
    if (JSON.stringify(obj) != JSON.stringify({})) {
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
        if (obj[prop] === null || obj[prop] === undefined || isEmpty(obj[prop])) {
            delete obj[prop];
        }
    }
    return obj;
}

exports.clean = clean;
