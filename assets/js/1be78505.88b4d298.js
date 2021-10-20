/*! For license information please see 1be78505.88b4d298.js.LICENSE.txt */
(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9514,6482],{6260:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return $}});var n=a(7294),r=a(3905),o=a(6291),l=a(5475),c=a(6010),i=a(9558),s=a(5492),d=a(4400),u=a(4034),m=function(e){return n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=a(4973),b=a(9973),v=a(6742),f=a(3919),h=a(6806),E="menuLinkText_1DFL",g=["items"],k=["item"],_=["item","onItemClick","activePath","level"],C=["item","onItemClick","activePath","level"],S=function e(t,a){return"link"===t.type?(0,i.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},Z=(0,n.memo)((function(e){var t=e.items,a=(0,b.Z)(e,g);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(N,(0,u.Z)({key:t,item:e},a))})))}));function N(e){var t=e.item,a=(0,b.Z)(e,k);return"category"===t.type?0===t.items.length?null:n.createElement(I,(0,u.Z)({item:t},a)):n.createElement(T,(0,u.Z)({item:t},a))}function I(e){var t,a=e.item,r=e.onItemClick,o=e.activePath,l=e.level,s=(0,b.Z)(e,_),d=a.items,m=a.label,p=a.collapsible,v=a.className,f=S(a,o),h=(0,i.uR)({initialState:function(){return!!p&&(!f&&a.collapsed)}}),g=h.collapsed,k=h.setCollapsed,C=h.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,n.useEffect)((function(){t&&!o&&a&&r(!1)}),[t,o,a])}({isActive:f,collapsed:g,setCollapsed:k}),n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":g},v)},n.createElement("a",(0,u.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&f},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),C()}:void 0,href:p?"#":void 0},s),m),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.createElement(Z,{items:d,tabIndex:g?-1:0,onItemClick:r,activePath:o,level:l+1})))}function T(e){var t=e.item,a=e.onItemClick,r=e.activePath,o=e.level,l=(0,b.Z)(e,C),s=t.href,d=t.label,m=t.className,p=S(t,r);return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:d},n.createElement(v.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:a},l),(0,f.Z)(s)?d:n.createElement("span",null,d,n.createElement(h.Z,null))))}var M="sidebar_1tWv",y="sidebarWithHideableNavbar_3srT",x="sidebarHidden_1xTt",A="sidebarLogo_28Z7",B="menu_1Iah",L="menuWithAnnouncementBar_3acx",P="collapseSidebarButton_3YaP",w="collapseSidebarButtonIcon_V-RG";function F(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",P),onClick:t},n.createElement(m,{className:w}))}function D(e){var t,a,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,u=function(){var e=(0,i.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,i.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,b=m.hideableSidebar;return n.createElement("div",{className:(0,c.Z)(M,(t={},t[y]=p,t[x]=s,t))},p&&n.createElement(d.Z,{tabIndex:-1,className:A}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",B,(a={},a[L]=u,a))},n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:o,activePath:r,level:1}))),b&&n.createElement(F,{onClick:l}))}var H=function(e){var t=e.toggleSidebar,a=e.sidebar,r=e.path;return n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:a,activePath:r,onItemClick:function(){return t()},level:1}))};function R(e){return n.createElement(i.Cv,{component:H,props:e})}var W=n.memo(D),z=n.memo(R);function O(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(W,e),r&&n.createElement(z,e))}var Y=a(3172),j=a(5733),K="backToTopButton_DkI0",U="backToTopButtonShow_3KsQ";function q(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,n.useState)(!1),a=t[0],r=t[1],o=(0,n.useRef)(!1),l=q(),s=l.smoothScrollTop,d=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(o.current)o.current=!1;else{var l=a<n;if(l||d(),a<300)r(!1);else if(l){var c=document.documentElement.scrollHeight;a+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),n.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,K,(e={},e[U]=a,e)),type:"button",onClick:function(){return s()}})},Q=a(5977),J={docPage:"docPage_3zOJ",docMainContainer:"docMainContainer_3Zec",docSidebarContainer:"docSidebarContainer_G8MK",docMainContainerEnhanced:"docMainContainerEnhanced_3hdE",docSidebarContainerHidden:"docSidebarContainerHidden_nSSO",collapsedDocSidebar:"collapsedDocSidebar_1Qfl",expandSidebarButtonIcon:"expandSidebarButtonIcon_1eUB",docItemWrapperEnhanced:"docItemWrapperEnhanced_1NqF"},V=a(9105);function X(e){var t,a,o,s=e.currentDocRoute,d=e.versionMetadata,u=e.children,b=d.pluginId,v=d.version,f=s.sidebar,h=f?d.docsSidebars[f]:void 0,E=(0,n.useState)(!1),g=E[0],k=E[1],_=(0,n.useState)(!1),C=_[0],S=_[1],Z=(0,n.useCallback)((function(){C&&S(!1),k(!g)}),[C]);return n.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:v,tag:(0,i.os)(b,v)}},n.createElement("div",{className:J.docPage},n.createElement(G,null),h&&n.createElement("aside",{className:(0,c.Z)(J.docSidebarContainer,(t={},t[J.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J.docSidebarContainer)&&g&&S(!0)}},n.createElement(O,{key:f,sidebar:h,path:s.path,onCollapse:Z,isHidden:C}),C&&n.createElement("div",{className:J.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:Z,onClick:Z},n.createElement(m,{className:J.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(J.docMainContainer,(a={},a[J.docMainContainerEnhanced]=g||!h,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",J.docItemWrapper,(o={},o[J.docItemWrapperEnhanced]=g,o))},n.createElement(r.Zo,{components:Y.Z},u)))))}var $=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,Q.LX)(r.pathname,e)}));return l?n.createElement(n.Fragment,null,n.createElement(V.Z,null,n.createElement("html",{className:a.className})),n.createElement(X,{currentDocRoute:l,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a}))):n.createElement(j.default,e)}},5733:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),r=a(5475),o=a(4184),l=a.n(o),c="notFoundContainer_2hvU",i="notFoundBlob_ZttH";var s=function(){return n.createElement(r.Z,{title:"Page Not Found"},n.createElement("div",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:l()("col col--6 col--offset-3",c)},n.createElement("img",{src:"/img/Blobsherlock.svg",className:l()("margin-bottom--lg",i)}),n.createElement("h1",{className:"hero__title"},"Woops! Page Not Found"),n.createElement("p",null,"The documentation site has recently moved, chances are that the page you're looking for is ",n.createElement("a",{href:"/docs/about"},"in the new docs section"),".")))))}},4184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var c in a)n.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);