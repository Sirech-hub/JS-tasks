// Используя рекурсию (без использования циклов). Написать функцию, которая принимает массив и
// целое число (n) и заполняет массив числами от n до 1.

str = ddd([], 30);

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '...' : str; // or  unicod '…'
}

console.log(truncate(str)); 

