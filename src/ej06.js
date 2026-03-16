import { URL } from 'url';
let miUrl = null;
let miObjeto = null;

miUrl = "HOLAAAA, PRUEBA ERRORRRRR"
//miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL) {
    try {
        const url = new URL(laURL);
        return {
            host: url.origin,
            pathname: url.pathname,
            parametros: url.searchParams
        };

    } catch (error) {
        console.log("Error al parsear la URL:", error.message);
        return {
            host: null,
            pathname: null,
            parametros: null
        };

    }
}
