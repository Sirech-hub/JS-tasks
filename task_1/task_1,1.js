// Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа

function factorial (n) {
    return (n != 1) ? n * factorial (n - 1) : 1;
}

console.log(factorial (5));  // 120


