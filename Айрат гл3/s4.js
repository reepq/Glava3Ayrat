console.log('Упражнение 3.4')
console.log('Задание 1')
let arr = [3, -5, -2, 4, -8, 0];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0 && arr[i] % 2 === 0) {
    sum += arr[i];
  }
}
console.log(sum);

console.log('-----------')
console.log('Задание 2')
let arrr = [15, 28, 34, 56, 25, 6];
let maxAbs = Math.abs(arrr[0]);
for (let i = 1; i < arrr.length; i++) {
  let absValue = Math.abs(arrr[i]);
  if (absValue > maxAbs) {
    maxAbs = absValue;
  }
}
console.log(maxAbs);

console.log('-----------')
console.log('Задание 3')
let mas = [10, -5, 3, 2, 0, -1, 8, 0, 10, 3];
let positive = 0;
let negative = 0;
for (let i = 0; i < mas.length; i++) {
  if (mas[i] > 0) {
    positive++;
  } else if (mas[i] < 0) {
    negative++;
  }
}
console.log(`Количество положительных элементов: ${positive}`);
console.log(`Количество отрицательных элементов: ${negative}`);

console.log('-----------')
console.log('Задание 4')
function dublicate(a) {
    return new Set(a).size !== a.length;
}
var a = [ 90, 34, 34, 15, 45 ];
if (dublicate(a)) {
    console.log("Найдены дубликаты чисел в массиве.");
}
else {
    console.log("Дубликатов чисел в массиве не найдено.");
}

console.log('-----------')
console.log('Задание 5')
function poiskchisel(array) {
    const set = new Set(array);
    return set.size;
  }
const array = [85, 56, 78, 13, 42, 33, 67, 11, 50, 43];
console.log(poiskchisel(array)); 

console.log('-----------')
console.log('Задание 6')
function sravneniemassivov(arr1, arr2) {
    if (arr1.length !== arr2.length) {
    return false;
    }
    for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
    return false;
    }
    }
    return true;
    }
    const array1 = [30, 13, 34];
    const array2 = [30, 13, 35];
    console.log(sravneniemassivov(array1, array2)); 
    



