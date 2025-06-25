const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Tarefa: Compilar SASS
function compilarSass() {
    return gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// Tarefa: Minificar JS
function minificarJS() {
    return gulp.src('js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

// Tarefa: Comprimir imagens
function comprimirImagens() {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

// Exportar tarefas para terminal
exports.sass = compilarSass;
exports.js = minificarJS;
exports.img = comprimirImagens;

// Tarefa principal em série
exports.default = gulp.series(compilarSass, minificarJS, comprimirImagens);