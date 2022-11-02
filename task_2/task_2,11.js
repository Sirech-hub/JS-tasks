// Написать функцию, которая принимает массив и функцию и удаляет каждый элемент массива начиная с первого,
// пока функция не вернет true, а затем возвращает оставшуюся часть массива. Например:
// dropElements([1, 2, 3, 4], function(n) { return n >= 3;}) должна вернуть [3, 4].

 

function dropElements(arr, func, i = 0) {
    return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) { return n >=3;})); //[3, 4]

//решение через рекурсию




