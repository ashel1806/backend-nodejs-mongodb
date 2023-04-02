"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[932],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>k});var o=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function t(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,o,r=function(e,a){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var a=o.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):t(t({},a),e)),n},u=function(e){var a=i(e.components);return o.createElement(c.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?o.createElement(k,t(t({ref:a},u),{},{components:n})):o.createElement(k,t({ref:a},u))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,t=new Array(s);t[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[p]="string"==typeof e?e:r,t[1]=l;for(var i=2;i<s;i++)t[i]=n[i];return o.createElement.apply(null,t)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7927:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var o=n(7462),r=(n(7294),n(3905));const s={title:"Callbacks y Promesas",slug:"/promises",sidebar_position:5},t="Callbacks y Promesas",l={unversionedId:"modulo02/promises-callbacks",id:"modulo02/promises-callbacks",title:"Callbacks y Promesas",description:"As\xedncronismo",source:"@site/docs/modulo02/promises-callbacks.md",sourceDirName:"modulo02",slug:"/promises",permalink:"/backend-nodejs-mongodb/promises",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb.git/docs/modulo02/promises-callbacks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Callbacks y Promesas",slug:"/promises",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Operadores Rest y Spread",permalink:"/backend-nodejs-mongodb/rest-spread"},next:{title:"Modulo 03",permalink:"/backend-nodejs-mongodb/category/modulo-03"}},c={},i=[{value:"As\xedncronismo",id:"as\xedncronismo",level:2},{value:"Callbacks",id:"callbacks",level:2},{value:"\xbfPor qu\xe9 usar callbacks?",id:"por-qu\xe9-usar-callbacks",level:3},{value:"Callback Hell",id:"callback-hell",level:3},{value:"Soluciones",id:"soluciones",level:3},{value:"Promesas",id:"promesas",level:2},{value:"Async/Await",id:"asyncawait",level:2}],u={toc:i},p="wrapper";function d(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"callbacks-y-promesas"},"Callbacks y Promesas"),(0,r.kt)("h2",{id:"as\xedncronismo"},"As\xedncronismo"),(0,r.kt)("p",null,"Para entender muy bien el funcionamiento de los callbacks y las promesas, debemos entender que es la programaci\xf3n as\xedncrona y c\xf3mo funciona en javascript."),(0,r.kt)("p",null,"La programaci\xf3n as\xedncrona es un concepto que se refiere a que el c\xf3digo se ejecuta de forma no secuencial. Esto quiere decir que el c\xf3digo no se ejecuta de arriba hacia abajo, sino que se ejecuta de forma concurrente. Por ejemplo, si tenemos una funci\xf3n que realiza una petici\xf3n a una API, esta funci\xf3n puede tardar un tiempo en devolvernos la respuesta. Si tenemos que ejecutar c\xf3digo despu\xe9s de que la petici\xf3n se haya completado, podemos usar un callback para que se ejecute cuando la petici\xf3n se haya completado."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log("Inicio del programa");\nconsole.log("Codigo ejecutandose ....");\n\nsetTimeout(() => {\n  console.log("Realizando petici\xf3n...");\n  console.log("Petici\xf3n realizada");\n}, 2000);\n\nconsole.log("M\xe1s Codigo ejecutandose ....");\nconsole.log("Fin del programa");\n\n// En la consola veremos lo siguiente:\n\n// Inicio del programa\n// Codigo ejecutandose ....\n// M\xe1s Codigo ejecutandose ....\n// Fin del programa\n\n// Luego de 2 segundos veremos:\n\n// Realizando petici\xf3n...\n// Petici\xf3n realizada\n')),(0,r.kt)("h2",{id:"callbacks"},"Callbacks"),(0,r.kt)("p",null,"Recordemos que en javascript encontramos funciones de primera clase, es decir, que podemos pasar funciones como argumentos de otras funciones. Esto nos permite crear funciones que reciben otras funciones como argumentos para que sean ",(0,r.kt)("em",{parentName:"p"},"llamadas de vuelta")," (call back). Cuando encontramos una funci\xf3n que recibe otra funci\xf3n como argumento, decimos que la funci\xf3n es de ",(0,r.kt)("strong",{parentName:"p"},"orden superior"),". Veamos un ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const operacion = (a, b, callback) => {\n  const result = callback(a, b);\n  console.log(result);\n};\n\nconst suma = (a, b) => a + b;\nconst resta = (a, b) => a - b;\n\noperacion(1, 2, suma); // 3\noperacion(1, 2, resta); // -1\n")),(0,r.kt)("p",null,"En este caso la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"operacion")," recibe como par\xe1metros a ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),", este \xfaltimo es una funci\xf3n que recibe dos argumentos y devuelve un resultado. Luego tenemos dos funciones: ",(0,r.kt)("inlineCode",{parentName:"p"},"suma")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"resta"),", las cuales realizan la operaci\xf3n correspondiente. Finalmente, llamamos a la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"operacion")," con los par\xe1metros ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),", en este caso ",(0,r.kt)("inlineCode",{parentName:"p"},"suma")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"resta"),"."),(0,r.kt)("h3",{id:"por-qu\xe9-usar-callbacks"},"\xbfPor qu\xe9 usar callbacks?"),(0,r.kt)("p",null,"Los callbacks son una forma de manejar el asincronismo en javascript. Esto quiere decir que podemos ejecutar c\xf3digo de forma as\xedncrona, es decir, que no se ejecuta de forma secuencial. Por ejemplo, si tenemos una funci\xf3n que realiza una petici\xf3n a una API, esta funci\xf3n puede tardar un tiempo en devolvernos la respuesta. Si tenemos que ejecutar c\xf3digo despu\xe9s de que la petici\xf3n se haya completado, podemos usar un callback para que se ejecute cuando la petici\xf3n se haya completado."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const request = (callback) => {\n  setTimeout(() => {\n    console.log('Se realiz\xf3 la petici\xf3n...');\n    callback();\n  }, 2000);\n};\n\nrequest(() => {\n  console.log('Callback ejecutado');\n});\n\n// Luego de 2 segundos veremos:\n\n// Se realiz\xf3 la petici\xf3n...\n// Callback ejecutado\n")),(0,r.kt)("h3",{id:"callback-hell"},"Callback Hell"),(0,r.kt)("p",null,"Cuando tenemos funciones que reciben otras funciones como argumentos, podemos anidarlas, es decir, llamar a una funci\xf3n dentro de otra funci\xf3n. Esto puede llegar a ser un problema, ya que puede llegar a ser dif\xedcil de leer y mantener. A esta manera de anidar callback tras callback se le conoce como ",(0,r.kt)("strong",{parentName:"p"},"Callback Hell"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--c0aEZX7m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg",alt:"callback-hell"})),(0,r.kt)("h3",{id:"soluciones"},"Soluciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Promesas"),": Las promesas son un objeto que representa la terminaci\xf3n o el fracaso eventual de una operaci\xf3n as\xedncrona. Una promesa puede estar en uno de tres estados: pendiente, terminada o rechazada.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Async/Await"),": Async/Await es una forma de escribir c\xf3digo as\xedncrono que se ve y se comporta de forma s\xedncrona."))),(0,r.kt)("h2",{id:"promesas"},"Promesas"),(0,r.kt)("p",null,"Al igual que en la vida real, las promesas en javascript son una forma de asegurar que algo va a suceder en el futuro. En este caso, las promesas son un objeto que representa la terminaci\xf3n o el fracaso eventual de una operaci\xf3n as\xedncrona. Una promesa puede estar en uno de tres estados:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pendiente (pending)"),": Estado inicial, ni terminada ni rechazada."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Terminada (fullfilled)"),": Significa que la operaci\xf3n as\xedncrona se complet\xf3 con \xe9xito."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rechazada (rejected)"),": Significa que la operaci\xf3n as\xedncrona fall\xf3.")),(0,r.kt)("p",null,"Veamos el siguiete ejemplo en el que tenemos una funci\xf3n que de manera asincrona genera un archivo de sonido seg\xfan la configuraci\xf3n que le pasemos como par\xe1metro y que adem\xe1s recibe dos callbacks: uno para cuando la operaci\xf3n se completa con \xe9xito y otro para cuando la operaci\xf3n falla."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function exitoCallback(resultado) {\n  console.log(`El audio se puede encontrar en la URL: ${resultado}`);\n}\n\nfunction errorCallback(error) {\n  console.log(`Error al generar el archivo de audio: ${error}`);\n}\n\ncrearArchivoSonidoAsincrono(configuracion, exitoCallback, errorCallback);\n")),(0,r.kt)("p",null,"Si la funci\xf3n crearArchivoSonidoAsincrono se ejecuta correctamente, se ejecutar\xe1 el callback de \xe9xito, de lo contrario se ejecutar\xe1 el callback de error. Esto funciona bien, pero si tenemos que ejecutar m\xe1s c\xf3digo despu\xe9s de que la funci\xf3n se haya ejecutado, tenemos que anidar los callbacks, lo que puede llegar a ser un problema."),(0,r.kt)("p",null,"Para solucionar este problema, podemos usar promesas. Las promesas nos permiten ejecutar c\xf3digo de forma as\xedncrona y manejar el resultado de esa operaci\xf3n de forma m\xe1s sencilla. Veamos un ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const crearArchivoSonidoAsincrono = (configuracion) => {\n  return new Promise((resolve, reject) => {\n    // Aqu\xed se ejecuta el c\xf3digo as\xedncrono\n    // Si la operaci\xf3n se completa con \xe9xito, llamamos a resolve\n    // Si la operaci\xf3n falla, llamamos a reject\n  });\n};\n\ncrearArchivoSonidoAsincrono(configuracion)\n  .then((resultado) => {\n    console.log(`El audio se puede encontrar en la URL: ${resultado}`);\n  })\n  .catch((error) => {\n    console.log(`Error al generar el archivo de audio: ${error}`);\n  });\n")),(0,r.kt)("p",null,"En este caso, la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"crearArchivoSonidoAsincrono")," devuelve una promesa. Esta promesa recibe como par\xe1metro una funci\xf3n que recibe dos argumentos: ",(0,r.kt)("inlineCode",{parentName:"p"},"resolve")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"reject"),". Si la operaci\xf3n se completa con \xe9xito, llamamos a ",(0,r.kt)("inlineCode",{parentName:"p"},"resolve")," con el resultado de la operaci\xf3n. Si la operaci\xf3n falla, llamamos a ",(0,r.kt)("inlineCode",{parentName:"p"},"reject")," con el error de la operaci\xf3n. Luego, llamamos a la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"then")," de la promesa, la cual recibe como par\xe1metro una funci\xf3n que se ejecutar\xe1 cuando la promesa se resuelva con \xe9xito. Por \xfaltimo, llamamos a la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," de la promesa, la cual recibe como par\xe1metro una funci\xf3n que se ejecutar\xe1 cuando la promesa se rechace."),(0,r.kt)("p",null,"Gracias a ",(0,r.kt)("inlineCode",{parentName:"p"},"then")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"catch"),", podemos anidar las promesas y manejar el resultado de forma m\xe1s sencilla."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"hazAlgo()\n  .then((resultado) => hazOtraCosa(resultado))\n  .then((nuevoResultado) => hazOtraCosaMas(nuevoResultado))\n  .then((resultadoFinal) => {\n    console.log(`El resultado final es: ${resultadoFinal}`);\n  })\n  .catch((error) => {\n    console.log(`Error: ${error}`);\n  });\n")),(0,r.kt)("admonition",{title:"Importante",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Cuando estemos anidando promesas, es importante tener en cuenta que cada funci\xf3n que llamamos debe devolver una promesa. Si no lo hace, el resultado de la funci\xf3n no ser\xe1 una promesa y no podremos anidar las promesas."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"hazAlgo()\n  .then((resultado) => hazOtraCosa(resultado)) // Esta funci\xf3n devuelve una promesa\n  .then((nuevoResultado) => {\n    // Esta funci\xf3n no devuelve una promesa\n    // Por lo tanto, no podemos anidar las promesas\n    const resultado = hazOtraCosaMas(nuevoResultado);\n    return resultado;\n  })\n  .then((resultadoFinal) => {\n    console.log(`El resultado final es: ${resultadoFinal}`);\n  })\n"))),(0,r.kt)("h2",{id:"asyncawait"},"Async/Await"),(0,r.kt)("p",null,"Esta nueva forma de escribir c\xf3digo as\xedncrono se a\xf1adi\xf3 a javascript en la versi\xf3n ES2017. Nos permite ver el c\xf3digo as\xedncrono como si fuera s\xedncrono. Veamos un ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Usamos fetch() para hacer una petici\xf3n HTTP\n\n// Usando promesas\nconst obtenerUsuarios = () => {\n  fetch('https://jsonplaceholder.typicode.com/users')\n    .then((response) => response.json())\n    .then((users) => console.log(users))\n    .catch((error) => console.log(error));\n};\n\n// Usando async/await\nconst obtenerUsuarios = async () => {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users');\n    const users = await response.json();\n\n    console.log(users);\n  } catch (error) {\n    console.log(error);\n  }\n};\n")),(0,r.kt)("admonition",{title:"Devuelve una promesa",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Cuando usamos async/await, la funci\xf3n asincr\xf3nica devuelve una promesa. Por lo tanto, no podemos hacer lo siguiente:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const obtenerUsuarios = async () => {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users');\n    const users = await response.json();\n    // console.log(users);\n\n    return users;\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nconst promise = obtenerUsuarios();\nconsole.log(promise); // Promise { <pending> }\n")),(0,r.kt)("p",{parentName:"admonition"},"Lo correcto ser\xeda:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const promise = obtenerUsuarios();\npromise.then((users) => console.log(users));\n// [...]\n"))))}d.isMDXComponent=!0}}]);