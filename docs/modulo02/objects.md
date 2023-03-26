---
title: "Objetos a fondo"
slug: "/objects"
sidebar_position: 2
---

En la sesión 01 vimos un poco acerca de los objetos en Javascript. En esta sesion vamos a ampliar esos conocimientos, para enterderlos mejor.

Recordemos que un objeto es una colección de propiedades. Cada propiedad tiene un nombre y un valor. El valor de una propiedad puede ser un número, un string, un booleano, una función, un objeto, etc.

## Crear un objeto

Para crear un objeto en Javascript podemos usar una de las dos maneras que existen:

  - Usando el constructor `Object()` y la palabra clave `new`
  - Usando la notación literal de objetos `{}`

### Usando el constructor `Object()` y la palabra clave `new`

```js
const persona = new Object();
```

### Usando la notación literal de objetos `{}`

```js
const persona = {};
```

## Agregar propiedades a un objeto

Para agregar propiedades a un objeto podemos usar la notación de punto o la notación de corchetes.

### Usando la notación de punto

```js
const persona = {};

persona.nombre = "Juan";
persona.edad = 30;
```

### Usando la notación de corchetes

```js
const persona = {};

persona["nombre"] = "Juan";
persona["edad"] = 30;
```

Este tipo de notación es muy útil para varios aspectos, por ejemplo, podemos agregar propiedades usando variables:

```js
const nombrePropiedad = "nombre";

const persona = {};

persona[nombrePropiedad] = "Juan";

console.log(persona.nombre); // Juan
```

También podemos usar nombres de propiedades que tengan más de una palabra:

```js
const persona = {
  "nombre completo": "Juan Perez",
  edad: 30,
};

console.log(persona["nombre completo"]); // Juan Perez

// Esto no puede ser usado en la notación punto

console.log(persona.nombre completo); // SyntaxError: Unexpected identifier
```

Y por último, podemos usar algo llamado "computed properties" en Javascript, que básicamente son propiedades agregadas usando variables:

```js
let fullName = "nombre completo";

const persona = {
  nombre: "Juan",
  edad: 30,
  [fullName]: "Juan Perez",
};

```


## Eliminar una propiedad de un objeto

Para eliminar una propiedad de un objeto podemos usar la palabra clave `delete`.

```js
const persona = {
  nombre: "Juan",
  edad: 30,
  "nombre completo": "Juan Perez",
};

console.log(persona); // { nombre: "Juan", edad: 30, "nombre completo": "Juan Perez" }

delete persona.edad;
delete persona["nombre completo"];

console.log(persona); // { nombre: "Juan" }
```

:::tip Ojo

Si guardamos los valores de las propiedades de un objeto en variables, y estas tienen el mismo nombre que las propiedades, podemos usar una especie de "shorthand":

```javascript
function createUser(name, email) {
  return {
    name: name,
    email: email,
  }
};

let user = createUser('Juan', 'juan123@gmail.com');
console.log(user) // { name: "Juan", email: "juan123@gmail.com" }

// Podemos reemplazar lo anterior, con lo siguiente:

function createUserShorthand(name, email) {
  return { name, email }
}

let otherUser = createUserShorthand('Albert', 'albert123@gmail.com');
console.log(otherUser) // { name: "Albert", email: "albert123@gmail.com" }
```

En este ejemplo vemos que la última función `createUserShorthand` solo retorna **name** e **email**, ya que tanto la propiedad como el nombre de la variable que guarda el valor de esa propiedad, son iguales.

:::

:::note Nota

A diferencia de las variables, las propiedades de un objeto no tienen ninguna restricción a la hora de nombrarlas, es decir, que incluso aceptan palabras reservadas.

```js
const obj = {
  for: 1,
  return: 2,
  let: 3
};


console.log(obj.for + obj.return + obj.let) // 6
```

Otros tipos serán convertidos automáticamene a string.

```js
const otherObj = {
  0: "aprendiendo"
};

console.log(otherObj["0"]) // aprendiendo
console.log(otherObj[0]) // aprendiendo
console.log(otherObj.0) //
```

:::
