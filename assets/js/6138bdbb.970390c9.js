"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[8862],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>b});var o=n(7294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function t(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,o,s=function(e,a){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),i=function(e){var a=o.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):t(t({},a),e)),n},d=function(e){var a=i(e.components);return o.createElement(c.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(n),p=s,b=u["".concat(c,".").concat(p)]||u[p]||m[p]||r;return n?o.createElement(b,t(t({ref:a},d),{},{components:n})):o.createElement(b,t({ref:a},d))}));function b(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,t=new Array(r);t[0]=p;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[u]="string"==typeof e?e:s,t[1]=l;for(var i=2;i<r;i++)t[i]=n[i];return o.createElement.apply(null,t)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4799:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var o=n(7462),s=(n(7294),n(3905));const r={title:"Clases",slug:"/classes",sidebar_position:6},t="Clases y Objetos",l={unversionedId:"modulo02/classes",id:"modulo02/classes",title:"Clases",description:"Las clases y objetos son parte de la programaci\xf3n orientada a objetos. En javascript las clases se agregaron en la versi\xf3n ES6, y antes de eso se usaban las funciones constructoras para crear objetos.",source:"@site/docs/modulo02/classes.md",sourceDirName:"modulo02",slug:"/classes",permalink:"/backend-nodejs-mongodb/classes",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb/tree/main/docs/modulo02/classes.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Clases",slug:"/classes",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Callbacks y Promesas",permalink:"/backend-nodejs-mongodb/promises"},next:{title:"Modulo 03",permalink:"/backend-nodejs-mongodb/category/modulo-03"}},c={},i=[{value:"Clases",id:"clases",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Atributos",id:"atributos",level:3},{value:"M\xe9todos",id:"m\xe9todos",level:3},{value:"M\xe9todos est\xe1ticos",id:"m\xe9todos-est\xe1ticos",level:4},{value:"Getters y Setters",id:"getters-y-setters",level:4},{value:"Instancias u Objetos",id:"instancias-u-objetos",level:2},{value:"Herencia",id:"herencia",level:2},{value:"Polimorfismo",id:"polimorfismo",level:2},{value:"this",id:"this",level:2}],d={toc:i},u="wrapper";function m(e){let{components:a,...n}=e;return(0,s.kt)(u,(0,o.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"clases-y-objetos"},"Clases y Objetos"),(0,s.kt)("p",null,"Las clases y objetos son parte de la programaci\xf3n orientada a objetos. En javascript las clases se agregaron en la versi\xf3n ES6, y antes de eso se usaban las funciones constructoras para crear objetos."),(0,s.kt)("h2",{id:"clases"},"Clases"),(0,s.kt)("p",null,"Las clases vendr\xedan a ser una representaci\xf3n de un objeto, y se usan para crear instancias de ese objeto. Estos objetos son representaciones de la vida real, como por ejemplo un coche, un usuario, un producto, etc."),(0,s.kt)("p",null,"A modo de analog\xeda podriamos decir que una clase es como un molde para galletas, mientras que los objetos son las galletas que se hacen con ese molde. Estas galletas pueden ser de distintos sabores, formas, tama\xf1os, etc. pero todas tienen la misma estructura b\xe1sica."),(0,s.kt)("p",null,"Para crear una clase usamos la palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"class")," seguida del nombre de la clase, y entre llaves las propiedades y m\xe9todos de la clase."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class Coche {\n  constructor(marca, modelo, color) {\n    this.marca = marca;\n    this.modelo = modelo;\n    this.color = color;\n  }\n\n  arrancar() {\n    console.log('El coche ha arrancado');\n  }\n\n  parar() {\n    console.log('El coche ha parado');\n  }\n}\n")),(0,s.kt)("h3",{id:"constructor"},"Constructor"),(0,s.kt)("p",null,"El constructor es un m\xe9todo especial que se ejecuta cuando se crea una instancia de la clase. En el constructor se definen los atributos del objeto, y se le asignan los valores que se pasan como par\xe1metros."),(0,s.kt)("p",null,"En el ejemplo anterior tenemos tres atributos: marca, modelo y color. Estos atributos se definen dentro del constructor de la clase. Estos par\xe1metros se pasan al crear una instancia de la clase."),(0,s.kt)("h3",{id:"atributos"},"Atributos"),(0,s.kt)("p",null,"Los atributos son las caracteristicas que podemos encontrar en un objeto y que adem\xe1s definen su estado. En el ejemplo anterior tenemos tres atributos: marca, modelo y color. Estos atributos se definen dentro del constructor de la clase."),(0,s.kt)("h3",{id:"m\xe9todos"},"M\xe9todos"),(0,s.kt)("p",null,"Los m\xe9todos son las acciones que podemos realizar sobre un objeto. En el ejemplo anterior tenemos dos m\xe9todos: arrancar y parar. Estos m\xe9todos se definen fuera del constructor de la clase y no necesitan la palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"function"),"."),(0,s.kt)("h4",{id:"m\xe9todos-est\xe1ticos"},"M\xe9todos est\xe1ticos"),(0,s.kt)("p",null,"Los m\xe9todos est\xe1ticos son m\xe9todos que se pueden ejecutar sin necesidad de crear una instancia de la clase. Para definir un m\xe9todo est\xe1tico usamos la palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"static")," antes del nombre del m\xe9todo."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class Calculadora {\n  static sumar(a, b) {\n    return a + b;\n  }\n}\n\nconsole.log(Calculadora.sumar(1, 2));\n// 3\n")),(0,s.kt)("h4",{id:"getters-y-setters"},"Getters y Setters"),(0,s.kt)("p",null,"Los getters y setters son m\xe9todos especiales que nos permiten obtener y modificar respectivamente, los valores de los atributos de un objeto. Para definir un getter o un setter usamos la palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," o ",(0,s.kt)("inlineCode",{parentName:"p"},"set")," antes del nombre del m\xe9todo."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class Persona {\n  constructor(nombre, edad) {\n    this._nombre = nombre;\n    this._edad = edad;\n  }\n\n  // Getter\n  get nombre() {\n    return this._nombre;\n  }\n\n  // Setter\n  set nombre(nombre) {\n    this._nombre = nombre;\n  }\n}\n\nconst persona1 = new Persona('Juan', 25);\n\n// Obtenemos el nombre de la persona\nconsole.log(persona1.getNombre());\n// Juan\n\n// Modificamos el nombre de la persona\npersona1.setNombre('Pedro');\n\nconsole.log(persona1.getNombre());\n// Pedro\n")),(0,s.kt)("h2",{id:"instancias-u-objetos"},"Instancias u Objetos"),(0,s.kt)("p",null,"Una instancia es una copia de una clase. Es decir, una instancia es un objeto creado a partir de una clase. Para crear una instancia de una clase usamos la palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"new")," seguida del nombre de la clase y entre par\xe9ntesis los par\xe1metros que necesita el constructor."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const coche1 = new Coche('Ford', 'Fiesta', 'Rojo');\n\nconsole.log(coche1);\n// Coche { marca: 'Ford', modelo: 'Fiesta', color: 'Rojo' }\n\ncoche1.arrancar();\n// El coche ha arrancado\n\ncoche1.parar();\n// El coche ha parado\n")),(0,s.kt)("h2",{id:"herencia"},"Herencia"),(0,s.kt)("p",null,"La herencia es una caracter\xedstica de la programaci\xf3n orientada a objetos que nos permite crear nuevas clases a partir de otras clases. En javascript la herencia se realiza mediante la palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"extends")," seguida de la clase que deseamos heredar."),(0,s.kt)("p",null,"Si la clase que hereda tiene un constructor, es necesario llamar al constructor de la clase padre usando la palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"super"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class Animal {\n  constructor(nombre, raza) {\n    this.nombre = nombre;\n    this.raza = raza;\n  }\n\n  comer() {\n    console.log(`${this.nombre} est\xe1 comiendo`);\n  }\n}\n\nclass Perro extends Animal {\n  constructor(nombre, raza, color) {\n    // Llamamos al constructor de la clase padre (Animal)\n    super(nombre, raza);\n    this.color = color;\n  }\n\n  ladrar() {\n    console.log(`${this.nombre} est\xe1 ladrando`);\n  }\n}\n\nconst firulais = new Perro('Firulais', 'Pastor Alem\xe1n', 'Caf\xe9');\n\nfirulais.comer();\n// Firulais est\xe1 comiendo\n\nfirulais.ladrar();\n// Firulais est\xe1 ladrando\n")),(0,s.kt)("h2",{id:"polimorfismo"},"Polimorfismo"),(0,s.kt)("p",null,"El polimorfismo es una caracter\xedstica de la programaci\xf3n orientada a objetos que nos permite crear m\xe9todos con el mismo nombre en distintas clases. En javascript el polimorfismo se realiza mediante la sobrescritura de m\xe9todos."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class Animal {\n  constructor(nombre, raza) {\n    this.nombre = nombre;\n    this.raza = raza;\n  }\n\n  comer() {\n    console.log(`${this.nombre} est\xe1 comiendo`);\n  }\n\n  hacerSonido() {\n    console.log(`${this.nombre} est\xe1 haciendo un sonido`);\n  }\n}\n\nclass Perro extends Animal {\n  constructor(nombre, raza, color) {\n    // Llamamos al constructor de la clase padre (Animal)\n    super(nombre, raza);\n    this.color = color;\n  }\n\n  hacerSonido() {\n    console.log(`${this.nombre} est\xe1 ladrando`);\n  }\n}\n\nclass Gato extends Animal {\n  constructor(nombre, raza, color) {\n    // Llamamos al constructor de la clase padre (Animal)\n    super(nombre, raza);\n    this.color = color;\n  }\n\n  hacerSonido() {\n    console.log(`${this.nombre} est\xe1 maullando`);\n  }\n}\n\nconst firulais = new Perro('Firulais', 'Pastor Alem\xe1n', 'Caf\xe9');\n\nfirulais.comer();\n// Firulais est\xe1 comiendo\n\nfirulais.hacerSonido();\n// Firulais est\xe1 ladrando\n\nconst garfield = new Gato('Garfield', 'Com\xfan', 'Naranja');\n\ngarfield.comer();\n// Garfield est\xe1 comiendo\n\ngarfield.hacerSonido();\n// Garfield est\xe1 maullando\n")),(0,s.kt)("h2",{id:"this"},"this"),(0,s.kt)("p",null,"En los ejemplos anteriores hemos visto que en muchos de los ejemplos usamos la palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"this"),". La palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," hace referencia al objeto en el que se est\xe1 ejecutando el c\xf3digo, es por ello que podemos acceder a los atributos y m\xe9todos de un objeto usando la palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class Persona {\n  constructor(nombre, edad) {\n    // Usamos la palabra reservada 'this' para asignar los valores de los\n    // par\xe1metros a los atributos del objeto Persona\n    this.nombre = nombre;\n    this.edad = edad;\n  }\n\n  saludar() {\n    // Usamos la palabra reservada 'this' para acceder a los atributos\n    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} a\xf1os`);\n  }\n}\n\nconst persona1 = new Persona('Juan', 25);\n\npersona1.saludar();\n// Hola, me llamo Juan y tengo 25 a\xf1os\n")))}m.isMDXComponent=!0}}]);