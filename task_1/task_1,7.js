// Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные  значения".

Array = [NaN, false, 0, 88, -12, '', undefined, 33, null]

function filterFalse(arr) {
    return arr.filter(function(v) {return !! v; });
}

console.log(filterFalse(Array));

