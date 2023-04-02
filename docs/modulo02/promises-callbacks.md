---
title: 'Callbacks y Promesas'
slug: '/promises'
sidebar_position: 5
---

# Callbacks y Promesas

## Asíncronismo

Para entender muy bien el funcionamiento de los callbacks y las promesas, debemos entender que es la programación asíncrona y cómo funciona en javascript.

La programación asíncrona es un concepto que se refiere a que el código se ejecuta de forma no secuencial. Esto quiere decir que el código no se ejecuta de arriba hacia abajo, sino que se ejecuta de forma concurrente. Por ejemplo, si tenemos una función que realiza una petición a una API, esta función puede tardar un tiempo en devolvernos la respuesta. Si tenemos que ejecutar código después de que la petición se haya completado, podemos usar un callback para que se ejecute cuando la petición se haya completado.

```js
console.log("Inicio del programa");
console.log("Codigo ejecutandose ....");

setTimeout(() => {
  console.log("Realizando petición...");
  console.log("Petición realizada");
}, 2000);

console.log("Más Codigo ejecutandose ....");
console.log("Fin del programa");

// En la consola veremos lo siguiente:

// Inicio del programa
// Codigo ejecutandose ....
// Más Codigo ejecutandose ....
// Fin del programa

// Luego de 2 segundos veremos:

// Realizando petición...
// Petición realizada
```

## Callbacks

Recordemos que en javascript encontramos funciones de primera clase, es decir, que podemos pasar funciones como argumentos de otras funciones. Esto nos permite crear funciones que reciben otras funciones como argumentos para que sean *llamadas de vuelta* (call back). Cuando encontramos una función que recibe otra función como argumento, decimos que la función es de **orden superior**. Veamos un ejemplo:

```js
const operacion = (a, b, callback) => {
  const result = callback(a, b);
  console.log(result);
};

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

operacion(1, 2, suma); // 3
operacion(1, 2, resta); // -1
```

En este caso la función `operacion` recibe como parámetros a `a`, `b` y `callback`, este último es una función que recibe dos argumentos y devuelve un resultado. Luego tenemos dos funciones: `suma` y `resta`, las cuales realizan la operación correspondiente. Finalmente, llamamos a la función `operacion` con los parámetros `a`, `b` y `callback`, en este caso `suma` o `resta`.


### ¿Por qué usar callbacks?

Los callbacks son una forma de manejar el asincronismo en javascript. Esto quiere decir que podemos ejecutar código de forma asíncrona, es decir, que no se ejecuta de forma secuencial. Por ejemplo, si tenemos una función que realiza una petición a una API, esta función puede tardar un tiempo en devolvernos la respuesta. Si tenemos que ejecutar código después de que la petición se haya completado, podemos usar un callback para que se ejecute cuando la petición se haya completado.

```js
const request = (callback) => {
  setTimeout(() => {
    console.log('Se realizó la petición...');
    callback();
  }, 2000);
};

request(() => {
  console.log('Callback ejecutado');
});

// Luego de 2 segundos veremos:

// Se realizó la petición...
// Callback ejecutado
```

### Callback Hell

Cuando tenemos funciones que reciben otras funciones como argumentos, podemos anidarlas, es decir, llamar a una función dentro de otra función. Esto puede llegar a ser un problema, ya que puede llegar a ser difícil de leer y mantener. A esta manera de anidar callback tras callback se le conoce como **Callback Hell**.

