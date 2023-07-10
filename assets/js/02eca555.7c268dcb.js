"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[68369],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return r?t.createElement(d,s(s({ref:n},u),{},{components:r})):t.createElement(d,s({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55932:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var t=r(83117),a=r(80102),o=(r(67294),r(3905)),s=["components"],i={title:"DeepLearning - Transfer Learning",hide_title:!0,status:"stable"},l=void 0,p={unversionedId:"features/other/DeepLearning - Transfer Learning",id:"version-0.11.1/features/other/DeepLearning - Transfer Learning",title:"DeepLearning - Transfer Learning",description:"DeepLearning - Transfer Learning",source:"@site/versioned_docs/version-0.11.1/features/other/DeepLearning - Transfer Learning.md",sourceDirName:"features/other",slug:"/features/other/DeepLearning - Transfer Learning",permalink:"/SynapseML/docs/0.11.1/features/other/DeepLearning - Transfer Learning",draft:!1,tags:[],version:"0.11.1",frontMatter:{title:"DeepLearning - Transfer Learning",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"DeepLearning - Flower Image Classification",permalink:"/SynapseML/docs/0.11.1/features/other/DeepLearning - Flower Image Classification"},next:{title:"HyperParameterTuning - Fighting Breast Cancer",permalink:"/SynapseML/docs/0.11.1/features/other/HyperParameterTuning - Fighting Breast Cancer"}},u={},c=[{value:"DeepLearning - Transfer Learning",id:"deeplearning---transfer-learning",level:2}],m={toc:c};function f(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"deeplearning---transfer-learning"},"DeepLearning - Transfer Learning"),(0,o.kt)("p",null,"Classify automobile vs airplane using DNN featurization and transfer learning\nagainst a subset of images from CIFAR-10 dataset."),(0,o.kt)("p",null,"Load DNN Model and pick one of the inner layers as feature output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cntk import CNTKModel\nfrom synapse.ml.downloader import ModelDownloader\nimport numpy as np, os, urllib, tarfile, pickle, array\nfrom os.path import abspath\nfrom pyspark.sql.functions import col, udf\nfrom pyspark.sql.types import *\n\nfrom pyspark.sql import SparkSession\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nfrom synapse.ml.core.platform import running_on_synapse, running_on_databricks\n\nmodelName = "ConvNet"\nif running_on_synapse():\n    modelDir = "abfss://synapse@mmlsparkeuap.dfs.core.windows.net/models/"\nelif running_on_databricks():\n    modelDir = "dbfs:/models/"\nelse:\n    modelDir = "/tmp/models/"\n\nd = ModelDownloader(spark, modelDir)\nmodel = d.downloadByName(modelName)\nprint(model.layerNames)\ncntkModel = (\n    CNTKModel()\n    .setInputCol("images")\n    .setOutputCol("features")\n    .setModelLocation(model.uri)\n    .setOutputNode("l8")\n)\n')),(0,o.kt)("p",null,"Format raw CIFAR data into correct shape."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'imagesWithLabels = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/CIFAR10_test.parquet"\n)\n')),(0,o.kt)("p",null,"Select airplanes (label=0) and automobiles (label=1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'imagesWithLabels = imagesWithLabels.filter("labels<2")\nimagesWithLabels.cache()\n')),(0,o.kt)("p",null,"Featurize images"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'featurizedImages = cntkModel.transform(imagesWithLabels).select(["features", "labels"])\n')),(0,o.kt)("p",null,"Use featurized images to train a classifier"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import TrainClassifier\nfrom pyspark.ml.classification import RandomForestClassifier\n\ntrain, test = featurizedImages.randomSplit([0.75, 0.25])\n\nmodel = TrainClassifier(model=RandomForestClassifier(), labelCol="labels").fit(train)\n')),(0,o.kt)("p",null,"Evaluate the accuracy of the model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\n\npredictions = model.transform(test)\nmetrics = ComputeModelStatistics(evaluationMetric="accuracy").transform(predictions)\nmetrics.show()\n')))}f.isMDXComponent=!0}}]);