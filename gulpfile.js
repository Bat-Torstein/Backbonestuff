var gulp        = require('gulp'),
    browserify  = require("gulp-browserify"),
    notify      = require("gulp-notify"),
    less        = require("gulp-less"),
    karma       = require("gulp-karma"),
    jshint      = require("gulp-jshint");



var paths = {
    watch: ['./js/**/*.js', './templates/*.html', './styles/*.less'],
    specwatch: ['./js/**/*.js'],
    browserify: ['./js/*.js'],
    lint: ['./js/**/*.js'],
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
    this.emit('end');
}

function notifyLintError() {
    gulp.src("gulpfile.js").pipe(notify("Lint failed!"));
    this.emit('end');
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

    gulp.src(paths.lint)
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(jshint.reporter("fail")
        .on('error', notifyLintError));

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

