"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[166],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>b});var o=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),d=function(e){var n=o.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=d(e.components);return o.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||t;return a?o.createElement(b,l(l({ref:n},p),{},{components:a})):o.createElement(b,l({ref:n},p))}));function b(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,l=new Array(t);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<t;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9248:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var o=a(7462),r=(a(7294),a(3905));const t={title:"Objetos a fondo",slug:"/objects",sidebar_position:2},l=void 0,s={unversionedId:"modulo02/objects",id:"modulo02/objects",title:"Objetos a fondo",description:"En la sesi\xf3n 01 vimos un poco acerca de los objetos en Javascript. En esta sesion vamos a ampliar esos conocimientos, para enterderlos mejor.",source:"@site/docs/modulo02/objects.md",sourceDirName:"modulo02",slug:"/objects",permalink:"/backend-nodejs-mongodb/objects",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb/tree/main/docs/modulo02/objects.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Objetos a fondo",slug:"/objects",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"M\xf3dulos en JavaScript",permalink:"/backend-nodejs-mongodb/js-modules"},next:{title:"Arrays",permalink:"/backend-nodejs-mongodb/arrays"}},i={},d=[{value:"Crear un objeto",id:"crear-un-objeto",level:2},{value:"Usando el constructor <code>Object()</code> y la palabra clave <code>new</code>",id:"usando-el-constructor-object-y-la-palabra-clave-new",level:3},{value:"Usando la notaci\xf3n literal de objetos <code>{}</code>",id:"usando-la-notaci\xf3n-literal-de-objetos-",level:3},{value:"Agregar propiedades a un objeto",id:"agregar-propiedades-a-un-objeto",level:2},{value:"Usando la notaci\xf3n de punto",id:"usando-la-notaci\xf3n-de-punto",level:3},{value:"Usando la notaci\xf3n de corchetes",id:"usando-la-notaci\xf3n-de-corchetes",level:3},{value:"Eliminar una propiedad de un objeto",id:"eliminar-una-propiedad-de-un-objeto",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En la sesi\xf3n 01 vimos un poco acerca de los objetos en Javascript. En esta sesion vamos a ampliar esos conocimientos, para enterderlos mejor."),(0,r.kt)("p",null,"Recordemos que un objeto es una colecci\xf3n de propiedades. Cada propiedad tiene un nombre y un valor. El valor de una propiedad puede ser un n\xfamero, un string, un booleano, una funci\xf3n, un objeto, etc."),(0,r.kt)("h2",{id:"crear-un-objeto"},"Crear un objeto"),(0,r.kt)("p",null,"Para crear un objeto en Javascript podemos usar una de las dos maneras que existen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Usando el constructor ",(0,r.kt)("inlineCode",{parentName:"li"},"Object()")," y la palabra clave ",(0,r.kt)("inlineCode",{parentName:"li"},"new")),(0,r.kt)("li",{parentName:"ul"},"Usando la notaci\xf3n literal de objetos ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"))),(0,r.kt)("h3",{id:"usando-el-constructor-object-y-la-palabra-clave-new"},"Usando el constructor ",(0,r.kt)("inlineCode",{parentName:"h3"},"Object()")," y la palabra clave ",(0,r.kt)("inlineCode",{parentName:"h3"},"new")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const persona = new Object();\n")),(0,r.kt)("h3",{id:"usando-la-notaci\xf3n-literal-de-objetos-"},"Usando la notaci\xf3n literal de objetos ",(0,r.kt)("inlineCode",{parentName:"h3"},"{}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const persona = {};\n")),(0,r.kt)("h2",{id:"agregar-propiedades-a-un-objeto"},"Agregar propiedades a un objeto"),(0,r.kt)("p",null,"Para agregar propiedades a un objeto podemos usar la notaci\xf3n de punto o la notaci\xf3n de corchetes."),(0,r.kt)("h3",{id:"usando-la-notaci\xf3n-de-punto"},"Usando la notaci\xf3n de punto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const persona = {};\n\npersona.nombre = "Juan";\npersona.edad = 30;\n')),(0,r.kt)("h3",{id:"usando-la-notaci\xf3n-de-corchetes"},"Usando la notaci\xf3n de corchetes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const persona = {};\n\npersona["nombre"] = "Juan";\npersona["edad"] = 30;\n')),(0,r.kt)("p",null,"Este tipo de notaci\xf3n es muy \xfatil para varios aspectos, por ejemplo, podemos agregar propiedades usando variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const nombrePropiedad = "nombre";\n\nconst persona = {};\n\npersona[nombrePropiedad] = "Juan";\n\nconsole.log(persona.nombre); // Juan\n')),(0,r.kt)("p",null,"Tambi\xe9n podemos usar nombres de propiedades que tengan m\xe1s de una palabra:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const persona = {\n  "nombre completo": "Juan Perez",\n  edad: 30,\n};\n\nconsole.log(persona["nombre completo"]); // Juan Perez\n\n// Esto no puede ser usado en la notaci\xf3n punto\n\nconsole.log(persona.nombre completo); // SyntaxError: Unexpected identifier\n')),(0,r.kt)("p",null,'Y por \xfaltimo, podemos usar algo llamado "computed properties" en Javascript, que b\xe1sicamente son propiedades agregadas usando variables:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let fullName = "nombre completo";\n\nconst persona = {\n  nombre: "Juan",\n  edad: 30,\n  [fullName]: "Juan Perez",\n};\n\n')),(0,r.kt)("h2",{id:"eliminar-una-propiedad-de-un-objeto"},"Eliminar una propiedad de un objeto"),(0,r.kt)("p",null,"Para eliminar una propiedad de un objeto podemos usar la palabra clave ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const persona = {\n  nombre: "Juan",\n  edad: 30,\n  "nombre completo": "Juan Perez",\n};\n\nconsole.log(persona); // { nombre: "Juan", edad: 30, "nombre completo": "Juan Perez" }\n\ndelete persona.edad;\ndelete persona["nombre completo"];\n\nconsole.log(persona); // { nombre: "Juan" }\n')),(0,r.kt)("admonition",{title:"Ojo",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'Si guardamos los valores de las propiedades de un objeto en variables, y estas tienen el mismo nombre que las propiedades, podemos usar una especie de "shorthand":'),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function createUser(name, email) {\n  return {\n    name: name,\n    email: email,\n  }\n};\n\nlet user = createUser('Juan', 'juan123@gmail.com');\nconsole.log(user) // { name: \"Juan\", email: \"juan123@gmail.com\" }\n\n// Podemos reemplazar lo anterior, con lo siguiente:\n\nfunction createUserShorthand(name, email) {\n  return { name, email }\n}\n\nlet otherUser = createUserShorthand('Albert', 'albert123@gmail.com');\nconsole.log(otherUser) // { name: \"Albert\", email: \"albert123@gmail.com\" }\n")),(0,r.kt)("p",{parentName:"admonition"},"En este ejemplo vemos que la \xfaltima funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"createUserShorthand")," solo retorna ",(0,r.kt)("strong",{parentName:"p"},"name")," e ",(0,r.kt)("strong",{parentName:"p"},"email"),", ya que tanto la propiedad como el nombre de la variable que guarda el valor de esa propiedad, son iguales.")),(0,r.kt)("admonition",{title:"Nota",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A diferencia de las variables, las propiedades de un objeto no tienen ninguna restricci\xf3n a la hora de nombrarlas, es decir, que incluso aceptan palabras reservadas."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n  for: 1,\n  return: 2,\n  let: 3\n};\n\n\nconsole.log(obj.for + obj.return + obj.let) // 6\n")),(0,r.kt)("p",{parentName:"admonition"},"Otros tipos ser\xe1n convertidos autom\xe1ticamene a string."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const otherObj = {\n  0: "aprendiendo"\n};\n\nconsole.log(otherObj["0"]) // aprendiendo\nconsole.log(otherObj[0]) // aprendiendo\nconsole.log(otherObj.0) //\n'))))}u.isMDXComponent=!0}}]);