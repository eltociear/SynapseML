"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[69638],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58003:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),s=(n(67294),n(3905)),i=["components"],o={title:"Classification - Adult Census",hide_title:!0,status:"stable"},l=void 0,c={unversionedId:"features/classification/Classification - Adult Census",id:"version-0.9.4/features/classification/Classification - Adult Census",title:"Classification - Adult Census",description:"Classification - Adult Census",source:"@site/versioned_docs/version-0.9.4/features/classification/Classification - Adult Census.md",sourceDirName:"features/classification",slug:"/features/classification/Classification - Adult Census",permalink:"/SynapseML/docs/0.9.4/features/classification/Classification - Adult Census",draft:!1,tags:[],version:"0.9.4",frontMatter:{title:"Classification - Adult Census",hide_title:!0,status:"stable"},sidebar:"version-0.9.4/docs",previous:{title:"Classification - Adult Census with Vowpal Wabbit",permalink:"/SynapseML/docs/0.9.4/features/classification/Classification - Adult Census with Vowpal Wabbit"},next:{title:"Classification - Before and After SynapseML",permalink:"/SynapseML/docs/0.9.4/features/classification/Classification - Before and After SynapseML"}},u={},p=[{value:"Classification - Adult Census",id:"classification---adult-census",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"classification---adult-census"},"Classification - Adult Census"),(0,s.kt)("p",null,"In this example, we try to predict incomes from the ",(0,s.kt)("em",{parentName:"p"},"Adult Census")," dataset."),(0,s.kt)("p",null,"First, we import the packages (use ",(0,s.kt)("inlineCode",{parentName:"p"},"help(synapse)")," to view contents),"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import os\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport pandas as pd\n")),(0,s.kt)("p",null,"Now let's read the data and split it to train and test sets:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet")\ndata = data.select(["education", "marital-status", "hours-per-week", "income"])\ntrain, test = data.randomSplit([0.75, 0.25], seed=123)\ntrain.limit(10).toPandas()\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"TrainClassifier")," can be used to initialize and fit a model, it wraps SparkML classifiers.\nYou can use ",(0,s.kt)("inlineCode",{parentName:"p"},"help(synapse.ml.train.TrainClassifier)")," to view the different parameters."),(0,s.kt)("p",null,"Note that it implicitly converts the data into the format expected by the algorithm: tokenize\nand hash strings, one-hot encodes categorical variables, assembles the features into a vector\nand so on.  The parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"numFeatures")," controls the number of hashed features."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import TrainClassifier\nfrom pyspark.ml.classification import LogisticRegression\nmodel = TrainClassifier(model=LogisticRegression(), labelCol="income", numFeatures=256).fit(train)\n')),(0,s.kt)("p",null,"Finally, we save the model so it can be used in a scoring program."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'if os.environ.get("AZURE_SERVICE", None) != "Microsoft.ProjectArcadia":\n    model.write().overwrite().save("dbfs:/AdultCensus.mml")\nelse:\n    model.write().overwrite().save("abfss://synapse@mmlsparkeuap.dfs.core.windows.net/models/AdultCensus.mml")\n')))}d.isMDXComponent=!0}}]);