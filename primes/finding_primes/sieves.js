
const KNOWN_PRIMES = require('../prime_lists/data/primes.js'),
      KNOWN_PRIMES0000000 = require('../prime_lists/data/primes664580'),
      V8= require('v8');

// The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (253 - 1).
//
// BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 1,
// which is the largest number JavaScript can reliably represent with the Number primitive and
// represented by the Number.MAX_SAFE_INTEGER constant.
//
// BigInt can be used for arbitrarily large integers.
//
// however
// However, the maximum length of an array according to the ECMA-262 5th Edition specification is
// bound by an unsigned 32-bit integer due to the ToUint32 abstract operation, so the longest
// possible array could have 232-1 = 4,294,967,295 = 4.29 billion elements
//
// https://futurestud.io/tutorials/node-js-increase-the-memory-limit-for-your-process
// v8 hold the heapsize stats
// node --max-olid-space-size=

function ListPrimesTo ( N) {

    let NSQ = N*N; //if ( KNOWN_PRIMES[KNOWN_PRIMES.length] < NSQ ) throw new Error("Need more prime_lists")

    // maximum length of an array according to the ECMA-262 5th Edition specification is bound by an
    // unsigned 32-bit integer due to the ToUint32 abstract operation, so the longest possible array
    // could have 232-1 = 4,294,967,295 = 4.29 billion
    //4,294,967,295
    //let  INTEGERS = [...Array(N+1).keys()]
    let  INTEGERS = [...Array(4294967295).keys()]

    KNOWN_PRIMES0000000.forEach(p => {

        for ( let m = 2 ; m*p <= N ; m++) {
            INTEGERS [m*p] = 0;
        }
    });

    INTEGERS[1] = 0;
    return INTEGERS.filter( n => n != 0) ;
}

function ListPrimesWithOutPrimes (N) {

    let NSQ = N*N; //if ( KNOWN_PRIMES[KNOWN_PRIMES.length] < NSQ ) throw new Error("Need more prime_lists")

    let  INTEGERS = [...Array(N+1).keys()]

    INTEGERS[1] = 0;

    INTEGERS.forEach(n => {
        if ( n === 0) return;
        for ( let m = 2 ; m*n <= N ; m++) {
            //console.log('eliminate ', m*n)
            INTEGERS [m*n] = 0;
        }
    });

    return INTEGERS.filter( n => n != 0) ;
}



module.exports = {
    ListPrimesTo,
    ListPrimesWithOutPrimes
}

