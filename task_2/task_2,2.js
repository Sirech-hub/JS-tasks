// Написать функцию, которая на вход принимает два массива и возвращает новый массив с элементами 
// найденными только в одном массиве, но не в обоих.


arr1 = [1, 3, 4]
arr2 = [2, 3, 5, 6, 7, 1]

function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    return newArr.filter(function(i) {
        return newArr.indexOf(i) == newArr.lastIndexOf(i);
    });
}

console.log(diffArray(arr1, arr2)); // [4,2,5,6,7]

