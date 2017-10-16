var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var minifyJS = require('gulp-jsmin');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');


gulp.task('default', [], function(){
    
    console.log('Minimalizacja plików CSS...');
    gulp.src("./css/*.css").pipe(minifyCSS()).pipe(gulp.dest('deploy/css'));
    
    console.log('Minimalizacja stworzonych plików JS');
    gulp.src("./js/*.js").pipe(minifyJS()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('deploy/js'));
    
    console.log('Optymalizacja grafik');
    gulp.src("./img/**/*.*").pipe(imagemin()).pipe(gulp.dest('deploy/img'));
    
    console.log('Kopiowanie kodu html');
    gulp.src("./*.html").pipe(gulp.dest('deploy'));
    
    console.log('Kopiowanie zewnętrznych bibliotek JS');
    gulp.src("./js/vendor/*.js").pipe(gulp.dest('deploy/js/vendor'));
    
    console.log('Kopiowanie zewnętrznych bibliotek CSS');
    gulp.src("./css/vendor/*.css").pipe(gulp.dest('deploy/css/vendor'));
    
    console.log('Strona gotowa do wgrania na serwer. Powodzenia!');
    
});