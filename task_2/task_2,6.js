// Написать функциюб которая осуществляет поиск и замену в предложении. Первый аргумент - это строка,
// в которой осуществляется поиск и замена. Второй аргумент - это слово, которое нужно заменить.
// Третий аргумент - это слова, на которое нужно заменить.
// При замене сохряняйте регистр первого символа в исходном слове.


function myReplace(str, before, after) {
    const strSplit = str.split(' ');

    if(/^[A-Z]/.test(before)) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }

   strSplit.splice(strSplit.indexOf(before), 1, after);
   return strSplit.join(' ');
}

str = myReplace("белый синий красный", "красный", "белый");

console.log(myReplace(str));