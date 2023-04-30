---
title: 'Solicitudes en Express'
slug: '/request-express'
sidebar_position: 3
---

# Gestión de solicitudes HTTP en Express

## Uso de enrutadores en Express

Una de las características clave de Express.js es la capacidad de utilizar enrutadores para manejar solicitudes HTTP. Los enrutadores permiten que diferentes rutas de URL se manejen de forma separada, lo que facilita la organización de una aplicación web.

Para utilizar enrutadores en Express.js, se debe crear un nuevo objeto `Router` y definir las rutas que se manejarán. A continuación, se muestra un ejemplo simple de cómo utilizar un enrutador en Express.js:

```js
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('¡Hola desde Express!')
})

module.exports = router
```

En este ejemplo, se define una ruta para la **URL raíz ("/")** y se envía una respuesta con el texto `¡Hola desde Express!`.

Una vez que se ha definido el enrutador, se puede utilizar en la aplicación principal de Express.js. A continuación, se muestra un ejemplo de cómo utilizar el enrutador anterior en una aplicación de Express.js:

```js
const express = require('express')
const app = express()

const router = require('./router')

app.use('/', router)

app.listen(3000, () => {
  console.log('Servidor Express en ejecución en el puerto 3000')
})
```

En este ejemplo, se importa el enrutador desde un archivo separado y se utiliza con la función `app.use()`. La función `app.use()` indica que cualquier solicitud que coincida con la ruta especificada se manejará utilizando el enrutador.

## Middlewares en Express.js

Otra característica clave de Express.js es la capacidad de utilizar middleware para manejar solicitudes HTTP. El middleware es una función que se ejecuta antes o después de manejar una solicitud, lo que permite agregar funcionalidad adicional a una aplicación web.

Para utilizar middleware en Express.js, se puede utilizar la función app.use(). A continuación, se muestra un ejemplo de cómo utilizar middleware en una aplicación de Express.js:

```js
const express = require('express')
const app = express()

// Este sería el middleware
app.use((req, res, next) => {
  console.log(`Solicitud recibida en: ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.send('¡Hola desde Express!')
})

app.listen(3000, () => {
  console.log('Servidor Express en ejecución en el puerto 3000')
})
```

En este ejemplo, se define una función de middleware que registra la URL de cada solicitud recibida. La función de middleware se utiliza con la función `app.use()` para que se ejecute antes de cualquier otra función de manejo de solicitudes.
