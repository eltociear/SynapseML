"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[42642],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,l(l({ref:n},i),{},{components:t})):r.createElement(f,l({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294),a=t(86010),o="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(83117),a=t(67294),o=t(86010),l=t(72389),s=t(67392),u=t(7094),c=t(12466),i="tabList__CuJ",m="tabItem_LNqP";function p(e){var n,t,l=e.lazy,p=e.block,d=e.defaultValue,f=e.values,v=e.groupId,b=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,s.l)(y,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(n=null!=d?d:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),k=T.tabGroupChoices,O=T.setTabGroupChoices,E=(0,a.useState)(w),I=E[0],_=E[1],x=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=k[v];null!=S&&S!==I&&y.some((function(e){return e.value===S}))&&_(S)}var N=function(e){var n=e.currentTarget,t=x.indexOf(n),r=y[t].value;r!==I&&(C(n),_(r),null!=v&&O(v,String(r)))},Z=function(e){var n,t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;t=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var o,l=x.indexOf(e.currentTarget)-1;t=null!=(o=x[l])?o:x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",i)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},y.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return x.push(e)},onKeyDown:Z,onClick:N},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function d(e){var n=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},31989:function(e,n,t){var r=t(67294),a=t(52263);n.Z=function(e){var n=e.className,t=e.py,o=e.scala,l=e.csharp,s=e.sourceLink,u=(0,a.Z)().siteConfig.customFields.version,c="https://mmlspark.blob.core.windows.net/docs/"+u+"/pyspark/"+t,i="https://mmlspark.blob.core.windows.net/docs/"+u+"/scala/"+o,m="https://mmlspark.blob.core.windows.net/docs/"+u+"/dotnet/"+l;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:c},n)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:i},n)),r.createElement("td",null,r.createElement("strong",null,".NET API: "),r.createElement("a",{href:m},n)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:s},n)))))}},83579:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),l=t(65488),s=t(85162),u=t(31989),c=["components"],i=[{value:"ImageTransformer",id:"imagetransformer",level:2},{value:"ImageSetAugmenter",id:"imagesetaugmenter",level:2}],m={toc:i};function p(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"imagetransformer"},"ImageTransformer"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.opencv import *\nfrom pyspark.sql.types import FloatType\n\n# images = (spark.read.format("image")\n#         .option("dropInvalid", True)\n#         .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/explainers/images/david-lusvardi-dWcUncxocQY-unsplash.jpg"))\n\nit = (ImageTransformer(inputCol="image", outputCol="features")\n    .resize(224, True)\n    .centerCrop(height=224, width=224)\n    .normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225], color_scale_factor = 1/255)\n    .setTensorElementType(FloatType()))\n\n# it.transform(images).show()\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.opencv._\n\nval images = (spark.read.format("image")\n    .option("dropInvalid", true)\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/explainers/images/david-lusvardi-dWcUncxocQY-unsplash.jpg"))\n\nval it = (new ImageTransformer()\n      .setOutputCol("out")\n      .resize(height = 15, width = 10))\n\nit.transform(images).show()\n')))),(0,o.kt)(u.Z,{className:"ImageTransformer",py:"synapse.ml.opencv.html#module-synapse.ml.opencv.ImageTransformer",scala:"com/microsoft/azure/synapse/ml/opencv/ImageTransformer.html",csharp:"classSynapse_1_1ML_1_1Opencv_1_1ImageTransformer.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/opencv/src/main/scala/com/microsoft/azure/synapse/ml/opencv/ImageTransformer.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"imagesetaugmenter"},"ImageSetAugmenter"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.opencv import *\n\n# images = (spark.read.format("image")\n#         .option("dropInvalid", True)\n#         .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/explainers/images/david-lusvardi-dWcUncxocQY-unsplash.jpg"))\n\nisa = (ImageSetAugmenter()\n    .setInputCol("image")\n    .setOutputCol("augmented")\n    .setFlipLeftRight(True)\n    .setFlipUpDown(True))\n\n# it.transform(images).show()\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.opencv._\n\nval images = (spark.read.format("image")\n    .option("dropInvalid", true)\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/explainers/images/david-lusvardi-dWcUncxocQY-unsplash.jpg"))\n\nval isa = (new ImageSetAugmenter()\n    .setInputCol("image")\n    .setOutputCol("augmented")\n    .setFlipLeftRight(true)\n    .setFlipUpDown(true))\n\nisa.transform(images).show()\n')))),(0,o.kt)(u.Z,{className:"ImageSetAugmenter",py:"synapse.ml.opencv.html#module-synapse.ml.opencv.ImageSetAugmenter",scala:"com/microsoft/azure/synapse/ml/opencv/ImageSetAugmenter.html",csharp:"classSynapse_1_1ML_1_1Opencv_1_1ImageSetAugmenter.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/opencv/src/main/scala/com/microsoft/azure/synapse/ml/opencv/ImageSetAugmenter.scala",mdxType:"DocTable"}))}p.isMDXComponent=!0;var d=["components"],f={title:"Transformers - OpenCV",sidebar_label:"OpenCV",hide_title:!0},v="OpenCV",b={unversionedId:"documentation/transformers/transformers_opencv",id:"version-0.11.1/documentation/transformers/transformers_opencv",title:"Transformers - OpenCV",description:"",source:"@site/versioned_docs/version-0.11.1/documentation/transformers/transformers_opencv.md",sourceDirName:"documentation/transformers",slug:"/documentation/transformers/transformers_opencv",permalink:"/SynapseML/docs/0.11.1/documentation/transformers/transformers_opencv",draft:!1,tags:[],version:"0.11.1",frontMatter:{title:"Transformers - OpenCV",sidebar_label:"OpenCV",hide_title:!0},sidebar:"docs",previous:{title:"Core",permalink:"/SynapseML/docs/0.11.1/documentation/transformers/transformers_core"},next:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/0.11.1/documentation/transformers/transformers_vw"}},g={},y=[].concat(i),h={toc:y};function w(e){var n=e.components,t=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opencv"},"OpenCV"),(0,o.kt)(p,{mdxType:"OpenCV"}))}w.isMDXComponent=!0}}]);