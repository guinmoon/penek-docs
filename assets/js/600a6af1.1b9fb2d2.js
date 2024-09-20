"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[940],{6335:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=s(4848),n=s(8453);const i={id:"how-to-use",title:"How to use?"},r=void 0,a={id:"javascript/state/how-to-use",title:"How to use?",description:"As mentioned earlier, Eightshift Forms utilizes the esForms global window object to manage the state. This approach ensures consistency across various functionalities and components.",source:"@site/forms/javascript/state/how-to-use.md",sourceDirName:"javascript/state",slug:"/javascript/state/how-to-use",permalink:"/forms/javascript/state/how-to-use",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"how-to-use",title:"How to use?"},sidebar:"forms",previous:{title:"How to use?",permalink:"/forms/javascript/events/how-to-use"},next:{title:"State",permalink:"/forms/javascript/state/"}},c={},d=[{value:"Example",id:"example",level:2}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["As mentioned earlier, Eightshift Forms utilizes the ",(0,o.jsx)(t.code,{children:"esForms"})," global window object to manage the state. This approach ensures consistency across various functionalities and components."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"esForms"})," window object contains all the functions developers can use in their forms. Doing so makes all features available for your project, with minimal risk of future disruptions or changes."]}),"\n",(0,o.jsxs)(t.p,{children:["To utilize the ",(0,o.jsx)(t.code,{children:"esForms"})," object, call it directly from the window object:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"window.esForms\n"})}),"\n",(0,o.jsx)(t.p,{children:"or you can use built-in events which also contain all the state in the time of the event."}),"\n",(0,o.jsxs)(t.admonition,{type:"caution",children:[(0,o.jsxs)(t.p,{children:["Take caution when using state data outside of the ",(0,o.jsx)(t.code,{children:"esFormsJsFormLoaded"})," event, as it may not be available at the time of use. To be sure the data is available, run code after the DOM is ready (",(0,o.jsx)(t.code,{children:"DOMContentLoaded"})," event), together with the ",(0,o.jsx)(t.code,{children:"esFormsJsFormLoaded"})," event."]}),(0,o.jsx)(t.p,{children:"If your script is loaded before the main form script, you can use PHP hooks to make forms script dependent on you script to ensure that your script is loaded before the main form script and the events will fire."})]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(t.p,{children:["In this example we are using the ",(0,o.jsx)(t.code,{children:"esFormsJsFormLoaded"})," event to initialize our form in JavaScript."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import domReady from '@wordpress/dom-ready';\n\ndomReady(() => {\n\tconst element = document.querySelector('.js-es-block-form');\n\n\tif (!element) {\n\t\treturn;\n\t}\n\n\telement?.addEventListener('esFormsJsFormLoaded', ({detail}) => {\n\t\tconst {\n\t\t\tformId,\n\t\t\tesForms = {\n\t\t\t\tstore,\n\t\t\t},\n\t\t} = detail;\n\n\t\t// Do some actions with the form.\n\t});\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var o=s(6540);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);