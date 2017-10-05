var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default');

gulp.task('browserSync', function() {
  browserSync.init({
      server: {
        baseDir: 'app',
        index: 'index.html'
      },
  });
});

gulp.task('serve',['browserSync'], function() {
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/*.css', browserSync.reload);
  gulp.watch('app/*.js', browserSync.reload);

})
