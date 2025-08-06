
async function drawThreeCards() {
  const container = document.getElementById("card-container");
  const meaningsContainer = document.getElementById("meanings-container");
  container.innerHTML = "";
  meaningsContainer.innerHTML = "";

  const res = await fetch("cards.json");
  const cards = await res.json();
  const shuffled = cards.sort(() => 0.5 - Math.random()).slice(0, 3);

  for (const card of shuffled) {
    const img = document.createElement("img");
    img.src = `images/${card.image}`;
    img.alt = card.title;
    img.style.width = "30%";
    img.style.borderRadius = "12px";
    img.style.boxShadow = "0 4px 8px rgba(0,0,0,0.5)";
    container.appendChild(img);

    const meaning = document.createElement("div");
    meaning.style.marginTop = "20px";
    meaning.style.padding = "10px";
    meaning.style.borderBottom = "1px solid #444";
    meaning.innerHTML = `<h3>${card.title}</h3><p>${card.meaning.join("<br>")}</p>`;
    meaningsContainer.appendChild(meaning);
  }
}
