---
title: 'Middlewares a nivel de aplicación'
slug: '/app-level-middlewares'
sidebar_position: 4
---

En Express, los middlewares también se pueden aplicar a nivel de aplicación. Esto significa que el middleware se ejecutará para todas las solicitudes que lleguen a la aplicación, independientemente de la ruta especificada.

Para aplicar un middleware a nivel de aplicación, también se utiliza la función `app.use()`. Esta función acepta un middleware como argumento y lo registra para que se ejecute en cada solicitud entrante.

Un ejemplo de middleware a nivel de apliación es el middleware `express.json()`:

```js
const express = require('express');
const app = express();

// Middleware a nivel de aplicación
app.use(express.json());

app.get('/usuarios', (req, res) => {
  // ...
});

app.post('/usuarios', (req, res) => {
  // ...
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
```

En este ejemplo, el middleware `express.json()` se ha aplicado a nivel de aplicación utilizando `app.use()`. Esto significa que se ejecutará para todas las solicitudes entrantes, independientemente de la ruta especificada.

Además del middleware `express.json()`, también se pueden aplicar otros middlewares a nivel de aplicación en Express. Dos ejemplos comunes son los middlewares de logger y los middlewares de gestión de cookies y sesiones.

El middleware de logger registra información sobre cada solicitud entrante, como la URL solicitada, el método HTTP utilizado y el tiempo que tardó en procesarse la solicitud. Para utilizar el middleware de logger en Express, se puede utilizar el paquete morgan. Por ejemplo:

```js
const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware de logger a nivel de aplicación
app.use(morgan('dev'));

app.get('/usuarios', (req, res) => {
  // ...
});

app.post('/usuarios', (req, res) => {
  // ...
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
```

En este ejemplo, el middleware de logger `morgan('dev')` se ha aplicado a nivel de aplicación utilizando `app.use()`. Esto significa que se registrará información sobre cada solicitud entrante.

El middleware de gestión de cookies y sesiones se utiliza para gestionar las cookies y las sesiones de los usuarios. En Express, el middleware de gestión de cookies se proporciona a través del paquete `cookie-parser`, mientras que el middleware de gestión de sesiones se proporciona a través del paquete `express-session`. Por ejemplo:

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// Middleware de gestión de cookies a nivel de aplicación
app.use(cookieParser());

// Middleware de gestión de sesiones a nivel de aplicación
app.use(session({
  secret: 'mi-secreto',
  resave: false,
  saveUninitialized: true,
}));

app.get('/usuarios', (req, res) => {
  // ...
});

app.post('/usuarios', (req, res) => {
  // ...
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
```

En este ejemplo, el middleware de gestión de cookies `cookie-parser` y el middleware de gestión de sesiones `express-session` se han aplicado a nivel de aplicación utilizando `app.use()`.

Así como se pueden implementar middlewares de terceros a nivel de aplicación, nosotros mismos también podemos crear nuestros propios middlewares para que se ejecuten a nivel de aplicación, como el middleware de autenticación o de validación de datos.