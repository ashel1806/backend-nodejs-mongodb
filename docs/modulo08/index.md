---
title: 'Conectandonos a MongoDB'
slug: '/mongodb-connect'
sidebar_position: 1
---

# Conectándonos a MongoDB

Para conectarnos a MongoDB desde nuestra pequeña aplicación con NodeJS, necesitamos primero una URI de conexión, la cual se puede obtener siguiente los pasos del [módulo 07](/mongodb-setup).

Luego de obtener la URI, tenemos que elegir como nos conectaremos a la base de datos, para ello tenemos dos opciones:

- Usar el [driver oficial](https://www.mongodb.com/docs/drivers/node/current/quick-start/) de MongoDB
- Usar un ORM (Object Relational Mapper)

En este caso usaremos un ORM (mongoose), ya que nos permite trabajar con la base de datos de una forma más sencilla y nos permite abstraernos de la sintaxis de MongoDB.

## ¿Qué es un ORM?

Los mapeadores objeto-relacional (ORM, por sus siglas en inglés) son herramientas que permiten la interacción entre bases de datos y nuetras aplicaciones. Estos mapeadores facilitan el proceso de almacenamiento, recuperación y manipulación de datos en un lenguaje de programación determinado. Los ORM eliminan la necesidad de escribir consultas SQL o NoSQL manualmente, ya que proporcionan una capa de abstracción que permite interactuar con la base de datos utilizando métodos y operaciones orientadas a objetos. Al utilizar un ORM, los desarrolladores pueden trabajar con los datos de manera más intuitiva y eficiente, abstrayéndose de la complejidad de los detalles de la estructura de la base de datos subyacente. Los ORM también ofrecen beneficios adicionales, como la generación automática de consultas, la gestión de la persistencia y la facilitación de las tareas de mantenimiento y migración de la base de datos

## Mongoose

[Mongoose](https://mongoosejs.com/) es un ORM para MongoDB en Node.js. Simplifica la interacción con la base de datos MongoDB al proporcionar una interfaz sencilla y poderosa para definir esquemas de datos, crear modelos y realizar operaciones de consulta, inserción, actualización y eliminación de documentos. Con Mongoose, puedes trabajar con objetos JavaScript familiares y aprovechar funciones avanzadas como validaciones, hooks y asociaciones entre documentos, facilitando el desarrollo de aplicaciones Node.js con MongoDB.

Para instalar mongoose en nuestro proyecto debemos ejecutar el siguiente comando:

```bash
npm install mongoose
```

### Schemas

En mongoose uno de los conceptos más importantes son los [schemas](https://mongoosejs.com/docs/guide.html#definition), los cuales nos permiten definir la estructura de nuestros documentos. Para crear un schema debemos hacer lo siguiente:

```js
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
});

module.exports = mongoose.model('User', Schema);
```

En el ejemplo anterior, creamos un schema para un usuario, el cual tiene los siguientes campos:

- name
- age
- email
- password

Luego de definir nuestros schemas, creamos un modelo, el cual nos permite interactuar con la base de datos. Para crear un modelo debemos hacer lo siguiente:

```js
const model = mongoose.model('<nombre del modelo>', <schema>);
```

Al definir nuestros schemas, podemos agregar algunas opciones que nos permiten definir algunas validaciones, por ejemplo:

```js
const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
);

module.exports = mongoose.model('User', Schema);
```

En el ejemplo anterior, agregamos algunas validaciones a nuestros campos, por ejemplo:

- name: es requerido
- age: es requerido
- email: es requerido y debe ser único
- password: es requerido

Existen varios tipos de validaciones y opciones que podemos agregar a nuestros schemas, para más información puedes revisar la [documentación](https://mongoosejs.com/docs/schematypes.html#schematype-options).

### Consultas a la base de datos

Al crear un modelo, podemos realizar diferentes consultas a la base de datos utilizando los métodos que nos proporciona mongoose, por ejemplo:

```js
const User = require('./models/User');

// Crear un usuario
const user = await User.create({
  name: 'John Doe',
  age: 30,
  email: 'test_prueba@gmail.com'
});

// Obtener todos los usuarios
const allUsers = await User.find({});

// Obtener un usuario por su id
const userById = await User.findById('id');

// Actualizar un usuario por su id
const updatedUser = await User.findByIdAndUpdate('id', { age: 35 }, { new: true });

// Eliminar un usuario por su id
const deletedUser = await User.findByIdAndDelete('id');
```

### Relaciones en MongoDB

En MongoDB no existen las relaciones como tal, pero podemos simularlas utilizando referencias. Para ello, debemos agregar un campo en nuestro schema que haga referencia a otro schema, por ejemplo:

```js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
);

module.exports = mongoose.model('User', UserSchema);
```

En el ejemplo anterior, agregamos un campo llamado `posts`, el cual es un arreglo de `ObjectId` que hace referencia a un `Post`.

Luego de agregar el campo, podemos realizar consultas a la base de datos para obtener los posts de un usuario, por ejemplo:

```js
const user = await User.findById('id').populate('posts');
```

En el ejemplo anterior, obtenemos un usuario por su id y luego utilizamos el método `populate` para obtener los posts del usuario.


