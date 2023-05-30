"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[6248],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var s=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,s,t=function(e,r){if(null==e)return{};var n,s,t={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=s.createContext({}),l=function(e){var r=s.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return s.createElement(u.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},m=s.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=t,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?s.createElement(f,i(i({ref:r},p),{},{components:n})):s.createElement(f,i({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[d]="string"==typeof e?e:t,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5469:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(7462),t=(n(7294),n(3905));const a={title:"Solicitudes en Express",slug:"/request-express",sidebar_position:3},i="Gesti\xf3n de solicitudes HTTP en Express",o={unversionedId:"modulo05/request_express",id:"modulo05/request_express",title:"Solicitudes en Express",description:"Uso de enrutadores en Express",source:"@site/docs/modulo05/request_express.md",sourceDirName:"modulo05",slug:"/request-express",permalink:"/backend-nodejs-mongodb/request-express",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb/tree/main/docs/modulo05/request_express.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Solicitudes en Express",slug:"/request-express",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Procesando solicitudes",permalink:"/backend-nodejs-mongodb/request-processing"},next:{title:"Buenas pr\xe1cticas",permalink:"/backend-nodejs-mongodb/best-practices"}},u={},l=[{value:"Uso de enrutadores en Express",id:"uso-de-enrutadores-en-express",level:2},{value:"Middlewares en Express.js",id:"middlewares-en-expressjs",level:2}],p={toc:l},d="wrapper";function c(e){let{components:r,...n}=e;return(0,t.kt)(d,(0,s.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"gesti\xf3n-de-solicitudes-http-en-express"},"Gesti\xf3n de solicitudes HTTP en Express"),(0,t.kt)("h2",{id:"uso-de-enrutadores-en-express"},"Uso de enrutadores en Express"),(0,t.kt)("p",null,"Una de las caracter\xedsticas clave de Express.js es la capacidad de utilizar enrutadores para manejar solicitudes HTTP. Los enrutadores permiten que diferentes rutas de URL se manejen de forma separada, lo que facilita la organizaci\xf3n de una aplicaci\xf3n web."),(0,t.kt)("p",null,"Para utilizar enrutadores en Express.js, se debe crear un nuevo objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"Router")," y definir las rutas que se manejar\xe1n. A continuaci\xf3n, se muestra un ejemplo simple de c\xf3mo utilizar un enrutador en Express.js:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst router = express.Router()\n\nrouter.get('/', (req, res) => {\n  res.send('\xa1Hola desde Express!')\n})\n\nmodule.exports = router\n")),(0,t.kt)("p",null,"En este ejemplo, se define una ruta para la ",(0,t.kt)("strong",{parentName:"p"},'URL ra\xedz ("/")')," y se env\xeda una respuesta con el texto ",(0,t.kt)("inlineCode",{parentName:"p"},"\xa1Hola desde Express!"),"."),(0,t.kt)("p",null,"Una vez que se ha definido el enrutador, se puede utilizar en la aplicaci\xf3n principal de Express.js. A continuaci\xf3n, se muestra un ejemplo de c\xf3mo utilizar el enrutador anterior en una aplicaci\xf3n de Express.js:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\n\nconst router = require('./router')\n\napp.use('/', router)\n\napp.listen(3000, () => {\n  console.log('Servidor Express en ejecuci\xf3n en el puerto 3000')\n})\n")),(0,t.kt)("p",null,"En este ejemplo, se importa el enrutador desde un archivo separado y se utiliza con la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"app.use()"),". La funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"app.use()")," indica que cualquier solicitud que coincida con la ruta especificada se manejar\xe1 utilizando el enrutador."),(0,t.kt)("h2",{id:"middlewares-en-expressjs"},"Middlewares en Express.js"),(0,t.kt)("p",null,"Otra caracter\xedstica clave de Express.js es la capacidad de utilizar middleware para manejar solicitudes HTTP. El middleware es una funci\xf3n que se ejecuta antes o despu\xe9s de manejar una solicitud, lo que permite agregar funcionalidad adicional a una aplicaci\xf3n web."),(0,t.kt)("p",null,"Para utilizar middleware en Express.js, se puede utilizar la funci\xf3n app.use(). A continuaci\xf3n, se muestra un ejemplo de c\xf3mo utilizar middleware en una aplicaci\xf3n de Express.js:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\n\n// Este ser\xeda el middleware\napp.use((req, res, next) => {\n  console.log(`Solicitud recibida en: ${req.url}`)\n  next()\n})\n\napp.get('/', (req, res) => {\n  res.send('\xa1Hola desde Express!')\n})\n\napp.listen(3000, () => {\n  console.log('Servidor Express en ejecuci\xf3n en el puerto 3000')\n})\n")),(0,t.kt)("p",null,"En este ejemplo, se define una funci\xf3n de middleware que registra la URL de cada solicitud recibida. La funci\xf3n de middleware se utiliza con la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"app.use()")," para que se ejecute antes de cualquier otra funci\xf3n de manejo de solicitudes."))}c.isMDXComponent=!0}}]);