// Copyright (c) 2016, Scott Wyatt <scottwyatt86@gmail.com>
//
// Permission to use, copy, modify, and/or distribute this software for any purpose
// with or without fee is hereby granted, provided that the above copyright notice
// and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT,
// OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
// DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS
// ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

var _ = require('lodash')
var _countryList = require('../data')()
var normalizeName = function (name) {
  return _.deburr(name)
    .toLowerCase()
    .replace(/\-/g, ' ')
    .replace(/(\.|\b(the|and|of|de|des|du|di|del|y|da|und|die) \b)/g, '')
    .trim()
}

var findIndex = _.transform(_countryList, function (index, country, key) {
  var addToIndex = function (name) {
    if (name) {
      index[normalizeName(name)] = key
    }
  }
  addToIndex(country.name)
  _.forEach(country.altSpellings, addToIndex)
})
var Country = function () {
  var _returnCountry = function (country, type) {
    var key
    if (type === 'name') {
      key = findIndex[normalizeName(country)]
      return _countryList[key]
    } else if (type === 'ISO3') {
      return _.find(_countryList, function (thiscountry) {
        return thiscountry.ISO.alpha3 === country
      })
    } else if (type === 'IS02') {
      return _.find(_countryList, function (thiscountry) {
        return thiscountry.ISO.alpha2 === country
      })
    } else if (typeof type === 'undefined') {
      return _.find(_countryList, function (thiscountry) {
        return thiscountry.ISO.alpha2 === country
      })
    } else if (typeof type === 'string') {
      key = findIndex[normalizeName(country)]
      var stateKey
      var _statesList = _countryList[key].states
      var findStateIndex = _.transform(_statesList, function (index, state, key) {
        var addToStateIndex = function (name) {
          if (name) {
            index[normalizeName(name)] = key
          }
        }
        addToStateIndex(state.name)
        addToStateIndex(state.abbreviation)
        _.forEach(state.altSpellings, addToStateIndex)
      })
      stateKey = findStateIndex[normalizeName(type)]
      return _statesList[stateKey]
    } else {
      return _.find(_countryList, function (thiscountry) {
        return thiscountry.ISO.alpha2 === country
      })
    }
  }
  this.all = function () {
    return _countryList
  }
  var methods = {
    name: 'name',
    states: 'states',
    provinces: 'states',
    altSpellings: 'altSpellings',
    state: null,
    province: null
  }
  _.forEach(methods, function (property, method) {
    this[method] = function (country, type) {
      var _returnData = _returnCountry(country, type)
      if (_returnData) {
        if (property) {
          return _returnData[property]
        }
        return _returnData
      }
    }
  }.bind(this))
  return this
}
module.exports = new Country()
