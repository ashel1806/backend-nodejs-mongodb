---
title: 'Crear una API'
slug: '/node-api'
sidebar_position: 5
---

# Crear una API usando Node.js

Como vimos, Node.js nos permite ejecutar código JavaScript en el servidor. Esto nos permite crear aplicaciones web y APIs que pueden ser ejecutadas en el servidor. En esta parte veremos como podemos crear una pequeña API usando Node.js puro (sin frameworks).

## Creando el proyecto

Vamos a crear una nueva carpeta llamada `node-api` y la vamos a abrir usando VS Code. Posteriormente abrimos una terminal y ejecutamos el comando `npm init -y` para crear un archivo `package.json` que nos permitirá instalar dependencias y ejecutar scripts.

```bash
# Creamos la carpeta
mkdir node-api

# Nos movemos a la carpeta
cd node-api

# Abrimos VS Code
code .

# Creamos el archivo package.json
npm init -y
```

Luego de esto deberíamos tener una estructura parecida a esta:

```bash
node-api
└── package.json
```

Nuestro archivo `package.json` tendrá una estructura similar a esta:

```json
{
  "name": "node-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Analizemos la estructura del archivo `package.json`:

- `name`: El nombre del proyecto.
- `version`: La versión del proyecto.
- `description`: Una descripción del proyecto.
- `main`: El archivo principal del proyecto que se va a ejecutar.
- `scripts`: Los scripts que se pueden ejecutar con el comando `npm run <nombre-del-script>`.
- `keywords`: Las palabras clave del proyecto.
- `author`: El autor del proyecto.
- `license`: La licencia del proyecto.

Ahora debemos crear ua archivo `index.js` dentro de nuestra carpeta `node-api`. Este archivo será el archivo principal de nuestra aplicación y será el que se ejecutará cuando ejecutemos el comando `npm start` (este comando lo vamos a agregar luego).

```bash
node-api
├── index.js
└── package.json
```

Dentro del archivo `index.js` vamos a agregar el siguiente código:

```js
const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.end('Hello World!');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Para ejecutar este archivo, debemos ejecutar el comando `node index.js` en la terminal. Si todo salió bien, deberíamos ver el siguiente mensaje en la terminal:

```bash
Server running on port 3001
```

Y si nos dirigimos a nuestro navegador y escribimos `http://localhost:3001` deberíamos ver el mensaje `Hello World!`.

![Hello World con Node.js](/img/modulo03/hello-world.png)

Felicidades!!!, acabas de crear tu primera aplicación de servidor usando Node.js. Ahora, veamos que más tenemos que realizar para construir una pequeña API.

## Ampliando el servidor

Cerramos el servidor con `Ctrl + C` en nuestra terminal y vamos a crear los archivos `controller.js`, data.js, model.js y utils.js dentro de nuestra carpeta `node-api`.

```bash
node-api
├── controller.js
├── data.js
├── index.js
├── model.js
├── utils.js
└── package.json
```

- `controller.js`: Este archivo va a contener la lógica de nuestra aplicación.
- `data.js`: Este archivo va a contener los datos de nuestra aplicación.
- `model.js`: Este archivo va a contener la lógica de los datos de nuestra aplicación.
- `utils.js`: Este archivo va a contener funciones que se van a utilizar en nuestra aplicación.

Antes de continuar escribiendo código, vamos a cambiar el tipo de módulos que vamos a usar dentro de nuestra pequeña aplicación. Por defecto node usa el tipo de módulos `CommonJS` pero vamos a cambiarlo a `ES Modules` para poder usar `import` y `export` en nuestros archivos.

A nuestro archivo `package.json` le vamos a agregar la siguiente propiedad:

```json title="package.json"
{
  // ....
  "type": "module"
  // ....
}
```

Listo, ahora sí podemos usar `import` y `export` en nuestros archivos.

Vayamos a modficar el archivo `index.js` en la siguiente línea:

```js title="index.js"
const http = require('http');
```

Por esta otra:

```js title="index.js"
import http from 'http';
```

## Archivo data.js

Ahora agregemos lo siguiente a nuestro archivo `data.js`:

```js title="data.js"
const books = [
  {
    id: 1,
    title: "El señor de los anillos",
    author: "J.R.R. Tolkien",
    year: 1954,
    pages: 1216,
    available: false,
  },
  {
    id: 2,
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
    year: 1997,
    pages: 223,
    available: true,
  },
  {
    id: 3,
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    pages: 96,
    available: false,
  },
  {
    id: 4,
    title: "El hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    pages: 310,
    available: true,
  },
];

export default books;
```

