const
  should = require('should'),
  sorter = require('../sorter-one.js');

describe('sorter-one.js', function () {
  describe('#sort', function(){
    describe('when no sort direction specified', function(){
      "use strict";
      it('should make text lower case', function () {
        sorter.sort('AAaaaAAAa').should.equal('aaaaaaaaa');
      });
      it('should order text alphabetically in ascending order', function () {
        sorter.sort('AAbaaABAa').should.equal('aaaaaaabb');
      });
      it('should filter numbers from the string', function () {
        sorter.sort('A6Aba1aA4B2Aa').should.equal('aaaaaaabb');
      });
    });
    describe('when "asc" sort direction specified', function(){
      "use strict";
      it('should make text lower case', function () {
        sorter.sort('AAaaaAAAa', 'asc').should.equal('aaaaaaaaa');
      });
      it('should order text alphabetically in ascending order', function () {
        sorter.sort('AAbaaABAa', 'asc').should.equal('aaaaaaabb');
      });
      it('should filter numbers from the string', function () {
        sorter.sort('A6Aba1aA4B2Aa', 'asc').should.equal('aaaaaaabb');
      });
    });
    describe('when "desc" sort direction specified', function(){
      "use strict";
      it('should make text lower case', function () {
        sorter.sort('AAaaaAAAa', 'desc').should.equal('aaaaaaaaa');
      });
      it('should order text alphabetically in descending order', function () {
        sorter.sort('AAbaaABAa', 'desc').should.equal('bbaaaaaaa');
      });
      it('should filter numbers from the string', function () {
        sorter.sort('A6Aba1aA4B2Aa', 'desc').should.equal('bbaaaaaaa');
      });
    });
  });
});
