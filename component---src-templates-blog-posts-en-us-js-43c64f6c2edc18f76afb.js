(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+A0O":function(e,t,n){"use strict";var r=n("jfJr"),o=n("q1tI"),a=n.n(o),u=n("x0lo"),i=n("gD8t");t.a=function(){var e=r.data,t="undefined"!=typeof window?window.location.pathname:"",n=e.site.siteMetadata.languages,o=n.langs,c=n.defaultLangKey,l=Object(u.getCurrentLangKey)(o,c,t),f=l===c?"":"/"+l+"/";return a.a.createElement(i.a,{homeLink:f,navLinks:e.allContentfulMainNav.edges[0].node.navItems,switcherLinks:o})}},DW2E:function(e,t,n){var r=n("0/R4"),o=n("Z6vF").onFreeze;n("Xtr8")("freeze",(function(e){return function(t){return e&&r(t)?e(o(t)):t}}))},ELG6:function(e){e.exports=JSON.parse('{"data":{"allContentfulMainNav":{"edges":[{"node":{"navItems":[{"navItemText":"Customers","navItemUrl":"#Our Clients"},{"navItemText":"Empowerment and Tech","navItemUrl":"empowerment-and-tech"},{"navItemText":"Blog","navItemUrl":"blogs-list/"},{"navItemText":"Contact","navItemUrl":"#Get in touch"}]}}]},"allContentfulLegalNav":{"edges":[{"node":{"navItems":[{"navItemText":"Privacy Policy","navItemUrl":"privacy-policy/"},{"navItemText":"Imprint","navItemUrl":"imprint"},{"navItemText":"Modern Slavery Policy","navItemUrl":"modernSlaveryPolicy"}]}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')},Qzjn:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=n("etdU"),u=n("vrFN"),i=(n("sg+I"),n("lgDo"));t.default=function(e){var t=e.data.contentfulBlogPost,n=new Date(Date.parse(t.blogDate)),r=t.canonical||"";return o.a.createElement(a.a,null,o.a.createElement(u.a,{title:t.blogTitle,image:t.heroImage.file.url,description:t.blogPostOverview.blogPostOverview,links:[{rel:"alternate",hreflang:"en-US",href:"//en-US/"+t.slug},{rel:"canonical",href:r}]}),o.a.createElement(i.a,{heroImage:t.heroImage,blogTitle:t.blogTitle,blogAuthor:t.blogAuthor,date:n,blogPostOverview:t.blogPostOverview,blogContent:t.blogContent.json}))};var c="2972766891"},R8uD:function(e,t,n){"use strict";(function(e){n("DNiP"),n("bWfx"),n("DW2E"),n("hhXQ"),n("Z2Ku"),n("L9s1"),n("hHhE"),n("WLL4"),n("rE2o"),n("rGqo"),n("yt8O"),n("RW0V"),n("pIFo"),n("ioFf"),n("V+eJ"),n("KKXr"),n("a1Th"),n("h7Nl"),n("Btvt"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var c,l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o,a,u,c="object",l=function(e){return e&&e.Math==Math&&e},f=l(typeof globalThis==c&&globalThis)||l(typeof window==c&&window)||l(typeof self==c&&self)||l(typeof n==c&&n)||Function("return this")(),s=function(e){try{return!!e()}catch(t){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,v={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},g=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m={}.toString,y="".split,h=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return m.call(e).slice(8,-1)}(e)?y.call(e,""):Object(e)}:Object,b=function(e){return h(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},I=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_=function(e,t){if(!I(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!I(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!I(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!I(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},O={}.hasOwnProperty,T=function(e,t){return O.call(e,t)},S=f.document,L=I(S)&&I(S.createElement),D=function(e){return L?S.createElement(e):{}},N=!p&&!s((function(){return 7!=Object.defineProperty(D("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,w={f:p?A:function(e,t){if(e=b(e),t=_(t,!0),N)try{return A(e,t)}catch(n){}if(T(e,t))return g(!v.f.call(e,t),e[t])}},P=function(e){if(!I(e))throw TypeError(String(e)+" is not an object");return e},M=Object.defineProperty,j={f:p?M:function(e,t,n){if(P(e),t=_(t,!0),P(n),N)try{return M(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},R=p?function(e,t,n){return j.f(e,t,g(1,n))}:function(e,t,n){return e[t]=n,e},H=function(e,t){try{R(f,e,t)}catch(n){f[e]=t}return t},C=r((function(e){var t=f["__core-js_shared__"]||H("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),G=C("native-function-to-string",Function.toString),K=f.WeakMap,k="function"==typeof K&&/native code/.test(G.call(K)),B=0,x=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+x).toString(36)},Y=C("keys"),F=function(e){return Y[e]||(Y[e]=U(e))},W={},q=f.WeakMap;if(k){var V=new q,z=V.get,Q=V.has,J=V.set;o=function(e,t){return J.call(V,e,t),t},a=function(e){return z.call(V,e)||{}},u=function(e){return Q.call(V,e)}}else{var X=F("state");W[X]=!0,o=function(e,t){return R(e,X,t),t},a=function(e){return T(e,X)?e[X]:{}},u=function(e){return T(e,X)}}var Z={set:o,get:a,has:u,enforce:function(e){return u(e)?a(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!I(t)||(n=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=r((function(e){var t=Z.get,n=Z.enforce,r=String(G).split("toString");C("inspectSource",(function(e){return G.call(e)})),(e.exports=function(e,t,o,a){var u=!!a&&!!a.unsafe,i=!!a&&!!a.enumerable,c=!!a&&!!a.noTargetGet;"function"==typeof o&&("string"!=typeof t||T(o,"name")||R(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==f?(u?!c&&e[t]&&(i=!0):delete e[t],i?e[t]=o:R(e,t,o)):i?e[t]=o:H(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G.call(this)}))})),ee=f,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(f[e]):ee[e]&&ee[e][t]||f[e]&&f[e][t]},re=Math.ceil,oe=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ue=Math.min,ie=Math.max,ce=Math.min,le=function(e){return function(t,n,r){var o,a,u=b(t),i=(o=u.length)>0?ue(ae(o),9007199254740991):0,c=function(e,t){var n=ae(e);return n<0?ie(n+t,0):ce(n,t)}(r,i);if(e&&n!=n){for(;i>c;)if((a=u[c++])!=a)return!0}else for(;i>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}},fe={includes:le(!0),indexOf:le(!1)},se=fe.indexOf,pe=function(e,t){var n,r=b(e),o=0,a=[];for(n in r)!T(W,n)&&T(r,n)&&a.push(n);for(;t.length>o;)T(r,n=t[o++])&&(~se(a,n)||a.push(n));return a},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),ve={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},ge={f:Object.getOwnPropertySymbols},me=ne("Reflect","ownKeys")||function(e){var t=ve.f(P(e)),n=ge.f;return n?t.concat(n(e)):t},ye=function(e,t){for(var n=me(t),r=j.f,o=w.f,a=0;a<n.length;a++){var u=n[a];T(e,u)||r(e,u,o(t,u))}},he=/#|\.prototype\./,be=function(e,t){var n=_e[Ie(e)];return n==Te||n!=Oe&&("function"==typeof t?s(t):!!t)},Ie=be.normalize=function(e){return String(e).replace(he,".").toLowerCase()},_e=be.data={},Oe=be.NATIVE="N",Te=be.POLYFILL="P",Se=be,Le=w.f,De=function(e,t){var n,r,o,a,u,i=e.target,c=e.global,l=e.stat;if(n=c?f:l?f[i]||H(i,{}):(f[i]||{}).prototype)for(r in t){if(a=t[r],o=e.noTargetGet?(u=Le(n,r))&&u.value:n[r],!Se(c?r:i+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ye(a,o)}(e.sham||o&&o.sham)&&R(a,"sham",!0),$(n,r,a,e)}},Ne=Object.keys||function(e){return pe(e,de)},Ae=v.f,we=function(e){return function(t){for(var n,r=b(t),o=Ne(r),a=o.length,u=0,i=[];a>u;)n=o[u++],p&&!Ae.call(r,n)||i.push(e?[n,r[n]]:r[n]);return i}},Pe={entries:we(!0),values:we(!1)}.values;De({target:"Object",stat:!0},{values:function(e){return Pe(e)}});ee.Object.values;var Me=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),je=f.Symbol,Re=C("wks"),He=p?Object.defineProperties:function(e,t){P(e);for(var n,r=Ne(t),o=r.length,a=0;o>a;)j.f(e,n=r[a++],t[n]);return e},Ce=ne("document","documentElement"),Ge=F("IE_PROTO"),Ke=function(){},ke=function(){var e,t=D("iframe"),n=de.length;for(t.style.display="none",Ce.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),ke=e.F;n--;)delete ke.prototype[de[n]];return ke()},Be=Object.create||function(e,t){var n;return null!==e?(Ke.prototype=P(e),n=new Ke,Ke.prototype=null,n[Ge]=e):n=ke(),void 0===t?n:He(n,t)};W[Ge]=!0;var xe,Ue=Re[xe="unscopables"]||(Re[xe]=Me&&je[xe]||(Me?je:U)("Symbol."+xe)),Ye=Array.prototype;null==Ye[Ue]&&R(Ye,Ue,Be(null));var Fe,We=fe.includes;De({target:"Array",proto:!0},{includes:function(e){return We(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ye[Ue][Fe]=!0;var qe,Ve,ze,Qe=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Je=Function.call;qe="includes",Qe(Je,f["Array"].prototype[qe],Ve);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(ze||(ze={}));var Xe,Ze=ze;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,et=Xe,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}));(c=l)&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")&&c.default;var f,s,p=l.BLOCKS,d=(l.CONTAINERS,l.INLINES),E=l.MARKS,v=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function g(e,t){return e.map((function(e,n){return r=m(e,t),a=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:a}):r;var r,a}))}function m(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(v.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var u=g(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):a.createElement(a.Fragment,null,u)}var y=((f={})[p.DOCUMENT]=function(e,t){return t},f[p.PARAGRAPH]=function(e,t){return a.createElement("p",null,t)},f[p.HEADING_1]=function(e,t){return a.createElement("h1",null,t)},f[p.HEADING_2]=function(e,t){return a.createElement("h2",null,t)},f[p.HEADING_3]=function(e,t){return a.createElement("h3",null,t)},f[p.HEADING_4]=function(e,t){return a.createElement("h4",null,t)},f[p.HEADING_5]=function(e,t){return a.createElement("h5",null,t)},f[p.HEADING_6]=function(e,t){return a.createElement("h6",null,t)},f[p.EMBEDDED_ENTRY]=function(e,t){return a.createElement("div",null,t)},f[p.UL_LIST]=function(e,t){return a.createElement("ul",null,t)},f[p.OL_LIST]=function(e,t){return a.createElement("ol",null,t)},f[p.LIST_ITEM]=function(e,t){return a.createElement("li",null,t)},f[p.QUOTE]=function(e,t){return a.createElement("blockquote",null,t)},f[p.HR]=function(){return a.createElement("hr",null)},f[d.ASSET_HYPERLINK]=function(e){return b(d.ASSET_HYPERLINK,e)},f[d.ENTRY_HYPERLINK]=function(e){return b(d.ENTRY_HYPERLINK,e)},f[d.EMBEDDED_ENTRY]=function(e){return b(d.EMBEDDED_ENTRY,e)},f[d.HYPERLINK]=function(e,t){return a.createElement("a",{href:e.data.uri},t)},f),h=((s={})[E.BOLD]=function(e){return a.createElement("b",null,e)},s[E.ITALIC]=function(e){return a.createElement("i",null,e)},s[E.UNDERLINE]=function(e){return a.createElement("u",null,e)},s[E.CODE]=function(e){return a.createElement("code",null,e)},s);function b(e,t){return a.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?m(e,{renderNode:u({},y,t.renderNode),renderMark:u({},h,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},etdU:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("+A0O"),u=n("h0xc");t.a=function(e){var t=e.children;e.location;return o.a.createElement("div",{className:"main-container"},o.a.createElement(a.a,null),o.a.createElement("article",{className:"content"},o.a.createElement("main",null,t)),o.a.createElement(u.a,null))}},h0xc:function(e,t,n){"use strict";var r=n("ELG6"),o=n("q1tI"),a=n.n(o),u=n("m8XL"),i=n("x0lo");t.a=function(){var e=r.data,t="undefined"!=typeof window?window.location.pathname:"",n=e.site.siteMetadata.languages,o=n.langs,c=n.defaultLangKey,l=Object(i.getCurrentLangKey)(o,c,t),f=l===c?"":"/"+l+"/";return a.a.createElement(u.a,{homeLink:f,navLinks:e.allContentfulMainNav.edges[0].node.navItems,legalLinks:e.allContentfulLegalNav.edges[0].node.navItems,switcherLinks:o})}},jfJr:function(e){e.exports=JSON.parse('{"data":{"allContentfulMainNav":{"edges":[{"node":{"navItems":[{"navItemText":"Customers","navItemUrl":"#Our Clients"},{"navItemText":"Empowerment and Tech","navItemUrl":"empowerment-and-tech"},{"navItemText":"Blog","navItemUrl":"blogs-list/"},{"navItemText":"Contact","navItemUrl":"#Get in touch"}]}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')},lgDo:function(e,t,n){"use strict";var r,o,a=n("q1tI"),u=n.n(a),i=n("vbKG"),c=n("R8uD"),l={renderMark:(r={},r[i.MARKS.BOLD]=function(e){return u.a.createElement("span",{className:"bold"},e)},r),renderNode:(o={},o[i.BLOCKS.PARAGRAPH]=function(e,t){return u.a.createElement("p",null,t)},o[i.BLOCKS.HEADING_1]=function(e,t){return u.a.createElement("h1",null,t)},o[i.BLOCKS.HEADING_2]=function(e,t){return u.a.createElement("h2",null,t)},o[i.BLOCKS.HEADING_3]=function(e,t){return u.a.createElement("h3",null,t)},o[i.BLOCKS.HEADING_4]=function(e,t){return u.a.createElement("h4",null,t)},o[i.BLOCKS.HEADING_5]=function(e,t){return u.a.createElement("h5",null,t)},o[i.BLOCKS.HEADING_6]=function(e,t){return u.a.createElement("h6",null,t)},o[i.BLOCKS.UL_LIST]=function(e,t){return u.a.createElement("ul",{className:"blog__list"},t)},o[i.BLOCKS.OL_LIST]=function(e,t){return u.a.createElement("ol",null,t)},o[i.BLOCKS.LIST_ITEM]=function(e,t){return u.a.createElement("li",null,t)},o[i.BLOCKS.EMBEDDED_ASSET]=function(e){return u.a.createElement("div",{className:"blog__image"},u.a.createElement("img",{src:e.data.target.fields.file.de.url,alt:e.data.target.fields.title.de}))},o)};t.a=function(e){return u.a.createElement("div",null,u.a.createElement("div",{className:"blog__hero",style:{backgroundImage:"linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url("+e.heroImage.file.url+")"}},u.a.createElement("div",{className:"blog__hero__container"},u.a.createElement("h1",{className:"blog__title"},e.blogTitle),u.a.createElement("div",{className:"blog__author-date-wrapper"},u.a.createElement("p",{className:"blog__author"},e.blogAuthor),u.a.createElement("span",{className:"blog__author-date-separator"},"|"),u.a.createElement("p",{className:"blog__date"},e.date.toDateString())))),u.a.createElement("div",{className:"blog__contentWrapper"},u.a.createElement("div",{className:"blog__contentWrapper__container"},u.a.createElement("div",{className:"blog__postOverview"},e.blogPostOverview.blogPostOverview),Object(c.documentToReactComponents)(e.blogContent,l))))}},vbKG:function(e,t,n){"use strict";(function(e){n("DW2E"),n("hhXQ"),n("Z2Ku"),n("L9s1"),n("hHhE"),n("WLL4"),n("rE2o"),n("rGqo"),n("yt8O"),n("RW0V"),n("pIFo"),n("ioFf"),n("V+eJ"),n("KKXr"),n("a1Th"),n("h7Nl"),n("Btvt"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var a,u,i,c="object",l=function(e){return e&&e.Math==Math&&e},f=l(typeof globalThis==c&&globalThis)||l(typeof window==c&&window)||l(typeof self==c&&self)||l(typeof r==c&&r)||Function("return this")(),s=function(e){try{return!!e()}catch(t){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,v={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},g=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m={}.toString,y="".split,h=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return m.call(e).slice(8,-1)}(e)?y.call(e,""):Object(e)}:Object,b=function(e){return h(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},I=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_=function(e,t){if(!I(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!I(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!I(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!I(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},O={}.hasOwnProperty,T=function(e,t){return O.call(e,t)},S=f.document,L=I(S)&&I(S.createElement),D=function(e){return L?S.createElement(e):{}},N=!p&&!s((function(){return 7!=Object.defineProperty(D("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,w={f:p?A:function(e,t){if(e=b(e),t=_(t,!0),N)try{return A(e,t)}catch(n){}if(T(e,t))return g(!v.f.call(e,t),e[t])}},P=function(e){if(!I(e))throw TypeError(String(e)+" is not an object");return e},M=Object.defineProperty,j={f:p?M:function(e,t,n){if(P(e),t=_(t,!0),P(n),N)try{return M(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},R=p?function(e,t,n){return j.f(e,t,g(1,n))}:function(e,t,n){return e[t]=n,e},H=function(e,t){try{R(f,e,t)}catch(n){f[e]=t}return t},C=o((function(e){var t=f["__core-js_shared__"]||H("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),G=C("native-function-to-string",Function.toString),K=f.WeakMap,k="function"==typeof K&&/native code/.test(G.call(K)),B=0,x=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+x).toString(36)},Y=C("keys"),F=function(e){return Y[e]||(Y[e]=U(e))},W={},q=f.WeakMap;if(k){var V=new q,z=V.get,Q=V.has,J=V.set;a=function(e,t){return J.call(V,e,t),t},u=function(e){return z.call(V,e)||{}},i=function(e){return Q.call(V,e)}}else{var X=F("state");W[X]=!0,a=function(e,t){return R(e,X,t),t},u=function(e){return T(e,X)?e[X]:{}},i=function(e){return T(e,X)}}var Z={set:a,get:u,has:i,enforce:function(e){return i(e)?u(e):a(e,{})},getterFor:function(e){return function(t){var n;if(!I(t)||(n=u(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=o((function(e){var t=Z.get,n=Z.enforce,r=String(G).split("toString");C("inspectSource",(function(e){return G.call(e)})),(e.exports=function(e,t,o,a){var u=!!a&&!!a.unsafe,i=!!a&&!!a.enumerable,c=!!a&&!!a.noTargetGet;"function"==typeof o&&("string"!=typeof t||T(o,"name")||R(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==f?(u?!c&&e[t]&&(i=!0):delete e[t],i?e[t]=o:R(e,t,o)):i?e[t]=o:H(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G.call(this)}))})),ee=f,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(f[e]):ee[e]&&ee[e][t]||f[e]&&f[e][t]},re=Math.ceil,oe=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ue=Math.min,ie=Math.max,ce=Math.min,le=function(e){return function(t,n,r){var o,a,u=b(t),i=(o=u.length)>0?ue(ae(o),9007199254740991):0,c=function(e,t){var n=ae(e);return n<0?ie(n+t,0):ce(n,t)}(r,i);if(e&&n!=n){for(;i>c;)if((a=u[c++])!=a)return!0}else for(;i>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}},fe={includes:le(!0),indexOf:le(!1)},se=fe.indexOf,pe=function(e,t){var n,r=b(e),o=0,a=[];for(n in r)!T(W,n)&&T(r,n)&&a.push(n);for(;t.length>o;)T(r,n=t[o++])&&(~se(a,n)||a.push(n));return a},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),ve={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},ge={f:Object.getOwnPropertySymbols},me=ne("Reflect","ownKeys")||function(e){var t=ve.f(P(e)),n=ge.f;return n?t.concat(n(e)):t},ye=function(e,t){for(var n=me(t),r=j.f,o=w.f,a=0;a<n.length;a++){var u=n[a];T(e,u)||r(e,u,o(t,u))}},he=/#|\.prototype\./,be=function(e,t){var n=_e[Ie(e)];return n==Te||n!=Oe&&("function"==typeof t?s(t):!!t)},Ie=be.normalize=function(e){return String(e).replace(he,".").toLowerCase()},_e=be.data={},Oe=be.NATIVE="N",Te=be.POLYFILL="P",Se=be,Le=w.f,De=function(e,t){var n,r,o,a,u,i=e.target,c=e.global,l=e.stat;if(n=c?f:l?f[i]||H(i,{}):(f[i]||{}).prototype)for(r in t){if(a=t[r],o=e.noTargetGet?(u=Le(n,r))&&u.value:n[r],!Se(c?r:i+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ye(a,o)}(e.sham||o&&o.sham)&&R(a,"sham",!0),$(n,r,a,e)}},Ne=Object.keys||function(e){return pe(e,de)},Ae=v.f,we=function(e){return function(t){for(var n,r=b(t),o=Ne(r),a=o.length,u=0,i=[];a>u;)n=o[u++],p&&!Ae.call(r,n)||i.push(e?[n,r[n]]:r[n]);return i}},Pe={entries:we(!0),values:we(!1)}.values;De({target:"Object",stat:!0},{values:function(e){return Pe(e)}});ee.Object.values;var Me=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),je=f.Symbol,Re=C("wks"),He=p?Object.defineProperties:function(e,t){P(e);for(var n,r=Ne(t),o=r.length,a=0;o>a;)j.f(e,n=r[a++],t[n]);return e},Ce=ne("document","documentElement"),Ge=F("IE_PROTO"),Ke=function(){},ke=function(){var e,t=D("iframe"),n=de.length;for(t.style.display="none",Ce.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),ke=e.F;n--;)delete ke.prototype[de[n]];return ke()},Be=Object.create||function(e,t){var n;return null!==e?(Ke.prototype=P(e),n=new Ke,Ke.prototype=null,n[Ge]=e):n=ke(),void 0===t?n:He(n,t)};W[Ge]=!0;var xe,Ue=Re[xe="unscopables"]||(Re[xe]=Me&&je[xe]||(Me?je:U)("Symbol."+xe)),Ye=Array.prototype;null==Ye[Ue]&&R(Ye,Ue,Be(null));var Fe,We=fe.includes;De({target:"Array",proto:!0},{includes:function(e){return We(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ye[Ue][Fe]=!0;var qe,Ve,ze,Qe=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Je=Function.call;qe="includes",Qe(Je,f["Array"].prototype[qe],Ve);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(ze||(ze={}));var Xe,Ze=ze;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,et=Xe,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-templates-blog-posts-en-us-js-43c64f6c2edc18f76afb.js.map