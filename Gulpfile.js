var gulp = require('gulp'),
    gulpFlatten = require('gulp-flatten');
var sass = require('gulp-sass')(require('node-sass'));
var routeSources = {
    dist: './dist/app/',
    app: './src/',
    html_views: {
        // path: 'src/lib/**/*.css',
        path: 'src/lib/**/*.scss',
        dist: 'dist/app',
    },
};

function task_Copy_html_views() {
    return gulp
        .src([routeSources.html_views.path])
        .pipe(sass(gulpFlatten({ includeParents: 1 })).on('error', sass.logError))
        .pipe(gulp.dest(routeSources.html_views.dist));
}

exports.default = task_Copy_html_views;
