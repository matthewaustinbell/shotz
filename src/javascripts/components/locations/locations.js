import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const shootTimeClass = (shootTime) => {
  let selectedClass = ''; 
  switch(shootTime){
    case 'Morning':
      selectedClass = 'bg-secondary'; 
      break;
      case 'Afernoon':
      selectedClass = 'bg-success'; 
      break;
      case 'Evening':
      selectedClass = 'bg-info'; 
      break;
      case 'After Dark':
      selectedClass = 'bg-danger'; 
      break;
  }
  return selectedClass; 
}

const domstringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += '<div class="card" style="width: 18rem;">';
    domString += `<h5 class="card-header${shootTimeClass(location.shootTime)}">${location.name}</h5>
    domString += '<div class = 'card-body">; 
    domString += `<img src="${location.imageUrl}" alt="Card image cap">`;
    domString += `<h3>${location.address}</h3>`;
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};


const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      console.error('locationsData', resp);
      const locationResults = resp.data.locations;
      locations = locationResults;
      domstringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
