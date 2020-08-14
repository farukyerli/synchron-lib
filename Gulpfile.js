const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

function css() {
    console.log('BUNDLING CSS...');
    return src('./src/_assets/styles/bundle.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('style/style.css'))
    .pipe(dest('./bundle/lib'))
}

exports.default = css;
