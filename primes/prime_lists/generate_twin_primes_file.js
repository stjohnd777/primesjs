const fs = require('fs');
let knownPrimes = require('./data/primes664580');

const {Observable} = require('rxjs');
const {filter, pairwise, toArray, tap} = require('rxjs/operators');


function GenerateTwinPrimesFile() {

    const observable$ = new Observable(subscriber => {
        try {
            knownPrimes.forEach(p => {
                subscriber.next(p);
            })

            subscriber.complete();
        }catch(e) {
            subscriber.error(e)
        }
    });

    observable$.pipe(  pairwise(),filter( p=> p[1]-p[0] === 2), toArray()).subscribe(
        p => {
            console.log(p)
            let n = p.length;
            fs.writeFile(`./twin_primes_${n}.json`, JSON.stringify(p), (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log('Twins Prime File Generated');
            });

        }
    );


}

module.exports = GenerateTwinPrimesFile;

GenerateTwinPrimesFile();