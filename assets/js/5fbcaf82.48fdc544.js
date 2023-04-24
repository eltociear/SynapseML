"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[97422],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18111:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),l=["components"],o={title:"Interpretability - PDP and ICE explainer",hide_title:!0,status:"stable",name:"Interpretability - PDP and ICE explainer"},s=void 0,p={unversionedId:"features/responsible_ai/Interpretability - PDP and ICE explainer",id:"version-0.11.0/features/responsible_ai/Interpretability - PDP and ICE explainer",title:"Interpretability - PDP and ICE explainer",description:"Partial Dependence (PDP) and Individual Conditional Expectation (ICE) plots",source:"@site/versioned_docs/version-0.11.0/features/responsible_ai/Interpretability - PDP and ICE explainer.md",sourceDirName:"features/responsible_ai",slug:"/features/responsible_ai/Interpretability - PDP and ICE explainer",permalink:"/SynapseML/docs/0.11.0/features/responsible_ai/Interpretability - PDP and ICE explainer",draft:!1,tags:[],version:"0.11.0",frontMatter:{title:"Interpretability - PDP and ICE explainer",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Interpretability - Image Explainers",permalink:"/SynapseML/docs/0.11.0/features/responsible_ai/Interpretability - Image Explainers"},next:{title:"Interpretability - Snow Leopard Detection",permalink:"/SynapseML/docs/0.11.0/features/responsible_ai/Interpretability - Snow Leopard Detection"}},d={},c=[{value:"Partial Dependence (PDP) and Individual Conditional Expectation (ICE) plots",id:"partial-dependence-pdp-and-individual-conditional-expectation-ice-plots",level:2},{value:"Read and prepare the dataset",id:"read-and-prepare-the-dataset",level:3},{value:"Fit the model and view the predictions",id:"fit-the-model-and-view-the-predictions",level:3},{value:"Partial Dependence Plots",id:"partial-dependence-plots",level:2},{value:"Set up the transformer for PDP",id:"set-up-the-transformer-for-pdp",level:3},{value:"Visualization",id:"visualization",level:3},{value:"Example 1: &quot;age&quot;",id:"example-1-age",level:4},{value:"Example 2: &quot;marital-status&quot;",id:"example-2-marital-status",level:4},{value:"Example 3: &quot;capital-gain&quot;",id:"example-3-capital-gain",level:4},{value:"Conclusions",id:"conclusions",level:3},{value:"Individual Conditional Expectation",id:"individual-conditional-expectation",level:2},{value:"Set up the transformer for ICE",id:"set-up-the-transformer-for-ice",level:3},{value:"Visualization",id:"visualization-1",level:3},{value:"Example 1: Numeric feature: &quot;age&quot;",id:"example-1-numeric-feature-age",level:4},{value:"Example 2: Categorical feature: &quot;occupation&quot;",id:"example-2-categorical-feature-occupation",level:4},{value:"Conclusions",id:"conclusions-1",level:3},{value:"PDP-based Feature Importance",id:"pdp-based-feature-importance",level:2},{value:"Set up the transformer for PDP-based Feature Importance",id:"set-up-the-transformer-for-pdp-based-feature-importance",level:3},{value:"Visualization",id:"visualization-2",level:3},{value:"Overall conclusions",id:"overall-conclusions",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"partial-dependence-pdp-and-individual-conditional-expectation-ice-plots"},"Partial Dependence (PDP) and Individual Conditional Expectation (ICE) plots"),(0,r.kt)("p",null,"Partial Dependence Plot (PDP) and Individual Condition Expectation (ICE) are interpretation methods which describe the average behavior of a classification or regression model. They are particularly useful when the model developer wants to understand generally how the model depends on individual feature values, overall model behavior and do debugging."),(0,r.kt)("p",null,"To practice responsible AI, it is crucial to understand which features drive your model's predictions. This knowledge can facilitate the creation of Transparency Notes, facilitate auditing and compliance, help satisfy regulatory requirements, and improve both transparency and accountability."),(0,r.kt)("p",null,"The goal of this notebook is to show how these methods work for a pretrained model."),(0,r.kt)("p",null,"In this example, we train a classification model with the Adult Census Income dataset. Then we treat the model as an opaque-box model and calculate the PDP and ICE plots for some selected categorical and numeric features. "),(0,r.kt)("p",null,"This dataset can be used to predict whether annual income exceeds $50,000/year or not based on demographic data from the 1994 U.S. Census. The dataset we're reading contains 32,561 rows and 14 columns/features."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://archive.ics.uci.edu/ml/datasets/Adult"},"More info on the dataset here")),(0,r.kt)("p",null,"We will train a classification model to predict >= 50K or < 50K based on our features."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Python dependencies:"),(0,r.kt)("p",null,"matplotlib==3.2.2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.ml import Pipeline\nfrom pyspark.ml.classification import GBTClassifier\nfrom pyspark.ml.feature import VectorAssembler, StringIndexer, OneHotEncoder\nimport pyspark.sql.functions as F\nfrom pyspark.ml.evaluation import BinaryClassificationEvaluator\nfrom synapse.ml.explainers import ICETransformer\nimport matplotlib.pyplot as plt\nfrom pyspark.sql import SparkSession\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nfrom synapse.ml.core.platform import *\n\nfrom synapse.ml.core.platform import materializing_display as display\n")),(0,r.kt)("h3",{id:"read-and-prepare-the-dataset"},"Read and prepare the dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet"\n)\ndisplay(df)\n')),(0,r.kt)("h3",{id:"fit-the-model-and-view-the-predictions"},"Fit the model and view the predictions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'categorical_features = [\n    "race",\n    "workclass",\n    "marital-status",\n    "education",\n    "occupation",\n    "relationship",\n    "native-country",\n    "sex",\n]\nnumeric_features = [\n    "age",\n    "education-num",\n    "capital-gain",\n    "capital-loss",\n    "hours-per-week",\n]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'string_indexer_outputs = [feature + "_idx" for feature in categorical_features]\none_hot_encoder_outputs = [feature + "_enc" for feature in categorical_features]\n\npipeline = Pipeline(\n    stages=[\n        StringIndexer()\n        .setInputCol("income")\n        .setOutputCol("label")\n        .setStringOrderType("alphabetAsc"),\n        StringIndexer()\n        .setInputCols(categorical_features)\n        .setOutputCols(string_indexer_outputs),\n        OneHotEncoder()\n        .setInputCols(string_indexer_outputs)\n        .setOutputCols(one_hot_encoder_outputs),\n        VectorAssembler(\n            inputCols=one_hot_encoder_outputs + numeric_features, outputCol="features"\n        ),\n        GBTClassifier(weightCol="fnlwgt", maxDepth=7, maxIter=100),\n    ]\n)\n\nmodel = pipeline.fit(df)\n')),(0,r.kt)("p",null,"Check that model makes sense and has reasonable output. For this, we will check the model performance by calculating the ROC-AUC score."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'data = model.transform(df)\ndisplay(data.select("income", "probability", "prediction"))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'eval_auc = BinaryClassificationEvaluator(\n    labelCol="label", rawPredictionCol="prediction"\n)\neval_auc.evaluate(data)\n')),(0,r.kt)("h2",{id:"partial-dependence-plots"},"Partial Dependence Plots"),(0,r.kt)("p",null,"Partial dependence plots (PDP) show the dependence between the target response and a set of input features of interest, marginalizing over the values of all other input features. It can show whether the relationship between the target response and the input feature is linear, smooth, monotonic, or more complex. This is relevant when you want to have an overall understanding of model behavior. E.g. Identifying specific age group has a favorable predictions vs other age groups."),(0,r.kt)("p",null,"If you want to learn more please check out the ",(0,r.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/partial_dependence.html#partial-dependence-plots"},"scikit-learn page on partial dependence plots"),"."),(0,r.kt)("h3",{id:"set-up-the-transformer-for-pdp"},"Set up the transformer for PDP"),(0,r.kt)("p",null,"To plot PDP we need to set up the instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ICETransformer")," first and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"average")," and then call the ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," function. "),(0,r.kt)("p",null,'For the setup we need to pass the pretrained model, specify the target column ("probability" in our case), and pass categorical and numeric feature names.'),(0,r.kt)("p",null,"Categorical and numeric features can be passed as a list of names. But we can specify parameters for the features by passing a list of dicts where each dict represents one feature. "),(0,r.kt)("p",null,"For the numeric features a dictionary can look like this:"),(0,r.kt)("p",null,'{"name": "capital-gain", "numSplits": 20, "rangeMin": 0.0, "rangeMax": 10000.0, "outputColName": "capital-gain_dependance"}'),(0,r.kt)("p",null,"Where the required key-value pair is ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," -  the name of the numeric feature. Next key-values pairs are optional: ",(0,r.kt)("inlineCode",{parentName:"p"},"numSplits")," - the number of splits for the value range for the numeric feature, ",(0,r.kt)("inlineCode",{parentName:"p"},"rangeMin")," - specifies the min value of the range for the numeric feature, ",(0,r.kt)("inlineCode",{parentName:"p"},"rangeMax")," - specifies the max value of the range for the numeric feature, ",(0,r.kt)("inlineCode",{parentName:"p"},"outputColName")," - the name for output column with explanations for the feature."),(0,r.kt)("p",null,"For the categorical features a dictionary can look like this:"),(0,r.kt)("p",null,'{"name": "marital-status", "numTopValues": 10, "outputColName": "marital-status_dependance"}'),(0,r.kt)("p",null,"Where the required key-value pair is ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," -  the name of the numeric feature. Next key-values pairs are optional: ",(0,r.kt)("inlineCode",{parentName:"p"},"numTopValues")," - the max number of top-occurring values to be included in the categorical feature, ",(0,r.kt)("inlineCode",{parentName:"p"},"outputColName")," - the name for output column with explanations for the feature."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pdp = ICETransformer(\n    model=model,\n    targetCol="probability",\n    kind="average",\n    targetClasses=[1],\n    categoricalFeatures=categorical_features,\n    numericFeatures=numeric_features,\n)\n')),(0,r.kt)("p",null,"PDP transformer returns a dataframe of 1 row * {number features to explain} columns. Each column contains a map between the feature's values and the model's average dependence for that feature value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"output_pdp = pdp.transform(df)\ndisplay(output_pdp)\n")),(0,r.kt)("h3",{id:"visualization"},"Visualization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Helper functions for visualization\n\n\ndef get_pandas_df_from_column(df, col_name):\n    keys_df = df.select(F.explode(F.map_keys(F.col(col_name)))).distinct()\n    keys = list(map(lambda row: row[0], keys_df.collect()))\n    key_cols = list(map(lambda f: F.col(col_name).getItem(f).alias(str(f)), keys))\n    final_cols = key_cols\n    pandas_df = df.select(final_cols).toPandas()\n    return pandas_df\n\n\ndef plot_dependence_for_categorical(df, col, col_int=True, figsize=(20, 5)):\n    dict_values = {}\n    col_names = list(df.columns)\n\n    for col_name in col_names:\n        dict_values[col_name] = df[col_name][0].toArray()[0]\n        marklist = sorted(\n            dict_values.items(), key=lambda x: int(x[0]) if col_int else x[0]\n        )\n        sortdict = dict(marklist)\n\n    fig = plt.figure(figsize=figsize)\n    plt.bar(sortdict.keys(), sortdict.values())\n\n    plt.xlabel(col, size=13)\n    plt.ylabel("Dependence")\n    plt.show()\n\n\ndef plot_dependence_for_numeric(df, col, col_int=True, figsize=(20, 5)):\n    dict_values = {}\n    col_names = list(df.columns)\n\n    for col_name in col_names:\n        dict_values[col_name] = df[col_name][0].toArray()[0]\n        marklist = sorted(\n            dict_values.items(), key=lambda x: int(x[0]) if col_int else x[0]\n        )\n        sortdict = dict(marklist)\n\n    fig = plt.figure(figsize=figsize)\n\n    plt.plot(list(sortdict.keys()), list(sortdict.values()))\n\n    plt.xlabel(col, size=13)\n    plt.ylabel("Dependence")\n    plt.ylim(0.0)\n    plt.show()\n')),(0,r.kt)("h4",{id:"example-1-age"},'Example 1: "age"'),(0,r.kt)("p",null,"We can observe non-linear dependency. The model predicts that income rapidly grows from 24-46 y.o. age, after 46 y.o. model predictions slightly drops and from 68 y.o. remains stable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'df_education_num = get_pandas_df_from_column(output_pdp, "age_dependence")\nplot_dependence_for_numeric(df_education_num, "age")\n')),(0,r.kt)("p",null,"Your results will look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/explainers/pdp_age.png",alt:"pdp_age"})),(0,r.kt)("h4",{id:"example-2-marital-status"},'Example 2: "marital-status"'),(0,r.kt)("p",null,'The model seems to treat "married-cv-spouse" as one category and tend to give a higher average prediction, and all others as a second category with the lower average prediction.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'df_occupation = get_pandas_df_from_column(output_pdp, "marital-status_dependence")\nplot_dependence_for_categorical(df_occupation, "marital-status", False, figsize=(30, 5))\n')),(0,r.kt)("p",null,"Your results will look like:\n",(0,r.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/explainers/pdp_marital-status.png",alt:"pdp_marital-status"})),(0,r.kt)("h4",{id:"example-3-capital-gain"},'Example 3: "capital-gain"'),(0,r.kt)("p",null,"In the first graph, we run PDP with default parameters. We can see that this representation is not super useful because it is not granular enough. By default the range of numeric features are calculated dynamically from the data."),(0,r.kt)("p",null,"In the second graph, we set rangeMin = 0 and rangeMax = 10000 to visualize more granular interpretations for the feature of interest. Now we can see more clearly how the model made decisions in a smaller region."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'df_education_num = get_pandas_df_from_column(output_pdp, "capital-gain_dependence")\nplot_dependence_for_numeric(df_education_num, "capital-gain_dependence")\n')),(0,r.kt)("p",null,"Your results will look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/explainers/pdp_capital-gain-first.png",alt:"pdp_capital-gain-first"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pdp_cap_gain = ICETransformer(\n    model=model,\n    targetCol="probability",\n    kind="average",\n    targetClasses=[1],\n    numericFeatures=[\n        {"name": "capital-gain", "numSplits": 20, "rangeMin": 0.0, "rangeMax": 10000.0}\n    ],\n    numSamples=50,\n)\noutput_pdp_cap_gain = pdp_cap_gain.transform(df)\ndf_education_num_gain = get_pandas_df_from_column(\n    output_pdp_cap_gain, "capital-gain_dependence"\n)\nplot_dependence_for_numeric(df_education_num_gain, "capital-gain_dependence")\n')),(0,r.kt)("p",null,"Your results will look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/explainers/pdp_capital-gain-second.png",alt:"pdp_capital-gain-second"})),(0,r.kt)("h3",{id:"conclusions"},"Conclusions"),(0,r.kt)("p",null,"PDP can be used to show how features influence model predictions on average and help modeler catch unexpected behavior from the model."),(0,r.kt)("h2",{id:"individual-conditional-expectation"},"Individual Conditional Expectation"),(0,r.kt)("p",null,"ICE plots display one line per instance that shows how the instance\u2019s prediction changes when a feature values change. Each line represents the predictions for one instance if we vary the feature of interest. This is relevant when you want to observe model prediction for instances individually in more details. "),(0,r.kt)("p",null,"If you want to learn more please check out the ",(0,r.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/partial_dependence.html#individual-conditional-expectation-ice-plot"},"scikit-learn page on ICE plots"),"."),(0,r.kt)("h3",{id:"set-up-the-transformer-for-ice"},"Set up the transformer for ICE"),(0,r.kt)("p",null,"To plot ICE we need to set up the instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ICETransformer")," first and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"individual")," and then call the ",(0,r.kt)("inlineCode",{parentName:"p"},"transform"),' function. For the setup we need to pass the pretrained model, specify the target column ("probability" in our case), and pass categorical and numeric feature names. For better visualization we set the number of samples to 50.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ice = ICETransformer(\n    model=model,\n    targetCol="probability",\n    targetClasses=[1],\n    categoricalFeatures=categorical_features,\n    numericFeatures=numeric_features,\n    numSamples=50,\n)\n\noutput = ice.transform(df)\n')),(0,r.kt)("h3",{id:"visualization-1"},"Visualization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Helper functions for visualization\nfrom math import pi\n\nfrom collections import defaultdict\n\n\ndef plot_ice_numeric(df, col, col_int=True, figsize=(20, 10)):\n    dict_values = defaultdict(list)\n    col_names = list(df.columns)\n    num_instances = df.shape[0]\n\n    instances_y = {}\n    i = 0\n\n    for col_name in col_names:\n        for i in range(num_instances):\n            dict_values[i].append(df[col_name][i].toArray()[0])\n\n    fig = plt.figure(figsize=figsize)\n    for i in range(num_instances):\n        plt.plot(col_names, dict_values[i], "k")\n\n    plt.xlabel(col, size=13)\n    plt.ylabel("Dependence")\n    plt.ylim(0.0)\n\n\ndef plot_ice_categorical(df, col, col_int=True, figsize=(20, 10)):\n    dict_values = defaultdict(list)\n    col_names = list(df.columns)\n    num_instances = df.shape[0]\n\n    angles = [n / float(df.shape[1]) * 2 * pi for n in range(df.shape[1])]\n    angles += angles[:1]\n\n    instances_y = {}\n    i = 0\n\n    for col_name in col_names:\n        for i in range(num_instances):\n            dict_values[i].append(df[col_name][i].toArray()[0])\n\n    fig = plt.figure(figsize=figsize)\n    ax = plt.subplot(111, polar=True)\n    plt.xticks(angles[:-1], col_names)\n\n    for i in range(num_instances):\n        values = dict_values[i]\n        values += values[:1]\n        ax.plot(angles, values, "k")\n        ax.fill(angles, values, "teal", alpha=0.1)\n\n    plt.xlabel(col, size=13)\n    plt.show()\n\n\ndef overlay_ice_with_pdp(df_ice, df_pdp, col, col_int=True, figsize=(20, 5)):\n    dict_values = defaultdict(list)\n    col_names_ice = list(df_ice.columns)\n    num_instances = df_ice.shape[0]\n\n    instances_y = {}\n    i = 0\n\n    for col_name in col_names_ice:\n        for i in range(num_instances):\n            dict_values[i].append(df_ice[col_name][i].toArray()[0])\n\n    fig = plt.figure(figsize=figsize)\n    for i in range(num_instances):\n        plt.plot(col_names_ice, dict_values[i], "k")\n\n    dict_values_pdp = {}\n    col_names = list(df_pdp.columns)\n\n    for col_name in col_names:\n        dict_values_pdp[col_name] = df_pdp[col_name][0].toArray()[0]\n        marklist = sorted(\n            dict_values_pdp.items(), key=lambda x: int(x[0]) if col_int else x[0]\n        )\n        sortdict = dict(marklist)\n\n    plt.plot(col_names_ice, list(sortdict.values()), "r", linewidth=5)\n\n    plt.xlabel(col, size=13)\n    plt.ylabel("Dependence")\n    plt.ylim(0.0)\n    plt.show()\n')),(0,r.kt)("h4",{id:"example-1-numeric-feature-age"},'Example 1: Numeric feature: "age"'),(0,r.kt)("p",null,'We can overlay the PDP on top of ICE plots. In the graph, the red line shows the PDP plot for the "age" feature, and the black lines show ICE plots for 50 randomly selected observations. '),(0,r.kt)("p",null,'The visualization shows that all curves in the ICE plot follow a similar course. This means that the PDP (red line) is already a good summary of the relationships between the displayed feature "age" and the model\'s average predictions of "income". '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'age_df_ice = get_pandas_df_from_column(output, "age_dependence")\nage_df_pdp = get_pandas_df_from_column(output_pdp, "age_dependence")\n\noverlay_ice_with_pdp(age_df_ice, age_df_pdp, col="age_dependence", figsize=(30, 10))\n')),(0,r.kt)("p",null,"Your results will look like:\n",(0,r.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/explainers/pdp_age_overlayed.png",alt:"pdp_age_overlayed"})),(0,r.kt)("h4",{id:"example-2-categorical-feature-occupation"},'Example 2: Categorical feature: "occupation"'),(0,r.kt)("p",null,"For visualization of categorical features, we are using a star plot."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The X-axis here is a circle which is split into equal parts, each representing a feature value."),(0,r.kt)("li",{parentName:"ul"},"The Y-coordinate shows the dependence values. Each line represents a sample observation.")),(0,r.kt)("p",null,'Here we can see that "Farming-fishing" drives the least predictions - because values accumulated near the lowest probabilities, but, for example, "Exec-managerial" seems to have one of the highest impacts for model predictions.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'occupation_dep = get_pandas_df_from_column(output, "occupation_dependence")\n\nplot_ice_categorical(occupation_dep, "occupation_dependence", figsize=(30, 10))\n')),(0,r.kt)("p",null,"Your results will look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/explainers/pdp_occupation-star-plot.png",alt:"pdp_occupation-star-plot"})),(0,r.kt)("h3",{id:"conclusions-1"},"Conclusions"),(0,r.kt)("p",null,"ICE plots show model behavior on individual observations. Each line represents the prediction from the model if we vary the feature of interest."),(0,r.kt)("h2",{id:"pdp-based-feature-importance"},"PDP-based Feature Importance"),(0,r.kt)("p",null,'Using PDP we can calculate a simple partial dependence-based feature importance measure. We note that a  flat PDP indicates that varying the feature does not affect the prediction. The more the PDP varies, the more "important" the feature is. '),(0,r.kt)("p",null,"If you want to learn more please check out ",(0,r.kt)("a",{parentName:"p",href:"https://christophm.github.io/interpretable-ml-book/pdp.html#pdp-based-feature-importance"},"Christoph M's Interpretable ML Book"),"."),(0,r.kt)("h3",{id:"set-up-the-transformer-for-pdp-based-feature-importance"},"Set up the transformer for PDP-based Feature Importance"),(0,r.kt)("p",null,"To plot PDP-based feature importance, we first need to set up the instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ICETransformer")," by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"feature"),". We can then call the ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," function. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transform")," returns a two-column table where the first columns are feature importance values and the second are corresponding features names. The rows are sorted in descending order by feature importance values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pdp_based_imp = ICETransformer(\n    model=model,\n    targetCol="probability",\n    kind="feature",\n    targetClasses=[1],\n    categoricalFeatures=categorical_features,\n    numericFeatures=numeric_features,\n)\n\noutput_pdp_based_imp = pdp_based_imp.transform(df)\ndisplay(output_pdp_based_imp)\n')),(0,r.kt)("h3",{id:"visualization-2"},"Visualization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Helper functions for visualization\n\n\ndef plot_pdp_based_imp(df, figsize=(35, 5)):\n    values_list = list(df.select("pdpBasedDependence").toPandas()["pdpBasedDependence"])\n    names = list(df.select("featureNames").toPandas()["featureNames"])\n    dependence_values = []\n    for vec in values_list:\n        dependence_values.append(vec.toArray()[0])\n\n    fig = plt.figure(figsize=figsize)\n    plt.bar(names, dependence_values)\n\n    plt.xlabel("Feature names", size=13)\n    plt.ylabel("PDP-based-feature-imporance")\n    plt.show()\n')),(0,r.kt)("p",null,"This shows that the features ",(0,r.kt)("inlineCode",{parentName:"p"},"capital-gain")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"education-num")," were the most important for the model, and ",(0,r.kt)("inlineCode",{parentName:"p"},"sex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"education")," were the least important."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"plot_pdp_based_imp(output_pdp_based_imp)\n")),(0,r.kt)("p",null,"Your results will look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/explainers/pdp-based-importance.png",alt:"pdp_based-importance"})),(0,r.kt)("h2",{id:"overall-conclusions"},"Overall conclusions"),(0,r.kt)("p",null,"Interpretation methods are very important responsible AI tools."),(0,r.kt)("p",null,"Partial dependence plots (PDP) and Individual Conditional Expectation (ICE) plots can be used to visualize and analyze interaction between the target response and a set of input features of interest."),(0,r.kt)("p",null,"PDPs show the dependence of the average prediction when varying each feature. In contrast, ICE shows the dependence for individual samples.  The approaches can help give rough estimates of a function's deviation from a baseline. This is important not only to help debug and understand how a model behaves but is a useful step in building responsible AI systems. These methodologies can improve transparency and provide model consumers with an extra level of accountability by model creators."),(0,r.kt)("p",null,"Using examples above we showed how to calculate and visualize such plots at a scalable manner to understand how a classification or regression model makes predictions, which features heavily impact the model, and how model prediction changes when feature value changes."))}m.isMDXComponent=!0}}]);