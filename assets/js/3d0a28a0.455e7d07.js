"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[30064],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,v=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return n?a.createElement(v,i(i({ref:t},m),{},{components:n})):a.createElement(v,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),r=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),u=n(12466),m="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,i=e.lazy,p=e.block,d=e.defaultValue,v=e.values,f=e.groupId,y=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),T=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(T.length>0)throw new Error('Docusaurus error: Duplicate values "'+T.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,s.U)(),C=E.tabGroupChoices,S=E.setTabGroupChoices,w=(0,r.useState)(h),k=w[0],O=w[1],N=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=C[f];null!=D&&D!==k&&g.some((function(e){return e.value===D}))&&O(D)}var M=function(e){var t=e.currentTarget,n=N.indexOf(t),a=g[n].value;a!==k&&(A(t),O(a),null!=f&&S(f,String(a)))},_=function(e){var t,n=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":var a,r=N.indexOf(e.currentTarget)+1;n=null!=(a=N[r])?a:N[0];break;case"ArrowLeft":var o,i=N.indexOf(e.currentTarget)-1;n=null!=(o=N[i])?o:N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},y)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return N.push(e)},onKeyDown:_,onClick:M},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":k===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},31989:function(e,t,n){var a=n(67294),r=n(52263);t.Z=function(e){var t=e.className,n=e.py,o=e.scala,i=e.csharp,l=e.sourceLink,s=(0,r.Z)().siteConfig.customFields.version,u="https://mmlspark.blob.core.windows.net/docs/"+s+"/pyspark/"+n,m="https://mmlspark.blob.core.windows.net/docs/"+s+"/scala/"+o,c="https://mmlspark.blob.core.windows.net/docs/"+s+"/dotnet/"+i;return a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("strong",null,"Python API: "),a.createElement("a",{href:u},t)),a.createElement("td",null,a.createElement("strong",null,"Scala API: "),a.createElement("a",{href:m},t)),a.createElement("td",null,a.createElement("strong",null,".NET API: "),a.createElement("a",{href:c},t)),a.createElement("td",null,a.createElement("strong",null,"Source: "),a.createElement("a",{href:l},t)))))}},33304:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return g}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(65488),l=n(85162),s=n(31989),u=["components"],m=[{value:"FitMultivariateAnomaly",id:"fitmultivariateanomaly",level:2}],c={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"fitmultivariateanomaly"},"FitMultivariateAnomaly"),(0,o.kt)(i.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\nanomalyKey = os.environ.get("ANOMALY_API_KEY", getSecret("anomaly-api-key"))\nstartTime = "2021-01-01T00:00:00Z"\nendTime = "2021-01-03T01:59:00Z"\ntimestampColumn = "timestamp"\ninputColumns = ["feature0", "feature1", "feature2"]\ncontainerName = "madtest"\nintermediateSaveDir = "intermediateData"\nconnectionString = os.environ.get("MADTEST_CONNECTION_STRING", getSecret("madtest-connection-string"))\n\nfitMultivariateAnomaly = (FitMultivariateAnomaly()\n    .setSubscriptionKey(anomalyKey)\n    .setLocation("westus2")\n    .setOutputCol("result")\n    .setStartTime(startTime)\n    .setEndTime(endTime)\n    .setContainerName(containerName)\n    .setIntermediateSaveDir(intermediateSaveDir)\n    .setTimestampCol(timestampColumn)\n    .setInputCols(inputColumns)\n    .setSlidingWindow(200)\n    .setConnectionString(connectionString))\n\n# uncomment below for fitting your own dataframe\n# model = fitMultivariateAnomaly.fit(df)\n# fitMultivariateAnomaly.cleanUpIntermediateData()\n'))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.cognitive._\n\nval startTime: String = "2021-01-01T00:00:00Z"\nval endTime: String = "2021-01-02T12:00:00Z"\nval timestampColumn: String = "timestamp"\nval inputColumns: Array[String] = Array("feature0", "feature1", "feature2")\nval containerName: String = "madtest"\nval intermediateSaveDir: String = "intermediateData"\nval anomalyKey = sys.env.getOrElse("ANOMALY_API_KEY", None)\nval connectionString = sys.env.getOrElse("MADTEST_CONNECTION_STRING", None)\n\nval fitMultivariateAnomaly = (new FitMultivariateAnomaly()\n    .setSubscriptionKey(anomalyKey)\n    .setLocation("westus2")\n    .setOutputCol("result")\n    .setStartTime(startTime)\n    .setEndTime(endTime)\n    .setContainerName(containerName)\n    .setIntermediateSaveDir(intermediateSaveDir)\n    .setTimestampCol(timestampColumn)\n    .setInputCols(inputColumns)\n    .setSlidingWindow(200)\n    .setConnectionString(connectionString))\n\nval df = (spark.read.format("csv")\n      .option("header", True)\n      .load("wasbs://datasets@mmlspark.blob.core.windows.net/MAD/mad_example.csv"))\n\nval model = fitMultivariateAnomaly.fit(df)\n\nval result = (model\n      .setStartTime(startTime)\n      .setEndTime(endTime)\n      .setOutputCol("result")\n      .setTimestampCol(timestampColumn)\n      .setInputCols(inputColumns)\n      .transform(df))\n\nresult.show()\n\nfitMultivariateAnomaly.cleanUpIntermediateData()\nmodel.cleanUpIntermediateData()\n')))),(0,o.kt)(s.Z,{className:"FitMultivariateAnomaly",py:"synapse.ml.cognitive.html#module-synapse.ml.cognitive.FitMultivariateAnomaly",scala:"com/microsoft/azure/synapse/ml/cognitive/FitMultivariateAnomaly.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/cognitive/src/main/scala/com/microsoft/azure/synapse/ml/cognitive/MultivariateAnomalyDetection.scala",mdxType:"DocTable"}))}p.isMDXComponent=!0;var d=["components"],v={title:"Estimators - Cognitive",sidebar_label:"Cognitive",hide_title:!0},f=void 0,y={unversionedId:"documentation/estimators/estimators_cognitive",id:"version-0.9.5/documentation/estimators/estimators_cognitive",title:"Estimators - Cognitive",description:"",source:"@site/versioned_docs/version-0.9.5/documentation/estimators/estimators_cognitive.md",sourceDirName:"documentation/estimators",slug:"/documentation/estimators/estimators_cognitive",permalink:"/SynapseML/docs/0.9.5/documentation/estimators/estimators_cognitive",draft:!1,tags:[],version:"0.9.5",frontMatter:{title:"Estimators - Cognitive",sidebar_label:"Cognitive",hide_title:!0},sidebar:"docs",previous:{title:"Deep Learning",permalink:"/SynapseML/docs/0.9.5/documentation/transformers/transformers_deep_learning"},next:{title:"Core",permalink:"/SynapseML/docs/0.9.5/documentation/estimators/estimators_core"}},b={},g=[].concat(m),T={toc:g};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"MAD"}))}h.isMDXComponent=!0}}]);