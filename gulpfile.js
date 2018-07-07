var gulp = require("gulp");
//css
var cssminify = require("gulp-minify-css");
//images
var imageMin = require("gulp-imagemin");


gulp.task("watch", function () {
    gulp.watch("./images/*.*",["images"])
    gulp.watch("./*.css", ["css"])
})
gulp.task("css", function ()  {
    gulp.src("./index.css")
        .pipe(cssminify())
        .pipe(gulp.dest("./out"))
})
gulp.task("images", function ()  {
    gulp.src("./images/*.*")
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest("./out/images"))
})


gulp.task("default", ["images","css","watch"]);