"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[810],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>f});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),d=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=t,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,l(l({ref:a},u),{},{components:n})):r.createElement(f,l({ref:a},u))}));function f(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:t,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8784:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),t=(n(7294),n(3905));const i={title:"Middlewares",slug:"/middlewares",sidebar_position:3},l="Middlewares en Express",o={unversionedId:"modulo04/middlewares",id:"modulo04/middlewares",title:"Middlewares",description:"En Express.js, los middlewares son funciones que se ejecutan en el medio de una cadena de manejo de solicitudes HTTP. Los middlewares se utilizan para realizar tareas espec\xedficas en la solicitud, como analizar el cuerpo de la solicitud, realizar la autenticaci\xf3n del usuario y m\xe1s.",source:"@site/docs/modulo04/middlewares.md",sourceDirName:"modulo04",slug:"/middlewares",permalink:"/backend-nodejs-mongodb/middlewares",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb.git/docs/modulo04/middlewares.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Middlewares",slug:"/middlewares",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Enrutamiento",permalink:"/backend-nodejs-mongodb/routing"},next:{title:"Integraci\xf3n con otros m\xf3dulos",permalink:"/backend-nodejs-mongodb/integrating-modules"}},s={},d=[{value:"\xbfC\xf3mo usarlos?",id:"c\xf3mo-usarlos",level:2}],u={toc:d},p="wrapper";function c(e){let{components:a,...n}=e;return(0,t.kt)(p,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"middlewares-en-express"},"Middlewares en Express"),(0,t.kt)("p",null,"En Express.js, los middlewares son funciones que se ejecutan en el medio de una cadena de manejo de solicitudes HTTP. Los middlewares se utilizan para realizar tareas espec\xedficas en la solicitud, como analizar el cuerpo de la solicitud, realizar la autenticaci\xf3n del usuario y m\xe1s."),(0,t.kt)("p",null,"Cada middleware es una funci\xf3n que tiene acceso a tres objetos: el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"req")," (la solicitud HTTP), el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"res")," (la respuesta HTTP) y el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"next")," (la siguiente funci\xf3n middleware en la cadena de manejo). La funci\xf3n middleware puede realizar tareas en la solicitud y luego pasar el control a la siguiente funci\xf3n middleware utilizando el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"next"),". Si la funci\xf3n middleware no llama a ",(0,t.kt)("inlineCode",{parentName:"p"},"next()"),", la solicitud se queda atrapada en ese middleware."),(0,t.kt)("h2",{id:"c\xf3mo-usarlos"},"\xbfC\xf3mo usarlos?"),(0,t.kt)("p",null,"En Express.js, los middlewares se utilizan para realizar tareas espec\xedficas en la solicitud HTTP. Hay diferentes tipos de middlewares en Express.js:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Middlewares de aplicaci\xf3n"),": Se utilizan para configurar la aplicaci\xf3n y configurar la cadena de manejo de solicitudes. Se pueden utilizar para manejar errores, analizar la solicitud HTTP y m\xe1s. Estos middlewares se definen utilizando el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"use()")," de la aplicaci\xf3n.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Middlewares de ruta"),": Se utilizan para manejar solicitudes para rutas espec\xedficas en la aplicaci\xf3n. Se pueden utilizar para la autenticaci\xf3n de usuarios, el registro de solicitudes y m\xe1s. Estos middlewares se definen utilizando los m\xe9todos HTTP espec\xedficos, como ",(0,t.kt)("inlineCode",{parentName:"p"},"get()"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"post()"),", etc.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Middlewares de error"),": Se utilizan para manejar errores que ocurren durante el procesamiento de solicitudes. Estos middlewares se definen utilizando una funci\xf3n middleware que toma un objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"req"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"res")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"next"),"."))),(0,t.kt)("p",null,"Aqu\xed hay un ejemplo de c\xf3mo definir un middleware de aplicaci\xf3n en Express.js:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst app = express();\n\napp.use((req, res, next) => {\n  console.log('Solicitud recibida en:', Date.now());\n  next();\n});\n")),(0,t.kt)("p",null,"En este ejemplo, definimos un middleware de aplicaci\xf3n utilizando el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"use()"),". La funci\xf3n middleware registra la hora actual en la consola y luego llama a ",(0,t.kt)("inlineCode",{parentName:"p"},"next()")," para pasar el control a la siguiente funci\xf3n middleware."),(0,t.kt)("p",null,"Tambi\xe9n se pueden encadenar varios middlewares de aplicaci\xf3n juntos, como en este ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"app.use(middleware1);\napp.use(middleware2);\napp.use(middleware3);\n")),(0,t.kt)("p",null,"En este ejemplo, encadenamos tres middlewares de aplicaci\xf3n juntos, y cada uno se ejecutar\xe1 en orden."))}c.isMDXComponent=!0}}]);