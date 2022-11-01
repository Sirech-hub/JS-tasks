// Написать функцию которая заменяет символы &, <, >, "(двойные кавычки), и '(апостроф) в строке их 
// соответсвующим HTML кодом.


str = '<div> && <div>';

function convert(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    return str;
}

console.log(convert(str));

