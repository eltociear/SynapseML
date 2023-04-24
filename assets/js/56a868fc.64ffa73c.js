"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[51771],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,d=c["".concat(o,".").concat(g)]||c[g]||u[g]||i;return t?r.createElement(d,l(l({ref:n},m),{},{components:t})):r.createElement(d,l({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},84688:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),l=["components"],s={title:"Interpretability - Image Explainers",hide_title:!0,status:"stable",url_path:"features/responsible_ai/Interpretability - Image Explainers",name:"Interpretability - Image Explainers"},o=void 0,p={unversionedId:"features/responsible_ai/Interpretability - Image Explainers",id:"features/responsible_ai/Interpretability - Image Explainers",title:"Interpretability - Image Explainers",description:"Interpretability - Image Explainers",source:"@site/docs/features/responsible_ai/Interpretability - Image Explainers.md",sourceDirName:"features/responsible_ai",slug:"/features/responsible_ai/Interpretability - Image Explainers",permalink:"/SynapseML/docs/next/features/responsible_ai/Interpretability - Image Explainers",draft:!1,tags:[],version:"current",frontMatter:{title:"Interpretability - Image Explainers",hide_title:!0,status:"stable",url_path:"features/responsible_ai/Interpretability - Image Explainers",name:"Interpretability - Image Explainers"},sidebar:"docs",previous:{title:"Interpretability - Explanation Dashboard",permalink:"/SynapseML/docs/next/features/responsible_ai/Interpretability - Explanation Dashboard"},next:{title:"Interpretability - PDP and ICE explainer",permalink:"/SynapseML/docs/next/features/responsible_ai/Interpretability - PDP and ICE explainer"}},m={},u=[{value:"Interpretability - Image Explainers",id:"interpretability---image-explainers",level:2}],c={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interpretability---image-explainers"},"Interpretability - Image Explainers"),(0,i.kt)("p",null,"In this example, we use LIME and Kernel SHAP explainers to explain the ResNet50 model's multi-class output of an image."),(0,i.kt)("p",null,"First we import the packages and define some UDFs and a plotting function we will need later."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.explainers import *\nfrom synapse.ml.onnx import ONNXModel\nfrom synapse.ml.opencv import ImageTransformer\nfrom synapse.ml.io import *\nfrom pyspark.ml import Pipeline\nfrom pyspark.ml.classification import LogisticRegression\nfrom pyspark.ml.feature import StringIndexer\nfrom pyspark.sql.functions import *\nfrom pyspark.sql.types import *\nimport numpy as np\nimport pyspark\nimport urllib.request\nimport matplotlib.pyplot as plt\nimport PIL, io\nfrom PIL import Image\nfrom pyspark.sql import SparkSession\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nfrom synapse.ml.core.platform import *\n\nfrom synapse.ml.core.platform import materializing_display as display\n\nvec_slice = udf(\n    lambda vec, indices: (vec.toArray())[indices].tolist(), ArrayType(FloatType())\n)\narg_top_k = udf(\n    lambda vec, k: (-vec.toArray()).argsort()[:k].tolist(), ArrayType(IntegerType())\n)\n\n\ndef downloadBytes(url: str):\n    with urllib.request.urlopen(url) as url:\n        barr = url.read()\n        return barr\n\n\ndef rotate_color_channel(bgr_image_array, height, width, nChannels):\n    B, G, R, *_ = np.asarray(bgr_image_array).reshape(height, width, nChannels).T\n    rgb_image_array = np.array((R, G, B)).T\n    return rgb_image_array\n\n\ndef plot_superpixels(image_rgb_array, sp_clusters, weights, green_threshold=99):\n    superpixels = sp_clusters\n    green_value = np.percentile(weights, green_threshold)\n    img = Image.fromarray(image_rgb_array, mode="RGB").convert("RGBA")\n    image_array = np.asarray(img).copy()\n    for (sp, v) in zip(superpixels, weights):\n        if v > green_value:\n            for (x, y) in sp:\n                image_array[y, x, 1] = 255\n                image_array[y, x, 3] = 200\n    plt.clf()\n    plt.imshow(image_array)\n    if running_on_synapse() or running_on_synapse_internal():\n        plt.show()\n    else:\n        display(plt)\n')),(0,i.kt)("p",null,"Create a dataframe for a testing image, and use the ResNet50 ONNX model to infer the image."),(0,i.kt)("p",null,'The result shows 39.6% probability of "violin" (889), and 38.4% probability of "upright piano" (881).'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.io import *\n\nimage_df = spark.read.image().load(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/explainers/images/david-lusvardi-dWcUncxocQY-unsplash.jpg"\n)\ndisplay(image_df)\n\n# Rotate the image array from BGR into RGB channels for visualization later.\nrow = image_df.select(\n    "image.height", "image.width", "image.nChannels", "image.data"\n).head()\nlocals().update(row.asDict())\nrgb_image_array = rotate_color_channel(data, height, width, nChannels)\n\n# Download the ONNX model\nmodelPayload = downloadBytes(\n    "https://mmlspark.blob.core.windows.net/publicwasb/ONNXModels/resnet50-v2-7.onnx"\n)\n\nfeaturizer = (\n    ImageTransformer(inputCol="image", outputCol="features")\n    .resize(224, True)\n    .centerCrop(224, 224)\n    .normalize(\n        mean=[0.485, 0.456, 0.406],\n        std=[0.229, 0.224, 0.225],\n        color_scale_factor=1 / 255,\n    )\n    .setTensorElementType(FloatType())\n)\n\nonnx = (\n    ONNXModel()\n    .setModelPayload(modelPayload)\n    .setFeedDict({"data": "features"})\n    .setFetchDict({"rawPrediction": "resnetv24_dense0_fwd"})\n    .setSoftMaxDict({"rawPrediction": "probability"})\n    .setMiniBatchSize(1)\n)\n\nmodel = Pipeline(stages=[featurizer, onnx]).fit(image_df)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'predicted = (\n    model.transform(image_df)\n    .withColumn("top2pred", arg_top_k(col("probability"), lit(2)))\n    .withColumn("top2prob", vec_slice(col("probability"), col("top2pred")))\n)\n\ndisplay(predicted.select("top2pred", "top2prob"))\n')),(0,i.kt)("p",null,"First we use the LIME image explainer to explain the model's top 2 classes' probabilities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'lime = (\n    ImageLIME()\n    .setModel(model)\n    .setOutputCol("weights")\n    .setInputCol("image")\n    .setCellSize(150.0)\n    .setModifier(50.0)\n    .setNumSamples(500)\n    .setTargetCol("probability")\n    .setTargetClassesCol("top2pred")\n    .setSamplingFraction(0.7)\n)\n\nlime_result = (\n    lime.transform(predicted)\n    .withColumn("weights_violin", col("weights").getItem(0))\n    .withColumn("weights_piano", col("weights").getItem(1))\n    .cache()\n)\n\ndisplay(lime_result.select(col("weights_violin"), col("weights_piano")))\nlime_row = lime_result.head()\n')),(0,i.kt)("p",null,'We plot the LIME weights for "violin" output and "upright piano" output.'),(0,i.kt)("p",null,"Green areas are superpixels with LIME weights above 95 percentile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'plot_superpixels(\n    rgb_image_array,\n    lime_row["superpixels"]["clusters"],\n    list(lime_row["weights_violin"]),\n    95,\n)\nplot_superpixels(\n    rgb_image_array,\n    lime_row["superpixels"]["clusters"],\n    list(lime_row["weights_piano"]),\n    95,\n)\n')),(0,i.kt)("p",null,"Your results will look like:"),(0,i.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/explainers/image-lime-20210811.png"}),(0,i.kt)("p",null,"Then we use the Kernel SHAP image explainer to explain the model's top 2 classes' probabilities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'shap = (\n    ImageSHAP()\n    .setModel(model)\n    .setOutputCol("shaps")\n    .setSuperpixelCol("superpixels")\n    .setInputCol("image")\n    .setCellSize(150.0)\n    .setModifier(50.0)\n    .setNumSamples(500)\n    .setTargetCol("probability")\n    .setTargetClassesCol("top2pred")\n)\n\nshap_result = (\n    shap.transform(predicted)\n    .withColumn("shaps_violin", col("shaps").getItem(0))\n    .withColumn("shaps_piano", col("shaps").getItem(1))\n    .cache()\n)\n\ndisplay(shap_result.select(col("shaps_violin"), col("shaps_piano")))\nshap_row = shap_result.head()\n')),(0,i.kt)("p",null,'We plot the SHAP values for "piano" output and "cell" output.'),(0,i.kt)("p",null,"Green areas are superpixels with SHAP values above 95 percentile."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notice that we drop the base value from the SHAP output before rendering the superpixels. The base value is the model output for the background (all black) image.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'plot_superpixels(\n    rgb_image_array,\n    shap_row["superpixels"]["clusters"],\n    list(shap_row["shaps_violin"][1:]),\n    95,\n)\nplot_superpixels(\n    rgb_image_array,\n    shap_row["superpixels"]["clusters"],\n    list(shap_row["shaps_piano"][1:]),\n    95,\n)\n')),(0,i.kt)("p",null,"Your results will look like:"),(0,i.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/explainers/image-shap-20210811.png"}))}g.isMDXComponent=!0}}]);