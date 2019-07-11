// Konfiguracja GULPa 2018 (c) Mateusz "michno" Michnowicz | github.com/gr0hiik

var gulp = require('gulp');

var browsersync = require('browser-sync').create();
var reload = browsersync.reload;

var minifyCSS = require('gulp-csso');
var minifyJS = require('gulp-jsmin');
var minifyHTML = require('gulp-htmlmin');
var image = require('gulp-imagemin');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

gulp.task('default', ['sass', 'watch', 'deploy', 'clean', 'compress-html']);

// Komplacja samych Sassów

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
// Srodowisko developerskie

gulp.task('watch', function () {
  
  browsersync.init({
    server: {
      baseDir: "./"
    }
  });
  
  gulp.watch('./sass/**/*.scss', ['sass', reload]);
  gulp.watch('./*.html').on('change', browsersync.reload);

});

// Usunięcie katalogu /deploy !!!! USUWA CAŁY FOLDER !!!

gulp.task('clean', function(){
  return gulp.src('deploy', {read: false}).pipe(clean());
});

// Wrzucanie strony na produkcję

gulp.task('deploy', ['clean'], function() {
    // Minifikacja CSSów
    
    gulp.src("./css/*.css").pipe(minifyCSS()).pipe(gulp.dest('deploy/css'));
    
    // Minifikacja JSów
    gulp.src("./js/*.js").pipe(minifyJS()).pipe(gulp.dest('deploy/js'));
        
    // Optymalizacja obrazków
    gulp.src("./img/**/*.*").pipe(image([
      image.gifsicle({interlaced: true}),
      image.jpegtran({progressive: true}),
      image.optipng({optimizationLevel: 5}),
      image.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest('deploy/img'));
    
    // Kopiowanie i minifikacja HTMLu
    gulp.src("./*.html").pipe(minifyHTML({collapseWhitespace: false})).pipe(gulp.dest('deploy'));
    
    // Kopiowanie fontów
    gulp.src("./fonts/**/*.*").pipe(gulp.dest('deploy/fonts'));
    
    // Kopiowanie zew. bibliotek JS
    gulp.src("./js/vendor/*.js").pipe(gulp.dest('deploy/js/vendor'));
    
    // Kopiowanie zew. bibliotek CSS
    gulp.src("./css/vendor/*.css").pipe(gulp.dest('deploy/css/vendor'));
    
    // Kopiowanie manifestu
    gulp.src("./manifest.json").pipe(gulp.dest('deploy'));

    // Kopiowanie favicon
    gulp.src("./favicon.*").pipe(gulp.dest('deploy'));
    
});
