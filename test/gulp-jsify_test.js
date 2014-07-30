/*
 * gulp-jsify
 * https://github.com/parroit/gulp-jsify
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var gulpJsify = require('../lib/gulp-jsify.js');

describe('gulpJsify', function(){
    it('is defined', function(){
      gulpJsify.should.be.a('function');
    });

});
