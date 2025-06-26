const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');

function compilarSass() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

function minificarJS() {
    return gulp.src('js/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('dist/js'));
}

function comprimirImagens() {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

function watchFiles() {
    gulp.watch('scss/**/*.scss', compilarSass);
    gulp.watch('js/**/*.js', minificarJS);
    gulp.watch('img/*', comprimirImagens);
}

exports.default = gulp.series(
    gulp.parallel(compilarSass, minificarJS, comprimirImagens),
    watchFiles
);

exports.sass = compilarSass;
exports.js = minificarJS;
exports.img = comprimirImagens;
exports.watch = watchFiles;