Estos serán los datos en los cuales haremos las operaciones de Creación, Lectura, Actualización y Eliminación (CRUD).

## Archivo utils.js

Ahora agreguemos el siguiente código a `utils.js`:

```js title=utils.js
export const getMaxId = (data) => {
  const ids = data.map((item) => item.id);
  const maxId = Math.max(...ids);

  return maxId;
};

export const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
};
```

La función `getMaxId` nos ayudará a obtener el ID del último elemento que hemos agregado a una lista de elementos, y la función `getRequestBody` nos ayudará a obtener los datos que enviamos a través de una petición (request).

## Archivo model.js

Dentro del archivo `model.js` colocaremos las funciones que nos permitirán realizar las operaciones que mencionamos anteriormente (CRUD).

```js title=model.js
import data from "./data.js";
import { getMaxId } from "./utils.js";

// Función para obtener todos los libros
const findAll = () => {
  return new Promise((resolve, reject) => {
    // Si no hay libros en la base de datos se rechaza la promesa
    if (data.length === 0) {
      reject({
        error: true,
        message: "No hay libros en la base de datos",
      });
    }

    // Si hay libros se resuelve la promesa
    resolve({
      error: false,
      data,
    });
  });
};

// Función para obtener un libro por su ID
const findBookById = (id) => {
  return new Promise((resolve, reject) => {
    // Buscamos el libro en la base de datos
    const book = data.find((book) => book.id === id);

    // Si no se encuentra el libro se rechaza la promesa
    if (!book) {
      reject({
        error: true,
        message: `No se ha encontrado el libro con id ${id}`,
      });
    }

    // Si se encuentra el libro se resuelve la promesa
    resolve({
      error: false,
      data: book,
    });
  });
};

// Función para crear un nuevo libro
const createBook = (book) => {
  return new Promise((resolve, reject) => {
    // Validamos que el libro tenga todos los campos obligatorios
    // Si no tiene todos los campos obligatorios se rechaza la promesa
    if (!book.title || !book.author || !book.year || !book.pages) {
      reject({
        error: true,
        message: "El libro no tiene todos los campos",
      });
    }

    // Se crea el nuevo libro con los datos enviados y le asignamos un id
    // usando la función getMaxId y se le asigna el estado de disponible
    const newBook = {
      ...book,
      id: getMaxId(data) + 1,
      available: true,
    };

    // Se agrega el nuevo libro a la base de datos
    data.push(newBook);

    // Se resuelve la promesa
    resolve({
      error: false,
      data: newBook,
    });
  });
};

// Función para actualizar/modificar un libro
const updateBook = (id) => {
  return new Promise((resolve, reject) => {
    // Se busca el libro a actualizar, en la base de datos
    const bookToUpdate = data.find((book) => book.id === id);

    // Si no se encuentra el libro se rechaza la promesa
    if (!bookToUpdate) {
      reject({
        error: true,
        message: `No se ha encontrado el libro con id ${id}`,
      });
    }

    // Se cambia el estado de disponibilidad del libro
    bookToUpdate.available = !bookToUpdate.available;

    // Se resuelve la promesa
    resolve({
      error: false,
      data: bookToUpdate,
    });
  });
};

// Función para eliminar un libro
const deleteBook = (id) => {
  return new Promise((resolve, reject) => {
    // Se busca el libro a eliminar, en la base de datos
    const bookToDelete = data.find((book) => book.id === id);

    // Si no se encuentra el libro se rechaza la promesa
    if (!bookToDelete) {
      reject({
        error: true,
        message: `No se ha encontrado el libro con id ${id}`,
      });
    }

    // Buscamos el índice del libro a eliminar
    const index = data.indexOf(bookToDelete);

    // Eliminamos el libro de la base de datos
    data.splice(index, 1);

    // Se resuelve la promesa
    resolve({
      error: false,
      data: bookToDelete,
    });
  });
};

export default {
  findAll,
  findBookById,
  createBook,
  updateBook,
  deleteBook,
};
```

## Archivo controller.js

Ahora para poder usar estas funciones debemos colocar el siguiente código dentro del archivo `controller.js`, que se encargará de manejar las distintas peticiones hacia el servidor.

