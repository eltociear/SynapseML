"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[30128],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294),a=t(86010),o="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(83117),a=t(67294),o=t(86010),l=t(72389),u=t(67392),s=t(7094),i=t(12466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,l=e.lazy,m=e.block,d=e.defaultValue,f=e.values,b=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,u.l)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===d?d:null!=(n=null!=d?d:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:y[0].props.value;if(null!==_&&!h.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,s.U)(),N=O.tabGroupChoices,E=O.setTabGroupChoices,w=(0,a.useState)(_),k=w[0],T=w[1],x=[],M=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var D=N[b];null!=D&&D!==k&&h.some((function(e){return e.value===D}))&&T(D)}var P=function(e){var n=e.currentTarget,t=x.indexOf(n),r=h[t].value;r!==k&&(M(n),T(r),null!=b&&E(b,String(r)))},L=function(e){var n,t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;t=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var o,l=x.indexOf(e.currentTarget)-1;t=null!=(o=x[l])?o:x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},h.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:function(e){return x.push(e)},onKeyDown:L,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":k===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}function d(e){var n=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},31989:function(e,n,t){var r=t(67294),a=t(52263);n.Z=function(e){var n=e.className,t=e.py,o=e.scala,l=e.csharp,u=e.sourceLink,s=(0,a.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+s+"/pyspark/"+t,c="https://mmlspark.blob.core.windows.net/docs/"+s+"/scala/"+o,p="https://mmlspark.blob.core.windows.net/docs/"+s+"/dotnet/"+l;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:i},n)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:c},n)),r.createElement("td",null,r.createElement("strong",null,".NET API: "),r.createElement("a",{href:p},n)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:u},n)))))}},50374:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return b},default:function(){return _},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return h}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),l=t(65488),u=t(85162),s=t(31989),i=["components"],c=[{value:"ONNXModel",id:"onnxmodel",level:2}],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"onnxmodel"},"ONNXModel"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from synapse.ml.onnx import ONNXModel\n\nmodel_path = "PUT_YOUR_MODEL_PATH"\nonnx_ml = (ONNXModel()\n            .setModelLocation(model_path)\n            .setFeedDict({"float_input": "features"})\n            .setFetchDict({"prediction": "output_label", "rawProbability": "output_probability"}))\n'))),(0,o.kt)(u.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.onnx._\n\nval model_path = "PUT_YOUR_MODEL_PATH"\nval onnx_ml = (new ONNXModel()\n                  .setModelLocation(model_path)\n                  .setFeedDict(Map("float_input" -> "features"))\n                  .setFetchDict(Map("prediction" -> "output_label", "rawProbability" -> "output_probability")))\n')))),(0,o.kt)(s.Z,{className:"ONNXModel",py:"synapse.ml.onnx.html#module-synapse.ml.onnx.ONNXModel",scala:"com/microsoft/azure/synapse/ml/onnx/ONNXModel.html",csharp:"classSynapse_1_1ML_1_1Onnx_1_1ONNXModel.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/deep-learning/src/main/scala/com/microsoft/azure/synapse/ml/onnx/ONNXModel.scala",mdxType:"DocTable"}))}m.isMDXComponent=!0;var d=["components"],f={title:"Deep Learning",sidebar_label:"Deep Learning"},b=void 0,v={unversionedId:"documentation/transformers/transformers_deep_learning",id:"version-0.10.0/documentation/transformers/transformers_deep_learning",title:"Deep Learning",description:"",source:"@site/versioned_docs/version-0.10.0/documentation/transformers/transformers_deep_learning.md",sourceDirName:"documentation/transformers",slug:"/documentation/transformers/transformers_deep_learning",permalink:"/SynapseML/docs/0.10.0/documentation/transformers/transformers_deep_learning",draft:!1,tags:[],version:"0.10.0",frontMatter:{title:"Deep Learning",sidebar_label:"Deep Learning"},sidebar:"docs",previous:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/0.10.0/documentation/transformers/transformers_vw"},next:{title:"Cognitive",permalink:"/SynapseML/docs/0.10.0/documentation/estimators/estimators_cognitive"}},y={},h=[].concat(c),g={toc:h};function _(e){var n=e.components,t=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(m,{mdxType:"ONNXModel"}))}_.isMDXComponent=!0}}]);