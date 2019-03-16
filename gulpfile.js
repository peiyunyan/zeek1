const gulp = require('gulp');
const server = require('gulp-webserver');
const sass = require('gulp-sass');
const minCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');

gulp.task('sass',function() {
	return gulp.src('./src/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./src/css/'));
})

gulp.task('server',function() {
	return gulp.src('src')
	.pipe(server({
		port : 8585,
		open : true,
		livereload :true,
		proxies : [
			{source : '/list' , target : 'http://localhost:3000/list'}
		]
	}))
})

gulp.task('watch',gulp.series('sass','server'))
