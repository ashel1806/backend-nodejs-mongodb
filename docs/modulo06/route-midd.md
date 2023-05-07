---
title: 'Middlewares a nivel de ruta'
slug: '/route-level-middleware'
sidebar_position: 6
---

Además de poder aplicar middlewares a nivel de aplicación y a nivel de enrutador, también es posible aplicarlos a nivel de ruta. Esto nos permite definir un middleware específico para una ruta determinada.

Aplicar un middleware a nivel de ruta significa que ese middleware se ejecutará solo para las solicitudes que coincidan con esa ruta específica. De esta manera, podemos definir middlewares personalizados para manejar solicitudes específicas de manera más precisa.

## ¿Cómo se aplican?

Para aplicar un middleware a nivel de ruta en Express, simplemente necesitamos pasar como argumento el middleware deseado a la definición de la ruta usando el método get(), post(), put() o delete(), según corresponda.

Por ejemplo, para registrar los logs de solo una ruta en específico, podemos hacer lo siguiente:

```js title="routes/usuarios.js"
const express = require('express');
const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log('Solicitud recibida en la ruta ' + req.path);
  next();
};

// usamos el middleware solo para la ruta /ruta-elegida
app.get('/ruta-elegida', loggerMiddleware, (req, res) => {
  // Lógica de la ruta
});
```

Los ejemplos más comunes para este tipo de middlewares son los middlewares de validación de datos, los middlewares de autenticación y middlewares de validación de parámetros.

## Ejemplo de middleware para validad parámetros

```js
const express = require('express');
const app = express();

const validateParamsMiddleware = (req, res, next) => {
  // Extraemos los parámetros
  const { param1, param2 } = req.query;

  // Validamos los parámetros
  if (!param1 || !param2) {
    // Si faltan parámetros, respondemos con un error y no llamamos a next()
    return res.status(400).send('Faltan parámetros');
  }

  // Si los parámetros son válidos, llamamos a next()
  next();
};

app.get('/ruta-validada', validateParamsMiddleware, (req, res) => {
  // Lógica de la ruta validada
});
```
