function factors(n) {
    let factors = []
    for (i = 1, i <= n, i++) {
        if (n%i == 0) {
            factors.push(i);
        } else {
            console.log("Not a factor);
        }
    console.log(factors);
    return factors
    }
}