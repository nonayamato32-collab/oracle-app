let cards = [];
fetch("cards.json")
  .then(response => response.json())
  .then(data => {
    cards = data;
  });
const cardImage = document.getElementById("card-image");
const cardText = document.getElementById("card-text");
const drawButton = document.getElementById("draw-button");
const retryButton = document.getElementById("retry-button");
drawButton.addEventListener("click", () => {
  const card = cards[Math.floor(Math.random() * cards.length)];
  cardImage.src = `images/${String(card.番号).padStart(2, '0')}.jpg`;
  cardImage.alt = card.名前;
  const text = `【${card.名前}】\n` + card.意味;
  cardText.textContent = text;
  drawButton.style.display = "none";
  retryButton.style.display = "inline-block";
});
retryButton.addEventListener("click", () => {
  cardImage.src = "images/back.jpg";
  cardText.textContent = "";
  drawButton.style.display = "inline-block";
  retryButton.style.display = "none";
});
