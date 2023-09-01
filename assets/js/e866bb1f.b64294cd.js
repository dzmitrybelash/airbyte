"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[32525],{92876:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},i="Use the dbt Cloud integration",l={unversionedId:"cloud/managing-airbyte-cloud/dbt-cloud-integration",id:"cloud/managing-airbyte-cloud/dbt-cloud-integration",title:"Use the dbt Cloud integration",description:"By using the dbt Cloud integration, you can create and run dbt transformations during syncs in Airbyte Cloud. This allows you to transform raw data into a format that is suitable for analysis and reporting, including cleaning and enriching the data.",source:"@site/../docs/cloud/managing-airbyte-cloud/dbt-cloud-integration.md",sourceDirName:"cloud/managing-airbyte-cloud",slug:"/cloud/managing-airbyte-cloud/dbt-cloud-integration",permalink:"/cloud/managing-airbyte-cloud/dbt-cloud-integration",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/cloud/managing-airbyte-cloud/dbt-cloud-integration.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Manage data residency",permalink:"/cloud/managing-airbyte-cloud/manage-data-residency"},next:{title:"Manage credits",permalink:"/cloud/managing-airbyte-cloud/manage-credits"}},c={},d=[{value:"Step 1: Generate a service token",id:"step-1-generate-a-service-token",level:2},{value:"Step 2: Set up the dbt Cloud integration in Airbyte Cloud",id:"step-2-set-up-the-dbt-cloud-integration-in-airbyte-cloud",level:2}],u={toc:d},s="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-the-dbt-cloud-integration"},"Use the dbt Cloud integration"),(0,a.kt)("p",null,"By using the dbt Cloud integration, you can create and run dbt transformations during syncs in Airbyte Cloud. This allows you to transform raw data into a format that is suitable for analysis and reporting, including cleaning and enriching the data. "),(0,a.kt)("h2",{id:"step-1-generate-a-service-token"},"Step 1: Generate a service token"),(0,a.kt)("p",null,"Generate a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/dbt-cloud-apis/service-tokens#generating-service-account-tokens"},"service token")," for your dbt Cloud transformation.  "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"To use the dbt Cloud integration, you must use a paid version of dbt Cloud."),(0,a.kt)("li",{parentName:"ul"},"The service token must have Member, Job Admin, or Account Admin permissions."))),(0,a.kt)("h2",{id:"step-2-set-up-the-dbt-cloud-integration-in-airbyte-cloud"},"Step 2: Set up the dbt Cloud integration in Airbyte Cloud"),(0,a.kt)("p",null,"To set up the dbt Cloud integration in Airbyte Cloud:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the Airbyte Cloud dashboard, click ",(0,a.kt)("strong",{parentName:"p"},"Settings"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"dbt Cloud integration"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the service token from ",(0,a.kt)("a",{parentName:"p",href:"#step-1-generate-a-service-token"},"Step 1")," and click ",(0,a.kt)("strong",{parentName:"p"},"Save changes"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Connections")," and select the connection you want to add a dbt transformation to.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("strong",{parentName:"p"},"Transformation")," tab and click ",(0,a.kt)("strong",{parentName:"p"},"+ Add transformation"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the transformation from the dropdown and click ",(0,a.kt)("strong",{parentName:"p"},"Save changes"),". The transformation will run during the subsequent syncs until you remove it. "))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can have multiple transformations per connection.\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"To remove a transformation, click ",(0,a.kt)("strong",{parentName:"li"},"X")," on the transformation and click ",(0,a.kt)("strong",{parentName:"li"},"Save changes"),".")))}p.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=d(n),m=a,g=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);