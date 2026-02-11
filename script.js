

///////////////////////
// API ////////////////
///////////////////////
// met behulp van Justin gemaakt
let base = "https://fdnd.directus.app/items";
let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_game][_nempty]";
let url = base + endpoint;
let lijst = document.querySelector("section");

let alleMensen = [];
let huidigeIndex = 0;

haalMinorMensenop();

async function haalMinorMensenop() {
  let response = await fetch(url);
  let responseJSON = await response.json();
  alleMensen = responseJSON.data;
  
//  gemaakt met behulp van mats //
  huidigeIndex = alleMensen.findIndex(persoon => persoon.id === 299);
  if (huidigeIndex === -1) huidigeIndex = 0;
  
  toonPersoon();
}

function toonPersoon() {
  let minorMens = alleMensen[huidigeIndex];
  let minorMensHTML = `
    <section>
      <h2>${minorMens.name}</h2>
      <p>${minorMens.fav_game}</p>
      <button onclick="randomPersoon()">meet the team</button>
    </section>
  `;
  lijst.innerHTML = minorMensHTML;
}

function randomPersoon() {
  huidigeIndex = Math.floor(Math.random() * alleMensen.length);
  toonPersoon();
}
