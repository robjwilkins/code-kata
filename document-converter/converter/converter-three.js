exports.merge = function(docOne, docTwo) {
    "use strict";
    var docsOne = docOne.collection;
    var docsTwo = docTwo.collection;
    for (var i = 0; i < docsOne.length; i++) {
        console.log(docsOne[i].id);
        for (var j = 0; j < docsTwo.length; j++) {
            if (docsTwo[j].id === docsOne[i].id) {
                docsTwo[j].date = docsOne[i].date;
                break;
            }
        }
    }
    return docTwo;
}