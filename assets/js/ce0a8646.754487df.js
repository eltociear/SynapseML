"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[64972],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64056:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var a=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],r={title:"Build System Commands",hide_title:!0,sidebar_label:"Build System Commands",description:"SynapseML Development Setup"},s="SynapseML Development Setup",p={unversionedId:"reference/developer-readme",id:"version-0.9.5/reference/developer-readme",title:"Build System Commands",description:"SynapseML Development Setup",source:"@site/versioned_docs/version-0.9.5/reference/developer-readme.md",sourceDirName:"reference",slug:"/reference/developer-readme",permalink:"/SynapseML/docs/0.9.5/reference/developer-readme",draft:!1,tags:[],version:"0.9.5",frontMatter:{title:"Build System Commands",hide_title:!0,sidebar_label:"Build System Commands",description:"SynapseML Development Setup"},sidebar:"docs",previous:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/0.9.5/documentation/estimators/estimators_vw"},next:{title:"Contributing Guide",permalink:"/SynapseML/docs/0.9.5/reference/contributing_guide"}},d={},c=[{value:"Scala build commands",id:"scala-build-commands",level:2},{value:"<code>compile</code>, <code>test:compile</code> and <code>it:compile</code>",id:"compile-testcompile-and-itcompile",level:3},{value:"<code>test</code>",id:"test",level:3},{value:"<code>scalastyle</code>",id:"scalastyle",level:3},{value:"<code>unidoc</code>",id:"unidoc",level:3},{value:"Python Commands",id:"python-commands",level:2},{value:"<code>createCondaEnv</code>",id:"createcondaenv",level:3},{value:"<code>cleanCondaEnv</code>",id:"cleancondaenv",level:3},{value:"<code>packagePython</code>",id:"packagepython",level:3},{value:"<code>generatePythonDoc</code>",id:"generatepythondoc",level:3},{value:"<code>installPipPackage</code>",id:"installpippackage",level:3},{value:"<code>testPython</code>",id:"testpython",level:3},{value:"Environment + Publishing Commands",id:"environment--publishing-commands",level:2},{value:"<code>getDatasets</code>",id:"getdatasets",level:3},{value:"<code>setup</code>",id:"setup",level:3},{value:"<code>package</code>",id:"package",level:3},{value:"<code>publishBlob</code>",id:"publishblob",level:3},{value:"<code>publishLocal</code>",id:"publishlocal",level:3},{value:"<code>publishDocs</code>",id:"publishdocs",level:3},{value:"<code>publishSigned</code>",id:"publishsigned",level:3},{value:"<code>sonatypeRelease</code>",id:"sonatyperelease",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"synapseml-development-setup"},"SynapseML Development Setup"),(0,l.kt)("p",null,"1) ",(0,l.kt)("a",{parentName:"p",href:"https://www.scala-sbt.org/1.x/docs/Setup.html"},"Install SBT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- Make sure to download JDK 11 if you don't have it\n")),(0,l.kt)("p",null,"3) Fork the repository on github"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- This is required if you would like to make PRs. If you choose the fork option, replace the clone link below with that of your fork.\n")),(0,l.kt)("p",null,"2) Git Clone your fork, or the repo directly"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- `git clone https://github.com/Microsoft/SynapseML.git`\n- NOTE: If you would like to contribute to synapseml regularly, add your fork as a remote named ``origin`` and Microsoft/SynapseML as a remote named ``upstream``\n")),(0,l.kt)("p",null,"3) Run sbt to compile and grab datasets"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- `cd synapseml`\n- `sbt setup`\n")),(0,l.kt)("p",null,"4) ",(0,l.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download"},"Install IntelliJ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- Install Scala plugins during install\n")),(0,l.kt)("p",null,"5) Configure IntelliJ"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- **OPEN** the synapseml directory\n- If the project does not automatically import,click on `build.sbt` and import project\n")),(0,l.kt)("h1",{id:"publishing-and-using-build-secrets"},"Publishing and Using Build Secrets"),(0,l.kt)("p",null,"To use secrets in the build, you must be part of the synapsemlkeyvault\nand Azure subscription. If you're MSFT internal and would like to be\nadded, reach out to ",(0,l.kt)("inlineCode",{parentName:"p"},"synapseml-support@microsoft.com")),(0,l.kt)("h1",{id:"sbt-command-guide"},"SBT Command Guide"),(0,l.kt)("h2",{id:"scala-build-commands"},"Scala build commands"),(0,l.kt)("h3",{id:"compile-testcompile-and-itcompile"},(0,l.kt)("inlineCode",{parentName:"h3"},"compile"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"test:compile")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"it:compile")),(0,l.kt)("p",null,"Compiles the main, test, and integration test classes respectively"),(0,l.kt)("h3",{id:"test"},(0,l.kt)("inlineCode",{parentName:"h3"},"test")),(0,l.kt)("p",null,"Runs all synapsemltests"),(0,l.kt)("h3",{id:"scalastyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"scalastyle")),(0,l.kt)("p",null,"Runs scalastyle check"),(0,l.kt)("h3",{id:"unidoc"},(0,l.kt)("inlineCode",{parentName:"h3"},"unidoc")),(0,l.kt)("p",null,"Generates documentation for scala sources"),(0,l.kt)("h2",{id:"python-commands"},"Python Commands"),(0,l.kt)("h3",{id:"createcondaenv"},(0,l.kt)("inlineCode",{parentName:"h3"},"createCondaEnv")),(0,l.kt)("p",null,"Creates a conda environment ",(0,l.kt)("inlineCode",{parentName:"p"},"synapseml")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"environment.yaml")," if it doesn't already exist.\nThis env is used for python testing. ",(0,l.kt)("strong",{parentName:"p"},"Activate this env before using python build commands.")),(0,l.kt)("h3",{id:"cleancondaenv"},(0,l.kt)("inlineCode",{parentName:"h3"},"cleanCondaEnv")),(0,l.kt)("p",null,"Removes ",(0,l.kt)("inlineCode",{parentName:"p"},"synapseml")," conda env"),(0,l.kt)("h3",{id:"packagepython"},(0,l.kt)("inlineCode",{parentName:"h3"},"packagePython")),(0,l.kt)("p",null,"Compiles scala, runs python generation scripts, and creates a wheel"),(0,l.kt)("h3",{id:"generatepythondoc"},(0,l.kt)("inlineCode",{parentName:"h3"},"generatePythonDoc")),(0,l.kt)("p",null,"Generates documentation for generated python code"),(0,l.kt)("h3",{id:"installpippackage"},(0,l.kt)("inlineCode",{parentName:"h3"},"installPipPackage")),(0,l.kt)("p",null,"Installs generated python wheel into existing env"),(0,l.kt)("h3",{id:"testpython"},(0,l.kt)("inlineCode",{parentName:"h3"},"testPython")),(0,l.kt)("p",null,"Generates and runs python tests"),(0,l.kt)("h2",{id:"environment--publishing-commands"},"Environment + Publishing Commands"),(0,l.kt)("h3",{id:"getdatasets"},(0,l.kt)("inlineCode",{parentName:"h3"},"getDatasets")),(0,l.kt)("p",null,"Downloads all datasets used in tests to target folder"),(0,l.kt)("h3",{id:"setup"},(0,l.kt)("inlineCode",{parentName:"h3"},"setup")),(0,l.kt)("p",null,"Combination of ",(0,l.kt)("inlineCode",{parentName:"p"},"compile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"test:compile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"it:compile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"getDatasets")),(0,l.kt)("h3",{id:"package"},(0,l.kt)("inlineCode",{parentName:"h3"},"package")),(0,l.kt)("p",null,"Packages the library into a jar"),(0,l.kt)("h3",{id:"publishblob"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishBlob")),(0,l.kt)("p",null,"Publishes Jar to SynapseML's Azure blob-based Maven repo. (Requires Keys)"),(0,l.kt)("h3",{id:"publishlocal"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishLocal")),(0,l.kt)("p",null,"Publishes library to the local Maven repo"),(0,l.kt)("h3",{id:"publishdocs"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishDocs")),(0,l.kt)("p",null,"Publishes scala and python doc to SynapseML's Azure storage account. (Requires Keys)"),(0,l.kt)("h3",{id:"publishsigned"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishSigned")),(0,l.kt)("p",null,"Publishes the library to Sonatype staging repo"),(0,l.kt)("h3",{id:"sonatyperelease"},(0,l.kt)("inlineCode",{parentName:"h3"},"sonatypeRelease")),(0,l.kt)("p",null,"Promotes the published Sonatype artifact"))}m.isMDXComponent=!0}}]);