function factors(n) {
    let factors = []
    //GUARD CLAUSE
    if (n <= 0) {
        return "negative number or 0";
    }
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        } else {
            console.log("Not a factor: " + i);
        }
    }
    console.log(factors);
    return factors;
}

function newFactorial(n){
    if (n>0) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}