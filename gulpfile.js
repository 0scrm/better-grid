var gulp = require('gulp');  
var sass = require('gulp-sass');  
var prefix = require('gulp-autoprefixer');
const stripCssComments = require('gulp-strip-css-comments');
var prefixerOptions = {
  browsers: ['last 2 versions']
};

gulp.task('sass', function () {  
    gulp.src('./sass/**/*.scss')
        .pipe(sass({includePaths: ['sass']}))
        .pipe(prefix(prefixerOptions))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(stripCssComments({
            preserve: false
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['sass']);