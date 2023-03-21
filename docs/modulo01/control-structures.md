---
title: "Estructuras de control"
slug: "/control-structures"
description: "Estructuras que nos permiten realizar acciones condicionales o repetitivas"
sidebar_position: 6
---

## Condicionales

### if

La estructura `if` nos permite ejecutar un bloque de código si una condición se cumple.

```js title="Sintaxis"
if (condicion) {
  // Bloque de código que se ejecuta si la condición se cumple
}
```

Por ejemplo, podemos imprimir un mensaje en la consola si la variable `numero` es mayor a 5:

```js
let numero = 10;

if (numero > 5) {
  console.log("El número es mayor a 5");
}

// El número es mayor a 5
```

### if...else

La estructura `if...else` nos permite ejecutar un bloque de código si una condición se cumple, y otro bloque de código si la condición no se cumple.

```js title="Sintaxis"
if (condicion) {
  // Bloque de código que se ejecuta si la condición se cumple
} else {
  // Bloque de código que se ejecuta si la condición no se cumple
}
```

Por ejemplo, podemos imprimir un mensaje en la consola si la variable `numero` es mayor a 5, y otro mensaje si la variable `numero` es menor o igual a 5:

```js
let numero = 3;

if (numero > 5) {
  console.log("El número es mayor a 5");
} else {
  console.log("El número es menor o igual a 5");
}

// El número es menor o igual a 5
```

### if...else if...else

La estructura `if...else if...else` nos permite ejecutar un bloque de código si una condición se cumple, otro bloque de código si otra condición se cumple, y otro bloque de código si ninguna de las condiciones se cumple.

```js title="Sintaxis"
if (condicion1) {
  // Bloque de código que se ejecuta si la condición 1 se cumple
} else if (condicion2) {
  // Bloque de código que se ejecuta si la condición 2 se cumple
} else {
  // Bloque de código que se ejecuta si ninguna de las condiciones se cumple
}
```

Por ejemplo, podemos imprimir un mensaje en la consola si la variable `numero` es mayor a 5, otro mensaje si la variable `numero` es menor o igual a 5, y otro mensaje si la variable `numero` es menor o igual a 0:

```js
let numero = 0;

if (numero > 5) {
  console.log("El número es mayor a 5");
} else if (numero <= 5) {
  console.log("El número es menor o igual a 5");
} else {
  console.log("El número es menor o igual a 0");
}

// El número es menor o igual a 5
```

### switch

La estructura `switch` nos permite ejecutar un bloque de código dependiendo del valor de una variable.

```js title="Sintaxis"
switch (variable) {
  case valor1:
    // Bloque de código que se ejecuta si la variable es igual a valor1
    break;
  case valor2:
    // Bloque de código que se ejecuta si la variable es igual a valor2
    break;
  ... // Puede haber más casos
  default:
    // Bloque de código que se ejecuta si la variable no es igual a ninguno de los valores
}
```

Por ejemplo, podemos imprimir un mensaje en la consola dependiendo del valor de la variable `numero`:

```js
let numero = 3;

switch (numero) {
  case 1:
    console.log("El número es 1");
    break;
  case 2:
    console.log("El número es 2");
    break;
  case 3:
    console.log("El número es 3");
    break;
  default:
    console.log("El número no es 1, 2 o 3");
}

// El número es 3
```

## Bucles

### while

La estructura `while` nos permite ejecutar un bloque de código mientras una condición se cumpla.

```js title="Sintaxis"
while (condicion) {
  // Bloque de código que se ejecuta mientras la condición se cumpla
}
```

Por ejemplo, podemos imprimir los números del 1 al 5:

```js
let numero = 1;

while (numero <= 5) {
  console.log(numero);
  numero++;
}

// 1
// 2
// 3
// 4
// 5
```

En este ejemplo, la variable `numero` empieza en 1, y se va incrementando en 1 en cada iteración del bucle, hasta que la variable `numero` sea mayor a 5.

### do...while

La estructura `do...while` nos permite ejecutar un bloque de código al menos una vez, y luego repetir el bloque de código mientras una condición se cumpla.

```js title="Sintaxis"
do {
  // Bloque de código que se ejecuta al menos una vez
} while (condicion);
```

Por ejemplo, podemos imprimir los números del 1 al 5:

```js
let numero = 1;

do {
  console.log(numero);
  numero++;
} while (numero <= 5);

// 1
// 2
// 3
// 4
// 5
```

En este ejemplo, la variable `numero` empieza en 1, y se va incrementando en 1 en cada iteración del bucle, hasta que la variable `numero` sea mayor a 5.

Si modificamos la condición a 'numero < 2', el bloque de código se ejecutará al menos una vez, y luego se repetirá mientras la variable `numero` sea menor a 2.

```js
let numero = 1;

do {
  console.log(numero);
  numero++;
} while (numero < 2);

// 1
```

En este ejemplo, la variable `numero` empieza en 1, y se va incrementando en 1 en cada iteración del bucle, hasta que la variable `numero` sea mayor a 2. Pero a pesar de que la condición no se cumple, el bloque de código se ejecutará al menos una vez.

### for

La estructura `for` nos permite ejecutar un bloque de código un número determinado de veces.

```js title="Sintaxis"
for (inicializacion; condicion; incremento) {
  // Bloque de código que se ejecuta un número determinado de veces
}
```

Por ejemplo, podemos imprimir los números del 1 al 5:

```js
for (let numero = 1; numero <= 5; numero++) {
  console.log(numero);
}

// 1
// 2
// 3
// 4
// 5
```

En este ejemplo, la variable `numero` empieza en 1, y se va incrementando en 1 en cada iteración del bucle, hasta que la variable `numero` sea mayor a 5.

:::info Ojo

En la inicialización, la condición y el incremento, podemos usar cualquier expresión válida de JavaScript.

```js
for (let numero = 1, name = "Juan"; numero <= 5 && name === "Juan"; numero += 2) {
  console.log(numero);
}

// 1
// 3
// 5
```

:::

### for...in

La estructura `for...in` nos permite iterar sobre las propiedades de un objeto.

```js title="Sintaxis"
for (propiedad in objeto) {
  // Bloque de código que se ejecuta un número determinado de veces
}
```

Por ejemplo, podemos imprimir los nombres de las propiedades del objeto `persona`:

```js
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};

for (const propiedad in persona) {
  console.log(propiedad);
}

// nombre
// apellido
// edad

// Podemos acceder al valor de la propiedad con la notación de corchetes

for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

// nombre: Juan
// apellido: Perez
// edad: 30
```

### for...of

La estructura `for...of` nos permite iterar sobre los elementos de un objeto iterable (Array, String, y otros).

```js title="Sintaxis"
for (elemento of iterable) {
  // Bloque de código que se ejecuta un número determinado de veces
}
```

Por ejemplo, podemos imprimir los elementos del array `colores`:

```js title="for...of con Array"
const colores = ["rojo", "verde", "azul"];

for (const color of colores) {
  console.log(color);
}

// rojo
// verde
// azul
```

```js title="for...of con String"
const nombre = "Juan";

for (const letra of nombre) {
  console.log(letra);
}

// J
// u
// a
// n
```
