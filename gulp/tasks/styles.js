var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    assetPaths = require('../paths');

gulp.task('styles', function () {
  return gulp.src(assetPaths.appStyles)
    .pipe(stylus())
    .pipe(prefix())
    .pipe(gulp.dest(assetPaths.tmpStyles));
});

gulp.task('minifyStyles', function () {
  return gulp.src(assetPaths.distCSS)
    .pipe(minifyCSS())
    .pipe(gulp.dest(assetPaths.distStyles));
});
