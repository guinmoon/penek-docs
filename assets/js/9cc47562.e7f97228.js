"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[8570],{7040:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=t(4848),i=t(8453);const r={id:"phar-location",title:"Phar location"},a=void 0,c={id:"php/filters/geolocation/phar-location",title:"Phar location",description:"Geolocation .phar file path on your server. Useful if you want to provide the geolocation service yourself.",source:"@site/forms/php/filters/geolocation/phar-location.md",sourceDirName:"php/filters/geolocation",slug:"/php/filters/geolocation/phar-location",permalink:"/penek-docs/forms/php/filters/geolocation/phar-location",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"phar-location",title:"Phar location"},sidebar:"forms",previous:{title:"DB location",permalink:"/penek-docs/forms/php/filters/geolocation/db-location"},next:{title:"Countries",permalink:"/penek-docs/forms/php/filters/geolocation/countries"}},s={},l=[];function p(o){const e={code:"code",p:"p",pre:"pre",...(0,i.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["Geolocation ",(0,n.jsx)(e.code,{children:".phar"})," file path on your server. Useful if you want to provide the geolocation service yourself."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-php",children:"\\add_filter('es_forms_geolocation_phar_location', [$this, 'getGeolocationPharLocation']);\n\n/**\n * Provide custom geolocation phar location.\n *\n * This filter provides you with the ability to provide custom database location for geolocation.\n *\n * @return string\n */\npublic function getGeolocationPharLocation(): string\n{\n\treturn __DIR__ . \\DIRECTORY_SEPARATOR . 'geoip.phar';\n}\n"})})]})}function h(o={}){const{wrapper:e}={...(0,i.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(p,{...o})}):p(o)}},8453:(o,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var n=t(6540);const i={},r=n.createContext(i);function a(o){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function c(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:a(o.components),n.createElement(r.Provider,{value:e},o.children)}}}]);