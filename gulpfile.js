var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
	return gulp.src('assets/less/styles.less')
		.pipe(less())
		.pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function() {
	gulp.watch('./*.less', ['less']);
});

gulp.task('default', ['watch']);