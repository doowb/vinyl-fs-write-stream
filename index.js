'use strict';

var vfs = require('vinyl-fs');

vfs.src('fixtures/*.txt', {buffer: false})
  .pipe(vfs.dest('actual'));
