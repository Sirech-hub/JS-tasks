// Написать функцию, которая принимает два или более массивов и возвращает новый массив 
// уникальных значений. Значения должны быть отсортированы по их первоночальному порядку



arr = uniteUnique([1, 2, 3], [3, 4, 7], [1, 6]);

function uniteUnique(arr) {
    const arrArgs = [...arguments];
    const union = [];
    for (let i = 0; i < arrArgs.length; i++) {
        for (let j = 0; j< arrArgs[i].length; j++) {
            if (union.indexOf(arrArgs[i][j]) == -1) {
                union.push(arrArgs[i][j]);
            }
        }
    }
    return union;
}

console.log(uniteUnique(arr)); // [1,2,3,4,7,6]

