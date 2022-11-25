//String
//1. Stora bokstäver
let sentenceOne = "cheese cheese cheese";
console.log(sentenceOne.toUpperCase());

//2. Små bokstäver
let sentenceTwo = "HejHopp!";
console.log(sentenceTwo.toLowerCase());

//3. Sätt ihop
let buildSentenceOne = "Learn to val";
let buildSentenceTwo = "ue yourself, wich means:t";
let buildSentenceThree = "o fight for your happiness.";
console.log(buildSentenceOne.concat(buildSentenceTwo, buildSentenceThree));

//4. Byt ut
let replaceIt =
  "The most weird things are the funniest to say, because martians diminish them";
console.log(replaceIt.replace("weird", "important"));
console.log(replaceIt.replace("funniest", "hardest"));
console.log(replaceIt.replace("martians", "words"));

//5. Sista bokstaven
let sentOne = "In order to be irreplaceable one must always be different";
let sentTwo = "Those who dare to fail miserably can achieve greatly";
let sentThree = "Well done is better than well said";
let sentFour = "You are what you believe yourself to be";
console.log(sentOne.length);
console.log(sentOne.charAt(56));
console.log(sentTwo.length);
console.log(sentTwo.charAt(51));
console.log(sentThree.length);
console.log(sentThree.charAt(33));
console.log(sentFour.length);
console.log(sentFour.charAt(38));

//ARRAY
//1. Innehåller
let arrayOfNumbers = [
  4, 23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24, 100,
];
console.log(arrayOfNumbers.includes(33));

//2. Ta bort sista
console.log(arrayOfNumbers.pop());

//3. Ta bort första
console.log(arrayOfNumbers.shift());

//4. Del av array
let arrNum = [23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24];
console.log(arrNum.slice(3, 7));

//5. Ändra ordning
let numArr = [23, 1, 2, 88, 54];
console.log(numArr.reverse());

//6. Kopia
let pizza = [54, 88, 2, 1, 23];
console.log(pizza.slice());

//7. Filtrera
//hämta alla nummer över 50. Logga resultatet.
let osten = [4, 23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24, 100];
console.log(osten.filter((ost) => ost > 50));

//hämta alla nummer under 50.  Logga resultatet.
console.log(osten.filter((ost) => ost < 50));

//hämta alla nummer mellan 20 och 70.  Logga resultatet.
console.log(osten.filter((ost) => ost >= 20 && ost <= 70));

//8. forEach()
//Dubbla alla nummer & Elementet ska innehålla true om numret är jämt och false om numret är udda.
let arry = [4, 23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24, 100];
arry.forEach((arr) => {
  if (arr % 2 == 0) {
    console.log(`${arr} is true`);
  } else {
    console.log(`${arr} is false`);
  }
  console.log(arr * 2);
  console.log(arr * arr);
});

//9. Math
//Positivt nummer
let posNr = [6, -2, -5, 3, 6, -3, -75, 5, 23];
posNr.forEach((num) => {
  console.log(Math.abs(num));
});

//Avrunda
let numNum = [3.23, 5.21, 75.3, 5.879, 3.9, 9.5];
numNum.forEach((num) => {
  //Avrunda alla nummer till närmaste heltal
  console.log(Math.round(num));

  //Avrunda alla nummer till närmaste heltal uppåt
  console.log(Math.ceil(num));

  //Avrunda alla nummer till närmaste heltal nedåt
  console.log(Math.floor(num));
});

//Minsta
let nimmy = [6, -2, -5, 3, 6, -3, -75, 5, 23];
const min = Math.min(...nimmy);
console.log(min);

//Högsta
let pimmy = [6, -2, -5, 3, 6, -3, -75, 5, 23];
const max = Math.max(...pimmy);
console.log(max);
