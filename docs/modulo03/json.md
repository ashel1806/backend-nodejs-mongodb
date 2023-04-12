---
title: "JSON"
slug: "/json"
sidebar_position: 3
---

# JSON (JavaScript Object Notation)

JSON es un formato de intercambio de datos que utiliza una sintaxis basada en JavaScript. Fue diseñado para ser fácil de leer y escribir, y para ser utilizado en aplicaciones web y móviles. JSON es un formato de texto plano, lo que lo hace fácil de transmitir a través de la red.

## Sintáxis de JSON

JSON utiliza una sintaxis basada en llaves y valores. Los datos se representan como pares llave-valor separados por comas y encerrados entre llaves `{}`. Cada llave debe ser una cadena entre comillas dobles, y el valor puede ser cualquier tipo de datos JSON válido, incluyendo otros objetos JSON, matrices y valores primitivos como cadenas, números y booleanos.

Aquí hay un ejemplo de un objeto JSON:

```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "edad": 25,
  "correo": "juan.perez@example.com",
  "telefonos": [
    {
      "tipo": "casa",
      "numero": "555-1234"
    },
    {
      "tipo": "trabajo",
      "numero": "555-5678"
    }
  ]
}
```

## Convertir JSON a objetos javascript y viceversa

En JavaScript, puedes convertir una cadena JSON en un objeto utilizando la función `JSON.parse()`. Por ejemplo:

```js
const datos = '{"nombre": "Juan", "edad": 25}';

const objeto = JSON.parse(datos);

console.log(objeto); // { nombre: 'Juan', edad: 25 }
console.log(objeto.nombre); // Juan
```

Para convertir un objeto en una cadena JSON, puedes utilizar la función `JSON.stringify()`. Por ejemplo:

```js
const objeto = {
  nombre: "Juan",
  edad: 25,
};

const datos = JSON.stringify(objeto);

console.log(datos); // {"nombre":"Juan","edad":25}
console.log(datos.nombre); // ❌ undefined
```
