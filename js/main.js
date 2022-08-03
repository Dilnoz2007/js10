num1 = +prompt("minimum sonni kiriting");
num2 = +prompt("maximum sonni kiriting");

function myRandom(min, max1){
    let num = Math.floor(Math.random() * (max1 - min) + min);
    return num;
}


for (let i = 0; i < 6; i++) {
   let number1  = myRandom(num1, num2);
   let number2 = myRandom(num1, num2);
   let rndSymb = myRandom(1, 4);
   
   if (randSymb == 1) {
    let pr = +prompt(number1 + " + " + number2 + " = ?");
    let answer =  
    number1 + number2 == pr 
    ? "To'g'ri"
    : "Xato " + "To'g'ri javob  " + (number1 + number2 + " = ?");
    console.log(answer);
} else if (randSymb == 2) {
    let pr = +prompt(number1 + " - " + number2 + " = ?");
    let answer = 
    number1 - number2 == pr 
    ? "To'g'ri"
    : "Xato " + "to'g'ri javob " + (number1 - number2);
    console.log(answer);
} else if ( randSymb == 3) {
    let pr = +prompt(number1 + " * " + number2 + " = ?");
    let answer = 
    number1 * number2 == pr 
    ? "To'g'ri"
    : "Xato " + "to'g'ri javob " + (number1 * number2);
    console.log(answer);
} else if (randSymb == 4) {
    let pr = +prompt(number1 + " / " + number2 + " = ?");
    let answer = 
    number1 / number2 == pr 
    ? "To'g'ri"
    : "Xato " + "to'g'ri javob " + (number1 / number2);
    console.log(answer);
} else if (randSymb == 5) {
    let pr = +prompt(number1 + " % " + number2 + " = ?");
    let answer = 
    number1 % number2 == pr 
    ? "To'g'ri"
    : "Xato " + "to'g'ri javob " + (number1 % number2);
    console.log(answer);
}
}