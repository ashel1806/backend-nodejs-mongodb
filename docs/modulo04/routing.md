---
title: 'Enrutamiento'
slug: '/routing'
sidebar_position: 2
---

# Manejo de rutas en Express.js

El enrutamiento en Express.js se refiere a la definición de rutas que corresponden a diferentes solicitudes HTTP (GET, POST, PUT, DELETE, etc.).

## Definición de Rutas

En Express.js, las rutas se definen utilizando métodos del objeto `app` que corresponden a las diferentes solicitudes HTTP. Cada uno de estos métodos reciben una función callback como argumento  que se encargará de manejar la solicitud y la respuesta de una petición (generalmente se les conoce como **controlladores** o **manejadores**), veamos un ejemplo:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});
```

En este ejemplo, definimos una ruta que responde a una solicitud HTTP GET a la raíz `(/)` de nuestra aplicación. Cuando un usuario visita la página principal de nuestra aplicación, el callback se ejecuta y envía una respuesta al cliente con el mensaje "Hola, mundo!".

```js
app.get('/', (req, res) => {
  res.send('Este es un ejemplo de una solicitud GET');
});

app.post('/', (req, res) => {
  res.send('Este es un ejemplo de una solicitud POST');
});

app.put('/', (req, res) => {
  res.send('Este es un ejemplo de una solicitud PUT');
});

app.delete('/', (req, res) => {
  res.send('Este es un ejemplo de una solicitud DELETE');
});
```

En este ejemplo, definimos rutas para cada uno de los métodos HTTP. Cuando un usuario visita la página principal de nuestra aplicación y envía una solicitud GET, la función de devolución de llamada asociada a la ruta GET se ejecuta y envía una respuesta al cliente con el mensaje "Este es un ejemplo de una solicitud GET". Lo mismo ocurre con las solicitudes POST, PUT y DELETE.


## Parámetros de ruta y consultas (queries)

En Express.js, podemos definir parámetros de ruta para capturar valores específicos en una solicitud. Por ejemplo, podemos definir una ruta que capture el ID de un usuario en una solicitud GET de la siguiente manera:

```js
app.get('/users/:id', (req, res) => {
  res.send(`El ID del usuario es ${req.params.id}`);
});
```

En este ejemplo, definimos una ruta para una solicitud GET a `/users/:id`. Cuando un usuario visita esta ruta, el valor del parámetro `id` se captura y se utiliza en el callback para enviar una respuesta al cliente.

También podemos manejar las consultas (queries) en una solicitud utilizando el objeto `req.query`. Por ejemplo, si un usuario envía una solicitud GET a `/search?q=Express`, podemos capturar el valor **Express** utilizando `req.query.q` de la siguiente manera:

```js
app.get('/search', (req, res) => {
  res.send(`La consulta de búsqueda es ${req.query.q}`);
});
```
