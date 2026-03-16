import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino){
    try {
        let contenido = fs.readFileSync(origen, "utf8"); // --> copia la info del archivo original / utf8 --> versión de texto que soporta la consola
        fs.writeFileSync(destino, contenido); // --> se escribe la info en el segundo archivo
        console.log("Archivo copiado");

    } catch(error) {
        console.log("Error al copiar el archivo:", error);
    }

}