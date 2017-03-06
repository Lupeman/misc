var gulp = require('gulp');

var browserSync = require('browser-sync').create();

const jsPath = './app/javascript/**/*.js';


gulp.task('javascript', function(){
  browserSync.reload({
    // stream: true
  });
});


gulp.task('watch-it', ['self-sync', 'javascript'], function(){
  gulp.watch(jsPath, ['javascript'])
});

gulp.task('self-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});
