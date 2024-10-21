function factors(n) {
    let factors = []
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

factors(4)