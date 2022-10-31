// Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов,
// имеющих совпадающие пары имя и значение (второй аргумент). Например:
// whatlslnAName([{"apple": 1, "bat": 2}, {"apple": 1}, {"apple": 1, "bat": 2, "cookie": 2}, 
// {"bat": 2}], {"apple": 1, "bat": 2}) должен вернуть
// [{"apple": 1, "bat": 2}, {"apple": 1, "bat":, "cookie": 2}]



arr = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 },
 { "bat":2 }], { "apple": 1, "bat": 2 })


function whatIsInAName(collection, source) {
 let arr = [];

  let finalArr;
  for(let i = 0; i < collection.length; i++){
    if(collection[i].hasOwnProperty(...Object.keys(source))){
        for(let prop in source){
          finalArr = collection.filter((obj) => {
            if(obj.hasOwnProperty(...Object.keys(source)) && obj[prop] === source[prop]){
              return true;
            }else{
              return false;
            }
          });
        [arr] = [finalArr];
      }

        for(let property in source){
            if(collection[i][property] !== source[property]){
              arr.splice(0, );
            }
          }
        
    }
  }

  return arr;
}

console.log(arr); // [{"apple": 1, "bat": 2}, {"apple": 1, "bat":, "cookie": 2}]\

