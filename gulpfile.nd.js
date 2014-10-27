var gulp            = require ('gulp')
    , concatCss     = require ('gulp-concat-css')
    , minifyCss     = require ('gulp-minify-css');

gulp.task('css', function () {
  var files = [
    './assets/css/screen.css',
    './assets/css/components.css'
  ];

  return gulp.src(files)
    .pipe(concatCss('package.css'))
    .pipe(minifyCss())
    .pipe(
      gulp.dest('./static/css/')
    );
});

gulp.task('default', []);
