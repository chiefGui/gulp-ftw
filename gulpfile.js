var gulp            = require ('gulp')
    , concatCss     = require ('gulp-concat-css')
    , minifyCss     = require ('gulp-minify-css');

gulp.task('concat-css', function () {
  var files = [
    './assets/css/screen.css',
    './assets/css/components.css'
  ];

  return gulp.src(files)
    .pipe(concatCss('package.css'))
    .pipe(
      gulp.dest('./static/css/')
    );
});

gulp.task('minify-css', function () {
  return gulp.src('./static/css/package.css')
    .pipe(minifyCss())
    .pipe(
      gulp.dest('./static/css/')
    );
});

gulp.task('css', ['concat-css', 'minify-css']);

gulp.task('default', []);
