import{j as e,e as c,i,g as s,o as m,p,q as u,t as g,v as x,h as f}from"../chunks/chunk-VY_9HhNh.js";/* empty css                      */const y=({data:o})=>{const{system:t,resources:r,url:n}=o;return e.jsx(c.Provider,{value:{imageLoader:i,assetBaseUrl:s,resources:r},children:e.jsx(m,{system:t},n)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),h=({data:o})=>{const{pageMeta:t}=o,{origin:r}=new URL(o.url),n={"@context":"https://schema.org","@type":"WebSite",name:p,url:r};let l=t.socialImageUrl;return t.socialImageAssetName&&(l=`${r}${i({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:p}),l&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:d})=>e.jsx("meta",{property:a,content:d},a)),e.jsx("link",{rel:"icon",href:i({src:`${s}${x}`,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),u.map(a=>e.jsx("link",{rel:"preload",href:`${s}${a}`,as:"font",crossOrigin:"anonymous"},a)),g.map(a=>e.jsx("link",{rel:"preload",href:`${s}${a}`,as:"image"},a))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:h},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{P as configValuesSerialized};
