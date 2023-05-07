"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[1940],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>f});var o=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,f=p["".concat(s,".").concat(c)]||p[c]||m[c]||t;return a?o.createElement(f,l(l({ref:n},d),{},{components:a})):o.createElement(f,l({ref:n},d))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,l=new Array(t);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<t;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4991:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>u});var o=a(7462),r=(a(7294),a(3905));const t={title:"M\xf3dulos",slug:"/modules",sidebar_position:2},l=void 0,i={unversionedId:"modulo03/modules",id:"modulo03/modules",title:"M\xf3dulos",description:"En Node.js, los m\xf3dulos son bloques de c\xf3digo reutilizable que encapsulan la funcionalidad espec\xedfica de un programa. Los m\xf3dulos permiten a los desarrolladores escribir c\xf3digo modular y escalable, lo que facilita el mantenimiento y la extensi\xf3n del c\xf3digo a medida que el proyecto crece.",source:"@site/docs/modulo03/modules.md",sourceDirName:"modulo03",slug:"/modules",permalink:"/backend-nodejs-mongodb/modules",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb/tree/main/docs/modulo03/modules.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"M\xf3dulos",slug:"/modules",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/backend-nodejs-mongodb/node-intro"},next:{title:"NPM",permalink:"/backend-nodejs-mongodb/npm"}},s={},u=[{value:"\xbfC\xf3mo funcionan los m\xf3dulos en Node.js?",id:"c\xf3mo-funcionan-los-m\xf3dulos-en-nodejs",level:2},{value:"Creaci\xf3n de m\xf3dulos en Node.js",id:"creaci\xf3n-de-m\xf3dulos-en-nodejs",level:2},{value:"Importar m\xf3dulos",id:"importar-m\xf3dulos",level:2},{value:"Exportar m\xf3dulos",id:"exportar-m\xf3dulos",level:2}],d={toc:u},p="wrapper";function m(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,o.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En Node.js, los m\xf3dulos son bloques de c\xf3digo reutilizable que encapsulan la funcionalidad espec\xedfica de un programa. Los m\xf3dulos permiten a los desarrolladores escribir c\xf3digo modular y escalable, lo que facilita el mantenimiento y la extensi\xf3n del c\xf3digo a medida que el proyecto crece."),(0,r.kt)("h2",{id:"c\xf3mo-funcionan-los-m\xf3dulos-en-nodejs"},"\xbfC\xf3mo funcionan los m\xf3dulos en Node.js?"),(0,r.kt)("p",null,"En Node.js, los m\xf3dulos se implementan como archivos JavaScript separados que encapsulan una funcionalidad espec\xedfica. Cada archivo de m\xf3dulo tiene su propio \xe1mbito local y solo expone una interfaz p\xfablica espec\xedfica a otros m\xf3dulos o al c\xf3digo del programa principal."),(0,r.kt)("p",null,"Los m\xf3dulos en Node.js se pueden importar y exportar utilizando la sintaxis require y ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports"),", respectivamente. La funci\xf3n require se utiliza para cargar un m\xf3dulo en un archivo JavaScript, mientras que ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports")," se utiliza para definir la interfaz p\xfablica del m\xf3dulo."),(0,r.kt)("h2",{id:"creaci\xf3n-de-m\xf3dulos-en-nodejs"},"Creaci\xf3n de m\xf3dulos en Node.js"),(0,r.kt)("p",null,"Crear un m\xf3dulo en Node.js es tan simple como crear un archivo JavaScript separado que encapsule una funcionalidad espec\xedfica. Para exportar la funcionalidad, debe utilizar la sintaxis module.exports en el archivo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=ejemplo.js",title:"ejemplo.js"},"function sum(a, b) {\n  return a + b;\n}\n\nmodule.exports = sum;\n")),(0,r.kt)("p",null,"En el ejemplo anterior, se exporta la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," como la interfaz p\xfablica del m\xf3dulo. Ahora, en otro archivo JavaScript, puede importar este m\xf3dulo y utilizar la funci\xf3n sum exportada:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=index.js",title:"index.js"},"const sum = require('./ejemplo.js');\n\nconsole.log(sum(2, 3)); // 5\n")),(0,r.kt)("p",null,"En el ejemplo anterior, se utiliza la sintaxis ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," para cargar el m\xf3dulo ",(0,r.kt)("inlineCode",{parentName:"p"},"ejemplo.js"),", y la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," exportada se asigna a la variable ",(0,r.kt)("inlineCode",{parentName:"p"},"sum"),". Luego, se llama a la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," con dos argumentos y se muestra el resultado en la consola."),(0,r.kt)("h2",{id:"importar-m\xf3dulos"},"Importar m\xf3dulos"),(0,r.kt)("p",null,"Como ya vimos, para importar un m\xf3dulo en Node.js, puede utilizar la sintaxis ",(0,r.kt)("inlineCode",{parentName:"p"},"require"),". La funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," toma una ruta relativa o absoluta al archivo de m\xf3dulo y devuelve el objeto exportado del m\xf3dulo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const ejemplo = require('./ejemplo.js');\n")),(0,r.kt)("h2",{id:"exportar-m\xf3dulos"},"Exportar m\xf3dulos"),(0,r.kt)("p",null,"Y, para exportar una funcionalidad espec\xedfica de un m\xf3dulo en Node.js, debe utilizar la sintaxis ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports"),". La sintaxis ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports")," se utiliza para definir la interfaz p\xfablica del m\xf3dulo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function sum(a, b) {\n  return a + b;\n}\n\nmodule.exports = sum;\n")))}m.isMDXComponent=!0}}]);