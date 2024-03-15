var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify-es').default;

function compilaSass(){
  return gulp
  .src('css/scss/**/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
}
exports.compilaSass = compilaSass;

function gulpJS(){
  return gulp
  .src('js/main/*.js')
  .pipe(concat('script.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('js/'))
  .pipe(browserSync.stream());
}
exports.gulpJS = gulpJS;

function pluginJS(){
  return gulp
  .src(['node_modules/aos/dist/aos.js'])
  .pipe(concat('plugins.js'))
  .pipe(gulp.dest('js/plugins/'))
  .pipe(browserSync.stream())
}
exports.pluginJS = pluginJS;

function pluginCSS(){
  return gulp
  .src(['node_modules/aos/dist/aos.css'])
  .pipe(concat('plugins.css'))
  .pipe(gulp.dest('css/plugins/'))
  .pipe(browserSync.stream())
}
exports.pluginCSS = pluginCSS;

function browser(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
}
exports.browser = browser;

function watch(){
  gulp.watch('css/scss/**/*.scss', compilaSass);
  gulp.watch('js/main/*.js', gulpJS);
  gulp.watch('js/plugins/*.js', pluginJS);
  gulp.watch('css/plugins/*.css', pluginCSS);
  gulp.watch(['*.html']).on('change', browserSync.reload);
}
exports.watch = watch;

exports.default = gulp.parallel(watch, browser, compilaSass, gulpJS, pluginJS, pluginCSS);