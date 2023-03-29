"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[897],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>y});var r=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function t(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):t(t({},a),e)),n},u=function(e){var a=d(e.components);return r.createElement(i.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,y=m["".concat(i,".").concat(p)]||m[p]||c[p]||l;return n?r.createElement(y,t(t({ref:a},u),{},{components:n})):r.createElement(y,t({ref:a},u))}));function y(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=n.length,t=new Array(l);t[0]=p;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[m]="string"==typeof e?e:o,t[1]=s;for(var d=2;d<l;d++)t[d]=n[d];return r.createElement.apply(null,t)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3412:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>t,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const l={title:"Arrays",slug:"/arrays",sidebar_position:3},t="Todo sobre los arrays",s={unversionedId:"modulo02/arrays",id:"modulo02/arrays",title:"Arrays",description:"Los arrays o arreglos son objetos en Javascript que nos permiten almacenar una colecci\xf3n de datos. Cada dato almacenado en un array tiene un \xedndice que nos permite acceder a \xe9l. Al ser objetos, los arrays tienen propiedades y m\xe9todos.",source:"@site/docs/modulo02/arrays.md",sourceDirName:"modulo02",slug:"/arrays",permalink:"/backend-nodejs-mongodb/arrays",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb.git/docs/modulo02/arrays.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Arrays",slug:"/arrays",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Objetos a fondo",permalink:"/backend-nodejs-mongodb/objects"},next:{title:"Modulo 03",permalink:"/backend-nodejs-mongodb/category/modulo-03"}},i={},d=[{value:"Crear un array",id:"crear-un-array",level:2},{value:"Usando el constructor <code>Array()</code> y la palabra clave <code>new</code>",id:"usando-el-constructor-array-y-la-palabra-clave-new",level:3},{value:"Usando la notaci\xf3n literal de arrays <code>[]</code>",id:"usando-la-notaci\xf3n-literal-de-arrays-",level:3},{value:"Acceder a un elemento de un array",id:"acceder-a-un-elemento-de-un-array",level:2},{value:"Operaciones sobre un array",id:"operaciones-sobre-un-array",level:2},{value:"Agregar elementos a un array",id:"agregar-elementos-a-un-array",level:3},{value:"Eliminar elementos de un array",id:"eliminar-elementos-de-un-array",level:3},{value:"Obtener el tama\xf1o de un array",id:"obtener-el-tama\xf1o-de-un-array",level:3},{value:"Iterar sobre un array",id:"iterar-sobre-un-array",level:3},{value:"M\xe9todos de los arrays",id:"m\xe9todos-de-los-arrays",level:2},{value:"Mutabilidad en Javascript",id:"mutabilidad-en-javascript",level:2},{value:"splice()",id:"splice",level:2},{value:"slice()",id:"slice",level:2},{value:"map()",id:"map",level:2},{value:"filter()",id:"filter",level:2},{value:"reduce()",id:"reduce",level:2},{value:"find()",id:"find",level:2}],u={toc:d},m="wrapper";function c(e){let{components:a,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"todo-sobre-los-arrays"},"Todo sobre los arrays"),(0,o.kt)("p",null,"Los arrays o arreglos son objetos en Javascript que nos permiten almacenar una colecci\xf3n de datos. Cada dato almacenado en un array tiene un \xedndice que nos permite acceder a \xe9l. Al ser objetos, los arrays tienen propiedades y m\xe9todos."),(0,o.kt)("h2",{id:"crear-un-array"},"Crear un array"),(0,o.kt)("p",null,"Para crear un array en Javascript podemos usar una de las dos maneras que existen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Usando el constructor ",(0,o.kt)("inlineCode",{parentName:"li"},"Array()")," y la palabra clave ",(0,o.kt)("inlineCode",{parentName:"li"},"new")),(0,o.kt)("li",{parentName:"ul"},"Usando la notaci\xf3n literal de arrays ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"))),(0,o.kt)("h3",{id:"usando-el-constructor-array-y-la-palabra-clave-new"},"Usando el constructor ",(0,o.kt)("inlineCode",{parentName:"h3"},"Array()")," y la palabra clave ",(0,o.kt)("inlineCode",{parentName:"h3"},"new")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = new Array("Manzana", "Pl\xe1tano", "Cereza");\n')),(0,o.kt)("h3",{id:"usando-la-notaci\xf3n-literal-de-arrays-"},"Usando la notaci\xf3n literal de arrays ",(0,o.kt)("inlineCode",{parentName:"h3"},"[]")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Manzana", "Pl\xe1tano", "Cereza"];\n')),(0,o.kt)("h2",{id:"acceder-a-un-elemento-de-un-array"},"Acceder a un elemento de un array"),(0,o.kt)("p",null,"Para acceder a un elemento de un array podemos usar la notaci\xf3n de corchetes ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")," y el \xedndice del elemento que queremos acceder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Manzana", "Pl\xe1tano", "Cereza"];\n\nconsole.log(frutas[0]); // Manzana\nconsole.log(frutas[1]); // Pl\xe1tano\nconsole.log(frutas[2]); // Cereza\n')),(0,o.kt)("h2",{id:"operaciones-sobre-un-array"},"Operaciones sobre un array"),(0,o.kt)("h3",{id:"agregar-elementos-a-un-array"},"Agregar elementos a un array"),(0,o.kt)("p",null,"Para agregar elementos a un array podemos usar el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"push()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Manzana", "Pl\xe1tano", "Cereza"];\n\nfrutas.push("Fresa");\n\nconsole.log(frutas); // ["Manzana", "Pl\xe1tano", "Cereza", "Fresa"]\n')),(0,o.kt)("h3",{id:"eliminar-elementos-de-un-array"},"Eliminar elementos de un array"),(0,o.kt)("p",null,"Para eliminar elementos de un array podemos usar el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"pop()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Manzana", "Pl\xe1tano", "Cereza"];\n\nfrutas.pop();\n\nconsole.log(frutas); // ["Manzana", "Pl\xe1tano"]\n')),(0,o.kt)("h3",{id:"obtener-el-tama\xf1o-de-un-array"},"Obtener el tama\xf1o de un array"),(0,o.kt)("p",null,"Para obtener el tama\xf1o de un array podemos usar la propiedad ",(0,o.kt)("inlineCode",{parentName:"p"},"length"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Manzana", "Pl\xe1tano", "Cereza"];\n\nconsole.log(frutas.length); // 3\n')),(0,o.kt)("h3",{id:"iterar-sobre-un-array"},"Iterar sobre un array"),(0,o.kt)("p",null,"Para iterar sobre un array podemos usar el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"forEach()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Manzana", "Pl\xe1tano", "Cereza"];\n\nfrutas.forEach((fruta) => {\n  console.log(fruta);\n});\n')),(0,o.kt)("h2",{id:"m\xe9todos-de-los-arrays"},"M\xe9todos de los arrays"),(0,o.kt)("p",null,"Los arrays tienen muchos m\xe9todos que nos permiten manipularlos. Algunos de los m\xe1s comunes son:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"push()"),": Agrega un elemento al final del array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pop()"),": Elimina el \xfaltimo elemento del array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unshift()"),": Agrega un elemento al inicio del array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"shift()"),": Elimina el primer elemento del array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"indexOf()"),": Devuelve el \xedndice del elemento que le pasemos como par\xe1metro"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"join()"),": Une todos los elementos de un array en un string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slice()"),": Extrae elementos de un array y devuelve un nuevo array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"splice()"),": Elimina elementos de un array y devuelve un nuevo array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reverse()"),": Invierte el orden de los elementos de un array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sort()"),": Ordena los elementos de un array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"map()"),": Crea un nuevo array con los resultados de la llamada a una funci\xf3n para cada elemento del array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filter()"),": Crea un nuevo array con todos los elementos que cumplan la condici\xf3n implementada por la funci\xf3n dada"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reduce()"),": Aplica una funci\xf3n a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un \xfanico valor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"find()"),": Devuelve el primer elemento de un array que cumpla con la condici\xf3n implementada por la funci\xf3n dada")),(0,o.kt)("p",null,"Antes de revisar cada uno de estos m\xe9todos hablemos sobre la mutabilidad en Javascript."),(0,o.kt)("h2",{id:"mutabilidad-en-javascript"},"Mutabilidad en Javascript"),(0,o.kt)("p",null,"La mutabilidad hace referencia a la capacidad de cambiar el estado de un objeto. En Javascript todos los tipos de datos de referencia son mutables, es decir, podemos cambiar su estado. Por ejemplo, podemos agregar elementos a un array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Manzana", "Pl\xe1tano", "Cereza"];\n\nfrutas.push("Fresa");\n\nconsole.log(frutas); // ["Manzana", "Pl\xe1tano", "Cereza", "Fresa"]\n')),(0,o.kt)("p",null,"En este caso, el array ",(0,o.kt)("inlineCode",{parentName:"p"},"frutas")," es un objeto que tiene una propiedad ",(0,o.kt)("inlineCode",{parentName:"p"},"length")," que nos indica el tama\xf1o del array. Cuando usamos el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"push()")," para agregar un elemento al array, el array ",(0,o.kt)("inlineCode",{parentName:"p"},"frutas")," cambia su estado y su propiedad ",(0,o.kt)("inlineCode",{parentName:"p"},"length")," pasa a tener el valor ",(0,o.kt)("inlineCode",{parentName:"p"},"4"),"."),(0,o.kt)("p",null,"La mutabilidad puede causar efectos secundarios en nuestra aplicaci\xf3n, por ejemplo, si tenemos varias funciones que actuan sobre un mismo tipo de dato y m\xe1s adelante en nuestra aplicaici\xf3n agregamos otra funci\xf3n, es muy probable que aparezcan errores en nuestra aplicaci\xf3n. Para evitar estos efectos secundarios podemos usar inmutabilidad."),(0,o.kt)("p",null,"Ahora s\xed, veamos los m\xe9todos que probablemente usaremos m\xe1s a menudo como desarrolladores backend."),(0,o.kt)("h2",{id:"splice"},"splice()"),(0,o.kt)("p",null,"Este m\xe9todo nos permite eliminar elementos de un array y devolver un nuevo array. Este m\xe9todo ",(0,o.kt)("strong",{parentName:"p"},"modifica")," el array original. Recibe dos par\xe1metros: el \xedndice de inicio y el n\xfamero de elementos a eliminar. El \xedndice de inicio es obligatorio y el n\xfamero de elementos a eliminar es opcional. Si no se pasa el n\xfamero de elementos a eliminar, el m\xe9todo elimina todos los elementos desde el \xedndice de inicio hasta el final del array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Creamos un array de frutas\nconst frutas = ["Manzana", "Pl\xe1tano", "Cereza", "Fresa", "Naranja"];\n\n// Usamos el m\xe9todo splice() para eliminar los elementos desde el \xedndice 1 hasta el 3\nconst frutasSeleccionadas = frutas.splice(1, 3);\n\nconsole.log(frutasSeleccionadas); // ["Pl\xe1tano", "Cereza", "Fresa"]\n\n// Arreglo original\nconsole.log(frutas); // ["Manzana", "Naranja"]\n')),(0,o.kt)("h2",{id:"slice"},"slice()"),(0,o.kt)("p",null,"Este m\xe9todo nos permite extraer elementos de un array y devolver un nuevo array. Este m\xe9todo ",(0,o.kt)("strong",{parentName:"p"},"no modifica")," el array original. Recibe dos par\xe1metros: el \xedndice de inicio y el \xedndice de fin. El \xedndice de inicio es obligatorio y el \xedndice de fin es opcional. Si no se pasa el \xedndice de fin, el m\xe9todo extrae todos los elementos desde el \xedndice de inicio hasta el final del array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Creamos un array de frutas\nconst frutas = ["Manzana", "Pl\xe1tano", "Cereza", "Fresa", "Naranja"];\n\n// Usamos el m\xe9todo slice() para extraer los elementos desde el \xedndice 1 hasta el 3\nconst frutasSeleccionadas = frutas.slice(1, 3);\n\nconsole.log(frutasSeleccionadas); // ["Pl\xe1tano", "Cereza"]\n\n// Arreglo original\nconsole.log(frutas); // ["Manzana", "Pl\xe1tano", "Cereza", "Fresa", "Naranja"]\n')),(0,o.kt)("h2",{id:"map"},"map()"),(0,o.kt)("p",null,"Este m\xe9todo nos permite recorrer todo el array y ejecutar un bloque de c\xf3digo por cada elemento del array. El m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"map()")," devuelve un nuevo array con los resultados de la ejecuci\xf3n del bloque de c\xf3digo por cada elemento del array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Creamos un array de n\xfameros\nconst numeros = [1, 2, 3, 4, 5];\n\n// Usamos el m\xe9todo map() para recorrer el array y multiplicar cada elemento por 2\nconst numerosPorDos = numeros.map((numero) => numero * 2);\n\nconsole.log(numerosPorDos); // [2, 4, 6, 8, 10]\n\n// Arreglo original\nconsole.log(numeros); // [1, 2, 3, 4, 5]\n\n// Vemos que este m\xe9todo no ha modificado el array original, por lo que podemos\n// decir que este m\xe9todo es inmutable\n")),(0,o.kt)("h2",{id:"filter"},"filter()"),(0,o.kt)("p",null,"Este m\xe9todo nos permite filtrar los elementos de un array que cumplan con una condici\xf3n. El m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"filter()")," devuelve un nuevo array con los elementos que cumplan dicha condici\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Creamos un array de n\xfameros\nconst numeros = [1, 2, 3, 4, 5];\n\n// Usamos el m\xe9todo filter() para filtrar los n\xfameros pares\nconst numerosPares = numeros.filter((numero) => numero % 2 === 0);\n\nconsole.log(numerosPares); // [2, 4]\n\n// Arreglo original\nconsole.log(numeros); // [1, 2, 3, 4, 5]\n\n// Vemos que este m\xe9todo no ha modificado el array original, por lo que podemos\n// decir que este m\xe9todo tambi\xe9n es inmutable\n")),(0,o.kt)("h2",{id:"reduce"},"reduce()"),(0,o.kt)("p",null,"Este m\xe9todo nos permite reducir un array a un \xfanico valor. El m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce()")," recibe una funci\xf3n que recibe dos par\xe1metros: el acumulador y el valor actual. La funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce()")," ejecuta la funci\xf3n que le pasamos por cada elemento del array y el resultado de la ejecuci\xf3n de la funci\xf3n se almacena en el acumulador. Al finalizar la ejecuci\xf3n de la funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce()")," devuelve el valor del acumulador."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Creamos un array de n\xfameros\nconst numeros = [1, 2, 3, 4, 5];\n\n// Usamos el m\xe9todo reduce() para sumar todos los elementos del array\nconst suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);\n\nconsole.log(suma); // 15\n\n// Arreglo original\nconsole.log(numeros); // [1, 2, 3, 4, 5]\n")),(0,o.kt)("h2",{id:"find"},"find()"),(0,o.kt)("p",null,"Este m\xe9todo nos permite encontrar el primer elemento de un array que cumpla con una condici\xf3n. El m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"find()")," devuelve el primer elemento que cumpla con la condici\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Creamos un array de n\xfameros\nconst numeros = [1, 2, 3, 4, 5];\n\n// Usamos el m\xe9todo find() para encontrar el primer n\xfamero par\nconst numeroPar = numeros.find((numero) => numero % 2 === 0);\n\nconsole.log(numeroPar); // 2\n\n// Arreglo original\nconsole.log(numeros); // [1, 2, 3, 4, 5]\n")))}c.isMDXComponent=!0}}]);