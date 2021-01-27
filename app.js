const fs = require('fs');

fs.readFile('./lorenz.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
console.log('last line');