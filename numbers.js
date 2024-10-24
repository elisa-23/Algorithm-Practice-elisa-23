console.log("Connected");

function binaryTodecimal(N) {
    const length = N.toString().length;     /* length only works with strings */
    console.log(length);
    let powers = length - 1;
    let decimal = 0;
    const numbers = N.toString().split("").map(Number);
    for (let i = 0; i < length; i++) {
        let number = numbers[i] * (2 ** (powers - i));
        console.log(number);
        decimal = decimal + (number);
    }
    console.log(decimal);
}

/* binaryTodecimal(1101); */

function decimalToBinary(N) {
    let number = 1;
    let power = 0;
    console.log("power: " + power);
    while (number < N) {
        power++;
        console.log("power: " + power);
        number = number * 2;
        console.log("number: " + number);
    }
    power--;
    number = number / 2;
    let array = [];
    let b = 2 ** power;
    for (let i = 0; i <= power; i++) {
        if (N >= b) {
            N = N - b;
            array.push("1");
        } else {
            array.push("0");
        }
        b = b / 2;
        console.log("remainder: " + N);
    }
    console.log(array.join(''));
}

/* decimalToBinary(13); */