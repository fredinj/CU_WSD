const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'posts', 'post.txt'), 'This is data', (err) => {
  if (err) {
    throw err;
  }
  console.log('file created');
});
