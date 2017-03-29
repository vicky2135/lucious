var gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    less_task = function() {
        gulp.src('src/sandbox/static/oscar/less/*.less')
            .pipe(less({
                includePaths: [
                    'src/sandbox/static/less/',
                ],
                outputStyle: null,
            }))
            .pipe(sourcemaps.write('src/sandbox/static/oscar/css/'))
            .pipe(gulp.dest('src/sandbox/static/oscar/css/'));
    };

gulp.task('less', less_task);
