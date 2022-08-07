const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const fileinclude = require("gulp-file-include");

function buildStyles() {
  return gulp
    .src("./sass/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./sass/*.scss", buildStyles);
}

exports.watch = function () {
  gulp.watch("./sass/*.scss", ["sass"]);
  gulp.watch("./build/**/*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
};

exports.buildStyles = buildStyles;
exports.watch = watch;

const paths = {
  scripts: {
    src: "./",
    dest: "./build/",
  },
};

async function includeHTML() {
  return gulp
    .src([
      "*.html",
      "!header-login.html", // ignore
      "!header-ownerView.html", // ignore
      "!header-userView.html", // ignore
      "!header-update-video", // ignore
      "!footer.html", // ignore
    ])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest(paths.scripts.dest));
}

exports.default = includeHTML;
