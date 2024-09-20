"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[3883],{1948:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(4848),a=n(8453);const i={id:"alternative-data-set",title:"Alternative datasets"},l=void 0,s={id:"php/filters/block/country/alternative-data-set",title:"Alternative datasets",description:"We use the DataHub country list to provide a REST route with all the countries, as well as the data in the Geolocation and phone number fields.",source:"@site/forms/php/filters/block/country/alternative-data-set.md",sourceDirName:"php/filters/block/country",slug:"/php/filters/block/country/alternative-data-set",permalink:"/forms/php/filters/block/country/alternative-data-set",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alternative-data-set",title:"Alternative datasets"},sidebar:"forms",previous:{title:"Additional content",permalink:"/forms/php/filters/block/phone/additional-content"},next:{title:"Additional content",permalink:"/forms/php/filters/block/country/additional-content"}},r={},c=[{value:"Available options:",id:"available-options",level:4}];function d(t){const e={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"We use the DataHub country list to provide a REST route with all the countries, as well as the data in the Geolocation and phone number fields."}),"\n",(0,o.jsxs)(e.p,{children:["The complete list can be found ",(0,o.jsx)(e.a,{href:"https://github.com/infinum/eightshift-forms/blob/develop/data/country/manifest.json",children:"here"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"By default the Country field will show the full list of countries. With this filter, an alternate dataset can be provided to use instead of the built-in one. Please note that the built-in dataset can't be edited, only a replacement can be provided."}),"\n",(0,o.jsxs)(e.p,{children:["For example, if you only want to allow choosing between 4 countries, you can do that with this filter. Add a new entry, add the ",(0,o.jsx)(e.code,{children:"label"})," and the ",(0,o.jsx)(e.code,{children:"slug"}),", then provide the countries you want to be included in the ",(0,o.jsx)(e.code,{children:"onlyUse"})," key."]}),"\n",(0,o.jsx)(e.h4,{id:"available-options",children:"Available options:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"remove"})," - Allows you to remove certain countries from the default dataset."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"change"})," - Allows you to modify the names of countries in the default dataset."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"onlyUse"})," - Allows providing a custom list of countries, instead of using the full dataset."]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",children:"\\add_filter('es_forms_block_country_alternative_data_set', [$this, 'getBlockCountryAlternativeDataSet']);\n\n/**\n * Get country alternative changes for data set and provide filters.\n *\n * This filter will only provide alternative options and change the original list.\n *\n * @return array<mixed>\n */\npublic function getBlockCountryAlternativeDataSet(): array\n{\n\t{\n\t\treturn [\n\t\t\t[\n\t\t\t\t'label' => 'New List',\n\t\t\t\t'slug' => 'new-list',\n\t\t\t\t'remove' => [\n\t\t\t\t\t'cz',\n\t\t\t\t\t'us',\n\t\t\t\t],\n\t\t\t\t'change' => [\n\t\t\t\t\t'hr' => 'New Croatia',\n\t\t\t\t],\n\t\t\t\t'onlyUse' => [\n\t\t\t\t\t'de',\n\t\t\t\t\t'gb',\n\t\t\t\t\t'hr',\n\t\t\t\t\t'cz',\n\t\t\t\t],\n\t\t\t],\n\t\t\t[\n\t\t\t\t'label' => 'Cool List',\n\t\t\t\t'slug' => 'cool-list',\n\t\t\t\t'onlyUse' => [\n\t\t\t\t\t'ba',\n\t\t\t\t\t'jp',\n\t\t\t\t\t'gb',\n\t\t\t\t\t'fr',\n\t\t\t\t],\n\t\t\t],\n\t\t];\n\t}\n}\n"})})]})}function h(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>l,x:()=>s});var o=n(6540);const a={},i=o.createContext(a);function l(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:l(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);