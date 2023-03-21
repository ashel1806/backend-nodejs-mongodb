---
title: "Variables"
slug: "/variables"
description: "Descubriendo las variables en Javascript"
sidebar_position: 2
---

# Variables en Javascript

## ¿Qué es una variable?

Podemos imaginar una variable como si fuera una caja, la cual tendrá un nombre, en donde nosotros podemos guardar información de cualquier tipo. Por ejemplo, podemos guardar el valor 5 en una variable llamada `numero`:

```js
let numero = 5;
```

## Declarar una variable

En Javascript podemos declarar una variable con la palabra reservada `let`:

```js
let numero;
```

Sin embargo, esta no es la única manera. Podemos declarar también una variable con la palabra reservada `var`:

```js
var numero;
```

:::danger Aviso
En Javascript no se recomienda utilizar la palabra reservada `var` para declarar variables. En su lugar, se recomienda utilizar la palabra reservada `let`.

Esto debido a que la palabra reservada `var` tiene un comportamiento muy flexible, lo cual puede generar errores en el código. Por ejemplo, si declaramos una variable con la palabra reservada `var` y luego declaramos otra variable con el mismo nombre, la segunda variable sobreescribirá el valor de la primera variable:

```js
var numero = 5;
var numero = 10;
console.log(numero); // 10
```

En cambio, si declaramos una variable con la palabra reservada `let` y luego declaramos otra variable con el mismo nombre, obtendremos un error:

```js
let numero = 5;
let numero = 10; // SyntaxError: Identifier 'numero' has already been declared
```
:::

:::tip Consejo de conejo

Cuando declaramos una variable, es recomendable que el nombre de la variable sea descriptivo, es decir, que nos permita saber qué información se está guardando en la variable. Por ejemplo, si queremos guardar el nombre de un usuario, podemos declarar una variable llamada `nombreUsuario`:

```js
let nombreUsuario = "Juan";
```

:::

## Constantes

En algunos casos vamos a tener algunas variables que no cambian su valor a lo largo de todo el código, a este tipo de variables se les conoce como constantes. En Javascript podemos declarar constantes con la palabra reservada `const`:

```js
const PI = 3.1416;
```

:::tip Consejo de conejo

Cuando declaramos una constante, es recomendable que el nombre de la constante sea en mayúsculas y que esté separado por guiones bajos. Por ejemplo, si queremos guardar el valor de la cantidad de dias de la semana, podemos declarar una constante llamada `DAYS_OF_THE_WEEK`:


```js
const DAYS_OF_THE_WEEK = 7;
```

:::
