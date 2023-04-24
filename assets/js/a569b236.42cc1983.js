"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[49910],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89150:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),s=["components"],l={title:"ONNX - Inference on Spark",hide_title:!0,status:"stable"},i=void 0,p={unversionedId:"features/onnx/ONNX - Inference on Spark",id:"version-0.10.0/features/onnx/ONNX - Inference on Spark",title:"ONNX - Inference on Spark",description:"ONNX Inference on Spark",source:"@site/versioned_docs/version-0.10.0/features/onnx/ONNX - Inference on Spark.md",sourceDirName:"features/onnx",slug:"/features/onnx/ONNX - Inference on Spark",permalink:"/SynapseML/docs/0.10.0/features/onnx/ONNX - Inference on Spark",draft:!1,tags:[],version:"0.10.0",frontMatter:{title:"ONNX - Inference on Spark",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"About",permalink:"/SynapseML/docs/0.10.0/features/onnx/about"},next:{title:"About",permalink:"/SynapseML/docs/0.10.0/features/lightgbm/about"}},u={},c=[{value:"ONNX Inference on Spark",id:"onnx-inference-on-spark",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"onnx-inference-on-spark"},"ONNX Inference on Spark"),(0,a.kt)("p",null,"In this example, we will train a LightGBM model, convert the model to ONNX format and use the converted model to infer some testing data on Spark."),(0,a.kt)("p",null,"Python dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"onnxmltools==1.7.0"),(0,a.kt)("li",{parentName:"ul"},"lightgbm==3.2.1")),(0,a.kt)("p",null,"Load training data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n    from notebookutils.visualization import display\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'df = (\n    spark.read.format("csv")\n    .option("header", True)\n    .option("inferSchema", True)\n    .load(\n        "wasbs://publicwasb@mmlspark.blob.core.windows.net/company_bankruptcy_prediction_data.csv"\n    )\n)\n\ndisplay(df)\n')),(0,a.kt)("p",null,"Use LightGBM to train a model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.feature import VectorAssembler\nfrom synapse.ml.lightgbm import LightGBMClassifier\n\nfeature_cols = df.columns[1:]\nfeaturizer = VectorAssembler(inputCols=feature_cols, outputCol="features")\n\ntrain_data = featurizer.transform(df)["Bankrupt?", "features"]\n\nmodel = (\n    LightGBMClassifier(featuresCol="features", labelCol="Bankrupt?")\n    .setEarlyStoppingRound(300)\n    .setLambdaL1(0.5)\n    .setNumIterations(1000)\n    .setNumThreads(-1)\n    .setMaxDeltaStep(0.5)\n    .setNumLeaves(31)\n    .setMaxDepth(-1)\n    .setBaggingFraction(0.7)\n    .setFeatureFraction(0.7)\n    .setBaggingFreq(2)\n    .setObjective("binary")\n    .setIsUnbalance(True)\n    .setMinSumHessianInLeaf(20)\n    .setMinGainToSplit(0.01)\n)\n\nmodel = model.fit(train_data)\n')),(0,a.kt)("p",null,"Export the trained model to a LightGBM booster, convert it to ONNX format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import lightgbm as lgb\nfrom lightgbm import Booster, LGBMClassifier\n\n\ndef convertModel(lgbm_model: LGBMClassifier or Booster, input_size: int) -> bytes:\n    from onnxmltools.convert import convert_lightgbm\n    from onnxconverter_common.data_types import FloatTensorType\n\n    initial_types = [("input", FloatTensorType([-1, input_size]))]\n    onnx_model = convert_lightgbm(\n        lgbm_model, initial_types=initial_types, target_opset=9\n    )\n    return onnx_model.SerializeToString()\n\n\nbooster_model_str = model.getLightGBMBooster().modelStr().get()\nbooster = lgb.Booster(model_str=booster_model_str)\nmodel_payload_ml = convertModel(booster, len(feature_cols))\n')),(0,a.kt)("p",null,"Load the ONNX payload into an ",(0,a.kt)("inlineCode",{parentName:"p"},"ONNXModel"),", and inspect the model inputs and outputs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.onnx import ONNXModel\n\nonnx_ml = ONNXModel().setModelPayload(model_payload_ml)\n\nprint("Model inputs:" + str(onnx_ml.getModelInputs()))\nprint("Model outputs:" + str(onnx_ml.getModelOutputs()))\n')),(0,a.kt)("p",null,"Map the model input to the input dataframe's column name (FeedDict), and map the output dataframe's column names to the model outputs (FetchDict)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'onnx_ml = (\n    onnx_ml.setDeviceType("CPU")\n    .setFeedDict({"input": "features"})\n    .setFetchDict({"probability": "probabilities", "prediction": "label"})\n    .setMiniBatchSize(5000)\n)\n')),(0,a.kt)("p",null,"Create some testing data and transform the data through the ONNX model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.feature import VectorAssembler\nimport pandas as pd\nimport numpy as np\n\nn = 1000 * 1000\nm = 95\ntest = np.random.rand(n, m)\ntestPdf = pd.DataFrame(test)\ncols = list(map(str, testPdf.columns))\ntestDf = spark.createDataFrame(testPdf)\ntestDf = testDf.union(testDf).repartition(200)\ntestDf = (\n    VectorAssembler()\n    .setInputCols(cols)\n    .setOutputCol("features")\n    .transform(testDf)\n    .drop(*cols)\n    .cache()\n)\n\ndisplay(onnx_ml.transform(testDf))\n')))}d.isMDXComponent=!0}}]);