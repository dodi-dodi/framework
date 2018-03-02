'use strict';

const gulp = require('gulp'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  autoPrefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  let entrySrc = 'src/scss/framework.scss',
    prefixerOpts = {browsers: ['last 2 versions'], cascade: false},
    outDist = 'dist/css/',
    outAssets = 'docs/assets/';

  // noinspection JSUnresolvedFunction
  gulp.src(entrySrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer(prefixerOpts))
    .pipe(gulp.dest(outDist));

  // noinspection JSUnresolvedFunction
  gulp.src(entrySrc)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoPrefixer(prefixerOpts))
    .pipe(rename('framework.min.css'))
    .pipe(gulp.dest(outDist))
    .pipe(gulp.dest(outAssets));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('js', function () {
  let entrySrc = 'src/js/*.js',
    babelOpts = {presets: ['es2015']},
    outDist = 'dist/js/',
    outAssets = 'docs/assets/';

  // noinspection JSUnresolvedFunction
  gulp.src(entrySrc)
    .pipe(babel(babelOpts))
    .pipe(concat('framework.js'), {newLine: ';'})
    .pipe(gulp.dest(outDist));

  // noinspection JSUnresolvedFunction
  gulp.src(entrySrc)
    .pipe(babel(babelOpts))
    .pipe(concat('framework.min.js'), {newLine: ';'})
    .pipe(uglify()).on('error', console.error)
    .pipe(gulp.dest(outDist))
    .pipe(gulp.dest(outAssets));
});

gulp.task('js:watch', function () {
  gulp.watch('src/js/*.js', ['js']);
});

gulp.task('build', ['sass', 'js']);
gulp.task('build:watch', ['sass:watch', 'js:watch']);
gulp.task('default', ['build', 'build:watch']);
