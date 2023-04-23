---
title: 'Introducción a Express'
slug: '/intro-expressjs'
sidebar_position: 1
---

## ¿Qué es Express?

Express.js es un framework de JavaScript utilizado para construir aplicaciones web del lado del servidor. Es rápido, flexible y fácil de usar, lo que lo convierte en una opción popular para desarrolladores web.

## Características

Algunas de las características más destacadas de Express.js incluyen:

- **Enrutamiento**: Express.js proporciona un enrutador para manejar las solicitudes HTTP. Puede definir rutas para diferentes URL y métodos HTTP (GET, POST, PUT, DELETE, etc.), y asociar controladores para manejar las solicitudes.

- **Middleware**: Express.js permite el uso de middleware, que son funciones que se ejecutan antes o después de que se maneje una solicitud. Los middleware pueden ser utilizados para realizar tareas comunes, como analizar el cuerpo de una solicitud, autenticar usuarios, manejar errores, entre otros.

- **Integración con otros módulos**: Express.js es compatible con muchos otros módulos de Node.js, lo que le permite extender su funcionalidad. Algunos ejemplos incluyen el uso de plantillas de motor de vistas, bases de datos, sesiones y autenticación.

## Instalación

Para comenzar a utilizar Express.js, primero debemos instalarlo en nuestro proyecto. Para hacerlo, podemos utilizar el siguiente comando en la terminal:

```bash
npm install express
```

Esto instalará la última versión estable de Express.js y guardará su información en el archivo package.json de nuestro proyecto.

## Ejemplo básico

```js title=app.js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!')
})

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000')
})
```
