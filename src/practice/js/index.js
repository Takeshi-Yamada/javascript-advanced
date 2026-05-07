// 必要な関数をモジュールからインポートする
import { createErrorElement, createElements } from './createElement.js';
import { $axios } from './axiosHelper.js';

window.addEventListener('DOMContentLoaded', () => {
  // ここに処理を書いていく
  const characterElement = document.getElementById('list');

  $axios('https://pokeapi.co/api/v2/pokemon/?limit=151').then(({ data }) => {
    // ポケモンの一覧情報取得
    Object.values(data.results).forEach((data) => {
      $axios(data.url).then(({ data }) => {
        // 画像取得
        const imgPath = data.sprites.other['official-artwork'].front_default;
        const jaRequestUrl = data.species.url;

        $axios(jaRequestUrl).then(({ data }) => {
          // ポケモンの日本語名取得
          const characterName = data.names[0].name;
          //取得したポケモンの情報をもとに表示するHTML要素を作成
          const htmlElement =
            `<li class="list-item">
              <div class="character">
                <img src="${imgPath}" width="475" height="475" alt="" class="character__img">
              </div>
              <p class="character__name">${characterName}</p>
            </li>`
          const fragment = createElements(htmlElement);
          characterElement.appendChild(fragment);
        }).catch((message) =>{
          characterElement.after(createErrorElement(message));
        });
      }).catch((message) => {
        characterElement.after(createErrorElement(message));
      });
    })
  }).catch(message => {
    characterElement.after(createErrorElement(message));
  });
});