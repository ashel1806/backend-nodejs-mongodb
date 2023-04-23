---
title: 'Integración con otros módulos'
slug: '/integrating-modules'
sidebar_position: 4
---

## Instalación de módulos en Express.js

Antes de integrar un módulo en una aplicación Express.js, es necesario instalar el módulo a través de NPM (Node Package Manager). Por ejemplo, si desea utilizar el módulo `body-parser` para analizar los datos del formulario en una solicitud POST, puede instalar el módulo usando el siguiente comando:

```bash
npm install body-parser
```

Una vez que se ha instalado el módulo, puede requerirlo en su aplicación Express.js utilizando el método `require()` o `import`.

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
```

En este ejemplo, requerimos el módulo `body-parser` y lo utilizamos para analizar los datos del formulario en una solicitud **POST**.

## Integrando los módulos

Para integrar un módulo en una aplicación Express.js, debe seguir los pasos siguientes:

1. **Requerir el módulo**: Utilice el método require() para requerir el módulo en su aplicación.

2. **Configurar el módulo**: Configure el módulo según sus necesidades utilizando sus métodos y opciones.

3. **Utilizar el módulo**: Use el módulo en su aplicación utilizando los métodos use(), get(), post(), etc.

Por ejemplo, si desea utilizar el módulo `cookie-parser` para manejar cookies en su aplicación Express.js, puede integrar el módulo en su aplicación siguiendo estos pasos:

1. Requerir el módulo:

```js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
```

2. Configurar el módulo:

```js
app.use(cookieParser());
```

3. Utilizar el módulo:

```js
app.get('/', (req, res) => {
  console.log(req.cookies);
  res.send('Cookies manejadas correctamente');
});
```

En este ejemplo, hemos integrado el módulo `cookie-parser` en nuestra aplicación Express.js y lo utilizamos para manejar cookies en una solicitud GET.
