// Написать функцию,  которая на вход принимает строку и возвращает эту строку в формате:
// каждое слово начинается с заглавной буквы, остальные в нижнем регистре.

const str = "сохрани мою речь навсегда";

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}

console.log(capitalize(str)); // "Сохрани Мою Речь Навсегда" 



