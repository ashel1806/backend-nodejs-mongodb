---
title: "Módulos en JavaScript"
slug: "/js-modules"
sidebar_position: 1
---

A medida que nuetra aplicación va creciendo, es necesario dividir el código en módulos para poder mantenerlo organizado y fácil de entender. Los módulos en Javascript aparecieron en el estándar ES6, y son una forma de dividir el código en archivos independientes que pueden ser importados y exportados.

## ¿Qué son los módulos?

Los módulos son archivos independientes que contienen código Javascript. Los módulos pueden exportar variables, funciones, clases, etc. para que puedan ser importadas y utilizadas en otros módulos.

## ¿Cómo se crean los módulos?

Los módulos se crean en archivos con extensión .js y para que las variables, classes, objetos o funciones sean accesibles por otro módulo, debemos usar la palabra clave `export`. Por ejemplo, podemos crear un módulo llamado `suma.js`:

```js title="suma.js"
export const suma = (a, b) => {
  return a + b;
};
```

## ¿Cómo se importan los módulos?

Los módulos se importan con la palabra clave `import`. Por ejemplo, podemos importar el módulo `modulo.js` en el archivo `index.js`:

```js title="main.js"
import { suma } from "./suma.js";

console.log(suma(1, 2)); // 3
```

En Javascript tenemos varias formas de importar módulos, por ejemplo, podemos importar todos los módulos de un archivo con la palabra clave `import * as`:

```js title="main.js"
import * as modulo from "./suma.js";

console.log(modulo.suma(1, 2)); // 3
```

En este caso estamos importando todas las variables, funciones, clases, etc. que están exportadas en el módulo `modulo.js` y las estamos guardando en la variable `modulo`, la cual será tratada como un objeto (es por ello que usamos la notación punto para acceder a la función suma).

Otra manera de usar un módulo en otro es usando la importación por defecto:

```js title="suma.js"
const suma = (a, b) => {
  return a + b;
};

export default suma;
```

```js title="main.js"
import suma from "./suma.js";

console.log(suma(1, 2)); // 3
```

En este caso estamos importando la función `suma` por defecto del módulo `suma.js` y la estamos guardando en la variable `suma`. En este caso no es necesario usar la notación punto para acceder a la función suma.

:::note Nota

Si usamos la importación por defecto, solo podemos tener un `export default` por archivo.

:::


## ¿Como usar los módulos en el navegador?

Los módulos en Javascript solo funcionan en el navegador si el archivo HTML tiene la etiqueta `type="module"`:

```html title="index.html"
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My App</title>
  </head>

  <body>
    <!-- Importamos el módulo main.js -->
    <script type="module" src="main.js"></script>
  </body>
</html>
```







