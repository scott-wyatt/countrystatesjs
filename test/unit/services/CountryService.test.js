'use strict'
/* global describe, it */
const assert = require('assert')

describe('CountryService', () => {
  it('should exist', () => {
    assert(global.app.api.services['CountryService'])
  })
})
