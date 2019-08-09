const {
  src,
  dest,
  series,
  parallel
} = require("gulp")
const sass = require('gulp-sass'),
  del = require("del"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  path = "sass/*.scss"

function clean() {
  return del("build/**/*")
}

function styles() {
  return src(path)
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("build"))
}

exports.default = series(
  parallel(clean, styles)
)
