// Написать функцию, которая на вход принимает массив и целое число. Функция должна разбить массив 
// (первый аргумент) на группы длинной size (второй аргумент) и вернуть их в виде двумерного массива.


let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let size = 3

function sizeArrayInGroups(arr, size) {

    let arr2 = [];
    let subArr = [];

    for (let i = 0; i < arr.length; i += size) {
        subArr = arr.slice(i, i + size);
        arr2.push(subArr)
    }
    return arr2
}

console.log(sizeArrayInGroups(arr, size)); // [[0, 1, 2], [3, 4, 5], [6, 7, 8]]


