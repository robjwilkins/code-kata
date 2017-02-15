exports.convert = function(doc) {
    "use strict";
    var creditCardProductsXML = "";
    var products = doc.Envelope.Body.CheckCustomerResponse.products;
    products.creditCardsProducts.forEach(function(creditCardProduct){
        creditCardProductsXML += creditCardProduct.productID;
    });
    return creditCardProductsXML;
}
