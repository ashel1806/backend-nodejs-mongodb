---
title: 'Middlewares'
slug: '/middlewares'
sidebar_position: 3
---

# Middlewares en Express

En Express.js, los middlewares son funciones que se ejecutan en el medio de una cadena de manejo de solicitudes HTTP. Los middlewares se utilizan para realizar tareas específicas en la solicitud, como analizar el cuerpo de la solicitud, realizar la autenticación del usuario y más.

Cada middleware es una función que tiene acceso a tres objetos: el objeto `req` (la solicitud HTTP), el objeto `res` (la respuesta HTTP) y el objeto `next` (la siguiente función middleware en la cadena de manejo). La función middleware puede realizar tareas en la solicitud y luego pasar el control a la siguiente función middleware utilizando el objeto `next`. Si la función middleware no llama a `next()`, la solicitud se queda atrapada en ese middleware.

## ¿Cómo usarlos?

En Express.js, los middlewares se utilizan para realizar tareas específicas en la solicitud HTTP. Hay diferentes tipos de middlewares en Express.js:

- **Middlewares de aplicación**: Se utilizan para configurar la aplicación y configurar la cadena de manejo de solicitudes. Se pueden utilizar para manejar errores, analizar la solicitud HTTP y más. Estos middlewares se definen utilizando el método `use()` de la aplicación.

- **Middlewares de ruta**: Se utilizan para manejar solicitudes para rutas específicas en la aplicación. Se pueden utilizar para la autenticación de usuarios, el registro de solicitudes y más. Estos middlewares se definen utilizando los métodos HTTP específicos, como `get()`, `post()`, etc.

- **Middlewares de error**: Se utilizan para manejar errores que ocurren durante el procesamiento de solicitudes. Estos middlewares se definen utilizando una función middleware que toma un objeto `err`, `req`, `res` y `next`.

Aquí hay un ejemplo de cómo definir un middleware de aplicación en Express.js:

```js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Solicitud recibida en:', Date.now());
  next();
});
```

En este ejemplo, definimos un middleware de aplicación utilizando el método `use()`. La función middleware registra la hora actual en la consola y luego llama a `next()` para pasar el control a la siguiente función middleware.

También se pueden encadenar varios middlewares de aplicación juntos, como en este ejemplo:

```js
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
```

En este ejemplo, encadenamos tres middlewares de aplicación juntos, y cada uno se ejecutará en orden.
