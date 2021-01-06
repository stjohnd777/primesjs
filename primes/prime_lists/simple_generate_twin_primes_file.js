const fs = require('fs');
let knownPrimes = require('./data/primes664580');


function GenerateTwinPrimesFile() {

    let previous = -1;
    let twins = [];

    knownPrimes.forEach(p => {
        ( (p - previous) === 2) ? twins.push([previous, p]) : null;
        previous = p;
        }
    );

    fs.writeFile(`./twin_primes_simple_${twins.length}.json`, JSON.stringify(twins), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Twins Prime File Generated');
    });
}

module.exports = GenerateTwinPrimesFile;

GenerateTwinPrimesFile();