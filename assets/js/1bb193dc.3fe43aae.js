"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[5490],{8487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(4848),d=n(8453);const s={},i="Inference options",c={id:"inference_options",title:"Inference options",description:'When creating a chat, a JSON file is generated in which you can specify additional model parameters. The chat files are located in the "chats" directory.',source:"@site/docs/inference_options.md",sourceDirName:".",slug:"/inference_options",permalink:"/penek-docs/docs/inference_options",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multimodal",permalink:"/penek-docs/docs/How-to-use-multimodal-models"},next:{title:"LoRA (Temporary unavalible)",permalink:"/penek-docs/docs/lora"}},l={},a=[];function h(e){const t={code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"inference-options",children:"Inference options"}),"\n",(0,r.jsx)(t.p,{children:'When creating a chat, a JSON file is generated in which you can specify additional model parameters. The chat files are located in the "chats" directory.'}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"parametr"}),(0,r.jsx)(t.th,{children:"default"}),(0,r.jsx)(t.th,{children:"description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{children:"[Model file name]"}),(0,r.jsx)(t.td,{children:"Chat title"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"icon"}),(0,r.jsx)(t.td,{children:"ava0"}),(0,r.jsx)(t.td,{children:"ava[0-7]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"model"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"model file path"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"model_inference"}),(0,r.jsx)(t.td,{children:"auto"}),(0,r.jsx)(t.td,{children:"model_inference: llama | gptneox | replit | gpt2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prompt_format"}),(0,r.jsx)(t.td,{children:"auto"}),(0,r.jsx)(t.td,{children:"Example for stablelm:"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"<USER> {{prompt}} <ASSISTANT>"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"numberOfThreads"}),(0,r.jsx)(t.td,{children:"0 (max)"}),(0,r.jsx)(t.td,{children:"number of threads"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"context"}),(0,r.jsx)(t.td,{children:"1024"}),(0,r.jsx)(t.td,{children:"context size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_batch"}),(0,r.jsx)(t.td,{children:"512"}),(0,r.jsx)(t.td,{children:"batch size for prompt processing"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"temp"}),(0,r.jsx)(t.td,{children:"0.8"}),(0,r.jsx)(t.td,{children:"temperature"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"top_k"}),(0,r.jsx)(t.td,{children:"40"}),(0,r.jsx)(t.td,{children:"top-k sampling"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"top_p"}),(0,r.jsx)(t.td,{children:"0.95"}),(0,r.jsx)(t.td,{children:"top-p sampling"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tfs_z"}),(0,r.jsx)(t.td,{children:"1.0"}),(0,r.jsx)(t.td,{children:"tail free sampling, parameter z"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"typical_p"}),(0,r.jsx)(t.td,{children:"1.0"}),(0,r.jsx)(t.td,{children:"locally typical sampling, parameter p"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"repeat_penalty"}),(0,r.jsx)(t.td,{children:"1.1"}),(0,r.jsx)(t.td,{children:"penalize repeat sequence of tokens"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"repeat_last_n"}),(0,r.jsx)(t.td,{children:"64"}),(0,r.jsx)(t.td,{children:"last n tokens to consider for penalize"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"frequence_penalty"}),(0,r.jsx)(t.td,{children:"0.0"}),(0,r.jsx)(t.td,{children:"repeat alpha frequency penalty"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"presence_penalty"}),(0,r.jsx)(t.td,{children:"0.0"}),(0,r.jsx)(t.td,{children:"repeat alpha presence penalt"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mirostat"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"use Mirostat sampling"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mirostat_tau"}),(0,r.jsx)(t.td,{children:"5.0"}),(0,r.jsx)(t.td,{children:"Mirostat target entropy, parameter tau"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mirostat_eta"}),(0,r.jsx)(t.td,{children:"0.1"}),(0,r.jsx)(t.td,{children:"Mirostat learning rate, parameter eta"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const d={},s=r.createContext(d);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);