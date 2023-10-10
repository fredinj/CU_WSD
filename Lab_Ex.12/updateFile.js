const fs = require('fs');
const path = require('path');

//append content to file
fs.appendFile(
  path.join(__dirname, 'files', 'fileData.txt'),
  '\nMore data it is',
  (err) => {
    if (err) {
      console.log('err in data addition');
      return;
    }
    console.log('file contents updated');
  }
);
