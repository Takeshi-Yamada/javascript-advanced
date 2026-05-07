// ここにコードを書きながら確認しましょう！


const [j, q, r] = arrayFn('react');
console.log(r);
// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

// 問題 2
function objectFn(obj) {
  const {name: companyName} = obj;
  console.log(companyName);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

objectFn(argObject);
