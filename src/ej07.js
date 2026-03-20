import currencyMap from 'currency-map-country';
let monedaDelPais, codigoPais;

codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
const valores = Object.values(monedaDelPais);
console.log(`La moneda del país ${codigoPais} es: ${valores[1]}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
if (monedaDelPais != null)
{
    const valores2 = Object.values(monedaDelPais);
    console.log(`La moneda del país ${codigoPais} es: ${valores2[1]}`);
}
else
{
    console.log(`La moneda del país ${codigoPais} es: null`);
}


function obtenerMoneda(codigoPais){
    try {
        //console.log('codigoPais', codigoPais)
        let moneda = currencyMap.getCountry(codigoPais);
        if(!moneda){
            return null;
        }
        //console.log('moneda', moneda)
        return moneda;
        
    } catch(error){
        return null;
    }

}
