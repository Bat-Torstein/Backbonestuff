var gulp        = require('gulp'),
    browserify  = require("gulp-browserify"),
    notify      = require("gulp-notify"),
    less        = require("gulp-less"),
    karma       = require("gulp-karma");

var paths = {
    watch: ['./js/**/*.js', './templates/*.html', './styles/*.less'],
    specwatch: ['./js/**/*.js'],
    browserify: ['./js/*.js'],
    styles: ['./styles/*.less'],
    dist: {
        css: './dist/css/',
        js: './dist/js/',
    },
    specs: './js/specs/*.js'
};

function notifyBrowserifyError() {
    gulp.src("gulpfile.js").pipe(notify("Browserify failed!"));
    this.emit('end');
}

function notifyLessError() {
    gulp.src("gulpfile.js").pipe(notify("Less failed!"));
    this.emit('end');
}

function notifyTestsFailed() {
    gulp.src("gulpfile.js").pipe(notify("Tests failed!"));
}

gulp.task("build", function () {
    gulp.src(paths.browserify)
        .pipe(browserify({
            transform: ['node-underscorify']
         }))
        .on('error', notifyBrowserifyError)
        .pipe(gulp.dest(paths.dist.js));

    gulp.src(paths.styles)
        .pipe(less())
        .on('error', notifyLessError)
        .pipe(gulp.dest(paths.dist.css));

    console.log("Success!");
});

gulp.task("test", function () {
    gulp.src(paths.specs)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run',
            singeRun: true,
            autoWatch: false
        }))
        .on('error', notifyTestsFailed);
});

gulp.task("watch", function () {
    gulp.src(paths.specwatch)
        .pipe(karma({
            configFile: 'karma.conf.js',
            singleRun: false,
            action: 'watch'
        }))
        .on('error', notifyTestsFailed);

    gulp.watch(paths.watch, ['build']);
});

