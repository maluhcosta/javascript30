// API com arrays de cidades e estados dos EUA
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// Passando o json em dados que serão mostrados na aplicação
const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

// Procurando o valor da pesquisa denteo do array
findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    // Conferindo se o resultado está de acordo com a pesquisa
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Mostar na tela o que foi pesquisado
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="search">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="search">${this.value}</span>`);
    return `
      <li class="suggestions-table table-first">
        <span class="name">${cityName}, ${stateName}</span>
        <span class="populations">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

// Pesquisar o que foi escrito no input
const searchInput = document.querySelector('.list-search');
const suggestions = document.querySelector('.list-suggestions');

// Busca em ação
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
