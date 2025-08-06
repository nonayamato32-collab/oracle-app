const cardContainer = document.getElementById("cardContainer");

// カード番号配列（1〜32）
const cardNumbers = Array.from({ length: 32 }, (_, i) => i + 1);

// シャッフルして3枚取得
const selected = cardNumbers.sort(() => Math.random() - 0.5).slice(0, 3);

selected.forEach((num) => {
  const card = document.createElement("div");
  card.className = "card";

  const inner = document.createElement("div");
  inner.className = "card-inner";

  const front = document.createElement("div");
  front.className = "card-front";
  const frontImg = document.createElement("img");
  frontImg.src = "images/back.jpg";
  front.appendChild(frontImg);

  const back = document.createElement("div");
  back.className = "card-back";
  const backImg = document.createElement("img");
  backImg.src = `images/${num}.jpg`;
  back.appendChild(backImg);

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  card.addEventListener("click", () => {
    inner.style.transform = "rotateY(180deg)";
  });

  cardContainer.appendChild(card);
});
