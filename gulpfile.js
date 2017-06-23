var gulp=require("gulp");
var minifyHtml = require("gulp-minify-html")
gulp.task("htmltask",function(){
	gulp.src("*.html")
	.pipe(minifyHtml())
	.pipe(gulp.dest("lib"))
})
