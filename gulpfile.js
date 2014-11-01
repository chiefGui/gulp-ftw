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

gulp.task('react', function () {
  return gulp.src('./assets/js/components/**/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('./assets/js/components/'));
});

gulp.task('browserify', function () {
  return gulp.src('./assets/js/hello.js')
    .pipe(browserify({
      shim: {
        jquery: {
          path: './assets/vendor/jquery/dist/jquery.js',
          exports: '$'
        },
        underscore: {
          path: './assets/vendor/underscore/underscore.js',
          exports: '_',
          depends: {
            jquery: '$'
          }
        },
        react: {
          path: './assets/vendor/react/react.js',
          exports: 'React'
        }
      }
    }))
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('uglify', function () {
  return gulp.src('./static/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('js', ['react', 'browserify', 'uglify']);

gulp.task('css', ['sass', 'concat-css', 'minify-css']);

gulp.task('default', ['css', 'js']);
