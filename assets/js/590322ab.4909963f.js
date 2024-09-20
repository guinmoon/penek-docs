"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4203],{7759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(4848),s=n(8453);const i={title:"Adding fonts",description:"An intro to adding fonts to your project.",slug:"adding-fonts",authors:"obradovic",date:new Date("2022-04-12T00:00:00.000Z"),tags:["eightshift","boilerplate","fonts"],hide_table_of_contents:!1},a=void 0,r={permalink:"/penek-docs/blog/adding-fonts",source:"@site/blog/2022-04-08-adding-fonts.md",title:"Adding fonts",description:"An intro to adding fonts to your project.",date:"2022-04-12T00:00:00.000Z",tags:[{inline:!0,label:"eightshift",permalink:"/penek-docs/blog/tags/eightshift"},{inline:!0,label:"boilerplate",permalink:"/penek-docs/blog/tags/boilerplate"},{inline:!0,label:"fonts",permalink:"/penek-docs/blog/tags/fonts"}],readingTime:6.005,hasTruncateMarker:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic"}],frontMatter:{title:"Adding fonts",description:"An intro to adding fonts to your project.",slug:"adding-fonts",authors:"obradovic",date:"2022-04-12T00:00:00.000Z",tags:["eightshift","boilerplate","fonts"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Using assets in a project",permalink:"/penek-docs/blog/using-assets"},nextItem:{title:"Modifying blocks - Color Theme",permalink:"/penek-docs/blog/modifying-blocks-color-theme"}},l={authorsImageUrls:[void 0]},c=[{value:"Importing fonts into your project",id:"importing-fonts-into-your-project",level:2},{value:"Using only one font in a block",id:"using-only-one-font-in-a-block",level:2},{value:"Adding a font picker",id:"adding-a-font-picker",level:2},{value:"Closing thoughts",id:"closing-thoughts",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Every project is unique. Logo, colors, fonts, etc. are what define the visual identity of your website. In this post, we'll cover adding fonts to a project."}),"\n",(0,o.jsx)(t.h2,{id:"importing-fonts-into-your-project",children:"Importing fonts into your project"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/basics/fonts",children:"Our documentation"})," covers the necessary steps to add a font to your project, but here we'll cover the process in a bit more detail. To start, we need a font (or two). For this example, I'll use ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"Source Sans Pro"})})," and ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"Noto Serif"})})," which I've downloaded from ",(0,o.jsx)(t.a,{href:"https://fonts.google.com/",children:"Google Fonts"}),". They are in the ",(0,o.jsx)(t.code,{children:".ttf"})," format (you may find some which are ",(0,o.jsx)(t.code,{children:".otf"}),", which will work in the same way), so you need to convert them to ",(0,o.jsx)(t.code,{children:".woff"})," and ",(0,o.jsx)(t.code,{children:".woff2"}),". Whatever approach you use is okay - we recommend the following tools:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://convertio.co/ttf-woff/",children:"Convertio"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://cloudconvert.com/ttf-to-woff",children:"Cloud Convert"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://everythingfonts.com/ttf-to-woff",children:"Everything Fonts"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://transfonter.org/",children:"Transfonter"})}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Warning",type:"caution",children:(0,o.jsx)(t.p,{children:"Make sure you have the proper license for the fonts you are converting."})}),"\n",(0,o.jsxs)(t.p,{children:["Fonts should go inside your theme's ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"/assets/fonts"})})," folder. Copy the fonts you want to use there. You will also notice that this folder contains an ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"index.js"})})," file, used to import fonts into your project. Here's an example of how I imported my fonts:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"// SourceSansPro WOFF\nimport './SourceSansPro-Bold.woff';\nimport './SourceSansPro-BoldItalic.woff';\nimport './SourceSansPro-Italic.woff';\nimport './SourceSansPro-Regular.woff';\nimport './SourceSansPro-Light.woff';\nimport './SourceSansPro-LightItalic.woff';\n\n// SourceSansPro WOFF2\nimport './SourceSansPro-Bold.woff2';\nimport './SourceSansPro-BoldItalic.woff2';\nimport './SourceSansPro-Italic.woff2';\nimport './SourceSansPro-Regular.woff2';\nimport './SourceSansPro-Light.woff2';\nimport './SourceSansPro-LightItalic.woff2';\n\n// NotoSerif WOFF\nimport './NotoSerif-Bold.woff';\nimport './NotoSerif-BoldItalic.woff';\nimport './NotoSerif-Italic.woff';\nimport './NotoSerif-Regular.woff';\n\n// NotoSerif WOFF2\nimport './NotoSerif-Bold.woff2';\nimport './NotoSerif-BoldItalic.woff2';\nimport './NotoSerif-Italic.woff2';\nimport './NotoSerif-Regular.woff2';\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you don't need to support IE11, don't include ",(0,o.jsx)(t.code,{children:".woff"})," files. This will save you some bandwidth."]})}),"\n",(0,o.jsxs)(t.p,{children:["To add these fonts as your base font and secondary font, go to the global manifest located in ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"/src/Blocks"})})," and add the following inside ",(0,o.jsx)(t.code,{children:"globalVariables"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'"globalVariables": {\n\t// ...\n\t"baseFont": "SourceSansPro",\n\t"secondaryFont": "NotoSerif",\n\t// ...\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Next, you can create a new file called ",(0,o.jsxs)(t.strong,{children:["_",(0,o.jsx)(t.em,{children:"typography.scss"})]})," inside your ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"/assets/styles/parts/utils/"})})," folder and add the following:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-scss",children:"@include font-face(global-settings(baseFont), 'SourceSansPro-Light', 300);\n@include font-face(global-settings(baseFont), 'SourceSansPro-LightItalic', 300, italic);\n@include font-face(global-settings(baseFont), 'SourceSansPro-Regular', 400);\n@include font-face(global-settings(baseFont), 'SourceSansPro-Italic', 400, italic);\n@include font-face(global-settings(baseFont), 'SourceSansPro-Bold', 700);\n@include font-face(global-settings(baseFont), 'SourceSansPro-BoldItalic', 700, italic);\n\n@include font-face(global-settings(secondaryFont), 'NotoSerif-Bold', 700);\n@include font-face(global-settings(secondaryFont), 'NotoSerif-BoldItalic', 700, italic);\n@include font-face(global-settings(secondaryFont), 'NotoSerif-Italic', 400, italic);\n@include font-face(global-settings(secondaryFont), 'NotoSerif-Regular', 400);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you would like to know more about the ",(0,o.jsx)(t.code,{children:"font-face"})," mixin, you can take a look at our ",(0,o.jsx)(t.a,{href:"/docs/basics/library",children:"Sass documentation"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Because this is a new file, we have to include it. You can do that inside ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"/assets/styles/parts/_shared.scss"})})," file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-scss",children:"// Project specific.\n@import 'utils/shared-variables';\n@import 'utils/typography';\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Run ",(0,o.jsx)(t.code,{children:"npm start"})," to rebuild your ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"public"})})," folder and assets. If you did everything correctly, your build should pass and you will see your fonts inside the ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"public"})})," folder."]}),"\n",(0,o.jsx)(t.h2,{id:"using-only-one-font-in-a-block",children:"Using only one font in a block"}),"\n",(0,o.jsxs)(t.p,{children:["There are multiple ways of using fonts in a block. The simplest use case is if you have only one font you want to use for that specific block. In this case, we want the Heading block to only use ",(0,o.jsx)(t.em,{children:"Noto Serif"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["To make our secondary font available for use, we need to first define it as a CSS variable. We can do that in ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"/assets/styles/parts/utils/_shared-variables.scss"})}),". The base font is already defined there, so all we need to do is add our secondary font definition below it."]}),"\n",(0,o.jsxs)(t.p,{children:["To make things a bit more consistent, we may also want to rename ",(0,o.jsx)(t.code,{children:"--global-font-family"})," CSS variable to ",(0,o.jsx)(t.code,{children:"--base-font-family"}),". Just don't forget to search/replace this new variable name across your project! Please note that the fallbacks for the fonts can be anything, this is just an example. Once we're done, it should look like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-scss",children:"\t--base-font-family: var(--global-base-font), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,\n\t\tArial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n\n\t--secondary-font-family: var(--global-secondary-font), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,\n\t\tArial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n"})}),"\n",(0,o.jsxs)(t.p,{children:["After defining the ",(0,o.jsx)(t.code,{children:"--secondary-font-family"})," CSS variable, we can go to ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"/src/Blocks/components/heading/heading-style.scss"})})," and add the following rule to the ",(0,o.jsx)(t.code,{children:".heading"})," class:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-scss",children:"\tfont-family: var(--secondary-font-family);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["And that's it! The Heading block will now use the ",(0,o.jsx)(t.em,{children:"Noto Serif"})," font."]}),"\n",(0,o.jsx)(t.h2,{id:"adding-a-font-picker",children:"Adding a font picker"}),"\n",(0,o.jsxs)(t.p,{children:["In some cases, you may want to give users the option to choose between fonts that they want to use in their block. For this example, we'll use the ",(0,o.jsx)(t.code,{children:"paragraph"})," block where we want users to have both ",(0,o.jsx)(t.em,{children:"Source Sans Pro"})," and ",(0,o.jsx)(t.em,{children:"Noto Serif"})," available."]}),"\n",(0,o.jsxs)(t.p,{children:["First step is to add a new attribute, options and CSS variable values in ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"/src/Blocks/components/paragraph/manifest.json"})}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'// ...\n\t"attributes": {\n\t\t// ...\n\t\t"paragraphFontFamily": {\n\t\t\t"type": "string",\n\t\t\t"default": "base"\n\t\t}\n\t},\n\t"options": {\n\t\t// ...\n\t\t"paragraphFontFamily": [\n\t\t\t{\n\t\t\t\t"label": "SourceSansPro",\n\t\t\t\t"value": "base"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"label": "NotoSerif",\n\t\t\t\t"value": "secondary"\n\t\t\t}\n\t\t],\n\t\t// ...\n\t}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["After defining the new attribute and options for the font family, we now have to add a variable to ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"manifest.json"})}),". We can add it to the ",(0,o.jsx)(t.code,{children:"variables"})," object. This approach is slightly different from the one explained in the ",(0,o.jsx)(t.a,{href:"/blog/modifying-blocks-color-theme",children:"Modifying blocks"})," blog post. Here we can use ",(0,o.jsx)(t.code,{children:"%value%"})," wildcard to dynamically add the selected value to our CSS variable."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'"paragraphFontFamily": [\n\t{\n\t\t"variable": {\n\t\t\t"paragraph-font-family": "var(--%value%-font-family)"\n\t\t}\n\t}\n]\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The next step is to go to ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"/src/Blocks/components/paragraph/components/paragraph-options.js"})})," and add a control for the new font family option. The first thing we can add is a new attribute that will allow us to toggle showing the Paragraph font family option on other blocks which are using the Paragraph component. There might be a case where we want only one font family, so this option may come in handy in some other blocks."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const {\n\t\tsetAttributes,\n\t\t//...\n\t\tshowParagraphFontFamily = true,\n\t} = attributes;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["After that, we need to fetch either the saved attribute value or get the default one from the manifest. We can do that with the ",(0,o.jsx)(t.code,{children:"checkAttr"})," helper, adding it just below ",(0,o.jsx)(t.code,{children:"paragraphColor"})," and ",(0,o.jsx)(t.code,{children:"paragraphSize"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"\tconst paragraphFontFamily = checkAttr('paragraphFontFamily', attributes, manifest);\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now we have to add an actual control to the options panel which will allow us to choose between fonts."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"\treturn (\n\t\t// ...\n\t\t{showParagraphFontFamily &&\n\t\t\t<CustomSelect\n\t\t\t\tlabel={<IconLabel icon={icons.fontFamily} label={__('Font Family', 'eightshift-theme')} />}\n\t\t\t\tvalue={paragraphFontFamily}\n\t\t\t\toptions={getOption('paragraphFontFamily', attributes, manifest)}\n\t\t\t\tonChange={(value) => setAttributes({ [getAttrKey('paragraphFontFamily', attributes, manifest)]: value })}\n\t\t\t\tisClearable={false}\n\t\t\t\tisSearchable={false}\n\t\t\t\tsimpleValue\n\t\t\t/>\n\t\t}\n\t\t// ...\n\t);\n"})}),"\n",(0,o.jsx)(t.p,{children:"The control for selecting a font should now be available under Paragraph options. Saving the choice now works, but the font stays the same both in the editor and on the frontend."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Font Picker",src:n(4301).A+"",width:"272",height:"184"})}),"\n",(0,o.jsxs)(t.p,{children:["The final step we need to make this work is to add a CSS rule that consumes our variable to ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"/src/Blocks/components/paragraph/paragraph-style.scss"})}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-scss",children:".paragraph {\n\t// ...\n\tfont-family: var(--paragraph-font-family, var(--base-font-family));\n\t// ...\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"After adding this single line of CSS code, your new option for selecting fonts will now be fully functional."}),"\n",(0,o.jsx)(t.h2,{id:"closing-thoughts",children:"Closing thoughts"}),"\n",(0,o.jsx)(t.p,{children:"Adding fonts to a project is something you will usually only do when setting up a new project and then forget about it. As you could see in this blog post, this isn't a complicated process, but it has a specific set of steps that have to be taken in order for custom fonts to work in your project."}),"\n",(0,o.jsx)(t.p,{children:"Of course, there are other ways to include fonts in your project, but the described process is what we recommend and use. This is the (Eightshift) Way."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4301:(e,t,n)=>{n.d(t,{A:()=>o});const o="data:image/webp;base64,UklGRmwOAABXRUJQVlA4IGAOAADwSwCdASoQAbgAPjEUiUQiIQkkJvQQAYJaW7hbvDUXX7gcIU4bwHoMbTl+oHYA/Gb1YOsA9ADpCP2P/bf4AP1h1aTyJ/Uuy/+o/ix/OPS/vCd1PXP+jf93/F6Y/8R+mX0r+wfr9+Snwr0unqBfiH8Y/nf47f2b9ofVJ7ovGP0W/HT4AvRH4t/VP67+0P9l/cX1m/3D8cvcn6Kf2D8d/oA/g/8b/pH5C/1//+fQHei+Hf2D8ZvoC/jv8w/s/9x/Zj/Cf//7Sf1n/Jf2r92/7p7O/x/+qf4z+9/uT/f///+AX8S/lX9u/rP+d/2v92//f/c+1X1ofr17GH6q/+EuoRhE4FJBKQEnbLkp0TKZJPMIoJJnCPGH3/UboZiIMW43ZxcCfP1Bt6cLS24JKLF+wD9ddBPgR0G6saJH/OpfX3jqRkkzhHOnyIkUm3FGvFxzg7ywo0fjplBquKWJA45qz1QtNzmErEs2uChOIzXJscADgsih/dB1m2D4Ck/tbqcK8jGosKiOhZKZX9BKY7Sxp9oZdR5F4lSEWdbrpcSZm51WUa8XHFfdC1I6FQA/tsUvRtS6raiIA9JlUE8y27BQosyn5w2fx5mJdh6pESFHDbi5Oa4ZwQESx2QMzqMxdbkOivrypcheMQEzF/SIVjryRBK6efaRbtUi8XZVjAiJyBZrKm8qUzsss9DsoiEfSYDvzneKgKtynZDSW0E0Tt6V20E0SUtbCkv+mFafNnYyyl2PYjNotao19Q6RtWPVnWgscYgLpYwi8+DeYtJLLifGqcbIVZ3KK0+bO5RGEVsVwOiw78WPz1WIC4QAAP7/t2Xr06KOb2jF0qt7j8hibx1Zh13G89njze2xUqC3H9fZbDFK5OQwc3tJDYUw5xuT7aamlQ/P/47Vsuh16ppzHG1DNGmuYV//qmZDi/3MWNwRn+Ipc/CO/mthW/bsWA1GD+CQ92smddGGxlC3EmYUDo6GnCH2FeHXFx+LNxC7dqFLAZG01linsIxdLtRcRhmCN5fhfKp2cgbtkhXD8JndxqYE3hxakItNzA9s0SVj/g4a2jW1iJ4rUdimPLpCR+v6xuBN8XKatXzx3A//PcF4YY92XIzCs2eqGsabBO/FS/HNTjP6UPQ6WMXaxHlRderBz8AH5VWPVcfOMAvw7fGrRhv0/5mrqS3XqJTCkl1+KGfqOyd/80DEeZeZMHs3x3EMdtP/21CNX+DbRxXZDaVt3R46DSHYpnXixDDcmdUMIK3eRnE4i0YQTFdiy+4Spwjf4Ms4OPPDN0fuefy+j6XqDf1FKsr/KjX7rKp0z/x+rWHaCr/9QfB94bX8/tQKUk204XanVHBmPb5tNUlz7PYdF9svcIDYsvb7bXz+/QQrdXfupiWb4DtwnVBPSIVOYW4R/mwZQf/o8Ov1wZrdOWQ+PhIRDW//v0PD9P/nM0cXxlAco7s4bCvGCiY5/wWoJvBWCA9Cn3ouy/Yds+cQIA0IvkEH/HMcC3AB+w7a2Bdf5hSvuJ8FWvfzylqMcJMfUlW+acNMeTn02fJpp/D1JqAJG4ZAc4pmdx/jweWZH2YQtK6/Nbv6nuXFl70QFnKS4qCsTwtgJg5cYrbLVhGa03M9OS1XHwTjVkGUWETSKHrxUqrP1G/2tebg9HIJF4xP1uUY8YRXjIR57w4s3JRgC/wiERMsjx2WK1gPl4GRm8dMus9aw9/cd15LGRBAzhPsgIfC/qMmMXvL5i1Q5qqkirj7J3rWO7TeYlCoP//2T9KgTQR9MTdg1mx/AMRpC4nE1P5vtgiLgBwp0k/XCdaAMFzTZbCaRLxXl9jGSWMxBf//xn+N889U7fm3RG6IthF+PlK7QqKzJmY5n49zo4APv/9PDM8M0LzgSCRG8b9sfirwcIvjoSeEAAAByCElF9wm69ru8BT75uoyrf3gWWBEgEvc6bgGfAss/bMipJnbbjyU03wDo4Qdnfius5oW4npLhrs921e0XHd+uA0pEMEtq6kYA7S75WA9HR4FuSHCcmPz5KwAhMS3JE2TDduum9MkrIwY0o6s8B0j6c9HFqs2QEOn1XlW6RRdkpblNMM9QwnwV5lnHMmhUh6hxpv5xrsH25cQa+n4aCy1z2sWaXTy6f2ErMOC1xd8sRzUzkFiYIjTEcpDy3NjpCFjHwJnXQzePvzNA57tfr5Yd6Td/RIx6wG3rHtXxJO862hyQJ2m86sVPOw51ZjWImUR7ehOvtJ7zrtdBkfG8bCxP+9NZdQHR1cM6ZZxIzgW1WiC4vBnMrqW93ZjY/x7StT0d8mXP0cLymblT5V4Te3R0Rmcuh+ULNoDuP7IVLNs1hw9zNf84MbupvmSLeqRNmviQm29qDpAA3N/InafyzPZvHD4SvQXtnImziqzBmh4RgLO+6Q0CUxL/PXLsse36laJNNVhlCebrzPPABRI+jMxpKthKjJ9fokkAzCGtLafVL8kMkTTsDNhF0VB/DE8rRBWE5JVHV6TZKSKQOUpts0CvbfdV1x6gNE7MkaqMw6zfYB1HJVQyh3tlUYI9hneBV2gQ549e0pvk1rFmyAMDd51IYqFp3jZrFzi21+UDxtGCE50gKO9///vpdJ9D4Cs+NWr79bZ//bKb8HUlDJSPejZBQDduxOvrp+5O7txzfW5ZVo2SgQonxjtwU+z5EoWbKlZMK3ehTQSer4I4B8lOpH8VBfsT/Jqts29Byf7y4D2uRzyOZudZW5ELHnbEeJsEjeFJNv554Joxk1ROxQPdB4YOh2FLf+HKzpaAqhZzv17OiP4JpwQcy/dhneZd3yxeV7P88AGdXOdqtKYdB3Ji53i3sPsl9DpUXeINxcggIdGcDNrzek57G0fQCT+Euf7TMF5byHZAl99OAtljH72e0j7yhhx4+DMYuP1vUmb0nRrvc4o7BcA1Af5n4W0BDMQDf5NAysOCdp76IqxjuV/OGx1EvXs4Xhqe//UvxpDScdvUV7lPll9wxxVeHLZ/DL93mbr0cdnb02qsitEEdm4WzvBR7mghcSjpo3gV6b7g4CmqsdUK5di4KeOIqp+6/XtjqaK7Y6njEjUjrZFXnAkKHyPU1D5YyEkbSboFw29GADLctWpchHB/0uZLMePyAAaKGiygh+LeNQsiKShCHALYcsIR0N9iPXcAOuG6Hy/41WwKK+1bN+jY+PCabCmZDXafsu1Gp/MudaIt3T26lIV7Gkw0Fr/A+nyFJb0xk4u7XNPNpfe1tVEHCRcUlnxgycp5+V+tTrqegeu7q1iu0DHqihdEhG8oS5BU/7Z3m1Xd92ckiTD5ogIF51mB8UfUmjdSN/sfw/s8BiH+5U8EXH5NropRjye9vkoK8d8OynhJsW1aYUSwsM+tV+shiJa13P16sbYVH7VB6l39gzRQNJqp+lWYtjbBJOWrOLdYdMrS9SaA+Ar5lKwPdz9IlpcQURNLi9g5LazVZhn2uz90EhZXu/KIAXUBaXoA7fOdrUJZm6UO28MO9GY3QnefTo8umPXN5EzSbgcvZxKgIA1HycMucwKXI47uwBvYSjL03tbaLypxkqg2T4klp91yZ4UVVXyrIciW8ymFTz6cwE1VzOxlRt3Z5L9XBpGVWVSUnpwiijfRoLihHXsMIrI8EcBF0fPmAdKHker3CoJKdAXRBeA8tHCQZnl7i0HTILPpCT0yCH5fm8qgvxBpaJDu/ShC2hGHyk4HEMZwEe8tseQbfY1WLjNt7F34fWNBHselENB2DK8BUT8kAxofRNJPrWhu/vTsFrcsUxLIhXFe9efTnJrr0s8+4Z4AUHX63kCqHrui8PMtdFqyJJlZmW5GXF82mguNpw2IKXq0N6aDfwXsVoKCOLcwWhAyOBz3ILkP+R2s0Dg1J32dJ9BY9oTAuFWnxV+VeMZSzgh2qvHBZh+NVVf+ULmnRQzfN8oIyOkM579zgMMxCDOAfyoAHHTdEx1QnDA0iJLS1l/R4pegqEn8g7+Q72z8898fjkQA97OGGip/syHR/XiH9+BZiU9Cd3mM0HpVw/VcaTDurrD1w4p4s+ZbynAKo1j+zjXVY67QVWz2GMMlw13ifkZgKM58o/t1Vjx4DMvrjnjdrJzpWQdQyLjhrZYaGUpIg+k+fv5hdUbe8OnUkDJ0dsCjq9ezriiC3nBlZMqpkQXfWbbqrIt078Zg945PCmE6556tTtzk8yO0FgbO85i+FHu+Few786DU6U1RYg6z/r/g0KKJvzy4i2v/U0/wdL09TtXE3haiW56QNOxTD3QDMdi5cP0Gl0j3hAiZKI9fNWJykoL5n7+a1VKjngyiQBMoX5iNebqKDOipbj6REl2MPoBY6tye1xxjD4ujx1qCut1aM2ZE3A026QdMIGrQhq/5mAjOMe25MJ9AHyyvIodlsgX7yFzmrxZ9dipEhKzV8VPxjI9kJl2jsVJhWWAqGB+mTylw/Yg9jcSbN7hwsszfmBhgRKC+LFLorJiiWs1KY3m9XXzXjatdIhew/TLyTeNf9AdR5NN8k69qf5PozDKysBFn8v/7tR38y0CvtKAHvbF0uufyLag2FkMxVdUyVjrl1poy6nQVQpPeDWjjTjp02zVLfqItmknPdeG4J1P1SZOCn9JpIVYujeeVi5CZe/52ozh8WDjr9y9bBo8xGAYlJgqnuzMZUhJOgI3Xz8H2kN2n1u6XJwCcAP68EAaq4gB5yhRMySaPwxVDDGhBwUwGQc0mDeKG2jsZgHwM20nKWe7hn1A78u1rAt9PXnL59WmYswZp3k5odGpUAC3y2TnllpqERWh1HiSgXWpJzzBPB0OLNk9KoKUSX5d+ukEK2UoGs4ogVby5AkPSSog2/f5WOwhgKgg8gYxTxMwVAXxi7LSQdaATLZLvrMygU90DYePWhRTvh0r2AbSwHw5WNNnKVnymFRzCcqPAAAAAA=="},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);