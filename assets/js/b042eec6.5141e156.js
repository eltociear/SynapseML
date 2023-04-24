"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[23148],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return t?n.createElement(k,o(o({ref:a},c),{},{components:t})):n.createElement(k,o({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76697:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var n=t(83117),r=t(80102),s=(t(67294),t(3905)),o=["components"],l={title:"Installation",description:"Getting started with SynapseML"},p=void 0,i={unversionedId:"getting_started/installation",id:"version-0.10.0/getting_started/installation",title:"Installation",description:"Getting started with SynapseML",source:"@site/versioned_docs/version-0.10.0/getting_started/installation.md",sourceDirName:"getting_started",slug:"/getting_started/installation",permalink:"/SynapseML/docs/0.10.0/getting_started/installation",draft:!1,tags:[],version:"0.10.0",frontMatter:{title:"Installation",description:"Getting started with SynapseML"},sidebar:"docs",previous:{title:"Introduction",permalink:"/SynapseML/docs/0.10.0/about"},next:{title:"First Example",permalink:"/SynapseML/docs/0.10.0/getting_started/first_example"}},c={},u=[{value:"Synapse",id:"synapse",level:2},{value:"Python",id:"python",level:2},{value:"SBT",id:"sbt",level:2},{value:"Spark package",id:"spark-package",level:2},{value:"Databricks",id:"databricks",level:2},{value:"Apache Livy and HDInsight",id:"apache-livy-and-hdinsight",level:2},{value:"Docker",id:"docker",level:2},{value:"Building from source",id:"building-from-source",level:2},{value:"R (Beta)",id:"r-beta",level:2},{value:"C# (.NET)",id:"c-net",level:2}],d={toc:u};function m(e){var a=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"synapse"},"Synapse"),(0,s.kt)("p",null,"SynapseML can be conveniently installed on Synapse:"),(0,s.kt)("p",null,"For Spark3.1 pool:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'%%configure -f\n{\n  "name": "synapseml",\n  "conf": {\n      "spark.jars.packages": "com.microsoft.azure:synapseml_2.12:0.9.5-13-d1b51517-SNAPSHOT",\n      "spark.jars.repositories": "https://mmlspark.azureedge.net/maven",\n      "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12",\n      "spark.yarn.user.classpath.first": "true"\n  }\n}\n')),(0,s.kt)("p",null,"For Spark3.2 pool:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'%%configure -f\n{\n  "name": "synapseml",\n  "conf": {\n      "spark.jars.packages": "com.microsoft.azure:synapseml_2.12:0.10.0",\n      "spark.jars.repositories": "https://mmlspark.azureedge.net/maven",\n      "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12,com.fasterxml.jackson.core:jackson-databind",\n      "spark.yarn.user.classpath.first": "true"\n  }\n}\n')),(0,s.kt)("h2",{id:"python"},"Python"),(0,s.kt)("p",null,"To try out SynapseML on a Python (or Conda) installation, you can get Spark\ninstalled via pip with ",(0,s.kt)("inlineCode",{parentName:"p"},"pip install pyspark"),".  You can then use ",(0,s.kt)("inlineCode",{parentName:"p"},"pyspark")," as in\nthe above example, or from python:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import pyspark\nspark = pyspark.sql.SparkSession.builder.appName("MyApp") \\\n            # Use 0.10.0 version for Spark3.2 and 0.9.5-13-d1b51517-SNAPSHOT version for Spark3.1\n            .config("spark.jars.packages", "com.microsoft.azure:synapseml_2.12:0.10.0") \\\n            .config("spark.jars.repositories", "https://mmlspark.azureedge.net/maven") \\\n            .getOrCreate()\nimport synapse.ml\n')),(0,s.kt)("h2",{id:"sbt"},"SBT"),(0,s.kt)("p",null,"If you're building a Spark application in Scala, add the following lines to\nyour ",(0,s.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'resolvers += "SynapseML" at "https://mmlspark.azureedge.net/maven"\n// Use 0.10.0 version for Spark3.2 and 0.9.5-13-d1b51517-SNAPSHOT version for Spark3.1\nlibraryDependencies += "com.microsoft.azure" %% "synapseml_2.12" % "0.10.0"\n\n')),(0,s.kt)("h2",{id:"spark-package"},"Spark package"),(0,s.kt)("p",null,"SynapseML can be conveniently installed on existing Spark clusters via the\n",(0,s.kt)("inlineCode",{parentName:"p"},"--packages")," option, examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Please use 0.10.0 version for Spark3.2 and 0.9.5-13-d1b51517-SNAPSHOT version for Spark3.1\nspark-shell --packages com.microsoft.azure:synapseml_2.12:0.10.0\npyspark --packages com.microsoft.azure:synapseml_2.12:0.10.0\nspark-submit --packages com.microsoft.azure:synapseml_2.12:0.10.0 MyApp.jar\n")),(0,s.kt)("p",null,"A similar technique can be used in other Spark contexts too. For example, you can use SynapseML\nin ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/aztk/"},"AZTK")," by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/aztk/wiki/PySpark-on-Azure-with-AZTK#optional-set-up-mmlspark"},"adding it to the\n",(0,s.kt)("inlineCode",{parentName:"a"},".aztk/spark-defaults.conf"),"\nfile"),"."),(0,s.kt)("h2",{id:"databricks"},"Databricks"),(0,s.kt)("p",null,"To install SynapseML on the ",(0,s.kt)("a",{parentName:"p",href:"http://community.cloud.databricks.com"},"Databricks\ncloud"),", create a new ",(0,s.kt)("a",{parentName:"p",href:"https://docs.databricks.com/user-guide/libraries.html#libraries-from-maven-pypi-or-spark-packages"},"library from Maven\ncoordinates"),"\nin your workspace."),(0,s.kt)("p",null,"For the coordinates use: ",(0,s.kt)("inlineCode",{parentName:"p"},"com.microsoft.azure:synapseml_2.12:0.10.0")," for Spark3.2 Cluster and\n",(0,s.kt)("inlineCode",{parentName:"p"},"com.microsoft.azure:synapseml_2.12:0.9.5-13-d1b51517-SNAPSHOT")," for Spark3.1 Cluster;\nAdd the resolver: ",(0,s.kt)("inlineCode",{parentName:"p"},"https://mmlspark.azureedge.net/maven"),". Ensure this library is\nattached to your target cluster(s)."),(0,s.kt)("p",null,"Finally, ensure that your Spark cluster has at least Spark 3.12 and Scala 2.12."),(0,s.kt)("p",null,"You can use SynapseML in both your Scala and PySpark notebooks. To get started with our example notebooks, import the following databricks archive:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"https://mmlspark.blob.core.windows.net/dbcs/SynapseMLExamplesv0.10.0.dbc")),(0,s.kt)("h2",{id:"apache-livy-and-hdinsight"},"Apache Livy and HDInsight"),(0,s.kt)("p",null,"To install SynapseML from within a Jupyter notebook served by Apache Livy, the following configure magic can be used. You'll need to start a new session after this configure cell is executed."),(0,s.kt)("p",null,"Excluding certain packages from the library may be necessary due to current issues with Livy 0.5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'%%configure -f\n{\n    "name": "synapseml",\n    "conf": {\n        # Please use 0.10.0 version for Spark3.2 and 0.9.5-13-d1b51517-SNAPSHOT version for Spark3.1\n        "spark.jars.packages": "com.microsoft.azure:synapseml_2.12:0.10.0",\n        "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12,com.fasterxml.jackson.core:jackson-databind"\n    }\n}\n')),(0,s.kt)("p",null,'In Azure Synapse, "spark.yarn.user.classpath.first" should be set to "true" to override the existing SynapseML packages'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'%%configure -f\n{\n    "name": "synapseml",\n    "conf": {\n        # Please use 0.10.0 version for Spark3.2 and 0.9.5-13-d1b51517-SNAPSHOT version for Spark3.1\n        "spark.jars.packages": "com.microsoft.azure:synapseml_2.12:0.10.0",\n        "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12,com.fasterxml.jackson.core:jackson-databind",\n        "spark.yarn.user.classpath.first": "true"\n    }\n}\n')),(0,s.kt)("h2",{id:"docker"},"Docker"),(0,s.kt)("p",null,"The easiest way to evaluate SynapseML is via our pre-built Docker container.  To\ndo so, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 8888:8888 -e ACCEPT_EULA=yes mcr.microsoft.com/mmlspark/release\n")),(0,s.kt)("p",null,"Navigate to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8888/"},"http://localhost:8888/")," in your web browser to run the sample\nnotebooks.  See the ",(0,s.kt)("a",{parentName:"p",href:"/SynapseML/docs/0.10.0/reference/docker"},"documentation")," for more on Docker use."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To read the EULA for using the docker image, run"),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 8888:8888 mcr.microsoft.com/mmlspark/release eula\n"))),(0,s.kt)("h2",{id:"building-from-source"},"Building from source"),(0,s.kt)("p",null,"SynapseML has recently transitioned to a new build infrastructure.\nFor detailed developer docs, see the ",(0,s.kt)("a",{parentName:"p",href:"/SynapseML/docs/0.10.0/reference/developer-readme"},"Developer Readme")),(0,s.kt)("p",null,"If you're an existing SynapseML developer, you'll need to reconfigure your\ndevelopment setup. We now support platform independent development and\nbetter integrate with intellij and SBT.\nIf you encounter issues, reach out to our support email!"),(0,s.kt)("h2",{id:"r-beta"},"R (Beta)"),(0,s.kt)("p",null,"To try out SynapseML using the R autogenerated wrappers, ",(0,s.kt)("a",{parentName:"p",href:"/SynapseML/docs/0.10.0/reference/R-setup"},"see our\ninstructions"),".  Note: This feature is still under development\nand some necessary custom wrappers may be missing."),(0,s.kt)("h2",{id:"c-net"},"C# (.NET)"),(0,s.kt)("p",null,"To try out SynapseML with .NET, follow the ",(0,s.kt)("a",{parentName:"p",href:"/SynapseML/docs/0.10.0/reference/dotnet-setup"},".NET Installation Guide"),".\nNote: Some stages including AzureSearchWriter, DiagnosticInfo, UDPyF Param, ParamSpaceParam, BallTreeParam,\nConditionalBallTreeParam, LightGBMBooster Param are still under development and not exposed in .NET."))}m.isMDXComponent=!0}}]);