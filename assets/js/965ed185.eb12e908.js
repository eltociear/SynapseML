"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[852],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(3117),r=n(7294),i=n(6010),l=n(2466),o=n(6550),u=n(1980),s=n(7392),c=n(12);function m(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function v(e){var t,n,a,i,l=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,m=p(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:m})})),y=v[0],b=v[1],g=f({queryString:u,groupId:s}),h=g[0],E=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),T=w[0],k=w[1],S=function(){var e=null!=h?h:T;return d({value:e,tabValues:m})?e:null}();return(0,r.useLayoutEffect)((function(){S&&b(S)}),[S]),{selectedValue:y,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),E(e),k(e)}),[E,k,m]),tabValues:m}}var y=n(2389),b="tabList__CuJ",g="tabItem_LNqP";function h(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],m=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==o&&(m(t),u(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,l=c.indexOf(e.currentTarget)-1;n=null!=(i=c[l])?i:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:p},l,{className:(0,i.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function E(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(E,(0,a.Z)({},e,t)))}function T(e){var t=(0,y.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},1989:function(e,t,n){var a=n(7294),r=n(2263);t.Z=function(e){var t=e.className,n=e.py,i=e.scala,l=e.csharp,o=e.sourceLink,u=(0,r.Z)().siteConfig.customFields.version,s="https://mmlspark.blob.core.windows.net/docs/"+u+"/pyspark/"+n,c="https://mmlspark.blob.core.windows.net/docs/"+u+"/scala/"+i,m="https://mmlspark.blob.core.windows.net/docs/"+u+"/dotnet/"+l;return a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("strong",null,"Python API: "),a.createElement("a",{href:s},t)),a.createElement("td",null,a.createElement("strong",null,"Scala API: "),a.createElement("a",{href:c},t)),a.createElement("td",null,a.createElement("strong",null,".NET API: "),a.createElement("a",{href:m},t)),a.createElement("td",null,a.createElement("strong",null,"Source: "),a.createElement("a",{href:o},t)))))}},9009:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return E},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return g}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=n(4866),o=n(5162),u=n(1989),s=["components"],c=[{value:"SimpleFitMultivariateAnomaly",id:"simplefitmultivariateanomaly",level:2}],m={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"simplefitmultivariateanomaly"},"SimpleFitMultivariateAnomaly"),(0,i.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\nanomalyKey = os.environ.get("ANOMALY_API_KEY", getSecret("anomaly-api-key"))\nstartTime = "2021-01-01T00:00:00Z"\nendTime = "2021-01-03T01:59:00Z"\ntimestampColumn = "timestamp"\ninputColumns = ["feature0", "feature1", "feature2"]\nintermediateSaveDir = "wasbs://madtest@anomalydetectiontest.blob.core.windows.net/intermediateData"\n\nsimpleFitMultivariateAnomaly = (SimpleFitMultivariateAnomaly()\n    .setSubscriptionKey(anomalyKey)\n    .setLocation("westus2")\n    .setOutputCol("result")\n    .setStartTime(startTime)\n    .setEndTime(endTime)\n    .setIntermediateSaveDir(intermediateSaveDir)\n    .setTimestampCol(timestampColumn)\n    .setInputCols(inputColumns)\n    .setSlidingWindow(50))\n\n# uncomment below for fitting your own dataframe\n# model = simpleFitMultivariateAnomaly.fit(df)\n# simpleFitMultivariateAnomaly.cleanUpIntermediateData()\n'))),(0,i.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.cognitive.anomaly.FitMultivariateAnomaly\n\nval startTime: String = "2021-01-01T00:00:00Z"\nval endTime: String = "2021-01-02T12:00:00Z"\nval timestampColumn: String = "timestamp"\nval inputColumns: Array[String] = Array("feature0", "feature1", "feature2")\nval intermediateSaveDir: String = "wasbs://madtest@anomalydetectiontest.blob.core.windows.net/intermediateData"\nval anomalyKey = sys.env.getOrElse("ANOMALY_API_KEY", None)\n\nval simpleFitMultivariateAnomaly = (new SimpleFitMultivariateAnomaly()\n    .setSubscriptionKey(anomalyKey)\n    .setLocation("westus2")\n    .setOutputCol("result")\n    .setStartTime(startTime)\n    .setEndTime(endTime)\n    .setIntermediateSaveDir(intermediateSaveDir)\n    .setTimestampCol(timestampColumn)\n    .setInputCols(inputColumns)\n    .setSlidingWindow(50))\n\nval df = (spark.read.format("csv")\n      .option("header", True)\n      .load("wasbs://datasets@mmlspark.blob.core.windows.net/MAD/mad_example.csv"))\n\nval model = simpleFitMultivariateAnomaly.fit(df)\n\nval result = (model\n      .setStartTime(startTime)\n      .setEndTime(endTime)\n      .setOutputCol("result")\n      .setTimestampCol(timestampColumn)\n      .setInputCols(inputColumns)\n      .transform(df))\n\nresult.show()\n\nsimpleFitMultivariateAnomaly.cleanUpIntermediateData()\nmodel.cleanUpIntermediateData()\n')))),(0,i.kt)(u.Z,{className:"SimpleFitMultivariateAnomaly",py:"synapse.ml.cognitive.html#module-synapse.ml.cognitive.SimpleFitMultivariateAnomaly",scala:"com/microsoft/azure/synapse/ml/cognitive/SimpleFitMultivariateAnomaly.html",csharp:"classSynapse_1_1ML_1_1Cognitive_1_1SimpleFitMultivariateAnomaly.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/cognitive/src/main/scala/com/microsoft/azure/synapse/ml/cognitive/MultivariateAnomalyDetection.scala",mdxType:"DocTable"}))}p.isMDXComponent=!0;var d=["components"],f={title:"Estimators - Cognitive",sidebar_label:"Cognitive",hide_title:!0},v=void 0,y={unversionedId:"Quick Examples/estimators/estimators_cognitive",id:"version-0.11.4/Quick Examples/estimators/estimators_cognitive",title:"Estimators - Cognitive",description:"",source:"@site/versioned_docs/version-0.11.4/Quick Examples/estimators/estimators_cognitive.md",sourceDirName:"Quick Examples/estimators",slug:"/Quick Examples/estimators/estimators_cognitive",permalink:"/SynapseML/docs/Quick Examples/estimators/estimators_cognitive",draft:!1,tags:[],version:"0.11.4",frontMatter:{title:"Estimators - Cognitive",sidebar_label:"Cognitive",hide_title:!0}},b={},g=[].concat(c),h={toc:g};function E(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(p,{mdxType:"MAD"}))}E.isMDXComponent=!0}}]);