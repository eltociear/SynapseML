"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[2058],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),v=l(t),y=i,f=v["".concat(c,".").concat(y)]||v[y]||p[y]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=v;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},55704:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=["components"],s={title:"CognitiveServices - Analyze Text",hide_title:!0,status:"stable",name:"CognitiveServices - Analyze Text"},c="Cognitive Services - Analyze Text",l={unversionedId:"features/cognitive_services/CognitiveServices - Analyze Text",id:"version-0.11.1/features/cognitive_services/CognitiveServices - Analyze Text",title:"CognitiveServices - Analyze Text",description:"",source:"@site/versioned_docs/version-0.11.1/features/cognitive_services/CognitiveServices - Analyze Text.md",sourceDirName:"features/cognitive_services",slug:"/features/cognitive_services/CognitiveServices - Analyze Text",permalink:"/SynapseML/docs/0.11.1/features/cognitive_services/CognitiveServices - Analyze Text",draft:!1,tags:[],version:"0.11.1",frontMatter:{title:"CognitiveServices - Analyze Text",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"CognitiveServices - Advanced Usage Async, Batching, and Multi-Key",permalink:"/SynapseML/docs/0.11.1/features/cognitive_services/CognitiveServices - Advanced Usage Async, Batching, and Multi-Key"},next:{title:"CognitiveServices - Celebrity Quote Analysis",permalink:"/SynapseML/docs/0.11.1/features/cognitive_services/CognitiveServices - Celebrity Quote Analysis"}},u={},p=[],v={toc:p};function y(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cognitive-services---analyze-text"},"Cognitive Services - Analyze Text"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\nfrom pyspark.sql import SparkSession\nfrom synapse.ml.core.platform import running_on_synapse, find_secret\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\nif running_on_synapse():\n    from notebookutils.visualization import display\n\ncognitive_key = find_secret("cognitive-api-key")\ncognitive_location = "eastus"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.createDataFrame(\n    data=[\n        ["en", "Hello Seattle"],\n        ["en", "There once was a dog who lived in London and thought she was a human"],\n    ],\n    schema=["language", "text"],\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"display(df)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\ntext_analyze = (\n    TextAnalyze()\n    .setLocation(cognitive_location)\n    .setSubscriptionKey(cognitive_key)\n    .setTextCol("text")\n    .setOutputCol("textAnalysis")\n    .setErrorCol("error")\n    .setLanguageCol("language")\n    .setEntityRecognitionParams(\n        {"model-version": "latest"}\n    )  # Can pass parameters to each model individually\n    .setIncludePii(False)  # Users can manually exclude tasks to speed up analysis\n    .setIncludeEntityLinking(False)\n    .setIncludeSentimentAnalysis(False)\n)\n\ndf_results = text_analyze.transform(df)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"display(df_results)\n")))}y.isMDXComponent=!0}}]);