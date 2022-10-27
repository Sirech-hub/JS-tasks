// Написать функцию, которая на вход принимает строку и возвращает длинну самого длинного слова в этой строке.


const str = 'do you want to take everything back'; 

const longestWord = (str) => {
    const strArray = str.split(' ');
    const sortedStrArray = strArray.sort(
     (strA, strB) => {
         return strB.length - strA.length;
    
        }
    ); 
    return sortedStrArray[0];
}

console.log(longestWord(str));


