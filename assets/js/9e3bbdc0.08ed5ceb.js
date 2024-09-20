"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[8025],{2603:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=t(4848),c=t(8453);const o={id:"success-redirect-url",title:"Success redirect URL"},n=void 0,i={id:"php/filters/block/form/success-redirect-url",title:"Success redirect URL",description:"This filter allows you to override the success redirect URL, regardless of the one selected in Settings. With the $formType parameter you can customize the URL for each form type.",source:"@site/forms/php/filters/block/form/success-redirect-url.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/success-redirect-url",permalink:"/penek-docs/forms/php/filters/block/form/success-redirect-url",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"success-redirect-url",title:"Success redirect URL"},sidebar:"forms",previous:{title:"Global message timeout",permalink:"/penek-docs/forms/php/filters/block/form/hide-global-msg-timeout"},next:{title:"Success redirect variation",permalink:"/penek-docs/forms/php/filters/block/form/success-redirect-variation"}},l={},u=[];function d(e){const r={code:"code",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["This filter allows you to override the success redirect URL, regardless of the one selected in Settings. With the ",(0,s.jsx)(r.code,{children:"$formType"})," parameter you can customize the URL for each form type."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-php",children:"\\add_filter('es_forms_block_form_success_redirect_url', [$this, 'getBlockFormSuccessRedirectUrl'], 10, 2);\n\n/**\n * Set success redirect url value.\n *\n * This filter will override settings for success redirect url.\n *\n * @param string $formType Type of form used like greenhouse, hubspot, etc.\n * @param string $formId Form ID.\n *\n * @return string\n */\npublic function getBlockFormSuccessRedirectUrl(string $formType, string $formId): string\n{\n\treturn 'https://infinum.com/custom-filter';\n}\n"})})]})}function f(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>i});var s=t(6540);const c={},o=s.createContext(c);function n(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);