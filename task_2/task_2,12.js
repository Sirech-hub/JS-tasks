//Написать функцию которая принимает массив различной вложености и возвращает одномерный массив.
// Например: steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4].

const arr = [1, [2], [3, [[4]]]];

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                 : arr.slice();
 };

console.log(flatDeep(arr, Infinity));

