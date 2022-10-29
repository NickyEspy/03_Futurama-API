/* Search Logic
  - Create var 'cards' which is an array of all cards on page
  - Create Search Input
  - If card.name.value === searchInput.value
    then display card
 */

// Search Functions

const searchInput = document.getElementById("card-search");
const cards = document.getElementsByClassName("card");

function getCharacterName(characterName) {
  return `${characterName.first} ${characterName.middle} ${characterName.last}`;
}

searchInput.addEventListener("change", (event) => {
  console.log(cards);

  cards.forEach((card) => {
    const fullName = getCharacterName(card.name);
    if (!fullName.includes(searchInput.value)) {
      card.className = "hidden";
    }
  });
});

// Fetch Functions

function makeCard(character) {
  const cardContainer = document.getElementById("cards");
  const newCard = document.createElement("div");
  newCard.className = "card";

  const characterName = document.createElement("h3");
  characterName.innerText = getCharacterName(character.name);
  newCard.append(characterName);

  const characterPlanet = document.createElement("h4");
  characterPlanet.innerText = `Home Planet: ${character.homePlanet}`;
  newCard.append(characterPlanet);

  const characterImage = document.createElement("img");
  characterImage.src = character.images.main;
  newCard.append(characterImage);

  cardContainer.append(newCard);
}

async function fetchData(url) {
  const response = await fetch(url);
  const arrayEverything = await response.json();
  arrayEverything.forEach((item) => {
    makeCard(item);
  });
}

fetchData("https://api.sampleapis.com/futurama/characters");
