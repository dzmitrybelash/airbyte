"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[40835],{95314:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>U,contentTitle:()=>x,default:()=>L,frontMatter:()=>V,metadata:()=>O,toc:()=>q});var n=a(87462),r=a(67294),i=a(3905),o=a(86010),l=a(63735),s=a(7394),d=a(34423),u=a(20636),p=a(99200);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,d._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,d]=h({queryString:a,groupId:n}),[u,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),y=(()=>{const e=s??u;return g({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),c(e)}),[d,c,i]),tabValues:i}}var b=a(5730);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=y(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}const _={tabItem:"tabItem_Ymn6"};function S(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(_.tabItem,n),hidden:a},t)}var C=a(8509);function T(e,t){let a=e+t,n=1;for(let r=0;r<a.length;r++){let e=0;for(;r<a.length&&"_"===a.charAt(r);)e++,r++;n=Math.max(n,e)}return e+"_raw"+"_".repeat(n+1)+"stream_"+t}function A(e){return e.normalize("NFKD").replaceAll(/\p{M}/gu,"").replaceAll(/\s+/g,"_").replaceAll(/[^A-Za-z0-9_]/g,"_")}const E=()=>{function e(e){return(e=A(e)).charAt(0).match(/[A-Za-z_]/)?e:"_"+e}return r.createElement(I,{destination:"bigquery",generateSql:function(t,a,n,r){var i;return`CREATE SCHEMA IF NOT EXISTS ${r};\nCREATE OR REPLACE TABLE \`${r}\`.${"`"+e(T(a,n))+"`"} (\n  _airbyte_raw_id STRING,\n  _airbyte_extracted_at TIMESTAMP,\n  _airbyte_loaded_at TIMESTAMP,\n  _airbyte_data JSON)\nPARTITION BY DATE(_airbyte_extracted_at)\nCLUSTER BY _airbyte_extracted_at\nAS (\n    SELECT\n        _airbyte_ab_id AS _airbyte_raw_id,\n        _airbyte_emitted_at AS _airbyte_extracted_at,\n        CAST(NULL AS TIMESTAMP) AS _airbyte_loaded_at,\n        PARSE_JSON(_airbyte_data) AS _airbyte_data\n    FROM ${"`"+((i=A(i=t)).charAt(0).match(/[A-Za-z0-9]/)||(i="n"+i),i+"`")}.${"`"+e("_airbyte_raw_"+n)+"`"}\n)`}})},D=()=>{function e(e){return(e=A(e)).charAt(0).match(/[A-Za-z_]/)?e:"_"+e}return r.createElement(I,{destination:"snowflake",generateSql:function(t,a,n,r){return`CREATE SCHEMA IF NOT EXISTS "${r}";\nCREATE OR REPLACE TABLE "${r}".${'"'+T(a,n)+'"'} (\n  "_airbyte_raw_id" STRING NOT NULL PRIMARY KEY,\n  "_airbyte_extracted_at" TIMESTAMP_TZ DEFAULT CURRENT_TIMESTAMP(),\n  "_airbyte_loaded_at" TIMESTAMP_TZ,\n  "_airbyte_data" VARIANT)\nAS (\n    SELECT\n        _airbyte_ab_id AS "_airbyte_raw_id",\n        _airbyte_emitted_at AS "_airbyte_extracted_at",\n        CAST(NULL AS TIMESTAMP_TZ) AS "_airbyte_loaded_at",\n        _airbyte_data AS "_airbyte_data"\n    FROM ${e(t)}.${e("_airbyte_raw_"+n)}\n)`}})},I=e=>{let{destination:t,generateSql:a}=e;const n="Enter your stream's name and namespace to see the SQL output.\nIf your stream has no namespace, take the default value from the destination connector's settings.",[i,o]=(0,r.useState)({message:n,language:"text"});function l(e){let r=document.getElementById("og_stream_namespace_"+t).value,i=document.getElementById("new_stream_namespace_"+t).value,l=document.getElementById("stream_name_"+t).value;var s=document.getElementById("raw_dataset_"+t).value;""===s&&(s="airbyte_internal");let d=a(r,i,l,s);[r,i,l].every((e=>""!=e))?o({message:d,language:"sql"}):o({message:n,language:"text"})}return r.createElement("div",null,r.createElement("label",null,"Original Stream namespace "),r.createElement("input",{type:"text",id:"og_stream_namespace_"+t,onChange:l}),r.createElement("br",null),r.createElement("label",null,"New Stream namespace (to avoid overwriting)"),r.createElement("input",{type:"text",id:"new_stream_namespace_"+t,onChange:l}),r.createElement("br",null),r.createElement("label",null,"Stream name "),r.createElement("input",{type:"text",id:"stream_name_"+t,onChange:l}),r.createElement("br",null),r.createElement("label",null,"Raw table dataset/schema (defaults to ",r.createElement("code",null,"airbyte_internal"),") "),r.createElement("input",{type:"text",id:"raw_dataset_"+t,onChange:l}),r.createElement("br",null),r.createElement(C.Z,{id:"sql_output_block_"+t,language:i.language},i.message))},V={},x="Upgrading to Destinations V2",O={unversionedId:"release_notes/upgrading_to_destinations_v2",id:"release_notes/upgrading_to_destinations_v2",title:"Upgrading to Destinations V2",description:"What is Destinations V2?",source:"@site/../docs/release_notes/upgrading_to_destinations_v2.md",sourceDirName:"release_notes",slug:"/release_notes/upgrading_to_destinations_v2",permalink:"/release_notes/upgrading_to_destinations_v2",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/release_notes/upgrading_to_destinations_v2.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Release Notes",permalink:"/category/release-notes"},next:{title:"July 2023",permalink:"/release_notes/july_2023"}},U={},q=[{value:"What is Destinations V2?",id:"what-is-destinations-v2",level:2},{value:"Deprecating Legacy Normalization",id:"deprecating-legacy-normalization",level:2},{value:"Breakdown of Breaking Changes",id:"breakdown-of-breaking-changes",level:3},{value:"Quick Start to Upgrading",id:"quick-start-to-upgrading",level:2},{value:"Advanced Upgrade Paths",id:"advanced-upgrade-paths",level:2},{value:"Upgrading Connections One by One with Dual-Writing",id:"upgrading-connections-one-by-one-with-dual-writing",level:3},{value:"Steps to Follow for All Sync Modes",id:"steps-to-follow-for-all-sync-modes",level:4},{value:"Additional Steps for Incremental Sync Modes",id:"additional-steps-for-incremental-sync-modes",level:4},{value:"Testing Destinations V2 for a Single Connection",id:"testing-destinations-v2-for-a-single-connection",level:3},{value:"Upgrading as a User of Raw Tables",id:"upgrading-as-a-user-of-raw-tables",level:3},{value:"Upgrade Paths for Connections using CDC",id:"upgrade-paths-for-connections-using-cdc",level:3},{value:"Destinations V2 Compatible Versions",id:"destinations-v2-compatible-versions",level:2},{value:"Open Source Only Rolling Back to Legacy Normalization",id:"open-source-only-rolling-back-to-legacy-normalization",level:3},{value:"Destinations V2 Implementation Differences",id:"destinations-v2-implementation-differences",level:2},{value:"BigQuery",id:"bigquery",level:3},{value:"Updating Downstream Transformations",id:"updating-downstream-transformations",level:2},{value:"Column Name Changes",id:"column-name-changes",level:4},{value:"Data Type Changes",id:"data-type-changes",level:4},{value:"Stale Tables",id:"stale-tables",level:4}],M={toc:q},R="wrapper";function L(e){let{components:t,...r}=e;return(0,i.kt)(R,(0,n.Z)({},M,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upgrading-to-destinations-v2"},"Upgrading to Destinations V2"),(0,i.kt)("h2",{id:"what-is-destinations-v2"},"What is Destinations V2?"),(0,i.kt)("p",null,"Airbyte Destinations V2 provides you with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One-to-one table mapping: Data in one stream will always be mapped to one table in your data warehouse. No more sub-tables."),(0,i.kt)("li",{parentName:"ul"},"Improved error handling with ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_meta"),": Airbyte will now populate typing errors in the ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_meta")," column instead of failing your sync. You can query these results to audit misformatted or unexpected data."),(0,i.kt)("li",{parentName:"ul"},"Internal Airbyte tables in the ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_internal")," schema: Airbyte will now generate all raw tables in the ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_internal")," schema. We no longer clutter your destination schema with raw data tables."),(0,i.kt)("li",{parentName:"ul"},"Incremental delivery for large syncs: Data will be incrementally delivered to your final tables. No more waiting hours to see the first rows in your destination table.")),(0,i.kt)("p",null,"To see more details and examples on the contents of the Destinations V2 release, see this ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/typing-deduping"},"guide"),". The remainder of this page will walk you through upgrading connectors from legacy normalization to Destinations V2."),(0,i.kt)("p",null,"Destinations V2 were in preview for Snowflake and BigQuery during August 2023, and launched on August 29th, 2023. Other destinations will be transitioned to Destinations V2 on or before November 1st, 2023."),(0,i.kt)("h2",{id:"deprecating-legacy-normalization"},"Deprecating Legacy Normalization"),(0,i.kt)("p",null,"The upgrade to Destinations V2 is handled by moving your connections to use ",(0,i.kt)("a",{parentName:"p",href:"#destinations-v2-compatible-versions"},"updated versions of Airbyte destinations"),". Existing normalization options, both ",(0,i.kt)("inlineCode",{parentName:"p"},"Raw data (JSON)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Normalized tabular data")," will be unsupported starting ",(0,i.kt)("strong",{parentName:"p"},"Nov 1, 2023"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Legacy Normalization",src:a(6180).Z,width:"2420",height:"860"})),(0,i.kt)("p",null,"As a Cloud user, existing connections using legacy normalization will be paused on ",(0,i.kt)("strong",{parentName:"p"},"November 1, 2023"),". As an Open Source user, you may choose to upgrade at your convenience. However, destination connector versions prior to Destinations V2 will no longer be supported as of ",(0,i.kt)("strong",{parentName:"p"},"Nov 1, 2023"),"."),(0,i.kt)("p",null,"Note that Destinations V2 also removes the option to ",(0,i.kt)("em",{parentName:"p"},"only")," replicate raw data. The vast majority of Airbyte users prefer typed final tables, and our future feature development will rely on this implementation. Learn more ",(0,i.kt)("a",{parentName:"p",href:"#upgrading-as-a-user-of-raw-tables"},"below"),"."),(0,i.kt)("h3",{id:"breakdown-of-breaking-changes"},"Breakdown of Breaking Changes"),(0,i.kt)("p",null,"The following table details the delivered data modified by Destinations V2:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Current Normalization Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Source Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Impacted Data (Breaking Changes)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Raw JSON"),(0,i.kt)("td",{parentName:"tr",align:null},"All"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte")," metadata columns, raw table location")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Normalized tabular data"),(0,i.kt)("td",{parentName:"tr",align:null},"API Source"),(0,i.kt)("td",{parentName:"tr",align:null},"Unnested tables, ",(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte")," metadata columns, SCD tables")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Normalized tabular data"),(0,i.kt)("td",{parentName:"tr",align:null},"Tabular Source (database, file, etc.)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte")," metadata columns, SCD tables")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Airbyte Destinations V2 Column Changes",src:a(44843).Z,width:"2112",height:"604"})),(0,i.kt)("p",null,"Whenever possible, we've taken this opportunity to use the best data type for storing JSON for your querying convenience. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"destination-bigquery")," now loads ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," blobs as type ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," in BigQuery (introduced last ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/data-analytics/bigquery-now-natively-supports-semi-structured-data"},"year"),"), instead of type ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("h2",{id:"quick-start-to-upgrading"},"Quick Start to Upgrading"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"[Airbyte Open Source Only]")," You should upgrade to 0.50.24+ of the Airbyte Platform ",(0,i.kt)("em",{parentName:"p"},"before")," updating to Destinations V2. Failure to do so may cause upgraded connections to fail.")),(0,i.kt)("p",null,"The quickest path to upgrading is to click upgrade on any out-of-date connection in the UI:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Upgrade Path",src:a(76304).Z,width:"1906",height:"548"})),(0,i.kt)("p",null,"After upgrading the out-of-date destination to a ",(0,i.kt)("a",{parentName:"p",href:"#destinations-v2-effective-versions"},"Destinations V2 compatible version"),", the following will occur at the next sync ",(0,i.kt)("strong",{parentName:"p"},"for each connection")," sending data to the updated destination:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Existing raw tables replicated to this destination will be copied to a new ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_internal")," schema."),(0,i.kt)("li",{parentName:"ol"},"The new raw tables will be updated to the new Destinations V2 format."),(0,i.kt)("li",{parentName:"ol"},"The new raw tables will be updated with any new data since the last sync, like normal."),(0,i.kt)("li",{parentName:"ol"},"The new raw tables will be typed and de-duplicated according to the Destinations V2 format."),(0,i.kt)("li",{parentName:"ol"},"Once typing and de-duplication has completed successfully, your previous final table will be replaced with the updated data.")),(0,i.kt)("p",null,"Due to the amount of operations to be completed, the first sync after upgrading to Destination V2 ",(0,i.kt)("strong",{parentName:"p"},"will be longer than normal"),". Once your first sync has completed successfully, you may need to make changes to downstream models (dbt, sql, etc.) transforming data. See this ",(0,i.kt)("a",{parentName:"p",href:"#updating-downstream-transformations"},"walkthrough of top changes to expect for more details"),"."),(0,i.kt)("p",null,'Pre-existing raw tables, SCD tables and "unnested" tables will always be left untouched. You can delete these at your convenience, but these tables will no longer be kept up-to-date by Airbyte syncs.\nEach destination version is managed separately, so if you have multiple destinations, they all need to be upgraded one by one.'),(0,i.kt)("p",null,"Versions are tied to the destination. When you update the destination, ",(0,i.kt)("strong",{parentName:"p"},"all connections tied to that destination will be sending data in the Destinations V2 format"),". For upgrade paths that will minimize disruption to existing dashboards, see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrading-connections-one-by-one-with-dual-writing"},"Upgrading Connections One by One with Dual-Writing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#testing-destinations-v2-for-a-single-connection"},"Testing Destinations V2 on a Single Connection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrade-paths-for-connections-using-cdc"},"Upgrading Connections One by One Using CDC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrading-as-a-user-of-raw-tables"},"Upgrading as a User of Raw Tables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#oss-only-rolling-back-to-legacy-normalization"},"Rolling back to Legacy Normalization"))),(0,i.kt)("h2",{id:"advanced-upgrade-paths"},"Advanced Upgrade Paths"),(0,i.kt)("h3",{id:"upgrading-connections-one-by-one-with-dual-writing"},"Upgrading Connections One by One with Dual-Writing"),(0,i.kt)("p",null,"Dual writing is a method employed during upgrades where new incoming data is written simultaneously to both the old and new systems, facilitating a smooth transition between versions. We recommend this approach for connections where you are especially worried about breaking changes or downtime in downstream systems."),(0,i.kt)("h4",{id:"steps-to-follow-for-all-sync-modes"},"Steps to Follow for All Sync Modes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"[Open Source]")," Update the default destination version for your workspace to a ",(0,i.kt)("a",{parentName:"li",href:"#destinations-v2-effective-versions"},"Destinations V2 compatible version"),". This sets the default version for any newly created destination. All existing syncs will remain on their current version.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Upgrade your default destination version",src:a(72304).Z,width:"1415",height:"239"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create and configure a new destination connecting to the same database as your existing destination except for ",(0,i.kt)("inlineCode",{parentName:"li"},"Default Schema"),", which you should update to a new value to avoid collisions.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create a new destination",src:a(49486).Z,width:"812",height:"215"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create a new connection leveraging your existing source and the newly created destination. Match the settings of your pre-existing connection."),(0,i.kt)("li",{parentName:"ol"},"If the streams you are looking to replicate are in ",(0,i.kt)("strong",{parentName:"li"},"full refresh")," mode, enabling the connection will now provide a parallel copy of the data in the updated format for testing. If any of the streams in the connection are in an ",(0,i.kt)("strong",{parentName:"li"},"incremental")," sync mode, follow the steps below before enabling the connection.")),(0,i.kt)("h4",{id:"additional-steps-for-incremental-sync-modes"},"Additional Steps for Incremental Sync Modes"),(0,i.kt)("p",null,"These steps allow you to dual-write for connections incrementally syncing data without re-syncing historical data you've already replicated:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy the raw data you've already replicated to the new schema being used by your newly created connection. You need to do this for every stream in the connection with an incremental sync mode. Sample SQL you can run in your data warehouse:")),(0,i.kt)(v,{mdxType:"Tabs"},(0,i.kt)(S,{value:"bigquery",label:"BigQuery",default:!0,mdxType:"TabItem"},(0,i.kt)(E,{mdxType:"BigQueryMigrationGenerator"})),(0,i.kt)(S,{value:"snowflake",label:"Snowflake",mdxType:"TabItem"},(0,i.kt)(D,{mdxType:"SnowflakeMigrationGenerator"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Navigate to the existing connection you are duplicating, and navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," tab. Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"Advanced")," settings to see the connection state (which manages incremental syncs). Copy the state to your clipboard.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:a(73873).Z,width:"1984",height:"2010"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Go to your newly created connection, replace the state with the copied contents in the previous step, then click ",(0,i.kt)("inlineCode",{parentName:"li"},"Update State"),". This will ensure historical data is not replicated again."),(0,i.kt)("li",{parentName:"ol"},"Enabling the connection will now provide a parallel copy of all streams in the updated format."),(0,i.kt)("li",{parentName:"ol"},"You can move your dashboards to rely on the new tables, then pause the out-of-date connection.")),(0,i.kt)("h3",{id:"testing-destinations-v2-for-a-single-connection"},"Testing Destinations V2 for a Single Connection"),(0,i.kt)("p",null,"You may want to verify the format of updated data for a single connection. To do this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If all of the streams you are looking to test with are in ",(0,i.kt)("strong",{parentName:"li"},"full refresh mode"),", follow the ",(0,i.kt)("a",{parentName:"li",href:"#steps-to-follow-for-all-sync-modes"},"steps for upgrading connections one by one"),". Ensure any connections you create have a ",(0,i.kt)("inlineCode",{parentName:"li"},"Manual")," replication frequency."),(0,i.kt)("li",{parentName:"ol"},"For any streams in ",(0,i.kt)("strong",{parentName:"li"},"incremental")," sync modes, follow the ",(0,i.kt)("a",{parentName:"li",href:"#additional-steps-for-incremental-sync-modes"},"steps for upgrading incremental syncs"),". For testing, you do not need to copy pre-existing raw data. By solely inheriting state from a pre-existing connection, enabling a sync will provide a sample of the most recent data in the updated format for testing.")),(0,i.kt)("p",null,"When you are done testing, you can disable or delete this testing connection, and ",(0,i.kt)("a",{parentName:"p",href:"#quick-start-to-upgrading"},"upgrade your pre-existing connections in place")," or ",(0,i.kt)("a",{parentName:"p",href:"#upgrading-connections-one-by-one-with-dual-writing"},"upgrade one-by-one with dual writing"),"."),(0,i.kt)("h3",{id:"upgrading-as-a-user-of-raw-tables"},"Upgrading as a User of Raw Tables"),(0,i.kt)("p",null,'If you have written downstream transformations directly from the output of raw tables, or use the "Raw JSON" normalization setting, you should know that:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multiple column names are being updated (from ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_ab_id")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_raw_id"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_emitted_at")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_extracted_at"),")."),(0,i.kt)("li",{parentName:"ul"},"The location of raw tables will from now on default to an ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte")," schema in your destination."),(0,i.kt)("li",{parentName:"ul"},"When you upgrade to a ",(0,i.kt)("a",{parentName:"li",href:"#destinations-v2-effective-versions"},"Destinations V2 compatible version")," of your destination, we will never alter your existing raw data. Although existing downstream dashboards will go stale, they will never be broken."),(0,i.kt)("li",{parentName:"ul"},"You can dual write by following the ",(0,i.kt)("a",{parentName:"li",href:"#upgrading-connections-one-by-one-with-dual-writing"},"steps above")," and copying your raw data to the schema of your newly created connection.")),(0,i.kt)("p",null,"We may make further changes to raw tables in the future, as these tables are intended to be a staging ground for Airbyte to optimize the performance of your syncs. We cannot guarantee the same level of stability as for final tables in your destination schema, nor will features like error handling be implemented in the raw tables."),(0,i.kt)("p",null,"As a user previously not running Normalization, Upgrading to Destinations V2 will increase the compute costs in your destination data warehouse. This is because Destinations V2 will now be performing the operations to generate a final typed table."),(0,i.kt)("h3",{id:"upgrade-paths-for-connections-using-cdc"},"Upgrade Paths for Connections using CDC"),(0,i.kt)("p",null,"For each ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/understanding-airbyte/cdc"},"CDC-supported")," source connector, we recommend the following:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CDC Source"),(0,i.kt)("th",{parentName:"tr",align:null},"Recommendation"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Postgres"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#quick-start-to-upgrading"},"Upgrade connection in place")),(0,i.kt)("td",{parentName:"tr",align:null},"You can optionally dual write, but this requires resyncing historical data from the source. You must create a new Postgres source with a different replication slot than your existing source to preserve the integrity of your existing connection.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#advanced-upgrade-paths"},"All above upgrade paths supported")),(0,i.kt)("td",{parentName:"tr",align:null},"You can upgrade the connection in place, or dual write. When dual writing, Airbyte can leverage the state of an existing, active connection to ensure historical data is not re-replicated from MySQL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SQL Server"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#quick-start-to-upgrading"},"Upgrade connection in place")),(0,i.kt)("td",{parentName:"tr",align:null},"You can optionally dual write, but this requires resyncing historical data from the SQL Server source.")))),(0,i.kt)("h2",{id:"destinations-v2-compatible-versions"},"Destinations V2 Compatible Versions"),(0,i.kt)("p",null,"For each destination connector, Destinations V2 is effective as of the following versions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Destination Connector"),(0,i.kt)("th",{parentName:"tr",align:null},"Safe Rollback Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Destinations V2 Compatible"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BigQuery"),(0,i.kt)("td",{parentName:"tr",align:null},"1.4.4"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.6+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,i.kt)("td",{parentName:"tr",align:null},"3.1.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Redshift"),(0,i.kt)("td",{parentName:"tr",align:null},"0.4.8"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MSSQL"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1.24"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1.20"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1.19"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TiDB"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DuckDB"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Clickhouse"),(0,i.kt)("td",{parentName:"tr",align:null},"0.2.3"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")))),(0,i.kt)("h3",{id:"open-source-only-rolling-back-to-legacy-normalization"},"[Open Source Only]"," Rolling Back to Legacy Normalization"),(0,i.kt)("p",null,"If you upgrade to Destinations V2 and start encountering issues, as an Open Source user you can optionally roll back. If you are running an outdated Airbyte Platform version (prior to ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.50.24"),"), this may occur more frequently by accidentally upgrading to Destinations V2. However:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rolling back will require resetting each of your upgraded connections."),(0,i.kt)("li",{parentName:"ul"},"If you are hoping to receive support from the Airbyte team, you will need to re-upgrade to Destinations V2 by ",(0,i.kt)("strong",{parentName:"li"},"November 1, 2023"),".")),(0,i.kt)("p",null,"To roll back, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Airbyte UI, go to the 'Settings page, then to 'Destinations'."),(0,i.kt)("li",{parentName:"ol"},"Manually type in the previous destination version you were running, or one of the versions listed in the table above."),(0,i.kt)("li",{parentName:"ol"},"Enter this older version to roll back to the previous connector version."),(0,i.kt)("li",{parentName:"ol"},"Reset all connections which synced at least once to a previously upgraded destination. To be safe, you may reset all connections sending data to a previously upgraded destination.")),(0,i.kt)("p",null,"If you are an Airbyte Cloud customer, and encounter errors while upgrading from a V1 to a V2 destination, please reach out to support. We do not always recommend doing a full reset, depending on the type of error."),(0,i.kt)("h2",{id:"destinations-v2-implementation-differences"},"Destinations V2 Implementation Differences"),(0,i.kt)("p",null,"In addition to the changes which apply for all destinations described above, there are some per-destination fixes and updates included in Destinations V2:"),(0,i.kt)("h3",{id:"bigquery"},"BigQuery"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/supported-data-types/#the-types"},"Object and array properties")," are properly stored as JSON columns. Previously, we had used TEXT, which made querying sub-properties more difficult.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In certain cases, numbers within sub-properties with long decimal values will need to be converted to float representations due to a ",(0,i.kt)("em",{parentName:"li"},"quirk")," of Bigquery. Learn more ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/29594"},"here"),".")))),(0,i.kt)("h2",{id:"updating-downstream-transformations"},"Updating Downstream Transformations"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This section is targeted towards analysts updating downstream models after you've successfully upgraded to Destinations V2.")),(0,i.kt)("p",null,"See here for a ",(0,i.kt)("a",{parentName:"p",href:"#breakdown-of-breaking-changes"},"breakdown of changes"),". Your models will often require updates for the following changes:"),(0,i.kt)("h4",{id:"column-name-changes"},"Column Name Changes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at_")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_extracted_at")," are exactly the same, only the column name changed. You can replace all instances of ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_extracted_at"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_raw_id")," are exactly the same, only the column name changed. You can replace all instances of ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_raw_id"),"."),(0,i.kt)("li",{parentName:"ol"},"Since ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_normalized_at")," is no longer in the final table. We now recommend using ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_extracted_at")," instead.")),(0,i.kt)("h4",{id:"data-type-changes"},"Data Type Changes"),(0,i.kt)("p",null,"You'll get data type errors in downstream models where previously ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," columns are now JSON. In BigQuery, nested JSON values originating from API sources were previously delivered in type ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". These are now delivered in type ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON"),"."),(0,i.kt)("p",null,"Example: In dbt, you may now get errors with functions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"regexp_replace"),". You can attempt prepending these with ",(0,i.kt)("inlineCode",{parentName:"p"},"json_extract_array(...)")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"to_json_string(...)")," where appropriate."),(0,i.kt)("h4",{id:"stale-tables"},"Stale Tables"),(0,i.kt)("p",null,"Unnested tables (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"public.users_address"),") do not get deleted during the migration, and are no longer updated. Your downstream models will not throw errors until you drop these tables. Until then, dashboards reliant on these tables will be stale."))}L.isMDXComponent=!0},73873:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_connection_update_state-fe4924c5f93afbdfb9a2d8bc659cfb42.png"},76304:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_destinations_v2_upgrade_prompt-d7d59edc5a9b493f4e5d221c41fe7a91.png"},49486:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_dual_destinations-efef9d501361782454ad2b9aba5ed58f.png"},6180:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_legacy_normalization-bf5c7c2f6906afe0e77748c29d407a58.png"},72304:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_version_upgrade-a77ce8a8e4730d65420ecc985d975ff3.png"},44843:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/destinations-v2-column-changes-27431401480ec03f5dee0374d0216b6f.png"}}]);