'use strict';

const
    gulp = require('gulp'),

    // js
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),

    // sass
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),

    // image optimization
    image = require('gulp-image'),

    // browsersync
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// source files and directories
var src = {
    scss: 'src/scss/*.scss',
    scss_index: 'src/scss/framework.scss',
    html: 'docs/*.html',
    js: 'src/js/framework.js'
};

var dist = {
    css: 'docs/static/',
    js: 'docs/static/'
};

// compile SCSS files to css/index.css
gulp.task('sass', function () {
    gulp.src(src.scss_index)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
        .pipe(gulp.dest(dist.css))
        .pipe(reload({ stream: true }));
});

// watch changes in SCSS files
gulp.task('sass:watch', function () {
    gulp.watch(src.scss, ['sass']);
});

gulp.task('js', function () {
    gulp.src(src.js)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('framework.js'), { newLine: ';' })
        .pipe(uglify()).on('error', console.error)
        .pipe(gulp.dest(dist.js))
        .pipe(reload({ stream: true }));
});

gulp.task('js:watch', function () {
    gulp.watch(src.js, ['js']);
});

// browser sync wachting on SCSS files and html files
gulp.task('sync', ['sass'], function () {
    browserSync.init({
        server: "./docs/"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.js, ['js']).on('change', reload);
});

// run browser sync by default
gulp.task('default', ['sync']);
