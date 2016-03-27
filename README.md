# country.js

[![NPM](https://nodei.co/npm/statejs.png?downloads=true)](https://nodei.co/npm/statejs/)
[![NPM](https://nodei.co/npm-dl/statejs.png?months=3&height=2)](https://nodei.co/npm/statejs/)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Dependency Status](https://david-dm.org/scott-wyatt/statejs.svg)](https://david-dm.org/therebelrobot/countryjs)
[![Code Climate](https://codeclimate.com/github/scott-wyatt/statejs/badges/gpa.svg)](https://codeclimate.com/github/scott-wyatt/statejs)
[![Test Coverage](https://codeclimate.com/github/scott-wyatt/statejs/badges/coverage.svg)](https://codeclimate.com/github/scott-wyatt/statejs)
[![JS.ORG](https://img.shields.io/badge/js.org-country-ffb400.svg?style=flat)](http://js.org)

A Node.js module for returning data about states/provinces within countries.

## Table of Contents

* [Install](#install)
  * [Using with browserify](#browserify)
* [Usage](#usage)
* [API](#api)
  * [`.states()`](#states)
  * [`.provinces()`](#provinces)
  * [`.state()`](#states)
  * [`.province()`](#provinces)
  * [`.name()`](#name)
  * [`.altSpellings()`](#altspellings)
  * [`.all()`](#all)
* [Special Thanks](#special-thanks)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Disclaimer](#disclaimer)
* [License (MIT)](#license-mit)

## Install

```bash
npm install countryjs
```

### Using with browserify

To run in-browser, you'll need the `bulkify` transform for `browserify`, as it pairs with `bulk-require`, to staticly resolve each country JSON.

```
npm install bulkify
```

```
var bulkify = require('bulkify')
var bundle = browserify({
  entries: [...],
})
.transform(bulkify, {
  global: true
})
```

## Usage

To access one of the country properties available, you'll need to use one of the API methods listed below and pass a country in either way:

- Using the ISO-alpha2 code: `country.population('US', 'ISO2')` or `country.area('JP')` (defaults)
- Using the ISO-alpha3 code: `country.capital('GBR', 'ISO3)`
- Using the country name: `country.wiki('france', 'name')`. The matching is case-insensitive, against the native name, alternative spellings and available transalations.

## API

### `.name()`

Returns name of the Country

```JavaScript
var country = require('statejs');
country.name('US', 'ISO2'); // 'ISO2', 'ISO3', 'name'
country.name('US'); // Defaults to ISO2
// returns object,
// {
//     "name": "United States",
//     "altSpellings": ["US", "USA", "United States of America"],
//     "ISO": {
//         "alpha2": "US",
//         "alpha3": "USA"
//     },
//     "states": [
//         {"abbreviation":"AL","name":"Alabama","country":"US"}
//     ]
// }
```

### `.states()`

Returns all states/provinces for a specified country.

```JavaScript
var country = require('statejs');
country.states('USA', 'ISO3'); // 'ISO2', 'ISO3', 'name'
country.states('US'); // Defaults to ISO2
// returns array of states / provinces,
// [
//  {"abbreviation":"AL","name":"Alabama","country":"US"}
//  ...
// ]
```

### `.provinces()`

Alias of [`.states()`]()

### `.name()`

Returns name for a specified country

```javascript
var country = require('statejs');
country.name('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.name('US') // Defaults to 'ISO2'
// returns string
// "United States"
```

### `.state()`

Returns name for a specified country

```javascript
var country = require('statejs');
country.state('USA','Indiana'); // State Name, State Abbreviation
// returns object
// { abbreviation: 'IN', name: 'Indiana', country: 'US' }

country.name('US','IN')
// returns string
// "Indiana"
```

### `.province()`

Alias of [`.state()`]()

### `.altSpellings()`

Returns alternate spellings for the name of a specified country

```javascript
var country = require('statejs');
country.altSpellings('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.altSpellings('US') // Defaults to 'ISO2'
// returns array of strings, alternate names
// ["US", "USA", "United States of America"]
```

### `.ISOcodes()`

Returns ISO codes for a specified country

```javascript
var country = require('statejs');
country.ISOcodes('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.ISOcodes('US') // Defaults to 'ISO2'
// returns object of ISO codes
// {
//   "alpha2": "US",
//   "alpha3": "USA"
// }
```
### `.all()`

Return all country data. This will be super big. Not recommended.

```JavaScript
var country = require('countryjs');
country.all();
// returns array of objects,
// [{
//     "name": "United States",
//     "altSpellings": ["US", "USA", "United States of America"],
//     "ISO": {
//         "alpha2": "US",
//         "alpha3": "USA"
//     },
//     "states": [], // State/Province list
// }...]
```

## Special Thanks

Special thanks to the CountryJS Guys and People working on the other StatesJS and ProvinceJS

## Contributing

*This project adheres to [Javascript Standard style](https://github.com/feross/standard)*

To contribute code to this module, please follow this workflow: 

1. fork the repo
2. make sure to install dev dependencies using

  ```bash
  npm install --dev
  ```

3. Make the changes you desire
4. Ensure all changes have a new test in the `test/` folder, and run:

  ```bash
  npm test
  ```

  This will check do the following:
  * Check your code against [feross/standard style](https://github.com/feross/standard) and notify of any issues.
  * Run all mocha tests listed in `test/`
  * Run all code through [istanbul's code coverage runner](https://github.com/gotwarlost/istanbul). You can check the coverage afterwards the coverage report page: `coverage/lcov-report/index.html`

5. After making changes in your fork, open a pull request.

Please note that if your code updates do not pass JS Standard style, mocha tests and code coverage, your PR may be rejected and you'll need to fix any issues listed in it.

### Contributors
* Scott Wyatt <a href="mailto:scottwyatt86@gmail.com">scottwyatt86@gmail.com</a> - [/scott-wyatt](https://github.com/scott-wyatt) - [cali-style.com](http://cali-style.com)
* Trent Oswald <a href="mailto:trentoswald@therebelrobot.com">trentoswald@therebelrobot.com</a> - [/therebelrobot](https://github.com/therebelrobot) - [therebelrobot.com](http://therebelrobot.com)
* Scott Hillman <a href="mailto:hillmanov@gmail.com">hillmanov@gmail.com</a> - [/hillmanov](https://github.com/hillmanov)
* Michael Scott Hertzberg <a href="mailto:mshertzberg@gmail.com">mshertzberg@gmail.com</a> - [/moimikey](https://github.com/moimonkey) - [michael.hertzberg.co](http://michael.hertzberg.co)
* Loris Guignard <a href="mailto:loris.guignard@gmail.com">loris.guignard@gmail.com</a> - [/loris](https://github.com/loris)

## Changelog

All notable changes to this project will be documented in this file.

## Disclaimer

This is being maintained in the contributor's free time, and as such, may contain minor errors in regards to some countries.
Most of the information included in this library is what is listed on Wikipedia. If there is an error, 
please let me know and I will do my best to correct it.

## License (MIT)

Copyright (c) 2015, Scott Wyatt <scottwyatt86@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
