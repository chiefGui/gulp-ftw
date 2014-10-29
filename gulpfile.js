var gulp            = require ('gulp')
    , concatCss     = require ('gulp-concat-css')
    , minifyCss     = require ('gulp-minify-css')
    , sass          = require ('gulp-sass')
    , browserify    = require ('gulp-browserify')
    , react         = require ('gulp-react')
    , concat        = require ('gulp-concat')
    , uglify        = require ('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sass())
    .pipe(
      gulp.dest('./assets/css/')
    );
});

gulp.task('concat-css', function () {
  var assets = [
    './assets/vendor/bootstrap/dist/css/bootstrap.css',
    './assets/css/screen.css'
  ];

  return gulp.src(assets)
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

gulp.task('browserify', function () {

});

gulp.task('css', ['sass', 'concat-css', 'minify-css']);

gulp.task('default', []);
