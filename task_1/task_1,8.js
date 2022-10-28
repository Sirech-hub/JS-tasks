// Написать функцию, которая на вход принимает массив, состоящий из двух строк.
// Функция должна вернуть true, если строка в первом элементе массива содержит все буквы во втором элементе 
// массива (регистр игнорируется)



arr = mutation(['dfd', 'dfd']);

function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}

console.log(arr); //true

