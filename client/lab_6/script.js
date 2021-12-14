async function windowActions() {
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

  const request = await fetch(endpoint);

  const arrayName = await request.json();

  function findMatches(wordToMatch, arrayName) {
    return arrayName.filter((place) => {
    // compare search to what is in array //
      const regex = new RegExp(wordToMatch, 'gi');
      return place.zip.match(regex);
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, arrayName);
    const html = matchArray.map((place) => `
        <li class = "results">
            <span class = "zip-addy"> ${place.name}</span>
            <span class = "zip-addy"> ${place.category}</span>
            <span class = "zip-addy"> ${place.address_line_1}</span>
            <span class = "zip-addy"> ${place.zip}</span>
        </li>
        `).join('');
    suggestions.innerHTML = html;
  }
  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  // change event only fires when you click outisde of the form box - not enter //
  // add key up //
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}

window.onload = windowActions;