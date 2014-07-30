# gulp-jsify 

##Convert text files into requireable JavaScript modules using jsify

##[Gulp](http://gulpjs.com/) plugin for [jsify](https://github.com/azer/jsify)

[![Build Status](https://secure.travis-ci.org/parroit/gulp-jsify.png?branch=master)](http://travis-ci.org/parroit/gulp-jsify) [![NPM version](https://badge-me.herokuapp.com/api/npm/gulp-jsify.png)](http://badges.enytc.com/for/npm/gulp-jsify) 

## Getting Started

1. Install the module with: `npm install gulp-jsify --save-dev`

2. Add a task to your `Gulpfile.js`:

```javascript
var jsify = require('gulp-jsify');

gulp.task('build-templates', function() {
  
    return gulp.src('./tmpl/**/*.html')
        .pipe(jsify())
        .pipe(gulp.dest('dist'));
});

```

## Other stuff

* documentation - maybe I will add documentation if you ask it. open an issue for this.
* support - open an issue [here](https://github.com/parroit/gulp-jsify/issues).

## License
[MIT](http://opensource.org/licenses/MIT) © 2014, Andrea Parodi