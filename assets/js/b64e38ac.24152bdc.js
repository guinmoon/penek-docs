"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[2967],{8616:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=a(4848),e=a(8453);const o={id:"manual-initiation",title:"Manual initiation"},s=void 0,r={id:"javascript/manual-initiation",title:"Manual initiation",description:"If you don't want the forms JavaScript to load automatically, you can disable from the admin global settings and load it manually using this event.",source:"@site/forms/javascript/manual-initiation.md",sourceDirName:"javascript",slug:"/javascript/manual-initiation",permalink:"/forms/javascript/manual-initiation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"manual-initiation",title:"Manual initiation"},sidebar:"forms",previous:{title:"Captcha",permalink:"/forms/javascript/state/captcha"},next:{title:"Playlist",permalink:"/forms/tutorials/playlist"}},l={},c=[];function u(t){const n={code:"code",p:"p",pre:"pre",...(0,e.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"If you don't want the forms JavaScript to load automatically, you can disable from the admin global settings and load it manually using this event."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"window.addEventListener('esFormsManualInitLoaded', ({detail}) => {\n\t// Load the form.\n\tdetail.esForms.form.init();\n});\n"})})]})}function d(t={}){const{wrapper:n}={...(0,e.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},8453:(t,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var i=a(6540);const e={},o=i.createContext(e);function s(t){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(e):t.components||e:s(t.components),i.createElement(o.Provider,{value:n},t.children)}}}]);