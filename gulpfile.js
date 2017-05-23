var gulp=require('gulp');
var minify=require('gulp-minify-css');
var clean=require('gulp-minify-css');
var html=require('gulp-minify-html');
var js=require('gulp-uglify');
gulp.task('mycs',function(){
	gulp.src('Bootstrap/css/*.css').pipe(minify()).pipe(gulp.dest('xiangmu/mycss'));
})

gulp.task('myhtm',function(){
	gulp.src('Bootstrap/*.html').pipe(html()).pipe(gulp.dest('xiangmu/myhtml'));
})
gulp.task('js',function(){
	gulp.src('Bootstrap/js/*.js').pipe(js()).pipe(gulp.dest('xiangmu/myjs'));
})

gulp.task('default',['mycs','myhtm','js'],function(){
	console.log('执行完毕');
})
