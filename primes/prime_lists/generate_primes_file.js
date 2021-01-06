const fs = require('fs'),
    sieves = require('../finding_primes/sieves.js'),
    sieve0 = require('../finding_primes/sieves.js').ListPrimesWithOutPrimes,
    sieve1 = require('../finding_primes/sieves.js').ListPrimesTo,
    v8= require('v8'),
    knownPrimes = require('./data/primes664580')
       //4294967294
let N = 1000000 ;//4294967294 / 2 ;


function GeneratePrimesFile (N)  {

    let primes = sieve1(N);

    fs.writeFile(`./primes${N}.json`, JSON.stringify(primes, ' ',2), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Prime File Generated');
    });
}

module.exports = GeneratePrimesFile;

console.log("---------------------");
console.log("HeapStatistics");
console.log("---------------------");
console.log(v8.getHeapStatistics());

console.log("---------------------");
console.log("HeapCodeStatistics");
console.log("---------------------");
console.log(v8.getHeapCodeStatistics());
console.log("");

console.log("---------------------");
console.log("HeapStatistics");
console.log("---------------------");
console.log(v8.getHeapStatistics());
console.log("");

console.log("---------------------");
console.log("HeapSpaceStatistics");
console.log("---------------------");
console.log(v8.getHeapSpaceStatistics());
console.log("");

console.log("---------------------");
console.log("HeapStatistics");
console.log("---------------------");
console.log(v8.getHeapStatistics());
console.log("");

console.log("---------------------");
console.log("HeapSnapshot");
console.log("---------------------");
console.log(v8.getHeapSnapshot());
console.log("");

let gig = v8.getHeapStatistics().total_available_size /1024*1024*1024;
console.log(`GIG ${gig}`)

GeneratePrimesFile(N);