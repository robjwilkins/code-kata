let converter = require('../converter/converter-one.js'),
    converterTwo = require('../converter/converter-two.js');

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