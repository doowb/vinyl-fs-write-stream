'use strict';

var fs = require('fs');
var lines = [];
for (var i = 0; i < 2000; i++) {
  lines.push(`[${i}] this is a line in a large file of text`);
}
fs.writeFileSync('fixtures/large.txt', lines.join('\n'));
