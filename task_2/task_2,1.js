// Написать функцию, которая принимает на вход массив из двух чисел и возвращает сумму этих двух чисел между ними.
// Наименьшее число не всегда будет на первом месте. (Например sumAll[4, 1]) должен возвращать 10)


arr = ([4, 1]);

function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumBetween += i;
    }
    return sumBetween;
}

console.log(sumAll(arr)); // 10




