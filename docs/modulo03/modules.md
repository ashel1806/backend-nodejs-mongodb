---
title: 'Módulos'
slug: '/modules'
sidebar_position: 2
---

En Node.js, los módulos son bloques de código reutilizable que encapsulan la funcionalidad específica de un programa. Los módulos permiten a los desarrolladores escribir código modular y escalable, lo que facilita el mantenimiento y la extensión del código a medida que el proyecto crece.

## ¿Cómo funcionan los módulos en Node.js?

En Node.js, los módulos se implementan como archivos JavaScript separados que encapsulan una funcionalidad específica. Cada archivo de módulo tiene su propio ámbito local y solo expone una interfaz pública específica a otros módulos o al código del programa principal.

Los módulos en Node.js se pueden importar y exportar utilizando la sintaxis require y `module.exports`, respectivamente. La función require se utiliza para cargar un módulo en un archivo JavaScript, mientras que `module.exports` se utiliza para definir la interfaz pública del módulo.

## Creación de módulos en Node.js

Crear un módulo en Node.js es tan simple como crear un archivo JavaScript separado que encapsule una funcionalidad específica. Para exportar la funcionalidad, debe utilizar la sintaxis module.exports en el archivo.

```js title=ejemplo.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

En el ejemplo anterior, se exporta la función `sum` como la interfaz pública del módulo. Ahora, en otro archivo JavaScript, puede importar este módulo y utilizar la función sum exportada:

```js title=index.js
const sum = require('./ejemplo.js');

console.log(sum(2, 3)); // 5
```

En el ejemplo anterior, se utiliza la sintaxis `require` para cargar el módulo `ejemplo.js`, y la función `sum` exportada se asigna a la variable `sum`. Luego, se llama a la función `sum` con dos argumentos y se muestra el resultado en la consola.

## Importar módulos

Como ya vimos, para importar un módulo en Node.js, puede utilizar la sintaxis `require`. La función `require` toma una ruta relativa o absoluta al archivo de módulo y devuelve el objeto exportado del módulo.

```js
const ejemplo = require('./ejemplo.js');
```

## Exportar módulos

Y, para exportar una funcionalidad específica de un módulo en Node.js, debe utilizar la sintaxis `module.exports`. La sintaxis `module.exports` se utiliza para definir la interfaz pública del módulo.

```js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```
