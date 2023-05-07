---
title: 'Personalizando middlewares'
slug: '/custom-middlewares'
sidebar_position: 3
---

En Express.js, un middleware es simplemente una función que tiene acceso al objeto `request (req)`, al objeto `response (res)` y al siguiente middleware en la cadena (generalmente llamado `next()`). Los middlewares se utilizan para realizar tareas como la validación de datos, la autenticación de usuarios y el manejo de errores.

Para crear un middleware personalizado en Express.js, solamente tenemos que definir una función que tome tres parámetros: `req`, `res` y `next`. La función puede realizar cualquier tarea necesaria y luego llamar a `next()` para pasar la solicitud al siguiente middleware en la cadena. Por ejemplo, el siguiente middleware simple simplemente registra la URL solicitada:

```js
function logger(req, res, next) {
  console.log(`Solicitud recibida en ${req.url}`);
  next();
}
```

Para utilizar este middleware en una aplicación de Express, simplemente usamos `app.use()` y pasamos la función `logger` como argumento. Algo así:

```js
const express = require('express');
const app = express();

function logger(req, res, next) {
  console.log(`Solicitud recibida en ${req.url}`);
  next();
}

app.use(logger);

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
```

En este ejemplo, el middleware `logger` se registra utilizando `app.use()`. Cuando se recibe una solicitud, el middleware `logger` registra la URL solicitada y luego llama a `next()` para pasar la solicitud al siguiente middleware en la cadena. En este caso, el siguiente middleware es la ruta `app.get('/', ...)`, que envía una respuesta de texto simple al cliente.

## Ejemplos de middlewares personalizados

### Middleware de Autenticación

Un middleware de autenticación se utiliza para verificar que un usuario esté autorizado para acceder a una ruta específica. Por ejemplo, el siguiente middleware de autenticación verifica si un usuario ha iniciado sesión antes de permitir el acceso a una ruta protegida:

```js
function requireLogin(req, res, next) {
  if (req.session.user) {
    next(); // El usuario ha iniciado sesión, continuar
  } else {
    res.redirect('/login'); // El usuario no ha iniciado sesión, redireccionar al inicio de sesión
  }
}
```

### Middleware para validar datos

Un middleware de validación de datos se utiliza para verificar que los datos enviados por un cliente sean válidos antes de procesarlos. Por ejemplo, el siguiente middleware de validación de datos verifica si el campo de correo electrónico es válido antes de permitir que un usuario se registre:

```js
function validateEmail(req, res, next) {
  // Recuperamos el email desde el cuerpo de la solicitud
  const email = req.body.email;

  // Expresión regular para validar el correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verificamos si el correo electrónico es válido
  if (email && emailRegex.test(email)) {
    next(); // El correo electrónico es válido, continuar
  } else {
    res.status(400).send('El correo electrónico no es válido'); // El correo electrónico no es válido, enviar un error 400 al cliente
  }
}
```

### Middleware para manejar errores

Se utiliza para manejar errores que pueden ocurrir durante el procesamiento de una solicitud. Por ejemplo, el siguiente middleware de manejo de errores maneja errores 404 y 500:

```js
function errorHandler(err, req, res, next) {
  if (err.status === 404) {
    res.status(404).send('Página no encontrada');
  } else {
    console.error(err.stack);
    res.status(500).send('Ha ocurrido un error interno del servidor');
  }
}
```

Para utilizar este middleware, simplemente lo registramos al final de la cadena de middlewares:

```js
const express = require('express');
const app = express();

function errorHandler(err, req, res, next) {
  if (err.status === 404) {
    res.status(404).send('Página no encontrada');
  } else {
    console.error(err.stack);
    res.status(500).send('Ha ocurrido un error interno del servidor');
  }
}

app.get('/', (req, res) => {
  throw new Error('Ha ocurrido un error durante el procesamiento de la solicitud');
});

// Registramos el middleware de manejo de errores al final de la cadena de middlewares
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
```

Este middleware maneja cualquier error que ocurra durante el procesamiento de una solicitud. Si el error es un error 404, se envía un error 404 al cliente. De lo contrario, se envía un error 500 al cliente.

En este ejemplo, la ruta `app.get('/', ...)` arroja un error intencionalmente. Cuando se produce un error, el middleware de manejo de errores registra el error y envía una respuesta de error apropiada al cliente.