"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[14330],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,d=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return t?r.createElement(d,s(s({ref:n},m),{},{components:t})):r.createElement(d,s({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},27133:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),s=["components"],i={title:"DeepLearning - Flower Image Classification",hide_title:!0,status:"stable"},l=void 0,p={unversionedId:"features/other/DeepLearning - Flower Image Classification",id:"version-0.10.1/features/other/DeepLearning - Flower Image Classification",title:"DeepLearning - Flower Image Classification",description:"Deep Learning - Flower Image Classification",source:"@site/versioned_docs/version-0.10.1/features/other/DeepLearning - Flower Image Classification.md",sourceDirName:"features/other",slug:"/features/other/DeepLearning - Flower Image Classification",permalink:"/SynapseML/docs/0.10.1/features/other/DeepLearning - Flower Image Classification",draft:!1,tags:[],version:"0.10.1",frontMatter:{title:"DeepLearning - Flower Image Classification",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"DeepLearning - CIFAR10 Convolutional Network",permalink:"/SynapseML/docs/0.10.1/features/other/DeepLearning - CIFAR10 Convolutional Network"},next:{title:"DeepLearning - Transfer Learning",permalink:"/SynapseML/docs/0.10.1/features/other/DeepLearning - Transfer Learning"}},m={},u=[{value:"Deep Learning - Flower Image Classification",id:"deep-learning---flower-image-classification",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Run the experiment",id:"run-the-experiment",level:3},{value:"Plot confusion matrix.",id:"plot-confusion-matrix",level:3}],c={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"deep-learning---flower-image-classification"},"Deep Learning - Flower Image Classification"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.ml import Transformer, Estimator, Pipeline\nfrom pyspark.ml.classification import LogisticRegression\nfrom synapse.ml.downloader import ModelDownloader\nimport sys, time\nfrom pyspark.sql import SparkSession\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nfrom synapse.ml.core.platform import running_on_synapse, running_on_databricks\n\nif running_on_synapse():\n    from notebookutils.visualization import display\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'if running_on_synapse():\n    modelDir = "abfss://synapse@mmlsparkeuap.dfs.core.windows.net/models/"\nelif running_on_databricks():\n    modelDir = "dbfs:/models/"\nelse:\n    modelDir = "/tmp/models/"\n\nmodel = ModelDownloader(spark, modelDir).downloadByName("ResNet50")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Load the images\n# use flowers_and_labels.parquet on larger cluster in order to get better results\nimagesWithLabels = (\n    spark.read.parquet(\n        "wasbs://publicwasb@mmlspark.blob.core.windows.net/flowers_and_labels2.parquet"\n    )\n    .withColumnRenamed("bytes", "image")\n    .sample(0.1)\n)\n\nimagesWithLabels.printSchema()\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/p2KgdYL.jpg",alt:"Smiley face"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.opencv import ImageTransformer\nfrom synapse.ml.image import UnrollImage\nfrom synapse.ml.cntk import ImageFeaturizer\nfrom synapse.ml.stages import *\n\n# Make some featurizers\nit = ImageTransformer().setOutputCol("scaled").resize(size=(60, 60))\n\nur = UnrollImage().setInputCol("scaled").setOutputCol("features")\n\ndc1 = DropColumns().setCols(["scaled", "image"])\n\nlr1 = (\n    LogisticRegression().setMaxIter(8).setFeaturesCol("features").setLabelCol("labels")\n)\n\ndc2 = DropColumns().setCols(["features"])\n\nbasicModel = Pipeline(stages=[it, ur, dc1, lr1, dc2])\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'resnet = (\n    ImageFeaturizer()\n    .setInputCol("image")\n    .setOutputCol("features")\n    .setModelLocation(model.uri)\n    .setLayerNames(model.layerNames)\n    .setCutOutputLayers(1)\n)\n\ndc3 = DropColumns().setCols(["image"])\n\nlr2 = (\n    LogisticRegression().setMaxIter(8).setFeaturesCol("features").setLabelCol("labels")\n)\n\ndc4 = DropColumns().setCols(["features"])\n\ndeepModel = Pipeline(stages=[resnet, dc3, lr2, dc4])\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Mb4Dyou.png",alt:"Resnet 18"})),(0,o.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://i.stack.imgur.com/Hl2H6.png",alt:"Convolutional network weights"})),(0,o.kt)("h3",{id:"run-the-experiment"},"Run the experiment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def timedExperiment(model, train, test):\n    start = time.time()\n    result = model.fit(train).transform(test).toPandas()\n    print("Experiment took {}s".format(time.time() - start))\n    return result\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"train, test = imagesWithLabels.randomSplit([0.8, 0.2])\ntrain.count(), test.count()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"basicResults = timedExperiment(basicModel, train, test)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"deepResults = timedExperiment(deepModel, train, test)\n")),(0,o.kt)("h3",{id:"plot-confusion-matrix"},"Plot confusion matrix."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nfrom sklearn.metrics import confusion_matrix\nimport numpy as np\n\n\ndef evaluate(results, name):\n    y, y_hat = results["labels"], results["prediction"]\n    y = [int(l) for l in y]\n\n    accuracy = np.mean([1.0 if pred == true else 0.0 for (pred, true) in zip(y_hat, y)])\n    cm = confusion_matrix(y, y_hat)\n    cm = cm.astype("float") / cm.sum(axis=1)[:, np.newaxis]\n\n    plt.text(\n        40, 10, "$Accuracy$ $=$ ${}\\%$".format(round(accuracy * 100, 1)), fontsize=14\n    )\n    plt.imshow(cm, interpolation="nearest", cmap=plt.cm.Blues)\n    plt.colorbar()\n    plt.xlabel("$Predicted$ $label$", fontsize=18)\n    plt.ylabel("$True$ $Label$", fontsize=18)\n    plt.title("$Normalized$ $CM$ $for$ ${}$".format(name))\n\n\nplt.figure(figsize=(12, 5))\nplt.subplot(1, 2, 1)\nevaluate(deepResults, "CNTKModel + LR")\nplt.subplot(1, 2, 2)\nevaluate(basicResults, "LR")\n# Note that on the larger dataset the accuracy will bump up from 44% to >90%\ndisplay(plt.show())\n')))}f.isMDXComponent=!0}}]);