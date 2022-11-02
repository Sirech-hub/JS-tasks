//Написать функцию, которая суммирует два аргумента вместе. Если указан только один аргумент, то вызвать 
//функцию, которая ожидает второй агрумент и возвращает сумму.


function sum(a, b) {
    return a + b;
}

function curry(fn) {
    return function (...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args);
        }

        return function (...newArgs) {
            return curriedSum.apply(this, args.concat(newArgs))
        }
    }
}

const curriedSum = curry(sum);

console.log(curriedSum(2)()) 

// каррирование
