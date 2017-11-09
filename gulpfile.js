var gulp        = require('gulp');
var concat        = require('gulp-concat');
var rename        = require('gulp-rename');
var sass        = require('gulp-sass');
var prefix        = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/scss/**/*.scss", ['styles']);
    gulp.watch("assets/js/*.js", ['scripts-required', 'scripts-app']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('styles', function() {
    return gulp.src("assets/scss/*.scss")
        .pipe(sass())
        .pipe(prefix(['last 15 versions'], { cascade: true }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// Compile js into dist folder
gulp.task('scripts-required', function() {
    return gulp.src([
            './assets/js/jquery.js', 
            './assets/js/popper.js', 
            './assets/js/bootstrap.js', 
            './assets/js/owl.carousel.js',
            './assets/js/jquery.dataTables.js',
            './assets/js/jquery.dataTables.bootstrap4.js',
            './assets/js/jquery.viewportchecker.js'
        ])
        .pipe(concat('concat-required.js'))
        .pipe(rename('required.js'))
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

// Compile js into dist folder
gulp.task('scripts-app', function() {
    return gulp.src(['./assets/js/app.js'])
        .pipe(concat('concat.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});


gulp.task('default', ['styles','scripts-required','scripts-app','serve']);