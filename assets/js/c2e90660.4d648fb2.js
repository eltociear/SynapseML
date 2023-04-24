"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[47375],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Vowpal Wabbit - Contextual Bandits",hide_title:!0,status:"stable",name:"Vowpal Wabbit - Contextual Bandits"},l=void 0,p={unversionedId:"features/vw/Vowpal Wabbit - Contextual Bandits",id:"version-0.11.0/features/vw/Vowpal Wabbit - Contextual Bandits",title:"Vowpal Wabbit - Contextual Bandits",description:"In the contextual bandit problem, a learner repeatedly observes a context, chooses an action, and observes a loss/cost/reward for the chosen action only. Contextual bandit algorithms use additional side information (or context) to aid real world decision-making. They work well for choosing actions in dynamic environments where options change rapidly, and the set of available actions is limite",source:"@site/versioned_docs/version-0.11.0/features/vw/Vowpal Wabbit - Contextual Bandits.md",sourceDirName:"features/vw",slug:"/features/vw/Vowpal Wabbit - Contextual Bandits",permalink:"/SynapseML/docs/0.11.0/features/vw/Vowpal Wabbit - Contextual Bandits",draft:!1,tags:[],version:"0.11.0",frontMatter:{title:"Vowpal Wabbit - Contextual Bandits",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Vowpal Wabbit - Classification using VW-native Format",permalink:"/SynapseML/docs/0.11.0/features/vw/Vowpal Wabbit - Classification using VW-native Format"},next:{title:"Vowpal Wabbit - Multi-class classification",permalink:"/SynapseML/docs/0.11.0/features/vw/Vowpal Wabbit - Multi-class classification"}},c={},d=[{value:"Step1: Read the dataset",id:"step1-read-the-dataset",level:2},{value:"Step 2: Use VowalWabbitFeaturizer to convert data features into vector",id:"step-2-use-vowalwabbitfeaturizer-to-convert-data-features-into-vector",level:2},{value:"Step 3: Train model",id:"step-3-train-model",level:2},{value:"Step 4: Predict and evaluate",id:"step-4-predict-and-evaluate",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{width:"200",src:"https://mmlspark.blob.core.windows.net/graphics/emails/vw-blue-dark-orange.svg"}),(0,o.kt)("h1",{id:"contextual-bandits-using-vowpal-wabbit"},"Contextual-Bandits using Vowpal Wabbit"),(0,o.kt)("p",null,"In the contextual bandit problem, a learner repeatedly observes a context, chooses an action, and observes a loss/cost/reward for the chosen action only. Contextual bandit algorithms use additional side information (or context) to aid real world decision-making. They work well for choosing actions in dynamic environments where options change rapidly, and the set of available actions is limite"),(0,o.kt)("p",null,"An in-depth tutorial can be found ",(0,o.kt)("a",{parentName:"p",href:"https://vowpalwabbit.org/docs/vowpal_wabbit/python/latest/tutorials/python_Contextual_bandits_and_Vowpal_Wabbit.html"},"here")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/cognitive-services/personalizer"},"Azure Personalizer")," emits logs in DSJSON-format. This example demonstrates how to perform off-policy evaluation."),(0,o.kt)("h2",{id:"step1-read-the-dataset"},"Step1: Read the dataset"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql import SparkSession\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nfrom synapse.ml.core.platform import *\n\nfrom synapse.ml.core.platform import materializing_display as display\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pyspark.sql.types as T\nfrom pyspark.sql import functions as F\n\nschema = T.StructType(\n    [\n        T.StructField("input", T.StringType(), False),\n    ]\n)\n\ndf = (\n    spark.read.format("text")\n    .schema(schema)\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/decisionservice.json")\n)\n# print dataset basic info\nprint("records read: " + str(df.count()))\nprint("Schema: ")\ndf.printSchema()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"display(df)\n")),(0,o.kt)("h2",{id:"step-2-use-vowalwabbitfeaturizer-to-convert-data-features-into-vector"},"Step 2: Use VowalWabbitFeaturizer to convert data features into vector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitDSJsonTransformer\n\ndf_train = (\n    VowpalWabbitDSJsonTransformer()\n    .setDsJsonColumn("input")\n    .transform(df)\n    .withColumn("splitId", F.lit(0))\n    .repartition(2)\n)\n\n# Show structured nature of rewards\ndf_train.printSchema()\n\n# exclude JSON to avoid overflow\ndisplay(df_train.drop("input"))\n')),(0,o.kt)("h2",{id:"step-3-train-model"},"Step 3: Train model"),(0,o.kt)("p",null,"VowaplWabbitGeneric performs these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"trains a model for each split (=group)"),(0,o.kt)("li",{parentName:"ul"},"synchronizes accross partitions after every split"),(0,o.kt)("li",{parentName:"ul"},"store the 1-step ahead predictions in the model")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitGeneric\n\nmodel = (\n    VowpalWabbitGeneric()\n    .setPassThroughArgs(\n        "--cb_adf --cb_type mtr --clip_p 0.1 -q GT -q MS -q GR -q OT -q MT -q OS --dsjson --preserve_performance_counters"\n    )\n    .setInputCol("input")\n    .setSplitCol("splitId")\n    .setPredictionIdCol("EventId")\n    .fit(df_train)\n)\n')),(0,o.kt)("h2",{id:"step-4-predict-and-evaluate"},"Step 4: Predict and evaluate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'df_predictions = model.getOneStepAheadPredictions()  # .show(5, False)\ndf_headers = df_train.drop("input")\n\ndf_headers_predictions = df_headers.join(df_predictions, "EventId")\ndisplay(df_headers_predictions)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.vw import VowpalWabbitCSETransformer\n\nmetrics = VowpalWabbitCSETransformer().transform(df_headers_predictions)\n\ndisplay(metrics)\n")),(0,o.kt)("p",null,"For each field of the reward column the metrics are calculated"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'per_reward_metrics = metrics.select("reward.*")\n\ndisplay(per_reward_metrics)\n')))}m.isMDXComponent=!0}}]);