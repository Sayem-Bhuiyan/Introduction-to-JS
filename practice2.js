// give the avarage number of our subjects marks and show the tow desimal value.

var mathmetics = 72.25;
var biology = 65;
var chemestry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalMarks = mathmetics + biology + chemestry + physics + bangla;
var avarage = totalMarks / 5;
avarage = avarage.toFixed(2)
console.log(avarage);