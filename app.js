// JSONファイルの読み込み
fetch('./tap_dance_card_data.json')
  .then(response => response.json())
  .then(data => {
    // データの確認
    console.log(data);

    // カード表示の処理
    displayCards(data);
  })
  .catch(error => console.error('データの読み込みに失敗しました:', error));

// カードを表示する関数
function displayCards(cards) {
  const container = document.getElementById('card-container');
  
  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    // 画像の表示
    const img = document.createElement('img');
    img.src = card.画像;  // JSONの画像データを使う
    img.alt = card.カード名;
    
    // カード名の表示
    const title = document.createElement('h3');
    title.textContent = card.カード名;

    // カードの説明を追加（ビート数やステップレベル）
    const description = document.createElement('p');
    description.textContent = `ビート数: ${card.ビート数} | レベル: ${card.ステップレベル}`;
    
    // 要素をカードに追加
    cardElement.appendChild(img);
    cardElement.appendChild(title);
    cardElement.appendChild(description);
    
    // カードをコンテナに追加
    container.appendChild(cardElement);
  });
}
