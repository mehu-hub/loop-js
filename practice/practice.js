// Practice Problem of Loop------------------------------

//1 - Display "I Learn Loop Variable in JS" for 39 times
//2 - Display numbers between 58 to 98
//3 - Show all even numbers from 412 to 456
//4 - Show all odd numbers 581 to 623
//5 - Difference between while loop and for loop
//6 - Declare an array for all the topics that you have learned last few days .Display then as output
//7 - Create an array for all the mobile phones. Display all the elements of the array by using a while loop
//8 - Run a loop from 30 to 86. this loop will stop if the values get higher than 44
//9 - Write the price of the books that you have. Display the price if the prices is lower than 250

//---------------------------------------------------------
//Task - 1
var slogan = 0;

while (slogan <= 39) {
    // console.log('I learn loop in JS');
    slogan++
}
//-----------------
//Task - 2
var num = 58;
while (num <= 98) {
    // console.log(num);
    num++;
}
//-----------------
//Task - 3
var num = 412;
while (num <= 456) {
    // console.log(num);
    num += 2;
}
//-----------------
// Task - 4
var oddNum = 581;
while (oddNum <= 623) {
    // console.log(oddNum);
    oddNum += 2;
}
//-----------------
// Task - 5
//While
var demo = 0;
while (demo < 10) {
    // console.log(demo);
    demo++;
}
//-----------------
//for
for (var demo = 0; demo < 10; demo++) {
    // console.log(demo);
}

//-----------------
// Task - 6
var learnFewDays = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND', 'JS'];
// console.log(learnFewDays.length);
for (var i = 0; i < learnFewDays.length; i++) {
    var showElement = learnFewDays[i];
    // console.log(showElement);
}
//----------------
// Task - 7
var mobiles = ['iPhone', 'Redmi', 'Realme', 'itel', 'Samsung'];
var i = 0;

while (i < mobiles.length) {
    var showPhone = mobiles[i]
    i++;
    // console.log(showPhone);
}
//-----------------
// Task - 8 
for(i = 30; i <= 86; i++){ 
    // console.log(i);
    if(i > 44){
        break;
    }
    // console.log(i);
}
//-----------------
// Task - 9
var booksPrice = [250, 220, 150, 55, 350, 800, 60, 180];

for (i = 0; i < booksPrice.length; i++) {
    var priceLess = booksPrice[i];
    if (priceLess > 300) {
        continue;
    }
    // console.log(priceLess);
}