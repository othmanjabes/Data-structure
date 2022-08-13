//Sieve_of_Eratosthenes
function primeNum(input) {
    const numsArr = Array.from({length: input+1},()=>true);
    const primeNumber =[];
    0
    for (let i = 2; i <= input; i++) {
        if (numsArr[i]) {
        primeNumber.push(i);
        }
        for (let j = i; j <= input; j+=i) {     
            numsArr[j] =false;   
        }
    }
    return primeNumber;
}

console.log(primeNum(100));