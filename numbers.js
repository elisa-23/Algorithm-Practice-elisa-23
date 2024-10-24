function binaryTodecimal(N) {
    let length = N.length;
    for (let i=length--;i<0;i--){
        
    }
}

function decimalToBinary(N) {
    let length = N.length;
    let result = [];
    let remainder = 0;
    let number = 0;
    let power = 0;
    let a = 0;
    for (let i = length--; i<0; i--){
        if (i === length--){
            if (N%2 === 1){
                result.push('1');
                console.log(1);
                remainder = N[i]--;
            }else{
                result.push('0');
                console.log(0);
                remainder = N[i];
            }
            console.log(remainder);
        }else{
            power = length - i + 1;
            number = (N[i]*(power)) + remainder;
            console.log(number);
            remainder = 0;
            a = 2 ** power;
            console.log(a);
            if (a <= number){
                result.push('1');
                console.log(1);
                remainder = number-a;
            }else {
                result.push('0');
                console.log(0);
                remainder = number;
            }
            console.log(remainder);
        }
    }
    let resultLength = result.length;
    console.log(result);
    let binary = '';
    for (let i=resultLength--; i<0; i--){
        binary = binary + result[i];
    }
    console.log(binary);
}

decimalToBinary(1);