---
title: 'Middlewares internos'
slug: '/built-in-middlewares'
sidebar_position: 2
---

# Middlewares internos en Express

Express.js proporciona varios middlewares internos que se pueden utilizar para añadir funcionalidades adicionales a una aplicación. Estos middlewares están disponibles a través de la función `app.use()` y se pueden aplicar a nivel de aplicación, de enrutador o de ruta.

## ¿Qué son los middlewares internos?

Los middlewares internos en Express.js son funciones predefinidas que se utilizan para añadir funcionalidades adicionales a una aplicación. Estos middlewares se incluyen en Express.js y se pueden utilizar directamente sin necesidad de instalar librerías adicionales.

Los middlewares internos se aplican a través de la función `app.use()`, que permite especificar una o varias funciones middleware que se ejecutarán en orden en cada solicitud.

## Middlewares internos disponibles

Los middlewares internos más comunes disponibles en Express.js son los siguientes:

- **express.json()**: Middleware que analiza los cuerpos de solicitud en formato JSON.
- **express.urlencoded()**: Middleware que analiza los cuerpos de solicitud en formato URL-encoded.
- **express.static()**: Middleware que sirve archivos estáticos (por ejemplo, imágenes, CSS, JavaScript) en una carpeta pública (`public`).
- **express.Router()**: Middleware que crea un enrutador que se puede utilizar para gestionar rutas de manera modular.

## ¿Cómo se utilizan los middlewares internos?

Para utilizar los middlewares internos en Express.js, simplemente llamamos a la función `app.use()` y pasamos como argumento el middleware que deseamos utilizar.

Por ejemplo, para utilizar el middleware `express.json()` para analizar los cuerpos de solicitud en formato JSON, simplemente agregamos la siguiente línea de código:

```js
app.use(express.json());
```

De manera similar, para utilizar el middleware `express.static()`:

```js
app.use(express.static('public'));
```

Aquí, `public` es el nombre de la carpeta que contiene los archivos estáticos (html, css, javascript, imágenes, etc).