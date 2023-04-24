"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[20219],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,N=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(N,i(i({ref:t},s),{},{components:n})):a.createElement(N,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"ONNX model inferencing on Spark",hide_title:!0,sidebar_label:"About",description:"Learn how to use the ONNX model transformer to run inference for an ONNX model on Spark."},p="ONNX model inferencing on Spark",m={unversionedId:"features/onnx/about",id:"version-0.9.4/features/onnx/about",title:"ONNX model inferencing on Spark",description:"Learn how to use the ONNX model transformer to run inference for an ONNX model on Spark.",source:"@site/versioned_docs/version-0.9.4/features/onnx/about.md",sourceDirName:"features/onnx",slug:"/features/onnx/about",permalink:"/SynapseML/docs/0.9.4/features/onnx/about",draft:!1,tags:[],version:"0.9.4",frontMatter:{title:"ONNX model inferencing on Spark",hide_title:!0,sidebar_label:"About",description:"Learn how to use the ONNX model transformer to run inference for an ONNX model on Spark."},sidebar:"version-0.9.4/docs",previous:{title:"Model Interpretation on Spark",permalink:"/SynapseML/docs/0.9.4/features/responsible_ai/Model Interpretation on Spark"},next:{title:"ONNX - Inference on Spark",permalink:"/SynapseML/docs/0.9.4/features/onnx/ONNX - Inference on Spark"}},s={},d=[{value:"ONNX",id:"onnx",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"onnx-model-inferencing-on-spark"},"ONNX model inferencing on Spark"),(0,o.kt)("h2",{id:"onnx"},"ONNX"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://onnx.ai/"},"ONNX")," is an open format to represent both deep learning and traditional machine learning models. With ONNX, AI developers can more easily move models between state-of-the-art tools and choose the combination that is best for them."),(0,o.kt)("p",null,"SynapseML now includes a Spark transformer to bring a trained ONNX model to Apache Spark, so you can run inference on your data with Spark's large-scale data processing power."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"com.microsoft.azure.synapse.ml.onnx.ONNXModel")," object and use ",(0,o.kt)("inlineCode",{parentName:"p"},"setModelLocation")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"setModelPayload")," to load the ONNX model."),(0,o.kt)("p",{parentName:"li"},"For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val onnx = new ONNXModel().setModelLocation("/path/to/model.onnx")\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ONNX visualization tool (for example, ",(0,o.kt)("a",{parentName:"p",href:"https://netron.app/"},"Netron"),") to inspect the ONNX model's input and output nodes."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/ONNXModelInputsOutputs.png",alt:"Screenshot that illustrates an ONNX model's input and output nodes"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the parameters properly to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ONNXModel")," object."),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"com.microsoft.azure.synapse.ml.onnx.ONNXModel")," class provides a set of parameters to control the behavior of the inference."),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"feedDict"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Map the ONNX model's expected input node names to the input DataFrame's column names. Make sure the input DataFrame's column schema matches with the corresponding input's shape of the ONNX model. For example, an image classification model may have an input node of shape ",(0,o.kt)("inlineCode",{parentName:"td"},"[1, 3, 224, 224]")," with type Float. It is assumed that the first dimension (1) is the batch size. Then the input DataFrame's corresponding column's type should be ",(0,o.kt)("inlineCode",{parentName:"td"},"ArrayType(ArrayType(ArrayType(FloatType)))"),"."),(0,o.kt)("td",{parentName:"tr",align:"left"},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"fetchDict"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Map the output DataFrame's column names to the ONNX model's output node names."),(0,o.kt)("td",{parentName:"tr",align:"left"},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"miniBatcher"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specify the MiniBatcher to use."),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"FixedMiniBatchTransformer")," with batch size 10")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"softMaxDict"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A map between output DataFrame columns, where the value column will be computed from taking the softmax of the key column. If the 'rawPrediction' column contains logits outputs, then one can set softMaxDict to ",(0,o.kt)("inlineCode",{parentName:"td"},'Map("rawPrediction" -> "probability")')," to obtain the probability outputs."),(0,o.kt)("td",{parentName:"tr",align:"left"},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"argMaxDict"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A map between output DataFrame columns, where the value column will be computed from taking the argmax of the key column. This can be used to convert probability or logits output to the predicted label."),(0,o.kt)("td",{parentName:"tr",align:"left"},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"deviceType"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specify a device type the model inference runs on. Supported types are: CPU or CUDA. If not specified, auto detection will be used."),(0,o.kt)("td",{parentName:"tr",align:"left"},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimizationLevel"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specify the ",(0,o.kt)("a",{parentName:"td",href:"https://onnxruntime.ai/docs/resources/graph-optimizations.html#graph-optimization-levels"},"optimization level")," for the ONNX graph optimizations. Supported values are: ",(0,o.kt)("inlineCode",{parentName:"td"},"NO_OPT"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"BASIC_OPT"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"EXTENDED_OPT"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"ALL_OPT"),"."),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ALL_OPT")))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Call ",(0,o.kt)("inlineCode",{parentName:"p"},"transform")," method to run inference on the input DataFrame."))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../responsible_ai/Interpretability%20-%20Image%20Explainers"},"Interpretability - Image Explainers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../ONNX%20-%20Inference%20on%20Spark"},"ONNX - Inference on Spark"))))}u.isMDXComponent=!0}}]);