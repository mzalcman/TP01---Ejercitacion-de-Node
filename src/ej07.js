import currencyMap from 'currency-map-country';
let monedaDelPais, codigoPais;

codigoPais = 'USD';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais){
    try {
        console.log('codigoPais', codigoPais)
        let moneda = currencyMap.getCurrency(codigoPais);
        if(!moneda){
            return "Llegó vacío";
        }
        console.log('moneda', moneda)
        return moneda;
        
    } catch(error){
        return "Error total";
    }

}
