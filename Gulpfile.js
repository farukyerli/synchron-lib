const { src, dest } = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
const rename = require('gulp-rename');

function css() {
    console.log('BUNDLING CSS...');
    return src('./src/_assets/styles/bundle.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('style/style.css'))
        .pipe(dest('./bundle/lib'));
}

exports.default = css;
