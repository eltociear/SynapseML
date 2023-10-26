"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[8078],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,s(s({ref:n},p),{},{components:t})):r.createElement(h,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3529:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),s=["components"],i={title:"Quickstart - Understand and Search Forms",hide_title:!0,status:"stable"},l="Tutorial: Create a custom search engine and question-answering system",c={unversionedId:"Explore Algorithms/OpenAI/Quickstart - Understand and Search Forms",id:"version-0.11.3/Explore Algorithms/OpenAI/Quickstart - Understand and Search Forms",title:"Quickstart - Understand and Search Forms",description:"In this tutorial, learn how to index and query large data loaded from a Spark cluster. You will set up a Jupyter Notebook that performs the following actions:",source:"@site/versioned_docs/version-0.11.3/Explore Algorithms/OpenAI/Quickstart - Understand and Search Forms.md",sourceDirName:"Explore Algorithms/OpenAI",slug:"/Explore Algorithms/OpenAI/Quickstart - Understand and Search Forms",permalink:"/SynapseML/docs/0.11.3/Explore Algorithms/OpenAI/Quickstart - Understand and Search Forms",draft:!1,tags:[],version:"0.11.3",frontMatter:{title:"Quickstart - Understand and Search Forms",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - OpenAI Embedding",permalink:"/SynapseML/docs/0.11.3/Explore Algorithms/OpenAI/Quickstart - OpenAI Embedding"},next:{title:"Getting Started",permalink:"/SynapseML/docs/0.11.3/Explore Algorithms/Deep Learning/Getting Started"}},p={},u=[{value:"1 - Set up dependencies",id:"1---set-up-dependencies",level:2},{value:"2 - Load data into Spark",id:"2---load-data-into-spark",level:2},{value:"3 - Apply form recognition",id:"3---apply-form-recognition",level:2},{value:"4 - Simplify form recognition output",id:"4---simplify-form-recognition-output",level:2},{value:"5 - Add translations",id:"5---add-translations",level:2},{value:"6 - Translate products to emojis with OpenAI \ud83e\udd2f",id:"6---translate-products-to-emojis-with-openai-",level:2},{value:"7 - Infer vendor address continent with OpenAI",id:"7---infer-vendor-address-continent-with-openai",level:2},{value:"8 - Create an Azure Search Index for the Forms",id:"8---create-an-azure-search-index-for-the-forms",level:2},{value:"9 - Try out a search query",id:"9---try-out-a-search-query",level:2},{value:"10 - Build a chatbot that can use Azure Search as a tool \ud83e\udde0\ud83d\udd27",id:"10---build-a-chatbot-that-can-use-azure-search-as-a-tool-",level:2},{value:"11 - Asking our chatbot a question",id:"11---asking-our-chatbot-a-question",level:2},{value:"12 - A quick double check",id:"12---a-quick-double-check",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tutorial-create-a-custom-search-engine-and-question-answering-system"},"Tutorial: Create a custom search engine and question-answering system"),(0,a.kt)("p",null,"In this tutorial, learn how to index and query large data loaded from a Spark cluster. You will set up a Jupyter Notebook that performs the following actions:"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Load various forms (invoices) into a data frame in an Apache Spark session"),(0,a.kt)("li",{parentName:"ul"},"Analyze them to determine their features"),(0,a.kt)("li",{parentName:"ul"},"Assemble the resulting output into a tabular data structure"),(0,a.kt)("li",{parentName:"ul"},"Write the output to a search index hosted in Azure Cognitive Search"),(0,a.kt)("li",{parentName:"ul"},"Explore and query over the content you created"))),(0,a.kt)("h2",{id:"1---set-up-dependencies"},"1 - Set up dependencies"),(0,a.kt)("p",null,"We start by importing packages and connecting to the Azure resources used in this workflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"%pip install openai\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.core.platform import find_secret\n\ncognitive_key = find_secret(\n    "cognitive-api-key"\n)  # Replace the call to find_secret with your key as a python string. e.g. cognitive_key="27snaiw..."\ncognitive_location = "eastus"\n\ntranslator_key = find_secret(\n    "translator-key"\n)  # Replace the call to find_secret with your key as a python string.\ntranslator_location = "eastus"\n\nsearch_key = find_secret(\n    "azure-search-key"\n)  # Replace the call to find_secret with your key as a python string.\nsearch_service = "mmlspark-azure-search"\nsearch_index = "form-demo-index-5"\n\nopenai_key = find_secret(\n    "openai-api-key"\n)  # Replace the call to find_secret with your key as a python string.\nopenai_service_name = "synapseml-openai"\nopenai_deployment_name = "gpt-35-turbo"\nopenai_url = f"https://{openai_service_name}.openai.azure.com/"\n')),(0,a.kt)("h2",{id:"2---load-data-into-spark"},"2 - Load data into Spark"),(0,a.kt)("p",null,"This code loads a few external files from an Azure storage account that's used for demo purposes. The files are various invoices, and they're read into a data frame."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import udf\nfrom pyspark.sql.types import StringType\n\n\ndef blob_to_url(blob):\n    [prefix, postfix] = blob.split("@")\n    container = prefix.split("/")[-1]\n    split_postfix = postfix.split("/")\n    account = split_postfix[0]\n    filepath = "/".join(split_postfix[1:])\n    return "https://{}/{}/{}".format(account, container, filepath)\n\n\ndf2 = (\n    spark.read.format("binaryFile")\n    .load("wasbs://ignite2021@mmlsparkdemo.blob.core.windows.net/form_subset/*")\n    .select("path")\n    .limit(10)\n    .select(udf(blob_to_url, StringType())("path").alias("url"))\n    .cache()\n)\n\ndisplay(df2)\n')),(0,a.kt)("img",{src:"https://mmlsparkdemo.blob.core.windows.net/ignite2021/form_svgs/Invoice11205.svg",width:"40%"}),(0,a.kt)("h2",{id:"3---apply-form-recognition"},"3 - Apply form recognition"),(0,a.kt)("p",null,"This code loads the AnalyzeInvoices transformer and passes a reference to the data frame containing the invoices. It calls the pre-built invoice model of Azure Forms Analyzer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import AnalyzeInvoices\n\nanalyzed_df = (\n    AnalyzeInvoices()\n    .setSubscriptionKey(cognitive_key)\n    .setLocation(cognitive_location)\n    .setImageUrlCol("url")\n    .setOutputCol("invoices")\n    .setErrorCol("errors")\n    .setConcurrency(5)\n    .transform(df2)\n    .cache()\n)\n\ndisplay(analyzed_df)\n')),(0,a.kt)("h2",{id:"4---simplify-form-recognition-output"},"4 - Simplify form recognition output"),(0,a.kt)("p",null,"This code uses the ",(0,a.kt)("a",{parentName:"p",href:"https://mmlspark.blob.core.windows.net/docs/0.10.0/pyspark/synapse.ml.cognitive.html#module-synapse.ml.cognitive.FormOntologyTransformer"},"FormOntologyLearner"),", a transformer that analyzes the output of Form Recognizer transformers and infers a tabular data structure. The output of AnalyzeInvoices is dynamic and varies based on the features detected in your content."),(0,a.kt)("p",null,"FormOntologyLearner extends the utility of the AnalyzeInvoices transformer by looking for patterns that can be used to create a tabular data structure. Organizing the output into multiple columns and rows makes for simpler downstream analysis."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import FormOntologyLearner\n\norganized_df = (\n    FormOntologyLearner()\n    .setInputCol("invoices")\n    .setOutputCol("extracted")\n    .fit(analyzed_df)\n    .transform(analyzed_df)\n    .select("url", "extracted.*")\n    .cache()\n)\n\ndisplay(organized_df)\n')),(0,a.kt)("p",null,"With our nice tabular dataframe, we can flatten the nested tables found in the forms with some SparkSQL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import explode, col\n\nitemized_df = (\n    organized_df.select("*", explode(col("Items")).alias("Item"))\n    .drop("Items")\n    .select("Item.*", "*")\n    .drop("Item")\n)\n\ndisplay(itemized_df)\n')),(0,a.kt)("h2",{id:"5---add-translations"},"5 - Add translations"),(0,a.kt)("p",null,'This code loads Translate, a transformer that calls the Azure Translator service in Cognitive Services. The original text, which is in English in the "Description" column, is machine-translated into various languages. All of the output is consolidated into "output.translations" array.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import Translate\n\ntranslated_df = (\n    Translate()\n    .setSubscriptionKey(translator_key)\n    .setLocation(translator_location)\n    .setTextCol("Description")\n    .setErrorCol("TranslationError")\n    .setOutputCol("output")\n    .setToLanguage(["zh-Hans", "fr", "ru", "cy"])\n    .setConcurrency(5)\n    .transform(itemized_df)\n    .withColumn("Translations", col("output.translations")[0])\n    .drop("output", "TranslationError")\n    .cache()\n)\n\ndisplay(translated_df)\n')),(0,a.kt)("h2",{id:"6---translate-products-to-emojis-with-openai-"},"6 - Translate products to emojis with OpenAI \ud83e\udd2f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive.openai import OpenAIPrompt\nfrom pyspark.sql.functions import trim, split\n\nemoji_template = """ \n  Your job is to translate item names into emoji. Do not add anything but the emoji and end the translation with a comma\n  \n  Two Ducks: \ud83e\udd86\ud83e\udd86,\n  Light Bulb: \ud83d\udca1,\n  Three Peaches: \ud83c\udf51\ud83c\udf51\ud83c\udf51,\n  Two kitchen stoves: \u2668\ufe0f\u2668\ufe0f,\n  A red car: \ud83d\ude97,\n  A person and a cat: \ud83e\uddcd\ud83d\udc08,\n  A {Description}: """\n\nprompter = (\n    OpenAIPrompt()\n    .setSubscriptionKey(openai_key)\n    .setDeploymentName(openai_deployment_name)\n    .setUrl(openai_url)\n    .setMaxTokens(5)\n    .setPromptTemplate(emoji_template)\n    .setErrorCol("error")\n    .setOutputCol("Emoji")\n)\n\nemoji_df = (\n    prompter.transform(translated_df)\n    .withColumn("Emoji", trim(split(col("Emoji"), ",").getItem(0)))\n    .drop("error", "prompt")\n    .cache()\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'display(emoji_df.select("Description", "Emoji"))\n')),(0,a.kt)("h2",{id:"7---infer-vendor-address-continent-with-openai"},"7 - Infer vendor address continent with OpenAI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'continent_template = """\nWhich continent does the following address belong to? \n\nPick one value from Europe, Australia, North America, South America, Asia, Africa, Antarctica. \n\nDont respond with anything but one of the above. If you don\'t know the answer or cannot figure it out from the text, return None. End your answer with a comma.\n\nAddress: "6693 Ryan Rd, North Whales",\nContinent: Europe,\nAddress: "6693 Ryan Rd",\nContinent: None,\nAddress: "{VendorAddress}",\nContinent:"""\n\ncontinent_df = (\n    prompter.setOutputCol("Continent")\n    .setPromptTemplate(continent_template)\n    .transform(emoji_df)\n    .withColumn("Continent", trim(split(col("Continent"), ",").getItem(0)))\n    .drop("error", "prompt")\n    .cache()\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'display(continent_df.select("VendorAddress", "Continent"))\n')),(0,a.kt)("h2",{id:"8---create-an-azure-search-index-for-the-forms"},"8 - Create an Azure Search Index for the Forms"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\nfrom pyspark.sql.functions import monotonically_increasing_id, lit\n\n(\n    continent_df.withColumn("DocID", monotonically_increasing_id().cast("string"))\n    .withColumn("SearchAction", lit("upload"))\n    .writeToAzureSearch(\n        subscriptionKey=search_key,\n        actionCol="SearchAction",\n        serviceName=search_service,\n        indexName=search_index,\n        keyCol="DocID",\n    )\n)\n')),(0,a.kt)("h2",{id:"9---try-out-a-search-query"},"9 - Try out a search query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nsearch_url = "https://{}.search.windows.net/indexes/{}/docs/search?api-version=2019-05-06".format(\n    search_service, search_index\n)\nrequests.post(\n    search_url, json={"search": "door"}, headers={"api-key": search_key}\n).json()\n')),(0,a.kt)("h2",{id:"10---build-a-chatbot-that-can-use-azure-search-as-a-tool-"},"10 - Build a chatbot that can use Azure Search as a tool \ud83e\udde0\ud83d\udd27"),(0,a.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/notebooks/chatbot_flow_2.svg",width:"40%"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import json\nimport openai\n\nopenai.api_type = "azure"\nopenai.api_base = openai_url\nopenai.api_key = openai_key\nopenai.api_version = "2023-03-15-preview"\n\nchat_context_prompt = f"""\nYou are a chatbot designed to answer questions with the help of a search engine that has the following information:\n\n{continent_df.columns}\n\nIf you dont know the answer to a question say "I dont know". Do not lie or hallucinate information. Be brief. If you need to use the search engine to solve the please output a json in the form of {{"query": "example_query"}}\n"""\n\n\ndef search_query_prompt(question):\n    return f"""\nGiven the search engine above, what would you search for to answer the following question?\n\nQuestion: "{question}"\n\nPlease output a json in the form of {{"query": "example_query"}}\n"""\n\n\ndef search_result_prompt(query):\n    search_results = requests.post(\n        search_url, json={"search": query}, headers={"api-key": search_key}\n    ).json()\n    return f"""\n\nYou previously ran a search for "{query}" which returned the following results:\n\n{search_results}\n\nYou should use the results to help you answer questions. If you dont know the answer to a question say "I dont know". Do not lie or hallucinate information. Be Brief and mention which query you used to solve the problem. \n"""\n\n\ndef prompt_gpt(messages):\n    response = openai.ChatCompletion.create(\n        engine=openai_deployment_name, messages=messages, max_tokens=None, top_p=0.95\n    )\n    return response["choices"][0]["message"]["content"]\n\n\ndef custom_chatbot(question):\n    while True:\n        try:\n            query = json.loads(\n                prompt_gpt(\n                    [\n                        {"role": "system", "content": chat_context_prompt},\n                        {"role": "user", "content": search_query_prompt(question)},\n                    ]\n                )\n            )["query"]\n\n            return prompt_gpt(\n                [\n                    {"role": "system", "content": chat_context_prompt},\n                    {"role": "system", "content": search_result_prompt(query)},\n                    {"role": "user", "content": question},\n                ]\n            )\n        except Exception as e:\n            raise e\n')),(0,a.kt)("h2",{id:"11---asking-our-chatbot-a-question"},"11 - Asking our chatbot a question"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'custom_chatbot("What did Luke Diaz buy?")\n')),(0,a.kt)("h2",{id:"12---a-quick-double-check"},"12 - A quick double check"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'display(\n    continent_df.where(col("CustomerName") == "Luke Diaz")\n    .select("Description")\n    .distinct()\n)\n')))}m.isMDXComponent=!0}}]);