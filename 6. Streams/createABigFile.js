const fs = require('fs');
const path = require('path');


wStream = fs.createWriteStream(path.join(__dirname,'BIG_FILE.txt'));
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

for (i=0;i<(1024*1024*4);i++){
    wStream.write(text);
}
wStream.end();