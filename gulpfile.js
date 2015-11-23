var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    },
    files: ['index.html', 'src/**/*.js']
  })
});

gulp.task('babel', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('watch', ['babel'], function () {
  return gulp.watch('src/**/*.js', ['babel']);
});

gulp.task('default', ['browserSync', 'watch']);
