"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[2274],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>b});var t=o(7294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return o?t.createElement(b,i(i({ref:n},d),{},{components:o})):t.createElement(b,i({ref:n},d))}));function b(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9744:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=o(7462),a=(o(7294),o(3905));const r={title:"JSON",slug:"/json",sidebar_position:4},i="JSON (JavaScript Object Notation)",s={unversionedId:"modulo03/json",id:"modulo03/json",title:"JSON",description:"JSON es un formato de intercambio de datos que utiliza una sintaxis basada en JavaScript. Fue dise\xf1ado para ser f\xe1cil de leer y escribir, y para ser utilizado en aplicaciones web y m\xf3viles. JSON es un formato de texto plano, lo que lo hace f\xe1cil de transmitir a trav\xe9s de la red.",source:"@site/docs/modulo03/json.md",sourceDirName:"modulo03",slug:"/json",permalink:"/backend-nodejs-mongodb/json",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb/tree/main/docs/modulo03/json.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"JSON",slug:"/json",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"NPM",permalink:"/backend-nodejs-mongodb/npm"},next:{title:"Crear una API",permalink:"/backend-nodejs-mongodb/node-api"}},l={},c=[{value:"Sinta\u0301xis de JSON",id:"sinta\u0301xis-de-json",level:2},{value:"Convertir JSON a objetos javascript y viceversa",id:"convertir-json-a-objetos-javascript-y-viceversa",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(p,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-javascript-object-notation"},"JSON (JavaScript Object Notation)"),(0,a.kt)("p",null,"JSON es un formato de intercambio de datos que utiliza una sintaxis basada en JavaScript. Fue dise\xf1ado para ser f\xe1cil de leer y escribir, y para ser utilizado en aplicaciones web y m\xf3viles. JSON es un formato de texto plano, lo que lo hace f\xe1cil de transmitir a trav\xe9s de la red."),(0,a.kt)("h2",{id:"sinta\u0301xis-de-json"},"Sinta\u0301xis de JSON"),(0,a.kt)("p",null,"JSON utiliza una sintaxis basada en llaves y valores. Los datos se representan como pares llave-valor separados por comas y encerrados entre llaves ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),". Cada llave debe ser una cadena entre comillas dobles, y el valor puede ser cualquier tipo de datos JSON v\xe1lido, incluyendo otros objetos JSON, matrices y valores primitivos como cadenas, n\xfameros y booleanos."),(0,a.kt)("p",null,"Aqu\xed hay un ejemplo de un objeto JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nombre": "Juan",\n  "apellido": "P\xe9rez",\n  "edad": 25,\n  "correo": "juan.perez@example.com",\n  "telefonos": [\n    {\n      "tipo": "casa",\n      "numero": "555-1234"\n    },\n    {\n      "tipo": "trabajo",\n      "numero": "555-5678"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"convertir-json-a-objetos-javascript-y-viceversa"},"Convertir JSON a objetos javascript y viceversa"),(0,a.kt)("p",null,"En JavaScript, puedes convertir una cadena JSON en un objeto utilizando la funci\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.parse()"),". Por ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const datos = \'{"nombre": "Juan", "edad": 25}\';\n\nconst objeto = JSON.parse(datos);\n\nconsole.log(objeto); // { nombre: \'Juan\', edad: 25 }\nconsole.log(objeto.nombre); // Juan\n')),(0,a.kt)("p",null,"Para convertir un objeto en una cadena JSON, puedes utilizar la funci\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),". Por ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const objeto = {\n  nombre: "Juan",\n  edad: 25,\n};\n\nconst datos = JSON.stringify(objeto);\n\nconsole.log(datos); // {"nombre":"Juan","edad":25}\nconsole.log(datos.nombre); // \u274c undefined\n')))}u.isMDXComponent=!0}}]);