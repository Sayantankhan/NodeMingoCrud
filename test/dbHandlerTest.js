'use strict'
const chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
var mongoOperation = require('../js/controller/dbHandler');

describe('Function', function() {
  describe('#mongoOperation.findBYElementId()', function() {
    it('should return a JSON Object value when the value is present', function() {
      mongoOperation.findBYElementId(2).should.be.an('object');
    });
  });

  describe('#mongoOperation.findByGender()', function() {
    it('should return a JSON Object value when the value is present', function() {
      mongoOperation.findByGender('Female').should.be.an('object');
    });
  });

  
});
