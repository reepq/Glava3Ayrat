console.log('Упражнение 3.2')
console.log('Задание 1')
let a = 9; 
if (a > 3 && a < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

console.log('-----------')
console.log('Задание 2')
let a1 = 0; 
if (a1 === 0 || a1 === 2) {
  a1 += 7;
} else {
  a1 /= 10;
}
console.log(a1);


console.log('-----------')
console.log('Задание 3')
let num = 1; 
let result;
switch (num) {
  case 1:
    result = "зима";
    break;
  case 2:
    result = "весна";
    break;
  case 3:
    result = "лето";
    break;
  case 4:
    result = "осень";
    break;
  default:
    result = "неверное значение";
}
console.log(result); 

console.log('-----------')
console.log('Задание 4')
let day = 18; 
if (day >= 1 && day <= 10) {
  console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
  console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
  console.log("Третья декада");
} else {
  console.log("-");
}

console.log('-----------')
console.log('Задание 5')
let month = 5; 
switch (month) {
  case 1:
  case 2:
  case 12:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
  default:
    console.log("-");
}

console.log('-----------')
console.log('Задание 6')
let str = "abcde"; 
if (str[0] === 'a') {
  console.log("да");
} else {
  console.log("нет");
}