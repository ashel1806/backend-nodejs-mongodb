---
title: "Middlewares a nivel de enrutador"
slug: "/router-level-middlewares"
sidebar_position: 5
---

En Express.js, los middlewares se pueden aplicar no solo a nivel de aplicación, sino también a nivel de enrutador. Esto significa que se pueden aplicar middlewares específicos para un conjunto de rutas o enrutadores en lugar de aplicarlos a todas las solicitudes entrantes.

Aplicar un middleware a nivel de enrutador significa que se está aplicando ese middleware solo a un conjunto específico de rutas o enrutadores. Esto permite tener mayor control sobre el flujo de la aplicación y aplicar funcionalidades específicas en ciertas secciones de la aplicación.

## ¿Cómo se aplican?

Para aplicar un middleware a nivel de enrutador en Express, se utiliza el método `router.use()` en lugar del método `app.use()`. El método `router.use()` acepta los mismos argumentos que `app.use()`, es decir, una o varias funciones middleware.

```js title="routes/usuarios.js"
const express = require("express");

// Creamos el enrutador
const router = express.Router();

// Middleware a nivel de enrutador

/* Middleware para validar autenticación */
router.use((req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ error: "No se proporcionó un token de autenticación" });
  }

  // Validar el token de autenticación aquí

  next();
});

/* Middleware para validar parámetros */
router.use("/:id", (req, res, next) => {
  const { id } = req.params;

  if (!id || !Number.isInteger(parseInt(id))) {
    return res
      .status(400)
      .json({ error: "El parámetro :id debe ser un número entero" });
  }

  // Validar los parámetros aquí

  next();
});

// Rutas
router.get("/", (req, res) => {
  // ...
});

router.post("/", (req, res) => {
  // ...
});

module.exports = router;
```

```js title="app.js"
const express = require("express");
const usuariosRouter = require("./routes/usuarios");

const app = express();

// Middleware a nivel de aplicación
app.use(express.json());

// Enrutador de usuarios
app.use("/usuarios", usuariosRouter);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
```

En este ejemplo, se han creado dos middlewares a nivel de enrutador para el enrutador de `usuarios`. El middleware de autenticación verifica que se haya proporcionado un token de autenticación en la solicitud y, si no se proporcionó, devuelve una respuesta con un error de autorización. El middleware de validación de parámetros verifica que el parámetro `:id` en la solicitud sea un número entero, y si no lo es, devuelve una respuesta con un error de validación.
