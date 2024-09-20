"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[6659],{1940:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=o(4848),i=o(8453);const s={id:"how-to-use",title:"How to use?"},r=void 0,a={id:"php/actions/how-to-use",title:"How to use?",description:"Eightshift Forms was made by developers, for developers, so we provide a comprehensive set of actions that allow you to hook project specific functionality into the Forms plugin.",source:"@site/forms/php/actions/how-to-use.md",sourceDirName:"php/actions",slug:"/php/actions/how-to-use",permalink:"/forms/php/actions/how-to-use",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"how-to-use",title:"How to use?"},sidebar:"forms",previous:{title:"Settings data",permalink:"/forms/php/filters/admin/settings-data"},next:{title:"Migrations",permalink:"/forms/php/actions/migrations"}},c={},p=[{value:"How to use actions",id:"how-to-use-actions",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Eightshift Forms was made by developers, for developers, so we provide a comprehensive set of actions that allow you to hook project specific functionality into the Forms plugin."}),"\n",(0,n.jsx)(t.p,{children:"Difference between actions and filters is that actions are used to add functionality, while filters are used to modify data."}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-actions",children:"How to use actions"}),"\n",(0,n.jsxs)(t.p,{children:["The list of all available actions can be found ",(0,n.jsx)(t.a,{href:"https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php",children:"here"}),", along with descriptions and examples."]}),"\n",(0,n.jsx)(t.p,{children:"To use a action, simply copy the code snippet from the example and paste it into your project, e.g."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"\\add_action('es_forms_migration_two_to_three_locale', [$this, 'runMigration2To3Locale']);\n\n/**\n * Run custom action after migration from version 2 to 3 locale.\n *\n * @return void\n */\npublic function runMigration2To3Locale(): void\n{\n\t\\update_option('<option-name>', '<option-value>');\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(6540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);