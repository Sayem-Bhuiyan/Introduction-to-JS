/**
 * you are given an arry:
 *    var fruits = ['Apple', 'Banana', 'Orange'];
 * 
 * a) Find the index of 'Banana' and replace 'Banana' with 'Mango'.
 * b) remove 'Orange' and add 'Watermelon'.
 * */




var fruits = ['Apple', 'Banana', 'Orange'];

// index of Banana
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);

// replacing Banana with Mango
fruits[1] = ('Mango')
console.log(fruits);

// removing 'Orange' and adding 'Watermelon'.
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);


// output:

/**
 * 1
[ 'Apple', 'Mango', 'Orange' ]       
[ 'Apple', 'Mango', 'Watermelon' ]  
 * */ 