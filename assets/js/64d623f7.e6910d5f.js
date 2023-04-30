"use strict";(self.webpackChunkaprendiendo_js=self.webpackChunkaprendiendo_js||[]).push([[26],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>f});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),d=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=t,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(f,i(i({ref:n},c),{},{components:a})):r.createElement(f,i({ref:n},c))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:t,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},992:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(7462),t=(a(7294),a(3905));const o={title:"Procesando solicitudes",slug:"/request-processing",sidebar_position:2},i="Procesamiento de solicitudes HTTP en el servidor",s={unversionedId:"modulo05/request_processing",id:"modulo05/request_processing",title:"Procesando solicitudes",description:"Una vez que un cliente ha enviado una solicitud HTTP al servidor, este debe procesarla para determinar la respuesta apropiada. En este art\xedculo, discutiremos c\xf3mo se procesan las solicitudes HTTP en el servidor, incluyendo la forma en que se analizan, las decisiones que se toman en funci\xf3n de la informaci\xf3n de la solicitud y c\xf3mo se generan las respuestas HTTP correspondientes.",source:"@site/docs/modulo05/request_processing.md",sourceDirName:"modulo05",slug:"/request-processing",permalink:"/backend-nodejs-mongodb/request-processing",draft:!1,editUrl:"https://github.com/ashel1806/backend-nodejs-mongodb/tree/main/docs/modulo05/request_processing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Procesando solicitudes",slug:"/request-processing",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Solicitudes HTTP",permalink:"/backend-nodejs-mongodb/http-requests"},next:{title:"Solicitudes en Express",permalink:"/backend-nodejs-mongodb/request-express"}},l={},d=[{value:"Analizando solicitudes HTTP",id:"analizando-solicitudes-http",level:2},{value:"Tomando decisiones en funci\xf3n de la informaci\xf3n de la solicitud",id:"tomando-decisiones-en-funci\xf3n-de-la-informaci\xf3n-de-la-solicitud",level:2},{value:"Generando respuestas HTTP adecuadas",id:"generando-respuestas-http-adecuadas",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...a}=e;return(0,t.kt)(u,(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"procesamiento-de-solicitudes-http-en-el-servidor"},"Procesamiento de solicitudes HTTP en el servidor"),(0,t.kt)("p",null,"Una vez que un cliente ha enviado una solicitud HTTP al servidor, este debe procesarla para determinar la respuesta apropiada. En este art\xedculo, discutiremos c\xf3mo se procesan las solicitudes HTTP en el servidor, incluyendo la forma en que se analizan, las decisiones que se toman en funci\xf3n de la informaci\xf3n de la solicitud y c\xf3mo se generan las respuestas HTTP correspondientes."),(0,t.kt)("h2",{id:"analizando-solicitudes-http"},"Analizando solicitudes HTTP"),(0,t.kt)("p",null,"El primer paso en el procesamiento de una solicitud HTTP es analizarla para extraer la informaci\xf3n relevante. Esto implica analizar los componentes de la solicitud HTTP, como el m\xe9todo, la URL, los encabezados y el cuerpo."),(0,t.kt)("p",null,"Una vez que se ha analizado la solicitud, el servidor puede tomar decisiones en funci\xf3n de la informaci\xf3n que se ha extra\xeddo."),(0,t.kt)("h2",{id:"tomando-decisiones-en-funci\xf3n-de-la-informaci\xf3n-de-la-solicitud"},"Tomando decisiones en funci\xf3n de la informaci\xf3n de la solicitud"),(0,t.kt)("p",null,"Despu\xe9s de analizar la solicitud HTTP, el servidor debe tomar decisiones en funci\xf3n de la informaci\xf3n que se ha extra\xeddo. Algunas de las decisiones que puede tomar el servidor incluyen:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Determinar si la solicitud es v\xe1lida"),": El servidor debe asegurarse de que la solicitud sea v\xe1lida antes de procesarla. Esto puede implicar verificar que el m\xe9todo HTTP sea v\xe1lido, que la URL sea correcta y que se proporcionen los encabezados necesarios.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Determinar qu\xe9 recurso se est\xe1 solicitando"),": El servidor debe determinar qu\xe9 recurso se est\xe1 solicitando en funci\xf3n de la URL proporcionada en la solicitud.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Determinar si se requiere autenticaci\xf3n"),": Si el recurso solicitado requiere autenticaci\xf3n, el servidor debe verificar que el cliente est\xe9 autorizado para acceder a \xe9l.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Procesar el cuerpo de la solicitud"),": Si la solicitud incluye un cuerpo, el servidor debe procesar el contenido del cuerpo de la solicitud.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Tomar otras decisiones en funci\xf3n del prop\xf3sito de la solicitud"),": Dependiendo del prop\xf3sito de la solicitud, el servidor puede necesitar tomar otras decisiones, como verificar que se est\xe9n utilizando las cookies correctas o redirigir la solicitud a otra ubicaci\xf3n."))),(0,t.kt)("h2",{id:"generando-respuestas-http-adecuadas"},"Generando respuestas HTTP adecuadas"),(0,t.kt)("p",null,"Una vez que el servidor ha tomado decisiones en funci\xf3n de la informaci\xf3n de la solicitud, debe generar una respuesta HTTP apropiada. Las respuestas HTTP se componen de tres partes:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"C\xf3digo de estado HTTP"),": Un c\xf3digo num\xe9rico que indica si la solicitud fue exitosa o si se produjo alg\xfan tipo de error.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Encabezados"),": Informaci\xf3n adicional que se env\xeda con la respuesta HTTP, como el tipo de contenido que se est\xe1 enviando o las cookies que se deben usar.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Cuerpo"),": El contenido que se est\xe1 enviando en la respuesta HTTP, como HTML, JSON o archivos."))),(0,t.kt)("p",null,"Es importante tener en cuenta que la forma en que se genera la respuesta HTTP depender\xe1 del prop\xf3sito de la solicitud y de las decisiones que se hayan tomado en funci\xf3n de la informaci\xf3n de la solicitud."))}p.isMDXComponent=!0}}]);