"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[73809],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99640:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={title:"Vowpal Wabbit - Multi-class classification",hide_title:!0,status:"stable",name:"Vowpal Wabbit - Multi-class classification"},s=void 0,p={unversionedId:"features/vw/Vowpal Wabbit - Multi-class classification",id:"version-0.11.1/features/vw/Vowpal Wabbit - Multi-class classification",title:"Vowpal Wabbit - Multi-class classification",description:"Read dataset",source:"@site/versioned_docs/version-0.11.1/features/vw/Vowpal Wabbit - Multi-class classification.md",sourceDirName:"features/vw",slug:"/features/vw/Vowpal Wabbit - Multi-class classification",permalink:"/SynapseML/docs/features/vw/Vowpal Wabbit - Multi-class classification",draft:!1,tags:[],version:"0.11.1",frontMatter:{title:"Vowpal Wabbit - Multi-class classification",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Vowpal Wabbit - Contextual Bandits",permalink:"/SynapseML/docs/features/vw/Vowpal Wabbit - Contextual Bandits"},next:{title:"Vowpal Wabbit - Overview",permalink:"/SynapseML/docs/features/vw/Vowpal Wabbit - Overview"}},c={},u=[{value:"Read dataset",id:"read-dataset",level:4},{value:"Use VowalWabbitFeaturizer to convert data features into vector",id:"use-vowalwabbitfeaturizer-to-convert-data-features-into-vector",level:4},{value:"Split the dataset into train and test",id:"split-the-dataset-into-train-and-test",level:4},{value:"Model Training",id:"model-training",level:4},{value:"Model Prediction",id:"model-prediction",level:4}],d={toc:u};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{width:"200",src:"https://mmlspark.blob.core.windows.net/graphics/emails/vw-blue-dark-orange.svg"}),(0,i.kt)("h1",{id:"multi-class-classification-using-vowpal-wabbit"},"Multi-class Classification using Vowpal Wabbit"),(0,i.kt)("h4",{id:"read-dataset"},"Read dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql import SparkSession\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nfrom synapse.ml.core.platform import *\n\nfrom synapse.ml.core.platform import materializing_display as display\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pyspark.sql.types as T\nfrom pyspark.sql import functions as F\n\nschema = T.StructType(\n    [\n        T.StructField("sepal_length", T.DoubleType(), False),\n        T.StructField("sepal_width", T.DoubleType(), False),\n        T.StructField("petal_length", T.DoubleType(), False),\n        T.StructField("petal_width", T.DoubleType(), False),\n        T.StructField("variety", T.StringType(), False),\n    ]\n)\n\ndf = (\n    spark.read.format("csv")\n    .option("header", True)\n    .schema(schema)\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/iris.txt")\n)\n# print dataset basic info\nprint("records read: " + str(df.count()))\nprint("Schema: ")\ndf.printSchema()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"display(df)\n")),(0,i.kt)("h4",{id:"use-vowalwabbitfeaturizer-to-convert-data-features-into-vector"},"Use VowalWabbitFeaturizer to convert data features into vector"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.feature import StringIndexer\n\nfrom synapse.ml.vw import VowpalWabbitFeaturizer\n\nindexer = StringIndexer(inputCol="variety", outputCol="label")\nfeaturizer = VowpalWabbitFeaturizer(\n    inputCols=["sepal_length", "sepal_width", "petal_length", "petal_width"],\n    outputCol="features",\n)\n\n# label needs to be integer (0 to n)\ndf_label = indexer.fit(df).transform(df).withColumn("label", F.col("label").cast("int"))\n\n# featurize data\ndf_featurized = featurizer.transform(df_label).select("label", "features")\n\ndisplay(df_featurized)\n')),(0,i.kt)("h4",{id:"split-the-dataset-into-train-and-test"},"Split the dataset into train and test"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"train, test = df_featurized.randomSplit([0.8, 0.2], seed=1)\n")),(0,i.kt)("h4",{id:"model-training"},"Model Training"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitClassifier\n\n\nmodel = (\n    VowpalWabbitClassifier(\n        numPasses=5,\n        passThroughArgs="--holdout_off --oaa 3 --holdout_off --loss_function=logistic --indexing 0 -q ::",\n    )\n    .setNumClasses(3)\n    .fit(train)\n)\n')),(0,i.kt)("h4",{id:"model-prediction"},"Model Prediction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"predictions = model.transform(test)\n\ndisplay(predictions)\n")))}f.isMDXComponent=!0}}]);