var gulp = require('gulp');
var git = require('gulp-git');

// gulp.task('copy', function() {
//   return gulp.src(['dist/**/*']).pipe(gulp.dest('lib'));
// });

// gulp.task('default', ['copy']);

gulp.task('checkout', function() {
  git.checkout('package', { args: '-b' }, function(err) {
    if (err) throw err;
  });
});

gulp.task('push', function() {
  git.push('package', { args: ' -f' }, function(err) {
    if (err) throw err;
  });
});
