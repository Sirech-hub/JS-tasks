//Написать функцию, которая на вход принимает последовательность букв и ищет пропущенные буквы.  
//Если все буквы присутсвуют в диапазоне, то возвращается undefined. Например: fearNotLetter("abce")
//должна вернуть d

let str = "adcf";

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingPoint = alphabet.indexOf(str[0]);

    for (let i = 0; i < str.length + 1; i++) {
        if (str[i] !== alphabet[startingPoint + i]) {
            return alphabet[startingPoint + i];
        }
    }
    return undefined;
}

console.log(fearNotLetter(str))

