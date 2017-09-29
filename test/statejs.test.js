var expect = require('chai').expect
var country = require('../index')

/* Definitions for JS Standard */
/* global describe, it */

describe('statejs', function () {
  it('should get all available info using approximate string matching', function (done) {
    var searches = {
      'CA': 'Canada',
      'U.S.A.': 'United States',
      'THE GREAT BRITAIN': 'United Kingdom'
    }
    Object.keys(searches).forEach(function (search) {
      var tester = country.name(search, 'name')
      // console.log('****', searches[search], '****')
      // console.log('****', tester, '****')
      expect(tester).to.be.an('string')
      expect(tester).to.equal(searches[search])
    })
    done()
  })
  it('should get list of states for United States', function (done) {
    var tester = country.states('US')
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(57)
    expect(tester[0]).to.be.a('object')
    done()
  })
  it('should get list of provinces for United States', function (done) {
    var tester = country.provinces('US')
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(57)
    expect(tester[0]).to.be.a('object')
    done()
  })
  it('should get name for United States', function (done) {
    var tester = country.name('US')
    expect(tester).to.be.a('string')
    done()
  })
  it('should get alternate spellings for United States', function (done) {
    var tester = country.altSpellings('US')
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(3)
    expect(tester[0]).to.be.a('string')
    done()
  })
  it('should get state object for Indiana United States', function (done) {
    var tester = country.name('US', 'IN')
    expect(tester).to.be.a('string')
    expect(tester).to.equal('Indiana')
    done()
  })
  it('should get state object for Indiana United States', function (done) {
    var tester = country.state('USA', 'Indiana')
    expect(tester).to.be.a('object')
    expect(tester.abbreviation).to.equal('IN')
    expect(tester.name).to.equal('Indiana')
    done()
  })
  it('should get state object for IN US', function (done) {
    var tester = country.state('US', 'IN')
    expect(tester).to.be.a('object')
    expect(tester.abbreviation).to.equal('IN')
    expect(tester.name).to.equal('Indiana')
    done()
  })
  it('should undefined for a mismatched country identifier', function (done) {
    var tester = country.states('UX')
    expect(tester).to.be.an('undefined')
    done()
  })
  it('should undefined for a mismatched country identifier (other methods)', function (done) {
    var methods = [
      'states',
      'provinces',
      'name',
      'altSpellings'
    ]
    methods.forEach(function (method) {
      var tester = country[method]('UX')
      expect(tester).to.be.an('undefined')
    })
    done()
  })
  it('should get name for Colombia', function (done) {
    var tester = country.name('CO')
    expect(tester).to.be.a('string')
    done()
  })
  it('should get list of states for Colombia', function (done) {
    var tester = country.provinces('CO')
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(33)
    expect(tester[0]).to.be.a('object')
    done()
  })
  it('should get name for Panama', function (done) {
    var tester = country.name('PA')
    expect(tester).to.be.a('string')
    done()
  })
  it('should get list of states for Panama', function (done) {
    var tester = country.provinces('PA')
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(10)
    expect(tester[0]).to.be.a('object')
    done()
  })
})