```js title=controller.js
import Book from "./model.js";
import { getRequestBody } from "./utils.js";

const getAllBooks = async (req, res) => {
  try {
    // Obtenemos los libros de la base de datos
    const books = await Book.findAll();

    // Enviamos la respuesta
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(books));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify(error));
  }
};

const getBookById = async (req, res, id) => {
  try {
    // Obtenemos el libro de la base de datos
    const book = await Book.findBookById(id);

    // Enviamos la respuesta
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(book));
  } catch (error) {
    console.error(error);
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify(error));
  }
};

const createBook = async (req, res, book) => {
  try {
    // Obtenemos el cuerpo de la petición
    const body = await getRequestBody(req);

    // Obtenemos los datos del libro
    const { title, author, year, pages } = JSON.parse(body);

    // Creamos el libro y lo devolvemos
    const newBook = await Book.createBook({ title, author, year, pages });

    // Enviamos la respuesta
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newBook));
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify(error));
  }
};

const updateBook = async (req, res, id) => {
  try {
    // Actualizamos el libro y lo devolvemos
    const bookUpdated = await Book.updateBook(id);

    // Enviamos la respuesta
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(bookUpdated));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify(error));
  }
};

const deleteBook = async (req, res, id) => {
  try {
    // Eliminamos el libro y lo devolvemos
    const bookDeleted = await Book.deleteBook(id);

    // Enviamos la respuesta
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(bookDeleted));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify(error));
  }
};

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
```

## Agregando los endpoints

Ya para terminar, modificamos el archivo `index.js` con las rutas que tendrá nuestra API:

```js title=index.js
import http from "http";
import Controller from "./controller.js";

// Creamos el servidor
const app = http.createServer((req, res) => {
  if (req.url === "/api/books" && req.method === "GET") {
    Controller.getAllBooks(req, res);
  } else if (req.url.match(/\/api\/books\/([0-9]+)/) && req.method === "GET") {
    // Obtenemos el id del libro de la URL
    const id = req.url.split("/")[3];
    Controller.getBookById(req, res, parseInt(id));
  } else if (req.url === "/api/books" && req.method === "POST") {
    Controller.createBook(req, res);
  } else if (req.url.match(/\/api\/books\/([0-9]+)/) && req.method === "PUT") {
    // Obtenemos el id del libro de la URL
    const id = req.url.split("/")[3];
    Controller.updateBook(req, res, parseInt(id));
  } else if (
    req.url.match(/\/api\/books\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    // Obtenemos el id del libro de la URL
    const id = req.url.split("/")[3];
    Controller.deleteBook(req, res, parseInt(id));
  } else {
    // Si no se encuentra la ruta, enviamos un error
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// Guardamos el puerto en donde se ejecutará el servidor
const PORT = 3001;

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## Ejecutando la API

Ahora sí, una vez terminado todo esto, agregaremos el comando `npm start` a nuestro `package.json`:

```json
{
  "name": "node-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Ahora si regresamos a la terminal y ejecutamos el comando `npm start` veremos el siguiente mensaje:

```bash
Server running on http://localhost:3001
```

## Probando la API

Para poder probar nuestra pequeña aplicación podemos usar una herramienta muy popular llamada [Postman](https://www.postman.com/), nos registramos y descargamos la app.

:::note Pruebas en local

Si queremos probar alguna API que hayamos desarrollado en nuestra máquina local si o si tenemos que descargar la aplicación de escritorio, de lo contrario solo basta con la versión de navegador.

:::

### GET

```rest
GET http://localhost:3001/api/books
```

![Obtener todos los libros](/img/modulo03/get_all_books.png)

### GET by id

```rest
GET http://localhost:3001/api/books/2
```

![Obtener un libro](/img/modulo03/get_one_book.png)

### POST

```rest
POST http://localhost:3001/api/books
```

![Crear un nuevo libro](/img/modulo03/post_new_book.png)

### PUT

```rest
PUT http://localhost:3001/api/books/5
```

![Actualizar un libro](/img/modulo03/update_book.png)


### DELETE

```rest
DELETE http://localhost:3001/api/books/5
```

![Eliminar un libro](/img/modulo03/delete_book.png)

Verificamos si se ha eliminado correctamente el libro:

![Verificar libro eliminado](/img/modulo03/get_deleted_book.png)
