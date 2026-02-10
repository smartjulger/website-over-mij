getname()

async function getname() {
    const baseUrl = 'https://fdnd.directus.app';
    const endpoint = '/items/person/299';

    const URL = baseUrl + endpoint

    let response = await fetch(URL)
    console.log(response);

    let personInfo  = await response.json();
    console.log(personInfo);

    const header = document.querySelector('header');
  header.insertAdjacentHTML("beforeend",`<h1>${personInfo.data.name}</h1>`);
}





document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('animationToggle');
    const players = document.querySelectorAll('.veld-player, .veld-red, .ball');
    let isPaused = false;

    toggleButton.addEventListener('click', function() {
        isPaused = !isPaused;
        
        players.forEach(player => {
            if (isPaused) {
                player.style.animationPlayState = 'paused';
            } else {
                player.style.animationPlayState = 'running';
            }
        });
        
        toggleButton.textContent = isPaused ? 'Start' : 'Pauzeer';
    });
});