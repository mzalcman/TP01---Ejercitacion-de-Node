import {OMDBSearchByPage,OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'
let resultado = null;


// Test de la función OMDBSearchByPage, ya funciona
/*resultado = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado);*/

// Test de la función OMDBSearchComplete, ya funciona
/*resultado = await OMDBSearchComplete("cars");
console.log("OMDBSearchComplete", resultado);*/

// Test de la función OMDBSearchComplete, ya funciona
resultado = await OMDBGetByImdbID("tt1151030");
console.log("OMDBGetByImdbID", resultado);