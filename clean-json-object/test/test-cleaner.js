const
  cleanerOne = require('../bottom-up/bottom-up.js'),
  inputDocument = require('./test-input-document.js').testDocument,
  outputDocument = require('./test-output-document.js').testDocument;

exports.testCleaner = function(test) {
  test.expect(2);
  test.notEqual(null, inputDocument);
  var actual = cleanerOne.clean(inputDocument);
  test.deepEqual(cleanerOne.clean(inputDocument), outputDocument, 'Objects being compared are not equal');
  test.done();
}
