var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy:false});
var path = require('./paths.json');

gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe($.react())
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('default', ['watch']);

gulp.task('build', function(){
  gulp.src(path.JS)
    .pipe($.react())
    .pipe($.concat(path.MINIFIED_OUT))
    .pipe($.uglify(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
}); 

gulp.task('production', ['replaceHTML', 'build']);

