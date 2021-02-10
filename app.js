const http = require('http');
const fs = require('fs');
const weatherjs = require('weather-js');

weatherjs.find({ search: 'Davao, PH', degreeType: 'C' }, function (err, result) {
    if (err) console.log(err);

    console.log(JSON.stringify(result, null, 2));
});

const server = http.createServer((req, res) => {
    console.log(req.url);
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening');
});