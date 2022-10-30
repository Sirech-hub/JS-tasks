// Написать функцию, которая на вход принимает массив и еще один или несколько аргументов
// (точное количество не известно). Удалить из массива все элементы, которые имеют то же значение, 
// что и эти аргументы.


arr = destroyer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 5, 6);

function destroyer(arr) {
    const argsArray = [...arguments].slice(1);
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (argsArray.indexOf(arr[i]) == -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log(destroyer(arr));

