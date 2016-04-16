/*

   [Problem 3: Largest Prime Factor](https://projecteuler.net/problem=3)

   The prime factors of 13195 are 5, 7, 13 and 29.

   What is the largest prime factor of the number 600851475143?

 */

var number = 600851475143;

function prime(n){

    for(var i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }

    return true;

}

for( var j = 2; j < number; j++){

    if(number % j === 0 && prime(j)){
        k = j;
    }

}

console.log(k);
