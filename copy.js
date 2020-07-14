const path = require('path');
const fse = require('fs-extra');
const pkg = require('./package.json');

function resolveDir(dir) {
  return path.join(__dirname, '', dir);
}

const DESTINATION = resolveDir('./dist');

function success(name, src, dest) {
  console.log(`(${name}) '${src}' -> '${dest}'`);
}

function fatal(name, src, dest, err) {
  console.error(`(${name}) '${src}' -> '${dest}'`);
  console.error();
  console.error(`    ${err}`);
  process.exit(err.errno);
}

const list = pkg.copyToDist || [];
list.forEach(function(src) {
  const dest = `${DESTINATION}/${src}`;

  fse
    .copy(src, dest)
    .then(() => {
      success('copy', src, dest);
    })
    .catch(err => {
      fatal('copy', src, DESTINATION, err);
    });
});
