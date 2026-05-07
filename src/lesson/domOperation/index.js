import 'animate.css';

// ここにコードを書きながら確認しましょう！
const title = document.getElementById('title');
const button = document.getElementById('button');
const cardYellow = document.querySelector('.card-type--yellow');
const cards = document.querySelectorAll('.card-type');

button.addEventListener('click', ()=>{
  title.classList.add('animate__hinge');
  console.log(cards);
  setTimeout(() => {
    title.classList.remove('animate__hinge');
    cards.forEach(card => {
      card.classList.add('card-animation');
    });
    cardYellow.classList.add('animate__fadeInUp');
    cardYellow.style.display = 'block';
  }, 2000);
});


// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
