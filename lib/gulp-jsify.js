/*
 * gulp-jsify
 * https://github.com/parroit/gulp-jsify
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';


var through2 = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var jsify = require('jsify');

module.exports = function(options) {

    function transform(file, enc, next) {

        // jshint validthis:true
        var self = this;

        if (file.isNull()) {
            this.push(file); // pass along
            return next();
        }

        if (file.isStream()) {
            this.emit('error', new PluginError('gulp-less', 'Streaming not supported'));
            return next();
        }

        try {
            self.push(new gutil.File({
                path: gutil.replaceExtension(file.path, '.js'),
                contents: new Buffer(jsify(file.contents))
            }));

            next();
    
        } catch (err) {
            self.emit('error', new PluginError('gulp-jsify', err));
            next();
        }
        
    }


    return through2.obj(transform);
};
