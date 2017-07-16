require('ts-node').register({project: './gulp'});

const gulp = require('gulp');
const task = (name, deps = []) =>
  gulp.task(name, deps, require(`./gulp/${name}`).default(gulp));

task('dev');

gulp.task('default', ['dev']);


