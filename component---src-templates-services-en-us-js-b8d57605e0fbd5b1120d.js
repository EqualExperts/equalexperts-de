(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+A0O":function(e,t,n){"use strict";var r=n("vwxV"),o=n("q1tI"),a=n.n(o),i=n("x0lo"),u=n("gD8t");t.a=function(){var e=r.data,t="undefined"!=typeof window?window.location.pathname:"",n=e.site.siteMetadata.languages,o=n.langs,c=n.defaultLangKey,l=Object(i.getCurrentLangKey)(o,c,t),s=l===c?"":"/"+l+"/";return a.a.createElement(u.a,{homeLink:s,navLinks:e.allContentfulMainNav.edges[0].node.navItems,switcherLinks:o})}},DW2E:function(e,t,n){var r=n("0/R4"),o=n("Z6vF").onFreeze;n("Xtr8")("freeze",(function(e){return function(t){return e&&r(t)?e(o(t)):t}}))},R8uD:function(e,t,n){"use strict";(function(e){n("DNiP"),n("bWfx"),n("DW2E"),n("hhXQ"),n("Z2Ku"),n("L9s1"),n("hHhE"),n("WLL4"),n("rE2o"),n("rGqo"),n("yt8O"),n("RW0V"),n("pIFo"),n("ioFf"),n("V+eJ"),n("KKXr"),n("a1Th"),n("h7Nl"),n("Btvt"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var c,l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o,a,i,c="object",l=function(e){return e&&e.Math==Math&&e},s=l(typeof globalThis==c&&globalThis)||l(typeof window==c&&window)||l(typeof self==c&&self)||l(typeof n==c&&n)||Function("return this")(),f=function(e){try{return!!e()}catch(t){return!0}},p=!f((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,m={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},v=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},h={}.toString,y="".split,g=f((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return h.call(e).slice(8,-1)}(e)?y.call(e,""):Object(e)}:Object,_=function(e){return g(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},I=function(e){return"object"==typeof e?null!==e:"function"==typeof e},T=function(e,t){if(!I(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!I(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!I(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!I(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},O={}.hasOwnProperty,S=function(e,t){return O.call(e,t)},b=s.document,N=I(b)&&I(b.createElement),L=function(e){return N?b.createElement(e):{}},D=!p&&!f((function(){return 7!=Object.defineProperty(L("div"),"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,A={f:p?w:function(e,t){if(e=_(e),t=T(t,!0),D)try{return w(e,t)}catch(n){}if(S(e,t))return v(!m.f.call(e,t),e[t])}},H=function(e){if(!I(e))throw TypeError(String(e)+" is not an object");return e},P=Object.defineProperty,M={f:p?P:function(e,t,n){if(H(e),t=T(t,!0),H(n),D)try{return P(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},R=p?function(e,t,n){return M.f(e,t,v(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{R(s,e,t)}catch(n){s[e]=t}return t},G=r((function(e){var t=s["__core-js_shared__"]||j("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),C=G("native-function-to-string",Function.toString),x=s.WeakMap,k="function"==typeof x&&/native code/.test(C.call(x)),K=0,B=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++K+B).toString(36)},F=G("keys"),Y=function(e){return F[e]||(F[e]=U(e))},W={},q=s.WeakMap;if(k){var V=new q,z=V.get,Q=V.has,J=V.set;o=function(e,t){return J.call(V,e,t),t},a=function(e){return z.call(V,e)||{}},i=function(e){return Q.call(V,e)}}else{var X=Y("state");W[X]=!0,o=function(e,t){return R(e,X,t),t},a=function(e){return S(e,X)?e[X]:{}},i=function(e){return S(e,X)}}var Z={set:o,get:a,has:i,enforce:function(e){return i(e)?a(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!I(t)||(n=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=r((function(e){var t=Z.get,n=Z.enforce,r=String(C).split("toString");G("inspectSource",(function(e){return C.call(e)})),(e.exports=function(e,t,o,a){var i=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,c=!!a&&!!a.noTargetGet;"function"==typeof o&&("string"!=typeof t||S(o,"name")||R(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==s?(i?!c&&e[t]&&(u=!0):delete e[t],u?e[t]=o:R(e,t,o)):u?e[t]=o:j(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||C.call(this)}))})),ee=s,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(s[e]):ee[e]&&ee[e][t]||s[e]&&s[e][t]},re=Math.ceil,oe=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,ue=Math.max,ce=Math.min,le=function(e){return function(t,n,r){var o,a,i=_(t),u=(o=i.length)>0?ie(ae(o),9007199254740991):0,c=function(e,t){var n=ae(e);return n<0?ue(n+t,0):ce(n,t)}(r,u);if(e&&n!=n){for(;u>c;)if((a=i[c++])!=a)return!0}else for(;u>c;c++)if((e||c in i)&&i[c]===n)return e||c||0;return!e&&-1}},se={includes:le(!0),indexOf:le(!1)},fe=se.indexOf,pe=function(e,t){var n,r=_(e),o=0,a=[];for(n in r)!S(W,n)&&S(r,n)&&a.push(n);for(;t.length>o;)S(r,n=t[o++])&&(~fe(a,n)||a.push(n));return a},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),me={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},ve={f:Object.getOwnPropertySymbols},he=ne("Reflect","ownKeys")||function(e){var t=me.f(H(e)),n=ve.f;return n?t.concat(n(e)):t},ye=function(e,t){for(var n=he(t),r=M.f,o=A.f,a=0;a<n.length;a++){var i=n[a];S(e,i)||r(e,i,o(t,i))}},ge=/#|\.prototype\./,_e=function(e,t){var n=Te[Ie(e)];return n==Se||n!=Oe&&("function"==typeof t?f(t):!!t)},Ie=_e.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},Te=_e.data={},Oe=_e.NATIVE="N",Se=_e.POLYFILL="P",be=_e,Ne=A.f,Le=function(e,t){var n,r,o,a,i,u=e.target,c=e.global,l=e.stat;if(n=c?s:l?s[u]||j(u,{}):(s[u]||{}).prototype)for(r in t){if(a=t[r],o=e.noTargetGet?(i=Ne(n,r))&&i.value:n[r],!be(c?r:u+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ye(a,o)}(e.sham||o&&o.sham)&&R(a,"sham",!0),$(n,r,a,e)}},De=Object.keys||function(e){return pe(e,de)},we=m.f,Ae=function(e){return function(t){for(var n,r=_(t),o=De(r),a=o.length,i=0,u=[];a>i;)n=o[i++],p&&!we.call(r,n)||u.push(e?[n,r[n]]:r[n]);return u}},He={entries:Ae(!0),values:Ae(!1)}.values;Le({target:"Object",stat:!0},{values:function(e){return He(e)}});ee.Object.values;var Pe=!!Object.getOwnPropertySymbols&&!f((function(){return!String(Symbol())})),Me=s.Symbol,Re=G("wks"),je=p?Object.defineProperties:function(e,t){H(e);for(var n,r=De(t),o=r.length,a=0;o>a;)M.f(e,n=r[a++],t[n]);return e},Ge=ne("document","documentElement"),Ce=Y("IE_PROTO"),xe=function(){},ke=function(){var e,t=L("iframe"),n=de.length;for(t.style.display="none",Ge.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),ke=e.F;n--;)delete ke.prototype[de[n]];return ke()},Ke=Object.create||function(e,t){var n;return null!==e?(xe.prototype=H(e),n=new xe,xe.prototype=null,n[Ce]=e):n=ke(),void 0===t?n:je(n,t)};W[Ce]=!0;var Be,Ue=Re[Be="unscopables"]||(Re[Be]=Pe&&Me[Be]||(Pe?Me:U)("Symbol."+Be)),Fe=Array.prototype;null==Fe[Ue]&&R(Fe,Ue,Ke(null));var Ye,We=se.includes;Le({target:"Array",proto:!0},{includes:function(e){return We(this,e,arguments.length>1?arguments[1]:void 0)}}),Ye="includes",Fe[Ue][Ye]=!0;var qe,Ve,ze,Qe=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Je=Function.call;qe="includes",Qe(Je,s["Array"].prototype[qe],Ve);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(ze||(ze={}));var Xe,Ze=ze;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,et=Xe,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}));(c=l)&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")&&c.default;var s,f,p=l.BLOCKS,d=(l.CONTAINERS,l.INLINES),E=l.MARKS,m=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function v(e,t){return e.map((function(e,n){return r=h(e,t),a=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:a}):r;var r,a}))}function h(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(m.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=v(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):a.createElement(a.Fragment,null,i)}var y=((s={})[p.DOCUMENT]=function(e,t){return t},s[p.PARAGRAPH]=function(e,t){return a.createElement("p",null,t)},s[p.HEADING_1]=function(e,t){return a.createElement("h1",null,t)},s[p.HEADING_2]=function(e,t){return a.createElement("h2",null,t)},s[p.HEADING_3]=function(e,t){return a.createElement("h3",null,t)},s[p.HEADING_4]=function(e,t){return a.createElement("h4",null,t)},s[p.HEADING_5]=function(e,t){return a.createElement("h5",null,t)},s[p.HEADING_6]=function(e,t){return a.createElement("h6",null,t)},s[p.EMBEDDED_ENTRY]=function(e,t){return a.createElement("div",null,t)},s[p.UL_LIST]=function(e,t){return a.createElement("ul",null,t)},s[p.OL_LIST]=function(e,t){return a.createElement("ol",null,t)},s[p.LIST_ITEM]=function(e,t){return a.createElement("li",null,t)},s[p.QUOTE]=function(e,t){return a.createElement("blockquote",null,t)},s[p.HR]=function(){return a.createElement("hr",null)},s[d.ASSET_HYPERLINK]=function(e){return _(d.ASSET_HYPERLINK,e)},s[d.ENTRY_HYPERLINK]=function(e){return _(d.ENTRY_HYPERLINK,e)},s[d.EMBEDDED_ENTRY]=function(e){return _(d.EMBEDDED_ENTRY,e)},s[d.HYPERLINK]=function(e,t){return a.createElement("a",{href:e.data.uri},t)},s),g=((f={})[E.BOLD]=function(e){return a.createElement("b",null,e)},f[E.ITALIC]=function(e){return a.createElement("i",null,e)},f[E.UNDERLINE]=function(e){return a.createElement("u",null,e)},f[E.CODE]=function(e){return a.createElement("code",null,e)},f);function _(e,t){return a.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?h(e,{renderNode:i({},y,t.renderNode),renderMark:i({},g,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},etdU:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("+A0O"),i=n("h0xc");t.a=function(e){var t=e.children;e.location;return o.a.createElement("div",{className:"main-container"},o.a.createElement(a.a,null),o.a.createElement("article",{className:"content"},o.a.createElement("main",null,t)),o.a.createElement(i.a,null))}},h0xc:function(e,t,n){"use strict";var r=n("tHJ9"),o=n("q1tI"),a=n.n(o),i=n("m8XL"),u=n("x0lo");t.a=function(){var e=r.data,t="undefined"!=typeof window?window.location.pathname:"",n=e.site.siteMetadata.languages,o=n.langs,c=n.defaultLangKey,l=Object(u.getCurrentLangKey)(o,c,t),s=l===c?"":"/"+l+"/";return a.a.createElement(i.a,{homeLink:s,navLinks:e.allContentfulMainNav.edges[0].node.navItems,legalLinks:e.allContentfulLegalNav.edges[0].node.navItems,switcherLinks:o})}},lScr:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=n("etdU"),i=n("vrFN"),u=(n("sg+I"),n("mR+k"));t.default=function(e){var t=e.data.contentfulServices;return o.a.createElement(a.a,{location:e.location},o.a.createElement(i.a,{title:t.topicTitle,image:t.heroImage.file.url,description:t.shortExplanation.shortExplanation,links:[{rel:"alternate",hreflang:"en-US",href:"//services/"+t.slug}]}),o.a.createElement(u.a,{heroImage:t.heroImage,topicTitle:t.topicTitle||"",shortExplanation:t.shortExplanation.shortExplanation||"",whyNow:t.whyNow.json||{},whatYouGetHeading:t.whatYouGetHeading||"",whatYouGetIcon:t.whatYouGetIcon,whatYouGet:t.whatYouGet||[],whyEEHeading:t.whyEeHeading||"",ourUsps:t.ourUsps||[],formularForSuccessHeading:t.formularForSuccessHeading||"",formularForSuccess:t.formularForSuccess||[]}))};var c="1644699063"},"mR+k":function(e,t,n){"use strict";var r,o,a=n("q1tI"),i=n.n(a),u=n("vbKG"),c=n("R8uD"),l={renderMark:(r={},r[u.MARKS.BOLD]=function(e){return i.a.createElement("span",{className:"bold"},e)},r),renderNode:(o={},o[u.BLOCKS.PARAGRAPH]=function(e,t){return i.a.createElement("p",null,t)},o[u.BLOCKS.HEADING_1]=function(e,t){return i.a.createElement("h1",null,t)},o[u.BLOCKS.HEADING_2]=function(e,t){return i.a.createElement("h2",null,t)},o[u.BLOCKS.HEADING_3]=function(e,t){return i.a.createElement("h3",null,t)},o[u.BLOCKS.HEADING_4]=function(e,t){return i.a.createElement("h4",null,t)},o[u.BLOCKS.HEADING_5]=function(e,t){return i.a.createElement("h5",null,t)},o[u.BLOCKS.HEADING_6]=function(e,t){return i.a.createElement("h6",null,t)},o[u.BLOCKS.UL_LIST]=function(e,t){return i.a.createElement("ul",{className:"services__list"},t)},o[u.BLOCKS.OL_LIST]=function(e,t){return i.a.createElement("ol",null,t)},o[u.BLOCKS.LIST_ITEM]=function(e,t){return i.a.createElement("li",null,t)},o[u.BLOCKS.EMBEDDED_ASSET]=function(e){return i.a.createElement("div",{className:"services__image"},i.a.createElement("img",{src:e.data.target.fields.file.de.url,alt:e.data.target.fields.title.de}))},o)};t.a=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"services__hero",style:{backgroundImage:"linear-gradient(0deg, rgba(25, 107, 152, 0.6), rgba(25, 107, 152, 0.6)), url("+e.heroImage.file.url+")"}},i.a.createElement("div",{className:"services__hero__container"},i.a.createElement("h1",{className:"services__title"},e.topicTitle),i.a.createElement("div",{className:"services__postOverview"},e.shortExplanation))),i.a.createElement("div",{className:"services__contentWrapper"},i.a.createElement("div",{className:"services__contentWrapper__container"},Object(c.documentToReactComponents)(e.whyNow,l),i.a.createElement("h2",null,e.whatYouGetHeading),i.a.createElement("div",{className:"services__blockCallouts"},e.whatYouGet.map((function(t,n){return i.a.createElement("div",{key:"services__blockCallout_"+n,className:"services__blockCallout",style:{backgroundImage:"url("+e.whatYouGetIcon.file.url+")"}},t)}))))),i.a.createElement("div",{className:"services__uspsWrapper"},i.a.createElement("div",{className:"services__uspsContainer"},i.a.createElement("h2",null,e.whyEEHeading),i.a.createElement("div",{className:"services__usps"},e.ourUsps.map((function(e,t){return i.a.createElement("div",{key:"services__usps_"+t,className:"services__usp"},i.a.createElement("div",{className:"services__decorativeBar"}),i.a.createElement("h3",{className:"services__uspHeading"},e.usp),i.a.createElement("div",{className:"services__uspDescription"},e.uspDescription.uspDescription))}))))),i.a.createElement("div",{className:"services__contentWrapper"},i.a.createElement("div",{className:"services__contentWrapper__container"},i.a.createElement("h2",null,e.formularForSuccessHeading),i.a.createElement("div",{className:"services__formularForSuccess"},e.formularForSuccess.map((function(t,n){var r="";return n<e.formularForSuccess.length-1&&(r=i.a.createElement("div",{className:"services__formularForSuccessPlus"})),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"services__formularForSuccessComponent"},t.formulaTitle),r)}))))))}},tHJ9:function(e){e.exports=JSON.parse('{"data":{"allContentfulMainNav":{"edges":[{"node":{"navItems":[{"navItemText":"Customers","navItemUrl":"#Our Clients"},{"navItemText":"Career","navItemUrl":"#Our Experts"},{"navItemText":"Empowerment and Tech","navItemUrl":"empowerment-and-tech"},{"navItemText":"Blog","navItemUrl":"blogs-list/"},{"navItemText":"Contact","navItemUrl":"#Get in touch"}]}}]},"allContentfulLegalNav":{"edges":[{"node":{"navItems":[{"navItemText":"Privacy Policy","navItemUrl":"privacy-policy/"},{"navItemText":"Imprint","navItemUrl":"imprint"},{"navItemText":"Modern Slavery Policy","navItemUrl":"modernSlaveryPolicy"}]}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')},vbKG:function(e,t,n){"use strict";(function(e){n("DW2E"),n("hhXQ"),n("Z2Ku"),n("L9s1"),n("hHhE"),n("WLL4"),n("rE2o"),n("rGqo"),n("yt8O"),n("RW0V"),n("pIFo"),n("ioFf"),n("V+eJ"),n("KKXr"),n("a1Th"),n("h7Nl"),n("Btvt"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var a,i,u,c="object",l=function(e){return e&&e.Math==Math&&e},s=l(typeof globalThis==c&&globalThis)||l(typeof window==c&&window)||l(typeof self==c&&self)||l(typeof r==c&&r)||Function("return this")(),f=function(e){try{return!!e()}catch(t){return!0}},p=!f((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,m={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},v=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},h={}.toString,y="".split,g=f((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return h.call(e).slice(8,-1)}(e)?y.call(e,""):Object(e)}:Object,_=function(e){return g(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},I=function(e){return"object"==typeof e?null!==e:"function"==typeof e},T=function(e,t){if(!I(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!I(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!I(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!I(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},O={}.hasOwnProperty,S=function(e,t){return O.call(e,t)},b=s.document,N=I(b)&&I(b.createElement),L=function(e){return N?b.createElement(e):{}},D=!p&&!f((function(){return 7!=Object.defineProperty(L("div"),"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,A={f:p?w:function(e,t){if(e=_(e),t=T(t,!0),D)try{return w(e,t)}catch(n){}if(S(e,t))return v(!m.f.call(e,t),e[t])}},H=function(e){if(!I(e))throw TypeError(String(e)+" is not an object");return e},P=Object.defineProperty,M={f:p?P:function(e,t,n){if(H(e),t=T(t,!0),H(n),D)try{return P(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},R=p?function(e,t,n){return M.f(e,t,v(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{R(s,e,t)}catch(n){s[e]=t}return t},G=o((function(e){var t=s["__core-js_shared__"]||j("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),C=G("native-function-to-string",Function.toString),x=s.WeakMap,k="function"==typeof x&&/native code/.test(C.call(x)),K=0,B=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++K+B).toString(36)},F=G("keys"),Y=function(e){return F[e]||(F[e]=U(e))},W={},q=s.WeakMap;if(k){var V=new q,z=V.get,Q=V.has,J=V.set;a=function(e,t){return J.call(V,e,t),t},i=function(e){return z.call(V,e)||{}},u=function(e){return Q.call(V,e)}}else{var X=Y("state");W[X]=!0,a=function(e,t){return R(e,X,t),t},i=function(e){return S(e,X)?e[X]:{}},u=function(e){return S(e,X)}}var Z={set:a,get:i,has:u,enforce:function(e){return u(e)?i(e):a(e,{})},getterFor:function(e){return function(t){var n;if(!I(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=o((function(e){var t=Z.get,n=Z.enforce,r=String(C).split("toString");G("inspectSource",(function(e){return C.call(e)})),(e.exports=function(e,t,o,a){var i=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,c=!!a&&!!a.noTargetGet;"function"==typeof o&&("string"!=typeof t||S(o,"name")||R(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==s?(i?!c&&e[t]&&(u=!0):delete e[t],u?e[t]=o:R(e,t,o)):u?e[t]=o:j(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||C.call(this)}))})),ee=s,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(s[e]):ee[e]&&ee[e][t]||s[e]&&s[e][t]},re=Math.ceil,oe=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,ue=Math.max,ce=Math.min,le=function(e){return function(t,n,r){var o,a,i=_(t),u=(o=i.length)>0?ie(ae(o),9007199254740991):0,c=function(e,t){var n=ae(e);return n<0?ue(n+t,0):ce(n,t)}(r,u);if(e&&n!=n){for(;u>c;)if((a=i[c++])!=a)return!0}else for(;u>c;c++)if((e||c in i)&&i[c]===n)return e||c||0;return!e&&-1}},se={includes:le(!0),indexOf:le(!1)},fe=se.indexOf,pe=function(e,t){var n,r=_(e),o=0,a=[];for(n in r)!S(W,n)&&S(r,n)&&a.push(n);for(;t.length>o;)S(r,n=t[o++])&&(~fe(a,n)||a.push(n));return a},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),me={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},ve={f:Object.getOwnPropertySymbols},he=ne("Reflect","ownKeys")||function(e){var t=me.f(H(e)),n=ve.f;return n?t.concat(n(e)):t},ye=function(e,t){for(var n=he(t),r=M.f,o=A.f,a=0;a<n.length;a++){var i=n[a];S(e,i)||r(e,i,o(t,i))}},ge=/#|\.prototype\./,_e=function(e,t){var n=Te[Ie(e)];return n==Se||n!=Oe&&("function"==typeof t?f(t):!!t)},Ie=_e.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},Te=_e.data={},Oe=_e.NATIVE="N",Se=_e.POLYFILL="P",be=_e,Ne=A.f,Le=function(e,t){var n,r,o,a,i,u=e.target,c=e.global,l=e.stat;if(n=c?s:l?s[u]||j(u,{}):(s[u]||{}).prototype)for(r in t){if(a=t[r],o=e.noTargetGet?(i=Ne(n,r))&&i.value:n[r],!be(c?r:u+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ye(a,o)}(e.sham||o&&o.sham)&&R(a,"sham",!0),$(n,r,a,e)}},De=Object.keys||function(e){return pe(e,de)},we=m.f,Ae=function(e){return function(t){for(var n,r=_(t),o=De(r),a=o.length,i=0,u=[];a>i;)n=o[i++],p&&!we.call(r,n)||u.push(e?[n,r[n]]:r[n]);return u}},He={entries:Ae(!0),values:Ae(!1)}.values;Le({target:"Object",stat:!0},{values:function(e){return He(e)}});ee.Object.values;var Pe=!!Object.getOwnPropertySymbols&&!f((function(){return!String(Symbol())})),Me=s.Symbol,Re=G("wks"),je=p?Object.defineProperties:function(e,t){H(e);for(var n,r=De(t),o=r.length,a=0;o>a;)M.f(e,n=r[a++],t[n]);return e},Ge=ne("document","documentElement"),Ce=Y("IE_PROTO"),xe=function(){},ke=function(){var e,t=L("iframe"),n=de.length;for(t.style.display="none",Ge.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),ke=e.F;n--;)delete ke.prototype[de[n]];return ke()},Ke=Object.create||function(e,t){var n;return null!==e?(xe.prototype=H(e),n=new xe,xe.prototype=null,n[Ce]=e):n=ke(),void 0===t?n:je(n,t)};W[Ce]=!0;var Be,Ue=Re[Be="unscopables"]||(Re[Be]=Pe&&Me[Be]||(Pe?Me:U)("Symbol."+Be)),Fe=Array.prototype;null==Fe[Ue]&&R(Fe,Ue,Ke(null));var Ye,We=se.includes;Le({target:"Array",proto:!0},{includes:function(e){return We(this,e,arguments.length>1?arguments[1]:void 0)}}),Ye="includes",Fe[Ue][Ye]=!0;var qe,Ve,ze,Qe=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Je=Function.call;qe="includes",Qe(Je,s["Array"].prototype[qe],Ve);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(ze||(ze={}));var Xe,Ze=ze;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,et=Xe,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}).call(this,n("yLpj"))},vwxV:function(e){e.exports=JSON.parse('{"data":{"allContentfulMainNav":{"edges":[{"node":{"navItems":[{"navItemText":"Customers","navItemUrl":"#Our Clients"},{"navItemText":"Career","navItemUrl":"#Our Experts"},{"navItemText":"Empowerment and Tech","navItemUrl":"empowerment-and-tech"},{"navItemText":"Blog","navItemUrl":"blogs-list/"},{"navItemText":"Contact","navItemUrl":"#Get in touch"}]}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')}}]);
//# sourceMappingURL=component---src-templates-services-en-us-js-b8d57605e0fbd5b1120d.js.map