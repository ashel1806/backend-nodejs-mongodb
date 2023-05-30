"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[2983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={title:"Solicitudes HTTP",slug:"/http-requests",sidebar_position:1},a="Gesti\xf3n de Solicitudes HTTP",s={unversionedId:"modulo05/index",id:"modulo05/index",title:"Solicitudes HTTP",description:"El protocolo de transferencia de hipertexto (HTTP) es un protocolo de comunicaci\xf3n utilizado en la web para transferir datos entre el cliente y el servidor. Las solicitudes HTTP son una parte fundamental de este proceso, ya que permiten a los clientes enviar informaci\xf3n al servidor para su procesamiento.",source:"@site/docs/modulo05/index.md",sourceDirName:"modulo05",slug:"/http-requests",permalink:"/backend-nodejs-mongodb/http-requests",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb/tree/main/docs/modulo05/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Solicitudes HTTP",slug:"/http-requests",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modulo 05",permalink:"/backend-nodejs-mongodb/category/modulo-05"},next:{title:"Procesando solicitudes",permalink:"/backend-nodejs-mongodb/request-processing"}},l={},c=[{value:"Definici\xf3n de solicitudes HTTP",id:"definici\xf3n-de-solicitudes-http",level:2},{value:"M\xe9todos HTTP comunes",id:"m\xe9todos-http-comunes",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gesti\xf3n-de-solicitudes-http"},"Gesti\xf3n de Solicitudes HTTP"),(0,r.kt)("p",null,"El protocolo de transferencia de hipertexto (HTTP) es un protocolo de comunicaci\xf3n utilizado en la web para transferir datos entre el cliente y el servidor. Las solicitudes HTTP son una parte fundamental de este proceso, ya que permiten a los clientes enviar informaci\xf3n al servidor para su procesamiento."),(0,r.kt)("h2",{id:"definici\xf3n-de-solicitudes-http"},"Definici\xf3n de solicitudes HTTP"),(0,r.kt)("p",null,"Una solicitud HTTP es un mensaje enviado por un cliente a un servidor para solicitar informaci\xf3n o realizar una acci\xf3n en la web. Las solicitudes HTTP pueden ser iniciadas por un navegador web o una aplicaci\xf3n cliente, y se env\xedan a trav\xe9s de la red hasta el servidor web correspondiente."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://interpolados.files.wordpress.com/2017/03/160.png?w=640",alt:"Esquema solicitud HTTP"})),(0,r.kt)("h2",{id:"m\xe9todos-http-comunes"},"M\xe9todos HTTP comunes"),(0,r.kt)("p",null,"Los m\xe9todos HTTP son verbos que indican la acci\xf3n que se debe realizar en el recurso solicitado. Los m\xe9todos HTTP m\xe1s comunes son los siguientes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET"),": solicita una representaci\xf3n del recurso especificado. En general, se utiliza para obtener informaci\xf3n del servidor.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"POST"),": env\xeda datos para que sean procesados por el recurso identificado. En general, se utiliza para enviar formularios o datos a un servidor.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),": actualiza el recurso especificado con los datos proporcionados.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),": elimina el recurso especificado."))),(0,r.kt)("p",null,"Adem\xe1s de estos m\xe9todos, tambi\xe9n existen otros m\xe9todos HTTP menos utilizados, como ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIONS")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH"),"."),(0,r.kt)("p",null,"Podemos ver la lista completa de m\xe9todos HTTP en la ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-4"},"especificaci\xf3n HTTP"),"."))}u.isMDXComponent=!0}}]);