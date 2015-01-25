var gulp        = require('gulp'),
    browserify  = require("gulp-browserify"),
    notify      = require("gulp-notify"),
    less        = require("gulp-less");

var paths = {
    watch: ['./js/**/*.js', './templates/*.html', './styles/*.less'],
    browserify: ['./js/*.js'],
    styles: ['./styles/*.less'],
    dist: {
        css: './dist/css/',
        js: './dist/js/',
    }
};


function handleErrors() {
    gulp.src("gulpfile.js").pipe(notify("build failed"));

    this.emit('end'); 
}

gulp.task("build", function () {
    gulp.src(paths.browserify)
        .pipe(browserify({
            transform: ['node-underscorify']
         }))
        .on('error', handleErrors)
        .pipe(gulp.dest(paths.dist.js));

    gulp.src(paths.styles)
        .pipe(less())
        .on('error', handleErrors)
        .pipe(gulp.dest(paths.dist.css));

    console.log("Success!");
});

gulp.task("watch", function () {
    gulp.watch(paths.watch, ['build']);
});

