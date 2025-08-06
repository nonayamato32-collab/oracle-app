const cardArea = document.getElementById("card-area");
const drawButton = document.getElementById("draw-button");
const retryButton = document.getElementById("retry-button");

function drawThreeCards() {
  const selected = [];
  const used = new Set();
  while (selected.length < 3) {
    const rand = Math.floor(Math.random() * cards.length);
    if (!used.has(rand)) {
      used.add(rand);
      selected.push(cards[rand]);
    }
  }
  return selected;
}

function resetCards() {
  for (let i = 1; i <= 3; i++) {
    const slot = document.getElementById("slot" + i);
    slot.className = "card-slot";
    slot.innerHTML = "";
    document.getElementById("meaning" + i).innerText = "";
  }
}

drawButton.addEventListener("click", () => {
  drawButton.style.display = "none";
  retryButton.style.display = "inline-block";
  const drawn = drawThreeCards();

  drawn.forEach((card, index) => {
    setTimeout(() => {
      const slot = document.getElementById("slot" + (index + 1));
      const img = document.createElement("img");
      img.src = `images/${card.番号}.jpg`;
      img.alt = card.名前;
      slot.appendChild(img);
      document.getElementById("meaning" + (index + 1)).innerText =
        `${card.番号}. ${card.名前}\n` + card.意味.join("、");
    }, index * 700);
  });
});

retryButton.addEventListener("click", () => {
  resetCards();
  drawButton.style.display = "inline-block";
  retryButton.style.display = "none";
});

let cards = [];

fetch("cards.json")
  .then((res) => res.json())
  .then((data) => (cards = data));
