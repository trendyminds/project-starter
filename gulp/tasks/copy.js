var gulp = require('gulp'),
    del = require('del'),
    paths = require('../paths');

gulp.task('copy', function () {

  var copyPaths = [
    paths.app.dir + '/**/*.*',
    paths.app.dir + '/.*',
    paths.app.dir + '/**/.htaccess',
    '!' + paths.app.templates,
    '!' + paths.app.styles,
    '!' + paths.app.scripts,
    '!' + paths.app.images,
    '!' + paths.app.tmp,
  ];

  return gulp.src(copyPaths).pipe(gulp.dest(paths.dist.dir));

});
