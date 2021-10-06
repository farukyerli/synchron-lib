// const { src, dest } = require('gulp');
// var sass = require('gulp-sass')(require('node-sass'));
// const rename = require('gulp-rename');

// function css() {
//     console.log('BUNDLING CSS...');
//     return (
//         src('./src/lib/styles/*')
//             .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//             // .pipe(rename('style.css'))
//             .pipe(dest('./dist/styles/'))
//     );
// }

// exports.default = css;

var gulp = require('gulp'),
    gulpFlatten = require('gulp-flatten');
var sass = require('gulp-sass')(require('node-sass'));
var routeSources = {
    dist: './dist/',
    app: './src/',
    html_views: {
        path: 'src/lib/**/*.scss',
        dist: 'dist/',
    },
};

function task_Copy_html_views() {
    return gulp
        .src([routeSources.html_views.path])
        .pipe(sass(gulpFlatten({ includeParents: 1 })).on('error', sass.logError))
        .pipe(gulp.dest(routeSources.html_views.dist));
}

exports.default = task_Copy_html_views;
