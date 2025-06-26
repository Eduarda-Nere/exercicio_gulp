const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Compilar SASS
function compilarSass() {
    return gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// Minificar JS
function minificarJS() {
    return gulp.src('js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

// Comprimir imagens
function comprimirImagens() {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

// Tarefa padrão
exports.default = gulp.series(compilarSass, minificarJS, comprimirImagens);
