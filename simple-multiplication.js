// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My solution

function simpleMultiplication(n){
    if (n % 2 === 0){
    return n*8;
    } else {
    return n*9;
    }
}