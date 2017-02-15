let converter = require('../converter/converter-one.js'),
    converterTwo = require('../converter/converter-two.js'),
    converterThree = require('../converter/converter-three.js');

let doc = {"Envelope":{"Body":{"CheckCustomerResponse":{"products":{"creditCardsProducts":[{"productID":"80000945879-000069502","productName":"M0-TES","productStatus":"Open","productType":"M0-TES","productStartDate":"2016-04-27","productSourceSystem":"TSYS","productCode":"M0-TES"}]}}}}};

exports.testConverter = function(test) {
    "use strict";
    var result = converter.convert(doc);
    test.equal(result, "80000945879-000069502");
    test.done();
};

exports.testConverterTwo = function(test) {
    "use strict";
    var result = converterTwo.convert(doc);
    test.equal(result, "80000945879-000069502");
    test.done();
};

var docOne = {"collection": [
    {"id": "12345","date":"2009-11-01"},
    {"id": "12346","date":"2009-11-02"}
]};
var docTwo = {"collection": [
    {"id": "12345"},
    {"id": "12346"}
]};

exports.testConverterThree = function(test) {
    "use strict";
    var result = converterThree.merge(docOne, docTwo);
    test.deepEqual(result, docOne);
    test.done();
};