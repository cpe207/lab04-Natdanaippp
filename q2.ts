function arrayStringify(a) :string { 
  let f="";
  let N=a[0].length;
  for(let i=0;i<N;i++) {
    f+=a[i];
  }
  return f;
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;

// ณัฐดนัย กำธรกิตติกุล 660610755