![callback-hell](https://res.cloudinary.com/practicaldev/image/fetch/s--c0aEZX7m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg)

### Soluciones

- **Promesas**: Las promesas son un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Una promesa puede estar en uno de tres estados: pendiente, terminada o rechazada.

- **Async/Await**: Async/Await es una forma de escribir código asíncrono que se ve y se comporta de forma síncrona.

## Promesas

Al igual que en la vida real, las promesas en javascript son una forma de asegurar que algo va a suceder en el futuro. En este caso, las promesas son un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Una promesa puede estar en uno de tres estados:

- **Pendiente (pending)**: Estado inicial, ni terminada ni rechazada.
- **Terminada (fullfilled)**: Significa que la operación asíncrona se completó con éxito.
- **Rechazada (rejected)**: Significa que la operación asíncrona falló.

Veamos el siguiete ejemplo en el que tenemos una función que de manera asincrona genera un archivo de sonido según la configuración que le pasemos como parámetro y que además recibe dos callbacks: uno para cuando la operación se completa con éxito y otro para cuando la operación falla.

```js
function exitoCallback(resultado) {
  console.log(`El audio se puede encontrar en la URL: ${resultado}`);
}

function errorCallback(error) {
  console.log(`Error al generar el archivo de audio: ${error}`);
}

crearArchivoSonidoAsincrono(configuracion, exitoCallback, errorCallback);
```

Si la función crearArchivoSonidoAsincrono se ejecuta correctamente, se ejecutará el callback de éxito, de lo contrario se ejecutará el callback de error. Esto funciona bien, pero si tenemos que ejecutar más código después de que la función se haya ejecutado, tenemos que anidar los callbacks, lo que puede llegar a ser un problema.

Para solucionar este problema, podemos usar promesas. Las promesas nos permiten ejecutar código de forma asíncrona y manejar el resultado de esa operación de forma más sencilla. Veamos un ejemplo:

```js
const crearArchivoSonidoAsincrono = (configuracion) => {
  return new Promise((resolve, reject) => {
    // Aquí se ejecuta el código asíncrono
    // Si la operación se completa con éxito, llamamos a resolve
    // Si la operación falla, llamamos a reject
  });
};

crearArchivoSonidoAsincrono(configuracion)
  .then((resultado) => {
    console.log(`El audio se puede encontrar en la URL: ${resultado}`);
  })
  .catch((error) => {
    console.log(`Error al generar el archivo de audio: ${error}`);
  });
```

En este caso, la función `crearArchivoSonidoAsincrono` devuelve una promesa. Esta promesa recibe como parámetro una función que recibe dos argumentos: `resolve` y `reject`. Si la operación se completa con éxito, llamamos a `resolve` con el resultado de la operación. Si la operación falla, llamamos a `reject` con el error de la operación. Luego, llamamos a la función `then` de la promesa, la cual recibe como parámetro una función que se ejecutará cuando la promesa se resuelva con éxito. Por último, llamamos a la función `catch` de la promesa, la cual recibe como parámetro una función que se ejecutará cuando la promesa se rechace.

Gracias a `then` y `catch`, podemos anidar las promesas y manejar el resultado de forma más sencilla.

```js
hazAlgo()
  .then((resultado) => hazOtraCosa(resultado))
  .then((nuevoResultado) => hazOtraCosaMas(nuevoResultado))
  .then((resultadoFinal) => {
    console.log(`El resultado final es: ${resultadoFinal}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
```

:::danger Importante

Cuando estemos anidando promesas, es importante tener en cuenta que cada función que llamamos debe devolver una promesa. Si no lo hace, el resultado de la función no será una promesa y no podremos anidar las promesas.

```js
hazAlgo()
  .then((resultado) => hazOtraCosa(resultado)) // Esta función devuelve una promesa
  .then((nuevoResultado) => {
    // Esta función no devuelve una promesa
    // Por lo tanto, no podemos anidar las promesas
    const resultado = hazOtraCosaMas(nuevoResultado);
    return resultado;
  })
  .then((resultadoFinal) => {
    console.log(`El resultado final es: ${resultadoFinal}`);
  })
```

:::

## Async/Await

Esta nueva forma de escribir código asíncrono se añadió a javascript en la versión ES2017. Nos permite ver el código asíncrono como si fuera síncrono. Veamos un ejemplo:

```js
// Usamos fetch() para hacer una petición HTTP

// Usando promesas
const obtenerUsuarios = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => console.log(users))
    .catch((error) => console.log(error));
};

// Usando async/await
const obtenerUsuarios = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.log(error);
  }
};
```

:::danger Devuelve una promesa

Cuando usamos async/await, la función asincrónica devuelve una promesa. Por lo tanto, no podemos hacer lo siguiente:

```js
const obtenerUsuarios = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    // console.log(users);

    return users;
  } catch (error) {
    console.log(error);
  }
};

const promise = obtenerUsuarios();
console.log(promise); // Promise { <pending> }
```

Lo correcto sería:

```js
const promise = obtenerUsuarios();
promise.then((users) => console.log(users));
// [...]
```
