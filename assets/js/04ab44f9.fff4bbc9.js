"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[75035],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95708:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),s=["components"],o={title:"First Example",description:"Build machine learning applications using Microsoft Machine Learning for Apache Spark"},l=void 0,c={unversionedId:"getting_started/first_example",id:"version-0.10.1/getting_started/first_example",title:"First Example",description:"Build machine learning applications using Microsoft Machine Learning for Apache Spark",source:"@site/versioned_docs/version-0.10.1/getting_started/first_example.md",sourceDirName:"getting_started",slug:"/getting_started/first_example",permalink:"/SynapseML/docs/0.10.1/getting_started/first_example",draft:!1,tags:[],version:"0.10.1",frontMatter:{title:"First Example",description:"Build machine learning applications using Microsoft Machine Learning for Apache Spark"},sidebar:"docs",previous:{title:"Installation",permalink:"/SynapseML/docs/0.10.1/getting_started/installation"},next:{title:"First Model",permalink:"/SynapseML/docs/0.10.1/getting_started/first_model"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get started",id:"get-started",level:2},{value:"Text analytics sample",id:"text-analytics-sample",level:2},{value:"Expected results",id:"expected-results",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you don't have an Azure subscription, ",(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/"},"create a free account before you begin"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/get-started-create-workspace"},"Azure Synapse Analytics workspace")," with an Azure Data Lake Storage Gen2 storage account configured as the default storage. You need to be the ",(0,i.kt)("em",{parentName:"li"},"Storage Blob Data Contributor")," of the Data Lake Storage Gen2 file system that you work with."),(0,i.kt)("li",{parentName:"ul"},"Spark pool in your Azure Synapse Analytics workspace. For details, see ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/get-started-analyze-spark"},"Create a Spark pool in Azure Synapse"),"."),(0,i.kt)("li",{parentName:"ul"},"Pre-configuration steps described in the tutorial ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/machine-learning/tutorial-configure-cognitive-services-synapse"},"Configure Cognitive Services in Azure Synapse"),".")),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("p",null,"To get started, import synapse.ml and configurate service keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import synapse.ml\nfrom synapse.ml.cognitive import *\nfrom notebookutils import mssparkutils\n\n# A general Cognitive Services key for Text Analytics and Computer Vision (or use separate keys that belong to each service)\ncognitive_service_key = mssparkutils.credentials.getSecret("ADD_YOUR_KEY_VAULT_NAME", "ADD_YOUR_SERVICE_KEY","ADD_YOUR_KEY_VAULT_LINKED_SERVICE_NAME")\n# A Bing Search v7 subscription key\nbingsearch_service_key = mssparkutils.credentials.getSecret("ADD_YOUR_KEY_VAULT_NAME", "ADD_YOUR_BING_SEARCH_KEY","ADD_YOUR_KEY_VAULT_LINKED_SERVICE_NAME")\n# An Anomaly Dectector subscription key\nanomalydetector_key = mssparkutils.credentials.getSecret("ADD_YOUR_KEY_VAULT_NAME", "ADD_YOUR_ANOMALY_KEY","ADD_YOUR_KEY_VAULT_LINKED_SERVICE_NAME")\n\n\n')),(0,i.kt)("h2",{id:"text-analytics-sample"},"Text analytics sample"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/"},"Text Analytics")," service provides several algorithms for extracting intelligent insights from text. For example, we can find the sentiment of given input text. The service will return a score between 0.0 and 1.0 where low scores indicate negative sentiment and high score indicates positive sentiment. This sample uses three simple sentences and returns the sentiment for each."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import col\n\n# Create a dataframe that\'s tied to it\'s column names\ndf_sentences = spark.createDataFrame([\n  ("I\'m so happy today, it\'s sunny!", "en-US"),\n  ("this is a dog", "en-US"),s\n  ("I\'m frustrated by this rush hour traffic!", "en-US")\n], ["text", "language"])\n\n# Run the Text Analytics service with options\nsentiment = (TextSentiment()\n    .setTextCol("text")\n    .setLocation("eastasia") # Set the location of your cognitive service\n    .setSubscriptionKey(cognitive_service_key)\n    .setOutputCol("sentiment")\n    .setErrorCol("error")\n    .setLanguageCol("language"))\n\n# Show the results of your text query in a table format\n\ndisplay(sentiment.transform(df_sentences).select("text", col("sentiment")[0].getItem("sentiment").alias("sentiment")))\n')),(0,i.kt)("h3",{id:"expected-results"},"Expected results"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"text"),(0,i.kt)("th",{parentName:"tr",align:null},"sentiment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I'm frustrated by this rush hour traffic!"),(0,i.kt)("td",{parentName:"tr",align:null},"negative")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"this is a dog"),(0,i.kt)("td",{parentName:"tr",align:null},"neutral")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I'm so happy today, it's sunny!"),(0,i.kt)("td",{parentName:"tr",align:null},"positive")))))}d.isMDXComponent=!0}}]);