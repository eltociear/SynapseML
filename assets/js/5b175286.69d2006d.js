"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[67331],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],r={title:"Development Setup and Building From Source",hide_title:!0,sidebar_label:"Development Setup",description:"SynapseML Development Setup"},p="SynapseML Development Setup",s={unversionedId:"reference/developer-readme",id:"version-0.11.1/reference/developer-readme",title:"Development Setup and Building From Source",description:"SynapseML Development Setup",source:"@site/versioned_docs/version-0.11.1/reference/developer-readme.md",sourceDirName:"reference",slug:"/reference/developer-readme",permalink:"/SynapseML/docs/0.11.1/reference/developer-readme",draft:!1,tags:[],version:"0.11.1",frontMatter:{title:"Development Setup and Building From Source",hide_title:!0,sidebar_label:"Development Setup",description:"SynapseML Development Setup"},sidebar:"docs",previous:{title:"SynapseML Autologging",permalink:"/SynapseML/docs/0.11.1/mlflow/autologging"},next:{title:"Contributing Guide",permalink:"/SynapseML/docs/0.11.1/reference/contributing_guide"}},d={},c=[{value:"Scala build commands",id:"scala-build-commands",level:2},{value:"<code>compile</code>, <code>test:compile</code> and <code>it:compile</code>",id:"compile-testcompile-and-itcompile",level:3},{value:"<code>test</code>",id:"test",level:3},{value:"<code>scalastyle</code>",id:"scalastyle",level:3},{value:"<code>unidoc</code>",id:"unidoc",level:3},{value:"Python Commands",id:"python-commands",level:2},{value:"<code>createCondaEnv</code>",id:"createcondaenv",level:3},{value:"<code>cleanCondaEnv</code>",id:"cleancondaenv",level:3},{value:"<code>packagePython</code>",id:"packagepython",level:3},{value:"<code>generatePythonDoc</code>",id:"generatepythondoc",level:3},{value:"<code>installPipPackage</code>",id:"installpippackage",level:3},{value:"<code>testPython</code>",id:"testpython",level:3},{value:"Environment + Publishing Commands",id:"environment--publishing-commands",level:2},{value:"<code>getDatasets</code>",id:"getdatasets",level:3},{value:"<code>setup</code>",id:"setup",level:3},{value:"<code>package</code>",id:"package",level:3},{value:"<code>publishBlob</code>",id:"publishblob",level:3},{value:"<code>publishLocal</code>",id:"publishlocal",level:3},{value:"<code>publishDocs</code>",id:"publishdocs",level:3},{value:"<code>publishSigned</code>",id:"publishsigned",level:3},{value:"<code>sonatypeRelease</code>",id:"sonatyperelease",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"synapseml-development-setup"},"SynapseML Development Setup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html"},"Install JDK 11"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You may need an Oracle login to download."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.scala-sbt.org/1.x/docs/Setup.html"},"Install SBT")),(0,l.kt)("li",{parentName:"ol"},"Fork the repository on GitHub",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"See how to here: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"Fork a repo - GitHub Docs")))),(0,l.kt)("li",{parentName:"ol"},"Clone your fork",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/<your GitHub handle>/SynapseML.git")),(0,l.kt)("li",{parentName:"ul"},"This command will automatically add your fork as the default remote, called ",(0,l.kt)("inlineCode",{parentName:"li"},"origin")))),(0,l.kt)("li",{parentName:"ol"},"Add another Git Remote to track the original SynapseML repo. It's recommended to call it ",(0,l.kt)("inlineCode",{parentName:"li"},"upstream"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git remote add upstream https://github.com/microsoft/SynapseML.git")),(0,l.kt)("li",{parentName:"ul"},"See more about Git remotes here: ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes"},"Git - Working with remotes")))),(0,l.kt)("li",{parentName:"ol"},"Go to the directory where you cloned the repo (for instance, ",(0,l.kt)("inlineCode",{parentName:"li"},"SynapseML"),") with ",(0,l.kt)("inlineCode",{parentName:"li"},"cd SynapseML")),(0,l.kt)("li",{parentName:"ol"},"Run sbt to compile and grab datasets",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sbt setup")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/download"},"Install IntelliJ")),(0,l.kt)("li",{parentName:"ol"},"Configure IntelliJ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/1347-scala"},"Scala plugin")," during initialization"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"OPEN")," the SynapseML directory from IntelliJ"),(0,l.kt)("li",{parentName:"ul"},"If the project doesn't automatically import, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"build.sbt")," and import the project"))),(0,l.kt)("li",{parentName:"ol"},"Prepare your Python Environment",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")),(0,l.kt)("li",{parentName:"ul"},"Note: if you want to run conda commands from IntelliJ, you may need to select the option to add conda to PATH during installation."),(0,l.kt)("li",{parentName:"ul"},"Activate the ",(0,l.kt)("inlineCode",{parentName:"li"},"synapseml")," conda environment by running ",(0,l.kt)("inlineCode",{parentName:"li"},"conda env create -f environment.yml")," from the ",(0,l.kt)("inlineCode",{parentName:"li"},"synapseml")," directory.",(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you're using a Windows machine, remove\n",(0,l.kt)("inlineCode",{parentName:"p"},"horovod")," requirement in the environment.yml file, because horovod installation only\nsupports Linux or macOS. Horovod is used only for namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"synapse.ml.dl"),"."))))),(0,l.kt)("li",{parentName:"ol"},"Install pre-commit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This repository uses the ",(0,l.kt)("a",{parentName:"li",href:"https://pre-commit.com/index.html"},"pre-commit")," tool to manage git hooks and enforce linting/coding styles."),(0,l.kt)("li",{parentName:"ul"},"The hooks are configured in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/SynapseML/blob/master/environment.yml"},".pre-commit-config.yaml"),"."),(0,l.kt)("li",{parentName:"ul"},"To use the hooks, run the following commands:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pre-commit\npre-commit install\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Now ",(0,l.kt)("inlineCode",{parentName:"li"},"pre-commit")," should automatically run on every ",(0,l.kt)("inlineCode",{parentName:"li"},"git commit")," operation to find AND fix linting issues.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE"),(0,l.kt)("p",{parentName:"blockquote"},"If you will be regularly contributing to the SynapseML repo, you'll want to keep your fork synced with the\nupstream repository. Please read ",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork"},"this GitHub doc"),"\nto know more and learn techniques about how to do it.")),(0,l.kt)("h1",{id:"publishing-and-using-build-secrets"},"Publishing and Using Build Secrets"),(0,l.kt)("p",null,"To use secrets in the build, you must be part of the synapsemlkeyvault\nand Azure subscription. If you're MSFT internal and would like to be\nadded, reach out to ",(0,l.kt)("inlineCode",{parentName:"p"},"synapseml-support@microsoft.com")),(0,l.kt)("h1",{id:"sbt-command-guide"},"SBT Command Guide"),(0,l.kt)("h2",{id:"scala-build-commands"},"Scala build commands"),(0,l.kt)("h3",{id:"compile-testcompile-and-itcompile"},(0,l.kt)("inlineCode",{parentName:"h3"},"compile"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"test:compile")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"it:compile")),(0,l.kt)("p",null,"Compiles the main, test, and integration test classes respectively"),(0,l.kt)("h3",{id:"test"},(0,l.kt)("inlineCode",{parentName:"h3"},"test")),(0,l.kt)("p",null,"Runs all synapsemltests"),(0,l.kt)("h3",{id:"scalastyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"scalastyle")),(0,l.kt)("p",null,"Runs scalastyle check"),(0,l.kt)("h3",{id:"unidoc"},(0,l.kt)("inlineCode",{parentName:"h3"},"unidoc")),(0,l.kt)("p",null,"Generates documentation for scala sources"),(0,l.kt)("h2",{id:"python-commands"},"Python Commands"),(0,l.kt)("h3",{id:"createcondaenv"},(0,l.kt)("inlineCode",{parentName:"h3"},"createCondaEnv")),(0,l.kt)("p",null,"Creates a conda environment ",(0,l.kt)("inlineCode",{parentName:"p"},"synapseml")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"environment.yml")," if it doesn't already exist.\nThis env is used for python testing.\n",(0,l.kt)("strong",{parentName:"p"},"Activate this env before using python build commands.")),(0,l.kt)("h3",{id:"cleancondaenv"},(0,l.kt)("inlineCode",{parentName:"h3"},"cleanCondaEnv")),(0,l.kt)("p",null,"Removes ",(0,l.kt)("inlineCode",{parentName:"p"},"synapseml")," conda env"),(0,l.kt)("h3",{id:"packagepython"},(0,l.kt)("inlineCode",{parentName:"h3"},"packagePython")),(0,l.kt)("p",null,"Compiles scala, runs python generation scripts, and creates a wheel"),(0,l.kt)("h3",{id:"generatepythondoc"},(0,l.kt)("inlineCode",{parentName:"h3"},"generatePythonDoc")),(0,l.kt)("p",null,"Generates documentation for generated python code"),(0,l.kt)("h3",{id:"installpippackage"},(0,l.kt)("inlineCode",{parentName:"h3"},"installPipPackage")),(0,l.kt)("p",null,"Installs generated python wheel into existing env"),(0,l.kt)("h3",{id:"testpython"},(0,l.kt)("inlineCode",{parentName:"h3"},"testPython")),(0,l.kt)("p",null,"Generates and runs python tests"),(0,l.kt)("h2",{id:"environment--publishing-commands"},"Environment + Publishing Commands"),(0,l.kt)("h3",{id:"getdatasets"},(0,l.kt)("inlineCode",{parentName:"h3"},"getDatasets")),(0,l.kt)("p",null,"Downloads all datasets used in tests to target folder"),(0,l.kt)("h3",{id:"setup"},(0,l.kt)("inlineCode",{parentName:"h3"},"setup")),(0,l.kt)("p",null,"Combination of ",(0,l.kt)("inlineCode",{parentName:"p"},"compile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"test:compile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"it:compile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"getDatasets")),(0,l.kt)("h3",{id:"package"},(0,l.kt)("inlineCode",{parentName:"h3"},"package")),(0,l.kt)("p",null,"Packages the library into a jar"),(0,l.kt)("h3",{id:"publishblob"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishBlob")),(0,l.kt)("p",null,"Publishes Jar to SynapseML's Azure blob-based Maven repo. (Requires Keys)"),(0,l.kt)("h3",{id:"publishlocal"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishLocal")),(0,l.kt)("p",null,"Publishes library to the local Maven repo"),(0,l.kt)("h3",{id:"publishdocs"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishDocs")),(0,l.kt)("p",null,"Publishes scala and python doc to SynapseML's Azure storage account. (Requires Keys)"),(0,l.kt)("h3",{id:"publishsigned"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishSigned")),(0,l.kt)("p",null,"Publishes the library to Sonatype staging repo"),(0,l.kt)("h3",{id:"sonatyperelease"},(0,l.kt)("inlineCode",{parentName:"h3"},"sonatypeRelease")),(0,l.kt)("p",null,"Promotes the published Sonatype artifact"))}u.isMDXComponent=!0}}]);