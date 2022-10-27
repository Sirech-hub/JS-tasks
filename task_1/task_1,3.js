// Написать функцию, которая на вход принимает массив, состоящий из массивов целых чисел (например:
// [[1, 2 , 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из наибольшего числа каждого предоставленного подмассива.

mainArray = ([[1, 2 , 3], [4, 5], [6, 7, 8, 9]])

function largestOfFour(mainArray) {
    return mainArray.map(function (subArray){
        return subArray.reduce(function (previouslargestNumber, currentLargestNumber) {
            return (currentLargestNumber > previouslargestNumber) ? currentLargestNumber : previouslargestNumber;
        }, 0);
    });
}


console.log(largestOfFour(mainArray)); // [3, 5, 9]

