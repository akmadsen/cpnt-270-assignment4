var gulp = require('gulp');
var sass = require('gulp-sass'); 

gulp.task('style', function() {
    gulp.src('./src/sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
}); 

gulp.task('watch', function() {
    // Any folder or file with .scss, run the 'style' task
    gulp.watch('./src/sass/**/*.scss', ['style']); 
}); 