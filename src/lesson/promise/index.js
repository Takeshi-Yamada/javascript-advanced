// ここにコードを書きながら確認しましょう！

const promise = new Promise((resolve, reject) => {
  // 非同期処理を書く
  reject('非同期が失敗しました');
});

// reject関数が実行されるとcatchメソッドが実行される
// reject関数の引数に渡した「非同期が失敗しました」がコールバック関数の引数であるerrに入ってくる
promise.catch(err => {
  console.log(err);
});


// 練習問題
// 問題 1
const returnPromise = () => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject('エラーが発生しました');
    }, 3000);
  });
};

returnPromise().catch(err => {
  console.log(err);
});
