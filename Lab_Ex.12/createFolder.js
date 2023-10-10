const fs = require('fs');
const path = require('path');

// create a directory
fs.mkdir(path.join(__dirname, '/files'), (err) => {
  if (err) {
    console.log(err);
    console.log('folder with that name already exists');
    return;
  }
  console.log('files folder created');
});