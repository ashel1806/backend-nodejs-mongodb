---
title: "Funciones"
slug: "/functions"
description: "Pedazos de código que podemos reutilizar"
sidebar_position: 4
---

## ¿Qué es una función?

Una función es un bloque de código que realiza una tarea específica y puede ser reutilizado múltiples veces en un programa. Las funciones son una de las características más importantes y poderosas del lenguaje de programación JavaScript, y son esenciales para construir programas complejos y escalables.

Las funciones en JavaScript se definen utilizando la palabra clave "function", seguida del nombre de la función, seguida de paréntesis que pueden o no contener argumentos separados por comas, y finalmente un bloque de código que contiene las instrucciones que se ejecutarán cada vez que se llame a la función.

Por ejemplo, aquí hay una función simple que toma dos argumentos, los suma y devuelve el resultado:

```js
function sum(a, b) {
  return a + b;
}
```

En este ejemplo, "sumar" es el nombre de la función, "num1" y "num2" son los argumentos que se pasan a la función, y "return" indica que la función devolverá el resultado de la suma de los dos argumentos.

:::tip Consejo de Conejo

Los nombres de las funciones que creemos deben ser descriptivos, es decir, que nos indiquen qué hace la función. Por ejemplo, si la función suma dos números, el nombre de la función podría ser "sumar".

Adicionalmene, debemos cuidar que cada función haga una sola cosa, es decir, que no haga más de una cosa. Por ejemplo, si la función suma dos números, no debería imprimir el resultado en la consola.

:::

## ¿Cómo se llama a una función?

Para llamar a una función, se escribe el nombre de la función seguido de paréntesis que pueden o no contener argumentos separados por comas.

Usando el ejemplo anterior, aquí hay una llamada a la función "sumar":

```js
const result = sum(1, 2); // 3

console.log(result); // 3
```

En este ejemplo, "result" es una variable que almacena el resultado de la función "sumar".

## Parámetros y argumentos

Los parámetros son las variables que se declaran en la definición de la función. Los argumentos son los valores que se pasan a la función cuando se llama a la función.

Por ejemplo, en la función "sum", "a" y "b" son **parámetros**, y "1" y "2" son **argumentos**.

## Retorno

La palabra clave `return` se usa para devolver un valor desde una función.

Por ejemplo, en la función "sum", "return" devuelve el resultado de la suma de los dos argumentos.

## Funciones anónimas

Este tipo de funciones no tienen nombre y se asignan a una variable. Por ejemplo:

```js
const sum = function (a, b) {
  return a + b;
};
```

En este ejemplo, la función se asigna a la variable "sum". Luego, la función se puede llamar usando la variable "sum":

```js
const result = sum(1, 2); // 3
```

:::info Ojo

Si bien las funciones anónimas no parecen tener mucho sentido, estas suelen ser útiles cuando se pasan como argumentos a otras funciones.

```js
const sum = function (a, b) {
  return a + b;
};

function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(1, 2, sum); // 3
```

Aquí vemos que la función "calculate" recibe como argumento una función llamada "operation". Luego, la función "calculate" llama a la función "operation" pasándole los argumentos "a" y "b".

Este concepto es muy útil cuando estamos trabajando con callbacks, que veremos más adelante.

:::


## Funciones flecha

Las funciones flecha son una forma más corta de escribir funciones anónimas. Por ejemplo:

```js
const sum = (a, b) => {
  return a + b;
};
```

En este ejemplo vemos que la función se asigna a la variable "sum", y además se está haciendo uso del operador **flecha** `=>`.

:::info Ojo

Si la función flecha solo tiene una línea de código, podemos omitir las llaves y el return.

```js
const sum = (a, b) => a + b;

// es equivalente a

const sum = (a, b) => {
  return a + b;
};
```

Y, si la función flecha solo tiene un parámetro, podemos omitir los paréntesis.

```js
const square = a => a * a;

// es equivalente a

const square = (a) => a * a;
```

:::

## Funciones recursivas

Una función recursiva es una función que se llama a sí misma. Este tipo de funciones son útiles cuando queremos que un proceso se repita hasta que se cumpla una condición de salida.Por ejemplo:

```js
function countDown(number) {
  if (number === 0) {
    return;
  }

  console.log(number);

  countDown(number - 1);
}

countDown(3);
// 3
// 2
// 1
```

En este ejemplo, la función "countDown" se llama a sí misma hasta que el argumento "number" sea igual a 0.

## Funciones de primera clase

Las funciones de primera clase son funciones que se pueden asignar a variables, pasar como argumentos a otras funciones, y devolver como resultado de otras funciones.

Por ejemplo, aquí tenemos una función que recibe como argumento otra función:

```js

function sum(a, b) {
  return a + b;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(1, 2, sum); // 3
```

Aquí tenemos otro ejemplo donde la función se devuelve como resultado de otra función:

```js
function sum(a, b) {
  return a + b;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

function getOperation() {
  return sum;
}

const result = calculate(1, 2, getOperation()); // 3
```

Y por último, aquí tenemos un ejemplo donde la función se asigna a una variable:

```js
function sum(a, b) {
  return a + b;
}

const operation = sum;

const result = operation(1, 2); // 3
```
