"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[25810],{40915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var n=r(87462),o=r(67294),a=r(3905);const s="https://connectors.airbyte.com/files/generated_reports/connector_registry_report.json",l={maxWidth:25};function c(e,t){if(e.supportLevel_oss!==t.supportLevel_oss){if("certified"===e.supportLevel_oss)return-2;if("certified"===t.supportLevel_oss)return 2;if("community"===e.supportLevel_oss)return-1;if("community"===t.supportLevel_oss)return 1}return e.name_oss<t.name_oss?-1:e.name_oss>t.name_oss?1:void 0}function i(e){let{type:t}=e;const[r,n]=(0,o.useState)([]);if((0,o.useEffect)((()=>{!async function(e,t){const r=await fetch(e);t(await r.json())}(s,n)}),[]),0===r.length)return o.createElement("div",null,`Loading ${t}s...`);const a=r.filter((e=>e.connector_type===t)).filter((e=>e.name_oss));return o.createElement("div",null,o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Connector Name"),o.createElement("th",null,"Icon"),o.createElement("th",null,"Links"),o.createElement("th",null,"Support Level"),o.createElement("th",null,"OSS"),o.createElement("th",null,"Cloud"),o.createElement("th",null,"Docker Image"))),o.createElement("tbody",null,a.sort(c).map((e=>{const t=e.documentationUrl_oss?.replace("https://docs.airbyte.com","");return o.createElement("tr",{key:`${e.definitionId}`},o.createElement("td",null,o.createElement("strong",null,o.createElement("a",{href:t},e.name_oss))),o.createElement("td",null,e.iconUrl_oss?o.createElement("img",{src:e.iconUrl_oss,style:l}):null),o.createElement("td",{style:{minWidth:75}},o.createElement("a",{href:t},"\ud83d\udcd5"),o.createElement("a",{href:e.github_url},"\u2699\ufe0f"),o.createElement("a",{href:e.issue_url},"\ud83d\udc1b")),o.createElement("td",null,o.createElement("small",null,e.supportLevel_oss)),o.createElement("td",null,e.is_oss?"\u2705":"\u274c"),o.createElement("td",null,e.is_cloud?"\u2705":"\u274c"),o.createElement("td",null,o.createElement("small",null,o.createElement("code",null,e.dockerRepository_oss,":",e.dockerImageTag_oss))))})))))}const u={},p="Connector Catalog",d={unversionedId:"integrations/README",id:"integrations/README",title:"Connector Catalog",description:"Connector Release Stages",source:"@site/../docs/integrations/README.md",sourceDirName:"integrations",slug:"/integrations/",permalink:"/integrations/",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/README.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Welcome to Airbyte Docs",permalink:"/"},next:{title:"Sources",permalink:"/category/sources"}},m={},f=[{value:"Connector Release Stages",id:"connector-release-stages",level:2},{value:"Sources",id:"sources",level:2},{value:"Destinations",id:"destinations",level:2}],y={toc:f},g="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connector-catalog"},"Connector Catalog"),(0,a.kt)("h2",{id:"connector-release-stages"},"Connector Release Stages"),(0,a.kt)("p",null,"Airbyte uses a grading system for connectors to help you understand what to expect from a connector:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Generally Available"),": A generally available connector has been deemed ready for use in a production environment and is officially supported by Airbyte. Its documentation is considered sufficient to support widespread adoption."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beta"),": A beta connector is considered stable with no backwards incompatible changes but has not been validated by a broader group of users. We expect to find and fix a few issues and bugs in the release before it\u2019s ready for GA."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Alpha"),": An alpha connector signifies a connector under development and helps Airbyte gather early feedback and issues reported by early adopters. We strongly discourage using alpha releases for production use cases and do not offer Cloud Support SLAs around these products, features, or connectors."),(0,a.kt)("p",null,"For more information about the grading system, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/project-overview/product-release-stages"},"Product Release Stages")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://connectors.airbyte.com/files/generated_reports/connector_registry_report.html"},"View the connector registries in full"))),(0,a.kt)("h2",{id:"sources"},"Sources"),(0,a.kt)(i,{type:"source",mdxType:"ConnectorRegistry"}),(0,a.kt)("h2",{id:"destinations"},"Destinations"),(0,a.kt)(i,{type:"destination",mdxType:"ConnectorRegistry"}))}b.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);