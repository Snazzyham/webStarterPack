var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var input = './scss/**/*.scss';
var output = './www/css';

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files and compress it 
    .pipe(sass({outputStyle: 'compressed'}))
    // add autoprefixer to the sass files
    .pipe(autoprefixer())
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});


gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

//browsersync is the server, it uses localhost:3000 as a default
gulp.task('browser-sync', function() {
  browserSync.init(['./www/css/*.css', '.www/js/**/*.js', '.www/index.html'], {
    server: {
      baseDir: './www/'
    }
  });
});


gulp.task('default', ['sass', 'watch', 'browser-sync']);



