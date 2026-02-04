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
    header.innerHTML = `<h1>${personInfo.data.name}</h1>
    <h2>${personInfo.data.nickname}</h2>`;


}

