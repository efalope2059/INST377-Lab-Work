const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // compare search to what is in array //
    const regex = new RegExp(wordToMatch, 'gi');
    return place.zip.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map((place) => `
        <li>
            <span class = "zip-addy"> ${place.zip} : ${place.name}</span>
        </li>
        `).join('');
  suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// change event only fires when you click outisde of the form box - not enter //
// add key up //
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);