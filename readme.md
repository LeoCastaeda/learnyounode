 # Learn You the Node.js for Much Win!

Este proyecto es una colección de ejercicios prácticos para aprender Node.js, basado en el curso interactivo "Learn You the Node.js for Much Win!" de [Nodeschool](https://nodeschool.io/). Cada ejercicio cubre aspectos fundamentales de Node.js, desde la manipulación de archivos hasta la creación de servidores HTTP.

## Descripción del Proyecto

El proyecto contiene 13 ejercicios que abarcan una variedad de conceptos de Node.js. Aquí tienes un resumen de cada uno:

1. **Hello World**
   - **Archivo**: `dist/hello-world.js`
   - **Descripción**: Un servidor HTTP básico que responde con "Hello World" a todas las solicitudes.
   - **Ejecución**: 
     ```bash
     node dist/hello-world.js
     ```

2. **Baby Steps**
   - **Archivo**: `dist/baby-steps.js`
   - **Descripción**: Un script que suma todos los números pasados como argumentos de la línea de comandos.
   - **Ejecución**: 
     ```bash
     node dist/baby-steps.js 1 2 3
     ```

3. **My First I/O!**
   - **Archivo**: `dist/my-first-io.js`
   - **Descripción**: Lee un archivo y cuenta el número de líneas.
   - **Ejecución**: 
     ```bash
     node dist/my-first-io.js texto.txt
     ```

4. **My First Async I/O!**
   - **Archivo**: `dist/my-first-async-io.js`
   - **Descripción**: Lee un archivo de manera asíncrona y cuenta el número de líneas.
   - **Ejecución**: 
     ```bash
     node dist/my-first-async-io.js texto.txt
     ```

5. **Filtered LS**
   - **Archivo**: `dist/filtered-ls.js`
   - **Descripción**: Lee el contenido de un directorio y filtra los archivos por extensión.
   - **Ejecución**: 
     ```bash
     node dist/filtered-ls.js src ts
     ```

6. **Make It Modular**
   - **Archivo**: `dist/make-it-modular.js`
   - **Descripción**: Crea un módulo que filtra archivos en un directorio por extensión y lo utiliza en un script.
   - **Ejecución**: 
     ```bash
     node dist/make-it-modular.js myDir txt
     ```

7. **HTTP Client**
   - **Archivo**: `dist/http-client.js`
   - **Descripción**: Envía una solicitud HTTP GET a una URL y muestra el contenido de la respuesta.
   - **Ejecución**: 
     ```bash
     node dist/http-client.js http://example.com
     ```

8. **HTTP Collect**
   - **Archivo**: `dist/http-collect.js`
   - **Descripción**: Recoge y muestra el contenido completo de una respuesta HTTP.
   - **Ejecución**: 
     ```bash
     node dist/http-collect.js http://example.com
     ```

9. **Juggling Async**
   - **Archivo**: `dist/juggling-async.js`
   - **Descripción**: Realiza varias operaciones asíncronas en paralelo y maneja sus resultados cuando todas están completas.
   - **Ejecución**: 
     ```bash
     node dist/juggling-async.js http://example.com
     ```

10. **Time Server**
    - **Archivo**: `dist/time-server.js`
    - **Descripción**: Un servidor HTTP que responde con la hora actual en formato JSON.
    - **Ejecución**: 
      ```bash
      node dist/time-server.js 8000
      ```
      Puedes acceder a la hora actual en formato JSON en la dirección [http://localhost:8000](http://localhost:8000).

11. **HTTP File Server**
    - **Archivo**: `dist/http-file-server.js`
    - **Descripción**: Un servidor HTTP que sirve archivos de un directorio especificado.
    - **Ejecución**: 
      ```bash
      node dist/http-file-server.js 8000 texto.txt
      ```
      Puedes ver el contenido del archivo de texto en la dirección [http://localhost:8000/](http://localhost:8000/).
12. **HTTP Uppercaserer**
    - **Archivo**: `dist/http-uppercaserer.js`
    - **Descripción**: Un servidor HTTP que convierte el cuerpo de las solicitudes POST a mayúsculas.
    - **Ejecución**: 
      ```bash
      node dist/http-uppercaserer.js 8000
      ```
      Puedes enviar solicitudes POST a [http://localhost:8000](http://localhost:8000) y ver el contenido convertido a mayúsculas.

13. **HTTP JSON API Server**
    - **Archivo**: `dist/http-json-api-server.js`
    - **Descripción**: Proporciona una API que devuelve información de tiempo en formato JSON.
    - **Ejecución**: 
      ```bash
      node dist/http-json-api-server.js 8000
      ```
      Puedes acceder a la API en [http://localhost:8000/api/parsetime?iso=2024-10-06T12:00:00Z](http://localhost:8000/api/parsetime?iso=2024-10-06T12:00:00Z).    

## Instalación

Para trabajar con los ejercicios, sigue estos pasos:

1. **Clona el Repositorio**
   ```bash
   git clone https://github.com/LeoCastaeda/learnyoumode.git

2. **Instala Dependencias**
   ```bash
   npm install
   
3. **Compila TypeScript a JavaScript**
   Asegúrate de compilar tus archivos TypeScript a JavaScript usando el siguiente comando:
   ```tsc
4. **Ejecuta los Ejercicios**
   Ejecuta los scripts en el directorio dist como se indicó en la sección de descripción del proyecto.





