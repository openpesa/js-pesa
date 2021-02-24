(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{100:function(e,t,n){"use strict";var r=n(0),a=n(101);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},101:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},106:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(100),o=n(96),c=n(55),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,b=e.groupId,m=e.className,d=Object(i.a)(),f=d.tabGroupChoices,g=d.setTabGroupChoices,y=Object(r.useState)(c),j=y[0],v=y[1],O=r.Children.toArray(e.children);if(null!=b){var h=f[b];null!=h&&h!==j&&p.some((function(e){return e.value===h}))&&v(h)}var N=function(e){v(e),null!=b&&g(b,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},107:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(94)),o=n(106),c=n(107),l={id:"installation",title:"Installation"},u={unversionedId:"guide/installation",id:"guide/installation",isDocsHomePage:!1,title:"Installation",description:"Pesa SDK can be installed using NPM package manager.",source:"@site/docs/guide/installation.mdx",slug:"/guide/installation",permalink:"/pesa-js/guide/installation",editUrl:"https://github.com/openpesa/pesa-js/edit/main/docs/guide/installation.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Contributing",permalink:"/pesa-js/getting_started/contributing"},next:{title:"Usage Guide",permalink:"/pesa-js/guide/configuration"}},s=[{value:"System Requirements",id:"system-requirements",children:[{value:"<strong>Minimum requirements</strong>",id:"minimum-requirements",children:[]},{value:"Installing to an Existing Project",id:"installing-to-an-existing-project",children:[]},{value:"Upgrading",id:"upgrading",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Pesa SDK can be installed using NPM package manager."),Object(i.b)("h2",{id:"system-requirements"},"System Requirements"),Object(i.b)("h3",{id:"minimum-requirements"},Object(i.b)("strong",{parentName:"h3"},"Minimum requirements")),Object(i.b)("p",null,"To run the SDK, your system will need to have ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://nodejs.org/en/"},"Node")," version >= 10.1"),"."),Object(i.b)("h3",{id:"installing-to-an-existing-project"},"Installing to an Existing Project"),Object(i.b)("p",null,"The MPesa Nodejs SDK can be an existing project using NPM or Tarn."),Object(i.b)("p",null,"In your project root:"),Object(i.b)(o.a,{defaultValue:"yarn",values:[{label:"YARN",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"yarn add openpesa/pesa-js\n"))),Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm i openpesa/pesa-js\n")))),Object(i.b)("h3",{id:"upgrading"},"Upgrading"),Object(i.b)("p",null,"Whenever there is a new release, then from the command line in your project root:"),Object(i.b)(o.a,{defaultValue:"yarn",values:[{label:"YARN",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"yarn upgrade\n"))),Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"\nnpm update\n")))),"Read the upgrade instructions, and check designated files for affected changes.")}b.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}}}]);