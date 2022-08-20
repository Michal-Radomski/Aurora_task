// gulp -v
// CLI version: 2.3.0
// Local version: 4.0.2

const {src, dest, watch, series, parallel} = require("gulp");

const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

// File paths
const files = {
  sassPath: "src/sass/**/*.scss",
  jsPath: "src/js/**/*.js",
};

function sassTask() {
  return src(files.sassPath)
    .pipe(sourcemaps.init()) // Initialize sourcemaps first
    .pipe(sass({outputStyle: "compressed"})) // Compile SCSS to CSS; empty object causes error
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write(".")) // write sourcemaps file in current directory
    .pipe(dest("dist")); // Put final CSS in dist folder
}

function jsTask() {
  return src([files.jsPath]).pipe(uglify()).pipe(dest("dist"));
}

function watchTask() {
  watch([files.sassPath, files.jsPath], parallel(sassTask, jsTask));
}

exports.default = series(parallel(sassTask, jsTask), watchTask);
