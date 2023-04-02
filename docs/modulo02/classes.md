---
title: 'Clases'
slug: '/classes'
sidebar_position: 6
---

# Clases y Objetos

Las clases y objetos son parte de la programación orientada a objetos. En javascript las clases se agregaron en la versión ES6, y antes de eso se usaban las funciones constructoras para crear objetos.

## Clases

Las clases vendrían a ser una representación de un objeto, y se usan para crear instancias de ese objeto. Estos objetos son representaciones de la vida real, como por ejemplo un coche, un usuario, un producto, etc.

A modo de analogía podriamos decir que una clase es como un molde para galletas, mientras que los objetos son las galletas que se hacen con ese molde. Estas galletas pueden ser de distintos sabores, formas, tamaños, etc. pero todas tienen la misma estructura básica.

Para crear una clase usamos la palabra reservada `class` seguida del nombre de la clase, y entre llaves las propiedades y métodos de la clase.

```js
class Coche {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }

  arrancar() {
    console.log('El coche ha arrancado');
  }

  parar() {
    console.log('El coche ha parado');
  }
}
```

### Constructor

El constructor es un método especial que se ejecuta cuando se crea una instancia de la clase. En el constructor se definen los atributos del objeto, y se le asignan los valores que se pasan como parámetros.

En el ejemplo anterior tenemos tres atributos: marca, modelo y color. Estos atributos se definen dentro del constructor de la clase. Estos parámetros se pasan al crear una instancia de la clase.

### Atributos

Los atributos son las caracteristicas que podemos encontrar en un objeto y que además definen su estado. En el ejemplo anterior tenemos tres atributos: marca, modelo y color. Estos atributos se definen dentro del constructor de la clase.

### Métodos

Los métodos son las acciones que podemos realizar sobre un objeto. En el ejemplo anterior tenemos dos métodos: arrancar y parar. Estos métodos se definen fuera del constructor de la clase y no necesitan la palabra reservada `function`.

#### Métodos estáticos

Los métodos estáticos son métodos que se pueden ejecutar sin necesidad de crear una instancia de la clase. Para definir un método estático usamos la palabra reservada `static` antes del nombre del método.

```js
class Calculadora {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Calculadora.sumar(1, 2));
// 3
```

#### Getters y Setters

Los getters y setters son métodos especiales que nos permiten obtener y modificar respectivamente, los valores de los atributos de un objeto. Para definir un getter o un setter usamos la palabra reservada `get` o `set` antes del nombre del método.

```js
class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  // Getter
  get nombre() {
    return this._nombre;
  }

  // Setter
  set nombre(nombre) {
    this._nombre = nombre;
  }
}

const persona1 = new Persona('Juan', 25);

// Obtenemos el nombre de la persona
console.log(persona1.getNombre());
// Juan

// Modificamos el nombre de la persona
persona1.setNombre('Pedro');

console.log(persona1.getNombre());
// Pedro
```

## Instancias u Objetos

Una instancia es una copia de una clase. Es decir, una instancia es un objeto creado a partir de una clase. Para crear una instancia de una clase usamos la palabra reservada `new` seguida del nombre de la clase y entre paréntesis los parámetros que necesita el constructor.

```js
const coche1 = new Coche('Ford', 'Fiesta', 'Rojo');

console.log(coche1);
// Coche { marca: 'Ford', modelo: 'Fiesta', color: 'Rojo' }

coche1.arrancar();
// El coche ha arrancado

coche1.parar();
// El coche ha parado
```

## Herencia

La herencia es una característica de la programación orientada a objetos que nos permite crear nuevas clases a partir de otras clases. En javascript la herencia se realiza mediante la palabra reservada `extends` seguida de la clase que deseamos heredar.

Si la clase que hereda tiene un constructor, es necesario llamar al constructor de la clase padre usando la palabra reservada `super`.

```js
class Animal {
  constructor(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
  }

  comer() {
    console.log(`${this.nombre} está comiendo`);
  }
}

class Perro extends Animal {
  constructor(nombre, raza, color) {
    // Llamamos al constructor de la clase padre (Animal)
    super(nombre, raza);
    this.color = color;
  }

  ladrar() {
    console.log(`${this.nombre} está ladrando`);
  }
}

const firulais = new Perro('Firulais', 'Pastor Alemán', 'Café');

firulais.comer();
// Firulais está comiendo

firulais.ladrar();
// Firulais está ladrando
```

## Polimorfismo

El polimorfismo es una característica de la programación orientada a objetos que nos permite crear métodos con el mismo nombre en distintas clases. En javascript el polimorfismo se realiza mediante la sobrescritura de métodos.

```js
class Animal {
  constructor(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
  }

  comer() {
    console.log(`${this.nombre} está comiendo`);
  }

  hacerSonido() {
    console.log(`${this.nombre} está haciendo un sonido`);
  }
}

class Perro extends Animal {
  constructor(nombre, raza, color) {
    // Llamamos al constructor de la clase padre (Animal)
    super(nombre, raza);
    this.color = color;
  }

  hacerSonido() {
    console.log(`${this.nombre} está ladrando`);
  }
}

class Gato extends Animal {
  constructor(nombre, raza, color) {
    // Llamamos al constructor de la clase padre (Animal)
    super(nombre, raza);
    this.color = color;
  }

  hacerSonido() {
    console.log(`${this.nombre} está maullando`);
  }
}

const firulais = new Perro('Firulais', 'Pastor Alemán', 'Café');

firulais.comer();
// Firulais está comiendo

firulais.hacerSonido();
// Firulais está ladrando

const garfield = new Gato('Garfield', 'Común', 'Naranja');

garfield.comer();
// Garfield está comiendo

garfield.hacerSonido();
// Garfield está maullando
```

## this

En los ejemplos anteriores hemos visto que en muchos de los ejemplos usamos la palabra reservada `this`. La palabra reservada `this` hace referencia al objeto en el que se está ejecutando el código, es por ello que podemos acceder a los atributos y métodos de un objeto usando la palabra reservada `this`.

```js
class Persona {
  constructor(nombre, edad) {
    // Usamos la palabra reservada 'this' para asignar los valores de los
    // parámetros a los atributos del objeto Persona
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    // Usamos la palabra reservada 'this' para acceder a los atributos
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
  }
}

const persona1 = new Persona('Juan', 25);

persona1.saludar();
// Hola, me llamo Juan y tengo 25 años
```
