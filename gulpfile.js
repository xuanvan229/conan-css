const gulp = require('gulp');
const pug  = require('gulp-pug');


function buildTmpl() {
    return gulp.src('src/tpl/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/'));
}


gulp.task('default', buildTmpl)