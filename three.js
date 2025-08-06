
document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.createElement("div");
    cardContainer.style.display = "flex";
    cardContainer.style.justifyContent = "center";
    cardContainer.style.flexWrap = "wrap";
    cardContainer.style.gap = "20px";
    cardContainer.style.marginTop = "30px";

    const cards = [];
    const texts = [];

    fetch("cards.json")
        .then((response) => response.json())
        .then((data) => {
            const drawnIndices = [];
            while (drawnIndices.length < 3) {
                const r = Math.floor(Math.random() * data.length);
                if (!drawnIndices.includes(r)) {
                    drawnIndices.push(r);
                }
            }

            drawnIndices.forEach((i) => {
                const card = data[i];
                const cardWrapper = document.createElement("div");
                cardWrapper.style.display = "flex";
                cardWrapper.style.flexDirection = "column";
                cardWrapper.style.alignItems = "center";
                cardWrapper.style.maxWidth = "200px";
                cardWrapper.style.color = "white";

                const img = document.createElement("img");
                img.src = "images/" + card.image;
                img.alt = card.title;
                img.style.width = "100%";
                img.style.borderRadius = "15px";
                img.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.6)";

                const label = document.createElement("h3");
                label.innerText = `【${card.title}】`;
                label.style.marginTop = "12px";
                label.style.textAlign = "center";
                label.style.fontSize = "1.1em";

                const meaning = document.createElement("p");
                meaning.innerText = card.meanings.join(", ");
                meaning.style.textAlign = "center";
                meaning.style.fontSize = "0.95em";
                meaning.style.lineHeight = "1.5";
                meaning.style.margin = "0";

                cardWrapper.appendChild(img);
                cardWrapper.appendChild(label);
                cardWrapper.appendChild(meaning);
                cardContainer.appendChild(cardWrapper);
            });

            document.body.appendChild(cardContainer);
        });
});
