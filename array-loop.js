// target: display every elements of array
var numbers = [45, 87, 89, 56, 32, 51, 25, 56, 73, 78]

for ( i = 0; i <= numbers.length; i++) {
    var number = numbers[i];
    console.log(number);

    if ( number === 56) {
        break;
    }
}