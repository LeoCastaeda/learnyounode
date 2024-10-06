import * as http from 'http';

// Obtén la URL del argumento de la línea de comandos
const web: string = process.argv[2];
let cadena: string = '';

// Realiza la solicitud GET
http.get(web, (response) => {
    response.setEncoding('utf8'); // Establece la codificación de la respuesta a UTF-8

    // Maneja los datos recibidos
    response.on('data', (chunk: string) => {
        cadena += chunk;
    });

    // Cuando se recibe toda la respuesta
    response.on('end', () => {
        console.log('Longitud del cuerpo de la respuesta:', cadena.length);
        console.log('Cuerpo de la respuesta:');
        console.log(cadena);
    });

}).on('error', (err) => {
    // Manejo de errores
    console.error(`Error en la solicitud: ${err.message}`);
});
