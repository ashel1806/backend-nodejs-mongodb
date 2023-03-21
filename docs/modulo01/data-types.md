---
title: "Tipos de datos"
slug: "/data-types"
description: "number, String, Boolean, null, undefined, Symbol, BigInt"
sidebar_position: 3
---

# Tipos de datos

En Javascript tenemos dos grupos de tipos de datos:

- Tipos de datos primitivos
- Tipos de datos de referencia

## Tipos de datos primitivos

Los tipos de datos primitivos son tipos de datos que no tienen propiedades ni métodos. Los tipos de datos primitivos son:

- number
- String
- Boolean
- null
- undefined
- Symbol
- BigInt

### number

El tipo de dato number representa números. Los números pueden ser enteros o decimales, positivos o negativos.

```js
let number = 1;
let otherNumber = 1.1;
let negativeNumber = -1;
```

:::info Recuerda

Existen otros tipos **"especiales"** de `number`: Infinity, -Infinity y NaN.

- `Infinity` representa el infinito positivo.
- `-Infinity` representa el infinito negativo.
- `NaN` representa un valor no numérico.

```js
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;
```

:::

### String

El tipo de dato String representa cadenas de caracteres. Las cadenas de caracteres pueden estar formadas por letras, números, símbolos, espacios, etc.

```js
let string = "Hola mundo";
let stringWithQuotes = "Hola 'mundo'"; // Hola 'mundo'
let stringWithDoubleQuotes = 'Hola "mundo"'; // Hola "mundo"
```

Podemos utilizar la concatenación de cadenas de caracteres para unir cadenas de caracteres.

```js
let string = "Hola";
let otherString = "mundo";

let concatenatedString = string + " " + otherString;

console.log(concatenatedString); // Hola mundo
```

Podemos usar variables dentro de las cadenas de caracteres. Esto se conoce como "String literals" y hacen uso de las comillas invertidas (``) y el símbolo "$"".

```js
let string = "Hola";
let otherString = "mundo";

let concatenatedString = `${string} ${otherString}`;

console.log(concatenatedString); // Hola mundo
```

### Boolean

El tipo de dato Boolean representa un valor lógico. El valor lógico puede ser verdadero o falso.

```js
let boolean = true;
let otherBoolean = false;
```

### null

El tipo de dato null representa un valor nulo. El valor nulo es un valor especial que representa la ausencia de valor.

```js
let nullValue = null;
```

### undefined

El tipo de dato undefined representa un valor indefinido. El valor indefinido es un valor especial que representa la ausencia de valor.

```js

let undefinedValue = undefined;
```

:::note Nota

El valor undefined es el valor por defecto de las variables.

```js
let undefinedValue;

console.log(undefinedValue); // undefined
```

:::

### Symbol

El tipo de dato Symbol representa un valor único e inmutable. El valor único e inmutable es un valor especial que representa un valor único e inmutable.

```js
let symbol = Symbol("symbol");
let anotherSymbol = Symbol("symbol");

console.log(symbol === anotherSymbol); // false
```

### BigInt

El tipo de dato BigInt representa números enteros de cualquier tamaño. Los números enteros de cualquier tamaño pueden ser positivos o negativos.

```js
let bigInt = 1n;
let otherBigInt = -1n;
let bigNumber = 1234567890123456789012345678901234567890n;
```

## Tipos de datos de referencia

Los tipos de datos de referencia son tipos de datos que tienen propiedades y métodos. Los tipos de datos de referencia son:

- Object
- Array
- Function

### Object

El tipo de dato Object representa un objeto. Un objeto es una colección de propiedades. Cada propiedad tiene un nombre y un valor. El valor de una propiedad puede ser un valor primitivo o un objeto.

```js
let object = {
  name: "John",
  age: 30,
  isMarried: false,
};
```

Para poder acceder a una propiedad de un objeto podemos utilizar la notación de punto (.) o la notación de corchetes.

```js
console.log(object.name); // John
console.log(object["name"]); // John
```

:::danger Aviso

Si una propiedad no está definidida en un objeto, el valor de la propiedad será undefined.

```js
console.log(object.lastName); // undefined
```

Si asignamos un valor a una propiedad que no está definida en un objeto, se creará una nueva propiedad en el objeto de manera automática.

```js
object.lastName = "Doe";

console.log(object.lastName); // Doe
```

:::

### Array

El tipo de dato Array representa una lista de elementos, y puede contener cualquier tipo de dato.

```js
let array = [1, 2, 3, 4, 5];
let otherArray = ["Hola", "mundo"];
let mixedArray = [1, "Hola", true];
let arrayWithObjects = [
  {
    name: "John",
    age: 30,
    isMarried: false,
  },
  {
    name: "Jane",
    age: 25,
    isMarried: true,
  },
];
```

Para poder acceder a un elemento de un array podemos utilizar la notación de corchetes.

```js
console.log(array[0]); // 1
console.log(otherArray[1]); // "mundo"
console.log(mixedArray[2]); // true
console.log(arrayWithObjects[0].name); // "John"
```

:::info Recuerda

Los índices de los arrays empiezan en 0, es decir, el primer elemento de un array tiene el índice 0.

Por ejemplo, si tenemos el siguiente array:

```js
let array = [1, 2, 3, 4, 5];
```

- El primer elemento del array es 1, y tiene el índice 0.
- El segundo elemento del array es 2, y tiene el índice 1.
- El tercer elemento del array es 3, y tiene el índice 2.
- El cuarto elemento del array es 4, y tiene el índice 3.
- El quinto elemento del array es 5, y tiene el índice 4.

:::

## typeof

Podemos utilizar la función typeof para obtener el tipo de dato de una variable.

```js
let number = 1;

console.log(typeof number); // number
```

:::note Nota

La función `typeof` devuelve un string con el nombre del tipo de dato y puede o no, llevar paréntesis.

```js
console.log(typeof number); // number
console.log(typeof(number)); // number
```

:::
