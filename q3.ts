function primeNumber(a) {
  for(let i = 2;i<=a;i++){
    if(i==a)
    {
      return "YES";
    }
    if(a%i ==0)
      {
        return "NO";
      }
  }
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

// ณัฐดนัย กำธรกิตติกุล 660610755