"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[655],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>k});var o=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=o.createContext({}),d=function(e){var n=o.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=d(e.components);return o.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=t,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||r;return a?o.createElement(k,l(l({ref:n},p),{},{components:a})):o.createElement(k,l({ref:n},p))}));function k(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:t,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3046:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(7462),t=(a(7294),a(3905));const r={title:"Crear una API",slug:"/node-api",sidebar_position:5},l="Crear una API usando Node.js",s={unversionedId:"modulo03/api",id:"modulo03/api",title:"Crear una API",description:"Como vimos, Node.js nos permite ejecutar c\xf3digo JavaScript en el servidor. Esto nos permite crear aplicaciones web y APIs que pueden ser ejecutadas en el servidor. En esta parte veremos como podemos crear una peque\xf1a API usando Node.js puro (sin frameworks).",source:"@site/docs/modulo03/api.md",sourceDirName:"modulo03",slug:"/node-api",permalink:"/backend-nodejs-mongodb/node-api",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb.git/docs/modulo03/api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Crear una API",slug:"/node-api",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/backend-nodejs-mongodb/json"},next:{title:"Manipulaci\xf3n de archivos",permalink:"/backend-nodejs-mongodb/node-files"}},i={},d=[{value:"Creando el proyecto",id:"creando-el-proyecto",level:2},{value:"Ampliando el servidor",id:"ampliando-el-servidor",level:2},{value:"Archivo data.js",id:"archivo-datajs",level:2},{value:"Archivo utils.js",id:"archivo-utilsjs",level:2},{value:"Archivo model.js",id:"archivo-modeljs",level:2},{value:"Archivo controller.js",id:"archivo-controllerjs",level:2},{value:"Agregando los endpoints",id:"agregando-los-endpoints",level:2},{value:"Ejecutando la API",id:"ejecutando-la-api",level:2},{value:"Probando la API",id:"probando-la-api",level:2},{value:"GET",id:"get",level:3},{value:"GET by id",id:"get-by-id",level:3},{value:"POST",id:"post",level:3},{value:"PUT",id:"put",level:3},{value:"DELETE",id:"delete",level:3}],p={toc:d},c="wrapper";function u(e){let{components:n,...r}=e;return(0,t.kt)(c,(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"crear-una-api-usando-nodejs"},"Crear una API usando Node.js"),(0,t.kt)("p",null,"Como vimos, Node.js nos permite ejecutar c\xf3digo JavaScript en el servidor. Esto nos permite crear aplicaciones web y APIs que pueden ser ejecutadas en el servidor. En esta parte veremos como podemos crear una peque\xf1a API usando Node.js puro (sin frameworks)."),(0,t.kt)("h2",{id:"creando-el-proyecto"},"Creando el proyecto"),(0,t.kt)("p",null,"Vamos a crear una nueva carpeta llamada ",(0,t.kt)("inlineCode",{parentName:"p"},"node-api")," y la vamos a abrir usando VS Code. Posteriormente abrimos una terminal y ejecutamos el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"npm init -y")," para crear un archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json")," que nos permitir\xe1 instalar dependencias y ejecutar scripts."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# Creamos la carpeta\nmkdir node-api\n\n# Nos movemos a la carpeta\ncd node-api\n\n# Abrimos VS Code\ncode .\n\n# Creamos el archivo package.json\nnpm init -y\n")),(0,t.kt)("p",null,"Luego de esto deber\xedamos tener una estructura parecida a esta:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"node-api\n\u2514\u2500\u2500 package.json\n")),(0,t.kt)("p",null,"Nuestro archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json")," tendr\xe1 una estructura similar a esta:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "node-api",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,t.kt)("p",null,"Analizemos la estructura del archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"name"),": El nombre del proyecto."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"version"),": La versi\xf3n del proyecto."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"description"),": Una descripci\xf3n del proyecto."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"main"),": El archivo principal del proyecto que se va a ejecutar."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"scripts"),": Los scripts que se pueden ejecutar con el comando ",(0,t.kt)("inlineCode",{parentName:"li"},"npm run <nombre-del-script>"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"keywords"),": Las palabras clave del proyecto."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"author"),": El autor del proyecto."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"license"),": La licencia del proyecto.")),(0,t.kt)("p",null,"Ahora debemos crear ua archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"index.js")," dentro de nuestra carpeta ",(0,t.kt)("inlineCode",{parentName:"p"},"node-api"),". Este archivo ser\xe1 el archivo principal de nuestra aplicaci\xf3n y ser\xe1 el que se ejecutar\xe1 cuando ejecutemos el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"npm start")," (este comando lo vamos a agregar luego)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"node-api\n\u251c\u2500\u2500 index.js\n\u2514\u2500\u2500 package.json\n")),(0,t.kt)("p",null,"Dentro del archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"index.js")," vamos a agregar el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\n\nconst PORT = 3001;\n\nconst server = http.createServer((req, res) => {\n  res.end('Hello World!');\n});\n\nserver.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});\n")),(0,t.kt)("p",null,"Para ejecutar este archivo, debemos ejecutar el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"node index.js")," en la terminal. Si todo sali\xf3 bien, deber\xedamos ver el siguiente mensaje en la terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"Server running on port 3001\n")),(0,t.kt)("p",null,"Y si nos dirigimos a nuestro navegador y escribimos ",(0,t.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," deber\xedamos ver el mensaje ",(0,t.kt)("inlineCode",{parentName:"p"},"Hello World!"),"."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Hello World con Node.js",src:a(3651).Z,width:"298",height:"100"})),(0,t.kt)("p",null,"Felicidades!!!, acabas de crear tu primera aplicaci\xf3n de servidor usando Node.js. Ahora, veamos que m\xe1s tenemos que realizar para construir una peque\xf1a API."),(0,t.kt)("h2",{id:"ampliando-el-servidor"},"Ampliando el servidor"),(0,t.kt)("p",null,"Cerramos el servidor con ",(0,t.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," en nuestra terminal y vamos a crear los archivos ",(0,t.kt)("inlineCode",{parentName:"p"},"controller.js"),", data.js, model.js y utils.js dentro de nuestra carpeta ",(0,t.kt)("inlineCode",{parentName:"p"},"node-api"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"node-api\n\u251c\u2500\u2500 controller.js\n\u251c\u2500\u2500 data.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 model.js\n\u251c\u2500\u2500 utils.js\n\u2514\u2500\u2500 package.json\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"controller.js"),": Este archivo va a contener la l\xf3gica de nuestra aplicaci\xf3n."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"data.js"),": Este archivo va a contener los datos de nuestra aplicaci\xf3n."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"model.js"),": Este archivo va a contener la l\xf3gica de los datos de nuestra aplicaci\xf3n."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"utils.js"),": Este archivo va a contener funciones que se van a utilizar en nuestra aplicaci\xf3n.")),(0,t.kt)("p",null,"Antes de continuar escribiendo c\xf3digo, vamos a cambiar el tipo de m\xf3dulos que vamos a usar dentro de nuestra peque\xf1a aplicaci\xf3n. Por defecto node usa el tipo de m\xf3dulos ",(0,t.kt)("inlineCode",{parentName:"p"},"CommonJS")," pero vamos a cambiarlo a ",(0,t.kt)("inlineCode",{parentName:"p"},"ES Modules")," para poder usar ",(0,t.kt)("inlineCode",{parentName:"p"},"import")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"export")," en nuestros archivos."),(0,t.kt)("p",null,"A nuestro archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json")," le vamos a agregar la siguiente propiedad:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ....\n  "type": "module"\n  // ....\n}\n')),(0,t.kt)("p",null,"Listo, ahora s\xed podemos usar ",(0,t.kt)("inlineCode",{parentName:"p"},"import")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"export")," en nuestros archivos."),(0,t.kt)("p",null,"Vayamos a modficar el archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"index.js")," en la siguiente l\xednea:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"const http = require('http');\n")),(0,t.kt)("p",null,"Por esta otra:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import http from 'http';\n")),(0,t.kt)("h2",{id:"archivo-datajs"},"Archivo data.js"),(0,t.kt)("p",null,"Ahora agregemos lo siguiente a nuestro archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"data.js"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="data.js"',title:'"data.js"'},'const books = [\n  {\n    id: 1,\n    title: "El se\xf1or de los anillos",\n    author: "J.R.R. Tolkien",\n    year: 1954,\n    pages: 1216,\n    available: false,\n  },\n  {\n    id: 2,\n    title: "Harry Potter y la piedra filosofal",\n    author: "J.K. Rowling",\n    year: 1997,\n    pages: 223,\n    available: true,\n  },\n  {\n    id: 3,\n    title: "El principito",\n    author: "Antoine de Saint-Exup\xe9ry",\n    year: 1943,\n    pages: 96,\n    available: false,\n  },\n  {\n    id: 4,\n    title: "El hobbit",\n    author: "J.R.R. Tolkien",\n    year: 1937,\n    pages: 310,\n    available: true,\n  },\n];\n\nexport default books;\n')),(0,t.kt)("p",null,"Estos ser\xe1n los datos en los cuales haremos las operaciones de Creaci\xf3n, Lectura, Actualizaci\xf3n y Eliminaci\xf3n (CRUD)."),(0,t.kt)("h2",{id:"archivo-utilsjs"},"Archivo utils.js"),(0,t.kt)("p",null,"Ahora agreguemos el siguiente c\xf3digo a ",(0,t.kt)("inlineCode",{parentName:"p"},"utils.js"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=utils.js",title:"utils.js"},'export const getMaxId = (data) => {\n  const ids = data.map((item) => item.id);\n  const maxId = Math.max(...ids);\n\n  return maxId;\n};\n\nexport const getRequestBody = (req) => {\n  return new Promise((resolve, reject) => {\n    try {\n      let body = "";\n\n      req.on("data", (chunk) => {\n        body += chunk.toString();\n      });\n\n      req.on("end", () => {\n        resolve(body);\n      });\n    } catch (error) {\n      reject(error);\n    }\n  });\n};\n')),(0,t.kt)("p",null,"La funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"getMaxId")," nos ayudar\xe1 a obtener el ID del \xfaltimo elemento que hemos agregado a una lista de elementos, y la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"getRequestBody")," nos ayudar\xe1 a obtener los datos que enviamos a trav\xe9s de una petici\xf3n (request)."),(0,t.kt)("h2",{id:"archivo-modeljs"},"Archivo model.js"),(0,t.kt)("p",null,"Dentro del archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"model.js")," colocaremos las funciones que nos permitir\xe1n realizar las operaciones que mencionamos anteriormente (CRUD)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=model.js",title:"model.js"},'import data from "./data.js";\nimport { getMaxId } from "./utils.js";\n\n// Funci\xf3n para obtener todos los libros\nconst findAll = () => {\n  return new Promise((resolve, reject) => {\n    // Si no hay libros en la base de datos se rechaza la promesa\n    if (data.length === 0) {\n      reject({\n        error: true,\n        message: "No hay libros en la base de datos",\n      });\n    }\n\n    // Si hay libros se resuelve la promesa\n    resolve({\n      error: false,\n      data,\n    });\n  });\n};\n\n// Funci\xf3n para obtener un libro por su ID\nconst findBookById = (id) => {\n  return new Promise((resolve, reject) => {\n    // Buscamos el libro en la base de datos\n    const book = data.find((book) => book.id === id);\n\n    // Si no se encuentra el libro se rechaza la promesa\n    if (!book) {\n      reject({\n        error: true,\n        message: `No se ha encontrado el libro con id ${id}`,\n      });\n    }\n\n    // Si se encuentra el libro se resuelve la promesa\n    resolve({\n      error: false,\n      data: book,\n    });\n  });\n};\n\n// Funci\xf3n para crear un nuevo libro\nconst createBook = (book) => {\n  return new Promise((resolve, reject) => {\n    // Validamos que el libro tenga todos los campos obligatorios\n    // Si no tiene todos los campos obligatorios se rechaza la promesa\n    if (!book.title || !book.author || !book.year || !book.pages) {\n      reject({\n        error: true,\n        message: "El libro no tiene todos los campos",\n      });\n    }\n\n    // Se crea el nuevo libro con los datos enviados y le asignamos un id\n    // usando la funci\xf3n getMaxId y se le asigna el estado de disponible\n    const newBook = {\n      ...book,\n      id: getMaxId(data) + 1,\n      available: true,\n    };\n\n    // Se agrega el nuevo libro a la base de datos\n    data.push(newBook);\n\n    // Se resuelve la promesa\n    resolve({\n      error: false,\n      data: newBook,\n    });\n  });\n};\n\n// Funci\xf3n para actualizar/modificar un libro\nconst updateBook = (id) => {\n  return new Promise((resolve, reject) => {\n    // Se busca el libro a actualizar, en la base de datos\n    const bookToUpdate = data.find((book) => book.id === id);\n\n    // Si no se encuentra el libro se rechaza la promesa\n    if (!bookToUpdate) {\n      reject({\n        error: true,\n        message: `No se ha encontrado el libro con id ${id}`,\n      });\n    }\n\n    // Se cambia el estado de disponibilidad del libro\n    bookToUpdate.available = !bookToUpdate.available;\n\n    // Se resuelve la promesa\n    resolve({\n      error: false,\n      data: bookToUpdate,\n    });\n  });\n};\n\n// Funci\xf3n para eliminar un libro\nconst deleteBook = (id) => {\n  return new Promise((resolve, reject) => {\n    // Se busca el libro a eliminar, en la base de datos\n    const bookToDelete = data.find((book) => book.id === id);\n\n    // Si no se encuentra el libro se rechaza la promesa\n    if (!bookToDelete) {\n      reject({\n        error: true,\n        message: `No se ha encontrado el libro con id ${id}`,\n      });\n    }\n\n    // Buscamos el \xedndice del libro a eliminar\n    const index = data.indexOf(bookToDelete);\n\n    // Eliminamos el libro de la base de datos\n    data.splice(index, 1);\n\n    // Se resuelve la promesa\n    resolve({\n      error: false,\n      data: bookToDelete,\n    });\n  });\n};\n\nexport default {\n  findAll,\n  findBookById,\n  createBook,\n  updateBook,\n  deleteBook,\n};\n')),(0,t.kt)("h2",{id:"archivo-controllerjs"},"Archivo controller.js"),(0,t.kt)("p",null,"Ahora para poder usar estas funciones debemos colocar el siguiente c\xf3digo dentro del archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"controller.js"),", que se encargar\xe1 de manejar las distintas peticiones hacia el servidor."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=controller.js",title:"controller.js"},'import Book from "./model.js";\nimport { getRequestBody } from "./utils.js";\n\nconst getAllBooks = async (req, res) => {\n  try {\n    // Obtenemos los libros de la base de datos\n    const books = await Book.findAll();\n\n    // Enviamos la respuesta\n    res.writeHead(200, { "Content-Type": "application/json" });\n    res.end(JSON.stringify(books));\n  } catch (error) {\n    res.writeHead(404, { "Content-Type": "application/json" });\n    res.end(JSON.stringify(error));\n  }\n};\n\nconst getBookById = async (req, res, id) => {\n  try {\n    // Obtenemos el libro de la base de datos\n    const book = await Book.findBookById(id);\n\n    // Enviamos la respuesta\n    res.writeHead(200, { "Content-Type": "application/json" });\n    res.end(JSON.stringify(book));\n  } catch (error) {\n    console.error(error);\n    res.writeHead(404, { "Content-Type": "application/json" });\n    res.end(JSON.stringify(error));\n  }\n};\n\nconst createBook = async (req, res, book) => {\n  try {\n    // Obtenemos el cuerpo de la petici\xf3n\n    const body = await getRequestBody(req);\n\n    // Obtenemos los datos del libro\n    const { title, author, year, pages } = JSON.parse(body);\n\n    // Creamos el libro y lo devolvemos\n    const newBook = await Book.createBook({ title, author, year, pages });\n\n    // Enviamos la respuesta\n    res.writeHead(201, { "Content-Type": "application/json" });\n    res.end(JSON.stringify(newBook));\n  } catch (error) {\n    res.writeHead(400, { "Content-Type": "application/json" });\n    res.end(JSON.stringify(error));\n  }\n};\n\nconst updateBook = async (req, res, id) => {\n  try {\n    // Actualizamos el libro y lo devolvemos\n    const bookUpdated = await Book.updateBook(id);\n\n    // Enviamos la respuesta\n    res.writeHead(200, { "Content-Type": "application/json" });\n    res.end(JSON.stringify(bookUpdated));\n  } catch (error) {\n    res.writeHead(404, { "Content-Type": "application/json" });\n    res.end(JSON.stringify(error));\n  }\n};\n\nconst deleteBook = async (req, res, id) => {\n  try {\n    // Eliminamos el libro y lo devolvemos\n    const bookDeleted = await Book.deleteBook(id);\n\n    // Enviamos la respuesta\n    res.writeHead(200, { "Content-Type": "application/json" });\n    res.end(JSON.stringify(bookDeleted));\n  } catch (error) {\n    res.writeHead(404, { "Content-Type": "application/json" });\n    res.end(JSON.stringify(error));\n  }\n};\n\nexport default {\n  getAllBooks,\n  getBookById,\n  createBook,\n  updateBook,\n  deleteBook,\n};\n')),(0,t.kt)("h2",{id:"agregando-los-endpoints"},"Agregando los endpoints"),(0,t.kt)("p",null,"Ya para terminar, modificamos el archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"index.js")," con las rutas que tendr\xe1 nuestra API:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=index.js",title:"index.js"},'import http from "http";\nimport Controller from "./controller.js";\n\n// Creamos el servidor\nconst app = http.createServer((req, res) => {\n  if (req.url === "/api/books" && req.method === "GET") {\n    Controller.getAllBooks(req, res);\n  } else if (req.url.match(/\\/api\\/books\\/([0-9]+)/) && req.method === "GET") {\n    // Obtenemos el id del libro de la URL\n    const id = req.url.split("/")[3];\n    Controller.getBookById(req, res, parseInt(id));\n  } else if (req.url === "/api/books" && req.method === "POST") {\n    Controller.createBook(req, res);\n  } else if (req.url.match(/\\/api\\/books\\/([0-9]+)/) && req.method === "PUT") {\n    // Obtenemos el id del libro de la URL\n    const id = req.url.split("/")[3];\n    Controller.updateBook(req, res, parseInt(id));\n  } else if (\n    req.url.match(/\\/api\\/books\\/([0-9]+)/) &&\n    req.method === "DELETE"\n  ) {\n    // Obtenemos el id del libro de la URL\n    const id = req.url.split("/")[3];\n    Controller.deleteBook(req, res, parseInt(id));\n  } else {\n    // Si no se encuentra la ruta, enviamos un error\n    res.writeHead(404, { "Content-Type": "application/json" });\n    res.end(JSON.stringify({ message: "Route not found" }));\n  }\n});\n\n// Guardamos el puerto en donde se ejecutar\xe1 el servidor\nconst PORT = 3001;\n\n// Iniciamos el servidor\napp.listen(PORT, () => {\n  console.log(`Server running on http://localhost:${PORT}`);\n});\n')),(0,t.kt)("h2",{id:"ejecutando-la-api"},"Ejecutando la API"),(0,t.kt)("p",null,"Ahora s\xed, una vez terminado todo esto, agregaremos el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"npm start")," a nuestro ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "node-api",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "start": "node index.js",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,t.kt)("p",null,"Ahora si regresamos a la terminal y ejecutamos el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"npm start")," veremos el siguiente mensaje:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"Server running on http://localhost:3001\n")),(0,t.kt)("h2",{id:"probando-la-api"},"Probando la API"),(0,t.kt)("p",null,"Para poder probar nuestra peque\xf1a aplicaci\xf3n podemos usar una herramienta muy popular llamada ",(0,t.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),", nos registramos y descargamos la app."),(0,t.kt)("admonition",{title:"Pruebas en local",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Si queremos probar alguna API que hayamos desarrollado en nuestra m\xe1quina local si o si tenemos que descargar la aplicaci\xf3n de escritorio, de lo contrario solo basta con la versi\xf3n de navegador.")),(0,t.kt)("h3",{id:"get"},"GET"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rest"},"GET http://localhost:3001/api/books\n")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Obtener todos los libros",src:a(8657).Z,width:"1453",height:"947"})),(0,t.kt)("h3",{id:"get-by-id"},"GET by id"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rest"},"GET http://localhost:3001/api/books/2\n")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Obtener un libro",src:a(1174).Z,width:"1450",height:"946"})),(0,t.kt)("h3",{id:"post"},"POST"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rest"},"POST http://localhost:3001/api/books\n")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Crear un nuevo libro",src:a(4444).Z,width:"1450",height:"946"})),(0,t.kt)("h3",{id:"put"},"PUT"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rest"},"PUT http://localhost:3001/api/books/5\n")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Actualizar un libro",src:a(2096).Z,width:"1455",height:"946"})),(0,t.kt)("h3",{id:"delete"},"DELETE"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rest"},"DELETE http://localhost:3001/api/books/5\n")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Eliminar un libro",src:a(703).Z,width:"1455",height:"948"})),(0,t.kt)("p",null,"Verificamos si se ha eliminado correctamente el libro:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Verificar libro eliminado",src:a(1266).Z,width:"1454",height:"943"})))}u.isMDXComponent=!0},703:(e,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/delete_book-d022c96e136f2bdfe32afabb3bafe27f.png"},8657:(e,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/get_all_books-fb3dfde1afa5017f270c9fa044683742.png"},1266:(e,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/get_deleted_book-394e32c870006c443d90feeba8cec5cc.png"},1174:(e,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/get_one_book-a8473521d1aae8468fcd652e612588c1.png"},3651:(e,n,a)=>{a.d(n,{Z:()=>o});const o="data:image/png;base64,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"},4444:(e,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/post_new_book-536e7d7be10115efd5f66c06f7cd58a6.png"},2096:(e,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/update_book-cc5f57f541c75c9d2761c605c24b9400.png"}}]);