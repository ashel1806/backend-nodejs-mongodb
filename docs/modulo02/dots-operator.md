---
title: "Operadores Rest y Spread"
slug: "/rest-spread"
sidebar_position: 4
---

# Operadores Rest y Spread

Estos operadores nos permiten trabajar con arrays y objetos de una manera más sencilla. Ambos hacen uso de la sintaxis de puntos `...`, sin embargo tienen un significado diferente.

## Operador Rest

El operador rest nos permite representar un número indefinido de argumentos como un array. Para usarlo debemos colocar los tres puntos `...` antes del nombre del parámetro que representará el array de argumentos.

```js
function informacion(nombre, apellido, ...otraInfo) {
  return otraInfo;
}

const resultado = informacion("Juan", "Pérez", 1.72, "Colombia", "Bogotá");

console.log(resultado); // [1.72, "Colombia", "Bogotá"]
```

El operador rest también se puede usar para desestructurar arrays y objetos:

```js
const frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

const [primeraFruta, segundaFruta, ...restoFrutas] = frutas;

console.log(primeraFruta); // Manzana
console.log(segundaFruta); // Plátano
console.log(restoFrutas); // ["Cereza", "Fresa"]

const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  altura: 1.72,
  pais: "Colombia",
  ciudad: "Bogotá",
};

const { nombre, apellido, ...restoInfo } = persona;

console.log(nombre); // Juan
console.log(apellido); // Pérez
console.log(restoInfo); // { altura: 1.72, pais: "Colombia", ciudad: "Bogotá" }
```

:::note Ojo con el orden

El operador rest debe ir siempre al final de la desestructuración, ya que de lo contrario no funcionará correctamente.

```js
const frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

const [...restoFrutas, primeraFruta, segundaFruta] = frutas;
// SyntaxError: Rest element must be last element
```

:::

## Operador Spread

El operador spread nos permite descomponer o desempaquetar un array u objeto en elementos induviduales, con el objetivo de expandirlos en un nuevo array u objeto.

Usando el operador spread con arrays:

```js
const frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
const verduras = ["Lechuga", "Zanahoria", "Cebolla"];

const alimentos = [...frutas, ...verduras];

console.log(alimentos);
// ["Manzana", "Plátano", "Cereza", "Fresa", "Lechuga", "Zanahoria", "Cebolla"]
```

También podemos usar el operador spread con los objetos:

```js
const direccion = {
  pais: "Colombia",
  ciudad: "Bogotá",
}

const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  altura: 1.72,
  ...direccion,
}

console.log(persona);
// { nombre: "Juan", apellido: "Pérez", altura: 1.72, pais: "Colombia", ciudad: "Bogotá" }
```

:::info Copia de objetos

En el ejemplo anterior uno podría pensar que al momento de modificar el objeto `direccion` también se modificaría el objeto `persona`, pero esto no es así, ya que el operador spread crea una copia del objeto `direccion` y lo agrega al objeto `persona`.

```js
direccion.ciudad = "Medellín";

console.log(persona);
// { nombre: "Juan", apellido: "Pérez", altura: 1.72, pais: "Colombia", ciudad: "Bogotá" }

console.log(direccion);
// { pais: "Colombia", ciudad: "Medellín" }
```

Aquí vemos que ha pesar de haber modificado el objeto dirección, el objeto persona no se ha visto afectado.

Sin embargo, esto solo aplica cuando tenemos valores primitivos en el objeto o array, ya que si tenemos valores no primitivos como objetos o arrays, estos se copiaran por referencia, por lo que si modificamos el objeto o array original, también se verá afectado el objeto o array copiado.

Con arrays:

```js
const nombre = [["Juan", "Pérez"]];
const info = ["Alumno", ...nombre, 1.72];

console.log(info);
// ["Alumno", ["Juan", "Pérez"], 1.72]

nombre[0].push("Gómez");

console.log(nombre);
// [["Juan", "Pérez", "Gómez"]]
console.log(info);
// ["Alumno", ["Juan", "Pérez", "Gómez"], 1.72]

```

Con objetos:

```js
// usando objetos
const miNombre = {
  nombreCompleto: {
    nombre: "Juan",
    apellido: "Pérez",
  },
}

const miBio = {
  profesion: "Desarrollador Web",
  ...miNombre,
};

console.log(miBio);
// { profesion: "Desarrollador Web", nombreCompleto: { nombre: "Juan", apellido: "Pérez" } }

miNombre.nombreCompleto.nombre = "Pedro";

console.log(miNombre);
// { nombreCompleto: { nombre: "Pedro", apellido: "Pérez" } }

console.log(miBio);
// { profesion: "Desarrollador Web", nombreCompleto: { nombre: "Pedro", apellido: "Pérez" } }
```

:::

Incluso podemos usar el operador spread con funciones:

```js
function obtenerInformacion(nombre, apellido, altura) {
  return `${nombre} ${apellido} mide ${altura} metros`;
}

const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  altura: 1.72,
};

const resultado = obtenerInformacion(...persona);
console.log(resultado); // Juan Pérez mide 1.72 metros
```

Es importante saber la diferencia entre estos dos operadores, ya que serán útiles para nuestro día a día al utilizar javascript.
