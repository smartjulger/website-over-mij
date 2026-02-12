///////////////////////
// API ////////////////
///////////////////////
// met behulp van Justin gemaakt
let base = "https://fdnd.directus.app/items";
let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_game][avatar][_nempty]";
let url = base + endpoint;
let lijst = document.querySelector("section");

let alleMensen = [];
let huidigeIndex = 0;

const defaultImage = "img/defaultimg.png";

haalMinorMensenop();

async function haalMinorMensenop() {
  let response = await fetch(url);
  let responseJSON = await response.json();
  alleMensen = responseJSON.data;
  
  // gemaakt met behulp van mats //
  huidigeIndex = alleMensen.findIndex(persoon => persoon.id === 299);
  if (huidigeIndex === -1) huidigeIndex = 0;
  
  toonPersoon();
}

function toonPersoon() {
  let minorMens = alleMensen[huidigeIndex];
  
  let avatarSrc = minorMens.avatar ? minorMens.avatar : defaultImage;
  
  let minorMensHTML;
  
  if (minorMens.fav_game) {
    minorMensHTML = `
        <h2>${minorMens.name}</h2>
        <img src="${avatarSrc}" 
            onerror="this.onerror=null; this.src='${defaultImage}';" 
            alt="${minorMens.name}">
        <p>${minorMens.fav_game}</p>     
        <button onclick="randomPersoon()">meet the team</button>
    `;
  } else {
    minorMensHTML = `
        <h2>${minorMens.name}</h2>
        <img src="${avatarSrc}" 
            onerror="this.onerror=null; this.src='${defaultImage}';" 
            alt="${minorMens.name}">
        <p>geen game toegevoegd🎮</p>     
        <button onclick="randomPersoon()">meet the team</button>
    `;
  }
  
  lijst.innerHTML = minorMensHTML;
}

function randomPersoon() {
  huidigeIndex = Math.floor(Math.random() * alleMensen.length);
  toonPersoon();
}