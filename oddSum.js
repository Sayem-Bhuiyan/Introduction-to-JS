function findOddSum(numbers){
    let OddNumbers = [];
    let sum = 0;
    for ( let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if( element % 2 === 0){
            continue;
        }
        OddNumbers.push(element);
        sum = sum + element;
    }
    console.log(OddNumbers);
    return sum;
}

let numbers = [ 23, 43, 24, 56, 23, 67, 89];

let theOddSum = findOddSum(numbers);
console.log(theOddSum);