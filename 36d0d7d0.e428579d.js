(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{101:function(e,t,n){"use strict";var r=n(0),a=n(102);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},102:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return g})),n.d(t,"metadata",(function(){return j})),n.d(t,"toc",(function(){return v})),n.d(t,"default",(function(){return O}));var r=n(3),a=n(7),i=n(0),o=n.n(i),c=n(93),l=n(101),u=n(95),s=n(75),p=n.n(s),b=37,m=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,a=e.values,c=e.groupId,s=e.className,d=Object(l.a)(),f=d.tabGroupChoices,g=d.setTabGroupChoices,j=Object(i.useState)(r),v=j[0],y=j[1],O=i.Children.toArray(e.children);if(null!=c){var h=f[c];null!=h&&h!==v&&a.some((function(e){return e.value===h}))&&y(h)}var w=function(e){y(e),null!=c&&g(c,e)},x=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":n},s)},a.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(u.a)("tabs__item",p.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(i.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var f=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},g={id:"installation",title:"Installation"},j={unversionedId:"guide/installation",id:"guide/installation",isDocsHomePage:!1,title:"Installation",description:"Pesa SDK can be installed using NPM package manager.",source:"@site/docs/guide/Installation.mdx",slug:"/guide/installation",permalink:"/pesa-js/guide/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guide/Installation.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Contributing",permalink:"/pesa-js/getting_started/contributing"},next:{title:"Configuration",permalink:"/pesa-js/guide/configuration"}},v=[{value:"System Requirements",id:"system-requirements",children:[{value:"<strong>Minimum requirements</strong>",id:"minimum-requirements",children:[]},{value:"Installing to an Existing Project",id:"installing-to-an-existing-project",children:[]},{value:"Upgrading",id:"upgrading",children:[]}]}],y={toc:v};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Pesa SDK can be installed using NPM package manager."),Object(c.b)("h2",{id:"system-requirements"},"System Requirements"),Object(c.b)("h3",{id:"minimum-requirements"},Object(c.b)("strong",{parentName:"h3"},"Minimum requirements")),Object(c.b)("p",null,"To run the SDK, your system will need to have ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",{parentName:"strong",href:"https://nodejs.org/en/"},"Node")," version >= 10.1"),"."),Object(c.b)("h3",{id:"installing-to-an-existing-project"},"Installing to an Existing Project"),Object(c.b)("p",null,"The MPesa Nodejs SDK can be an existing project using NPM or Tarn."),Object(c.b)("p",null,"In your project root:"),Object(c.b)(d,{defaultValue:"yarn",values:[{label:"YARN",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(c.b)(f,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"yarn add openpesa/pesa-js\n"))),Object(c.b)(f,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm i openpesa/pesa-js\n")))),Object(c.b)("h3",{id:"upgrading"},"Upgrading"),Object(c.b)("p",null,"Whenever there is a new release, then from the command line in your project root:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"$ npm update\n")),Object(c.b)("p",null,"Read the upgrade instructions, and check designated files for affected changes."))}O.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}}}]);