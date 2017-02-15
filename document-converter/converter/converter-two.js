exports.convert = function(doc) {
    "use strict";
    return productGroupXML(doc.Envelope.Body.CheckCustomerResponse.products.creditCardsProducts);
}

productGroupXML = function(productGroup) {
    "use strict";
    var productsXML = "";
    for (var i = 0; i < productGroup.length; i++) {
        productsXML += productGroup[i].productID;
    }
    return productsXML;
}
