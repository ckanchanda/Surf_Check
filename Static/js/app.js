
let map, currentSearch = '';
let tbody = document.getElementById('tbody-list');
const searchInput = document.getElementById('beach-search-input');
const dropDownInput = document.getElementById('beach');

// reset table content
function resetTable() {
  tbody.innerHTML = '';
}

// api call
function apiCallByName(searchText) {
  fetch(`https://surf-check.herokuapp.com/api/beaches/search?query=${searchText}`)
  .then(function(response1) { 
    return response1.json();
  })
  .then(function(response2) {
    if (!response2.data || response2.data.length === 0) {
      return alert(`no result found: ${searchText}`);
    }
    currentSearch = searchText;
    createTableRows(response2.data);
  })
  .catch(function(err){
    console.log(err.name, err.message)
    alert(`Error: ${err.message}`);
  })
}

// search beaches
function searchBeach(event) {
  event.preventDefault();
  //let searchText = searchInput.value;
  let searchText = dropDownInput.value;
  if (currentSearch === searchText) return console.log('dup');
  //console.log(searchText);
  if (!searchText || searchText.trim() === '') {
    return alert('Missing Input!');
  }
  apiCallByName(searchText);
}

// create table rows
function createTableRows(data) {
  resetTable();
  data.forEach(function(item) {
    const record = 
    `<tr>
      <td><img src=${item.weather_icon} alt='weather_icon'/></td>
      <td>${item.beach_name}</td>
      <td>${item.latitude}</td>
      <td>${item.longitude}</td>
      <td>${item.date}</td>
      <td>${item.time}</td>
      <td>${item.sunrise}</td>
      <td>${item.sunset}</td>
      <td>${item.weather_description}</td>
      <td>${item.temperature}</td>
      <td>${item.water_temperature}</td>
      <td>${item.cloud_cover}</td>
      <td>${item.wind_speed}</td>
      <td>${item.wave_height}</td>
      <td>${item.wave_size}</td>
    </tr>`
    tbody.insertAdjacentHTML('beforeend', record)
  });
}

function initMap() {
  // center to CA
  map = L.map('map', {
    center: [36.7783, -119.4179],
    zoom: 6,
  });
  // Creating a Layer object
  let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
  // Adding layer to the map
  map.addLayer(layer);
  // create markers
  createMarkers(beaches);
  // create drop down values
  createDropDown(beaches);
}

function handlePopupClick(e) {
  let name = e.target.dataset.value;
  if (currentSearch === name) return console.log('dup');
  apiCallByName(name);
}


function createDropDown(data) {
  let beachSelectElem = document.getElementById('beach');
  data.forEach(function(beach){
    let record = `<option value="${beach.beach_name}">${beach.beach_name}</option>`;
    beachSelectElem.insertAdjacentHTML('beforeend', record);
  });
}


function createMarkers(data) {

  function popUpContent(beach_name) {
    return `
      <div>
        <p>${beach_name}</p>
        <br/>
        <button class="btn btn-info" data-value="${beach_name}" onclick="handlePopupClick(event);">
          Get Data
        </button>
      </div>
    `;
  }

  data.forEach(function(beach){
    L.marker([beach.latitude, beach.longitude])
    .addTo(map)
    .bindPopup(popUpContent(beach.beach_name))
  });
}

initMap();

document.getElementById('beach-search-btn').addEventListener('click', searchBeach);

