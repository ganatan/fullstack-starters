const { getItems } = require('./lib/movies.js');
const { getMedias } = require('./lib/movies.js');

function getItemsApp() {
  console.log('00000000001:getItemsApp');
}
console.log('00000000001:app');

getItemsApp();
getItems();
getMedias();