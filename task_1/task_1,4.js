// Написать функцию, которая на вход принимает строку и целое число и обрезает строку (первый аргумент),
// если она длиннее заданной максимальной длинны строки (второй аргумент) и возвращает обрезанную строку 
// c "..." в конце.

str = truncate("freedom of speech is the ability to say two plus two is four", 30);

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '...' : str; // or  unicod '…'
}

console.log(truncate(str));

