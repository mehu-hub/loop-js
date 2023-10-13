for(var i = 0; i < 20; i++){
    // console.log(i);
    if(i >= 10){
        break;
    }
}
//----------------------------
var roasGiven = 0;
while(roasGiven < 10){
    // console.log('Roast Den');
    roasGiven++;
    if(roasGiven >= 5){
        break;
    }
}
//----------------------------
var items = ['Pen', 'Sunglass', 'Book', 'Paper', 'Airpods', 'Mobile', 'Perfume'];

for(var i = 0; i < items.length; i++){
    var item = items[i]; 
    if(item === 'Mobile'){
        break;
    }
    // console.log(item);
}
//-----------------------------
var numbers = [45, 75, 85, 95, 15, 52, 900, 58, 88, 83];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    if (number >= 100) {
        break;
    } 
    console.log(number);
}