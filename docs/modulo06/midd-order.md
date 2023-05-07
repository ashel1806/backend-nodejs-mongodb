---
title: 'Orden de ejecución'
slug: '/order-execution'
sidebar_position: 7
---

Los middlewares en Express son funciones que se ejecutan en el ciclo de vida de una solicitud HTTP. Es importante comprender el orden en que se ejecutan los middlewares, ya que puede afectar el comportamiento de nuestra aplicación.

El orden de ejecución de los middlewares es importante porque determina cómo se manejan las solicitudes HTTP. Por ejemplo, si tenemos un middleware de autenticación que se ejecuta después de un middleware de enrutamiento, puede permitir que un usuario no autenticado acceda a una ruta que requiere autenticación.

## ¿Cómo se define el orden de ejecución de los middlewares?

El orden de ejecución de los middlewares en Express se define por el orden en que se llaman las funciones `next()` dentro de los middlewares. Si una función `next()` se llama antes de que se complete una tarea, se pasará el control al siguiente middleware en la cadena.

Por lo tanto, es importante asegurarse de que el orden de los middlewares sea el correcto para que se ejecuten en el orden correcto.

## Ejemlo de orden de ejecución

Un ejemplo común de orden de ejecución de middlewares es el siguiente:

```js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use(errorHandler);
```

En este ejemplo, primero se utilizan los middlewares `express.json()` y `express.urlencoded()`, que se encargan de analizar la solicitud HTTP entrante y pasarla al siguiente middleware.

Luego, se utiliza `cookieParser()` para analizar las cookies y `logger('dev')` para registrar información de depuración en la consola.

Después de eso, se definen las rutas `/users` y `/products`, que se manejan por los enrutadores usersRouter y productsRouter.

Por último, se utiliza el middleware `errorHandler`, que maneja errores de la aplicación. Es importante que este middleware se defina al final de la cadena, ya que manejará cualquier error que se produzca en cualquiera de los middlewares anteriores.
