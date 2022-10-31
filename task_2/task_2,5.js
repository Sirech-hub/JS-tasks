// Написать функцию, которая конвертирует строку в spinal-case регистр.

function spinalCase(str) {
    return str.replace(/[\s_]/g, '-').replace(/([a-z])([A-Z])/g, '$1'). toLowerCase();

}

spinalCase('This is spinal Tap');

console.log(spinalCase("This is spinal Tap"));

 