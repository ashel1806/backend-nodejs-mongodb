---
title: 'Manipulación de archivos'
slug: '/node-files'
sidebar_position: 5
---

La manipulación de archivos es una tarea común en la programación, y Node.js proporciona un conjunto completo de API para trabajar con archivos y directorios. En este artículo, exploraremos cómo trabajar con archivos en Node.js, incluyendo la creación, lectura, escritura y eliminación de archivos.

## Creación de archivos

Para crear un archivo en Node.js, podemos utilizar el módulo `fs` (file system). El método `fs.writeFile()` se utiliza para crear un archivo y escribir contenido en él. Este método toma tres argumentos: el nombre del archivo que se va a crear, el contenido que se va a escribir y un callback que se ejecutará una vez que se complete la escritura.

```js
const fs = require('fs');

fs.writeFile('ejemplo.txt', 'Este es el contenido del archivo.', function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('El archivo fue creado correctamente.');
  }
});
```

En el ejemplo anterior, se crea un archivo llamado ```ejemplo.txt``` y se escribe el contenido **Este es el contenido del archivo.** en él. Si se produce algún error durante la escritura, se muestra un mensaje de error. De lo contrario, se muestra un mensaje de éxito.

## Lectura de archivos

Para leer el contenido de un archivo en Node.js, podemos utilizar el método `fs.readFile()`. Este método toma dos argumentos: el nombre del archivo que se va a leer y un callback que se ejecutará una vez que se complete la lectura.

```js
const fs = require('fs');

fs.readFile('ejemplo.txt', function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data.toString());
  }
});
```

En el ejemplo anterior, se lee el contenido del archivo `ejemplo.txt` utilizando el método `fs.readFile()`. Si se produce algún error durante la lectura, se muestra un mensaje de error. De lo contrario, se muestra el contenido del archivo en la consola.

## Escritura en archivos

Para escribir contenido en un archivo existente en Node.js, podemos utilizar el método `fs.writeFile()` que ya vimos anteriormente

```js
const fs = require('fs');

fs.writeFile('ejemplo.txt', 'Este es el nuevo contenido del archivo.', function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('El archivo fue actualizado correctamente.');
  }
});
```

En el ejemplo anterior, se escribe el nuevo contenido **Este es el nuevo contenido del archivo.** en el archivo `ejemplo.txt`. Si se produce algún error durante la escritura, se muestra un mensaje de error. De lo contrario, se muestra un mensaje de éxito.

## Eliminación de un archivo

Para eliminar un archivo en Node.js, podemos utilizar el método `fs.unlink()`. Este método toma dos argumentos: el nombre del archivo que se va a eliminar y un callback que se ejecutará una vez que se complete la eliminación.

```js
const fs = require('fs');

fs.unlink('ejemplo.txt', function(err) {
  if (err) {
    console.error(err)
  } else {
    console.log('El archivo fue eliminado correctamente.');
  }
});
```

En el ejemplo anterior, se elimina el archivo `ejemplo.txt`. Si se produce algún error durante la eliminación, se muestra un mensaje de error. De lo contrario, se muestra un mensaje de éxito.

## Copia de archivos en Node.js

Para copiar un archivo en Node.js, podemos utilizar el método `fs.copyFile()`. Este método toma tres argumentos: el nombre del archivo que se va a copiar, el nombre del archivo de destino y una función de devolución de llamada que se ejecutará una vez que se complete la copia.

```javascript
const fs = require('fs');

fs.copyFile('ejemplo.txt', 'ejemplo-copia.txt', function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('El archivo fue copiado correctamente.');
  }
});
```

En el ejemplo anterior, se copia el archivo `ejemplo.txt` en un nuevo archivo llamado `ejemplo-copia.txt`. Si se produce algún error durante la copia, se muestra un mensaje de error. De lo contrario, se muestra un mensaje de éxito.
