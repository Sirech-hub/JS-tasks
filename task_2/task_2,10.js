// Написать функцию которая суммирует все простые числа до n (аргумент функции).

function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
    return num > 1;
}

function sumPrimes(num) {
  let totsum = 0;
  for (let i = 0; i < num; i++)
  if (isPrime(i))
      totsum += i;
  return totsum;    
}

console.log(sumPrimes(100));  //1060

