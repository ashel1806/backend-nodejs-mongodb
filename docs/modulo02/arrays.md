---
title: "Arrays"
slug: "/arrays"
sidebar_position: 3
---

# Todo sobre los arrays

Los arrays o arreglos son objetos en Javascript que nos permiten almacenar una colección de datos. Cada dato almacenado en un array tiene un índice que nos permite acceder a él. Al ser objetos, los arrays tienen propiedades y métodos.

## Crear un array

Para crear un array en Javascript podemos usar una de las dos maneras que existen:

  - Usando el constructor `Array()` y la palabra clave `new`
  - Usando la notación literal de arrays `[]`

### Usando el constructor `Array()` y la palabra clave `new`

```js
const frutas = new Array("Manzana", "Plátano", "Cereza");
```

### Usando la notación literal de arrays `[]`

```js
const frutas = ["Manzana", "Plátano", "Cereza"];
```

## Acceder a un elemento de un array

Para acceder a un elemento de un array podemos usar la notación de corchetes `[]` y el índice del elemento que queremos acceder:

```js
const frutas = ["Manzana", "Plátano", "Cereza"];

console.log(frutas[0]); // Manzana
console.log(frutas[1]); // Plátano
console.log(frutas[2]); // Cereza
```

## Operaciones sobre un array

### Agregar elementos a un array

Para agregar elementos a un array podemos usar el método `push()`:

```js
const frutas = ["Manzana", "Plátano", "Cereza"];

frutas.push("Fresa");

console.log(frutas); // ["Manzana", "Plátano", "Cereza", "Fresa"]
```

### Eliminar elementos de un array

Para eliminar elementos de un array podemos usar el método `pop()`:

```js
const frutas = ["Manzana", "Plátano", "Cereza"];

frutas.pop();

console.log(frutas); // ["Manzana", "Plátano"]
```

### Obtener el tamaño de un array

Para obtener el tamaño de un array podemos usar la propiedad `length`:

```js
const frutas = ["Manzana", "Plátano", "Cereza"];

console.log(frutas.length); // 3
```

### Iterar sobre un array

Para iterar sobre un array podemos usar el método `forEach()`:

```js
const frutas = ["Manzana", "Plátano", "Cereza"];

frutas.forEach((fruta) => {
  console.log(fruta);
});
```

## Métodos de los arrays

Los arrays tienen muchos métodos que nos permiten manipularlos. Algunos de los más comunes son:

  - `push()`: Agrega un elemento al final del array
  - `pop()`: Elimina el último elemento del array
  - `unshift()`: Agrega un elemento al inicio del array
  - `shift()`: Elimina el primer elemento del array
  - `indexOf()`: Devuelve el índice del elemento que le pasemos como parámetro
  - `join()`: Une todos los elementos de un array en un string
  - `slice()`: Extrae elementos de un array y devuelve un nuevo array
  - `splice()`: Elimina elementos de un array y devuelve un nuevo array
  - `reverse()`: Invierte el orden de los elementos de un array
  - `sort()`: Ordena los elementos de un array
  - `map()`: Crea un nuevo array con los resultados de la llamada a una función para cada elemento del array
  - `filter()`: Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
  - `reduce()`: Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor
  - `find()`: Devuelve el primer elemento de un array que cumpla con la condición implementada por la función dada

Antes de revisar cada uno de estos métodos hablemos sobre la mutabilidad en Javascript.

## Mutabilidad en Javascript

La mutabilidad hace referencia a la capacidad de cambiar el estado de un objeto. En Javascript todos los tipos de datos de referencia son mutables, es decir, podemos cambiar su estado. Por ejemplo, podemos agregar elementos a un array:

```js
const frutas = ["Manzana", "Plátano", "Cereza"];

frutas.push("Fresa");

console.log(frutas); // ["Manzana", "Plátano", "Cereza", "Fresa"]
```

En este caso, el array `frutas` es un objeto que tiene una propiedad `length` que nos indica el tamaño del array. Cuando usamos el método `push()` para agregar un elemento al array, el array `frutas` cambia su estado y su propiedad `length` pasa a tener el valor `4`.

La mutabilidad puede causar efectos secundarios en nuestra aplicación, por ejemplo, si tenemos varias funciones que actuan sobre un mismo tipo de dato y más adelante en nuestra aplicaición agregamos otra función, es muy probable que aparezcan errores en nuestra aplicación. Para evitar estos efectos secundarios podemos usar inmutabilidad.

