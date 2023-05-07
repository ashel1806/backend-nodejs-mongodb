---
title: 'Middlewares'
slug: '/middlewares-intro'
sidebar_position: 1
---

# Introducción a los Middlewares

Express.js es un popular framework de Node.js que se utiliza para crear aplicaciones web y APIs de manera sencilla y rápida. Una de las características más poderosas de Express.js son los middlewares, que permiten interceptar y manipular las solicitudes y respuestas HTTP de una aplicación.

## ¿Qué es un Middleware?

Un middleware en Express.js es una función que recibe tres parámetros: `req` (la solicitud HTTP entrante), `res` (la respuesta HTTP saliente) y `next` (una función que se utiliza para llamar al siguiente middleware en la cadena). La función de un middleware es procesar la solicitud y/o respuesta, y luego llamar a `next()` para pasar el control al siguiente middleware.

Los middlewares pueden ser utilizados para muchas cosas, como autenticar usuarios, validar datos, registrar solicitudes, gestionar cookies y sesiones, y mucho más. Son una herramienta poderosa y flexible que permite crear aplicaciones web complejas y personalizadas.

## ¿Por qué son importantes?

Los middlewares son importantes en Express.js porque permiten añadir funcionalidades adicionales a una aplicación sin tener que modificar el código de los controladores de ruta (handlers o controllers). Además, los middlewares pueden ser reutilizados en diferentes partes de la aplicación, lo que simplifica el código y reduce la duplicación.

Otra ventaja de los middlewares en Express.js es que permiten separar la lógica de negocio de los detalles de la infraestructura. Esto hace que la aplicación sea más fácil de mantener y escalar, ya que los cambios en la infraestructura no afectan la lógica de negocio.

## Tipos de middlewares

En Express.js existen tres tipos de middlewares: internos, de nivel de aplicación y de nivel de enrutador.

Los middlewares internos son proporcionados por Express.js y se utilizan para añadir funcionalidades adicionales a la aplicación, como el manejo de errores o el análisis de cuerpos de solicitud. Los middlewares de nivel de aplicación se aplican a todas las rutas de la aplicación, mientras que los middlewares de nivel de enrutador se aplican sólo a las rutas especificadas.
