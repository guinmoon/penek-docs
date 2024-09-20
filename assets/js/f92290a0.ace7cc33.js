"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[6660],{5136:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(4848),i=n(8453);const o={id:"settings-data",title:"Settings data"},a=void 0,r={id:"php/filters/admin/settings-data",title:"Settings data",description:"This filter allows adding a custom settings page in the WordPress admin area. Useful when creating custom option pages for Forms add-on plugins.",source:"@site/forms/php/filters/admin/settings-data.md",sourceDirName:"php/filters/admin",slug:"/php/filters/admin/settings-data",permalink:"/penek-docs/forms/php/filters/admin/settings-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"settings-data",title:"Settings data"},sidebar:"forms",previous:{title:"Force mimetype from FS",permalink:"/penek-docs/forms/php/filters/validation/force-mimetype-from-fs"},next:{title:"How to use?",permalink:"/penek-docs/forms/php/actions/how-to-use"}},d={},c=[];function p(t){const e={code:"code",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"This filter allows adding a custom settings page in the WordPress admin area. Useful when creating custom option pages for Forms add-on plugins."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-php",children:"\\add_filter('es_forms_admin_settings_data', [$this, 'getSettingsConfig']);\n\n/**\n * Settings config data.\n *\n * @return array<mixed>\n */\npublic function getSettingsConfig(): array\n{\n\treturn [\n\t\tself::SETTINGS_TYPE_KEY => [\n\t\t\t'settings' => 'es_forms_settings_addon_<setting-name>',\n\t\t\t'settingsGlobal' => 'es_forms_settings_global_<setting-name>',\n\t\t\t'type' => 'addon',\n\t\t\t'use' => '<setting-name>-use',\n\t\t\t'labels' => [\n\t\t\t\t'title' => \\__('Title', '<text-domain>'),\n\t\t\t\t'desc' => \\__('Description', '<text-domain>'),\n\t\t\t\t'icon' => '<svg-icon>',\n\t\t\t],\n\t\t],\n\t];\n}\n"})})]})}function l(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>r});var s=n(6540);const i={},o=s.createContext(i);function a(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);