Ahora sí, veamos los métodos que probablemente usaremos más a menudo como desarrolladores backend.

## splice()

Este método nos permite eliminar elementos de un array y devolver un nuevo array. Este método **modifica** el array original. Recibe dos parámetros: el índice de inicio y el número de elementos a eliminar. El índice de inicio es obligatorio y el número de elementos a eliminar es opcional. Si no se pasa el número de elementos a eliminar, el método elimina todos los elementos desde el índice de inicio hasta el final del array.

```js
// Creamos un array de frutas
const frutas = ["Manzana", "Plátano", "Cereza", "Fresa", "Naranja"];

// Usamos el método splice() para eliminar los elementos desde el índice 1 hasta el 3
const frutasSeleccionadas = frutas.splice(1, 3);

console.log(frutasSeleccionadas); // ["Plátano", "Cereza", "Fresa"]

// Arreglo original
console.log(frutas); // ["Manzana", "Naranja"]
```

## slice()

Este método nos permite extraer elementos de un array y devolver un nuevo array. Este método **no modifica** el array original. Recibe dos parámetros: el índice de inicio y el índice de fin. El índice de inicio es obligatorio y el índice de fin es opcional. Si no se pasa el índice de fin, el método extrae todos los elementos desde el índice de inicio hasta el final del array.

```js
// Creamos un array de frutas
const frutas = ["Manzana", "Plátano", "Cereza", "Fresa", "Naranja"];

// Usamos el método slice() para extraer los elementos desde el índice 1 hasta el 3
const frutasSeleccionadas = frutas.slice(1, 3);

console.log(frutasSeleccionadas); // ["Plátano", "Cereza"]

// Arreglo original
console.log(frutas); // ["Manzana", "Plátano", "Cereza", "Fresa", "Naranja"]
```

## map()

Este método nos permite recorrer todo el array y ejecutar un bloque de código por cada elemento del array. El método `map()` devuelve un nuevo array con los resultados de la ejecución del bloque de código por cada elemento del array.

```js
// Creamos un array de números
const numeros = [1, 2, 3, 4, 5];

// Usamos el método map() para recorrer el array y multiplicar cada elemento por 2
const numerosPorDos = numeros.map((numero) => numero * 2);

console.log(numerosPorDos); // [2, 4, 6, 8, 10]

// Arreglo original
console.log(numeros); // [1, 2, 3, 4, 5]

// Vemos que este método no ha modificado el array original, por lo que podemos
// decir que este método es inmutable
```

## filter()

Este método nos permite filtrar los elementos de un array que cumplan con una condición. El método `filter()` devuelve un nuevo array con los elementos que cumplan dicha condición.

```js
// Creamos un array de números
const numeros = [1, 2, 3, 4, 5];

// Usamos el método filter() para filtrar los números pares
const numerosPares = numeros.filter((numero) => numero % 2 === 0);

console.log(numerosPares); // [2, 4]

// Arreglo original
console.log(numeros); // [1, 2, 3, 4, 5]

// Vemos que este método no ha modificado el array original, por lo que podemos
// decir que este método también es inmutable
```

## reduce()

Este método nos permite reducir un array a un único valor. El método `reduce()` recibe una función que recibe dos parámetros: el acumulador y el valor actual. La función `reduce()` ejecuta la función que le pasamos por cada elemento del array y el resultado de la ejecución de la función se almacena en el acumulador. Al finalizar la ejecución de la función `reduce()` devuelve el valor del acumulador.

```js
// Creamos un array de números
const numeros = [1, 2, 3, 4, 5];

// Usamos el método reduce() para sumar todos los elementos del array
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma); // 15

// Arreglo original
console.log(numeros); // [1, 2, 3, 4, 5]
```

## find()

Este método nos permite encontrar el primer elemento de un array que cumpla con una condición. El método `find()` devuelve el primer elemento que cumpla con la condición.

```js
// Creamos un array de números
const numeros = [1, 2, 3, 4, 5];

// Usamos el método find() para encontrar el primer número par
const numeroPar = numeros.find((numero) => numero % 2 === 0);

console.log(numeroPar); // 2

// Arreglo original
console.log(numeros); // [1, 2, 3, 4, 5]
```







