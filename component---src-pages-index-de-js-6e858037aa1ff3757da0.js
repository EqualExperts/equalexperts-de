(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1wmS":function(e,t,n){"use strict";n("tUrg");var r=n("q1tI"),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"module contact"},o.a.createElement("h2",{className:"module_heading"},e.contactCopy.contactIntroductionTitle),e.contactCopy.contactIntroduction.json.content.map((function(e){return e.content.map((function(e){return o.a.createElement("p",{className:"contact_intro",key:e.value},e.value)}))}))),o.a.createElement("div",{className:"contact_locations"},o.a.createElement("h2",{className:"module_heading"},e.contactCopy.contactSectionHeading),o.a.createElement("div",{className:"contact_locationsContainers"},e.officeLocations.map((function(e){return o.a.createElement("div",{className:"contact_location",key:e.node.city},o.a.createElement("h3",{className:"contact__region"},e.node.region),o.a.createElement("h4",{className:"contact__city"},e.node.city),o.a.createElement("a",{className:"contact__tel",href:"tel:"},e.node.tel),o.a.createElement("a",{className:"contact__email",href:"mailto:{location.node.email}"},e.node.email),o.a.createElement("a",{href:e.node.link,className:"btn btn--secondary"},e.node.linkText))})))))}},"2rMq":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r)}()},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("/SS/"),n("hHhE");var o=n("q1tI"),a=r(o),i=r(n("2rMq")),c=r(n("Gytx"));e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l=[],u=void 0;function s(){u=e(l.map((function(e){return e.props}))),p.canUseDOM?t(u):n&&(u=n(u))}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return u},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){l.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},t.prototype.render=function(){return a.createElement(r,this.props)},t}(o.Component);return p.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",p.canUseDOM=i.canUseDOM,p}}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","author":"devs@equalexperts"}}}}')},G2at:function(e){e.exports=JSON.parse('{"data":{"allContentfulContactModule":{"edges":[{"node":{"contactIntroductionTitle":"Hier zu bleiben","contactIntroduction":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Equal Experts DE ist Teil unseres europäischen Netzwerks.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"\\nWir arbeiten seit 2015 in Deutschland und haben 2018 unseren EU-Hauptsitz hier in Berlin eingerichtet, um unsere Kunden zu unterstützen und unser Netzwerk von internationalen Partnern auszubauen.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}},"contactSectionHeading":"Kontakten"}}]},"allContentfulOfficeLocation":{"edges":[{"node":{"region":"HQ","city":"Berlin","tel":"004915120073771","email":"helloBER@equalexperts.com","linkText":"Karte und mehr info","link":"/contact-us"}},{"node":{"region":"Süd","city":"München","tel":"004915120073771","email":"helloMUC@equalexperts.com","linkText":"Karte und mehr info","link":"/contact-us"}},{"node":{"region":"West","city":"Köln","tel":"004915120073771","email":"helloCGN@equalexperts.com","linkText":"Karte und mehr info","link":"/contact-us"}}]}}}')},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var u=a[l];if(!c(u))return!1;var s=e[u],p=t[u];if(!1===(o=n?n.call(r,s,p,u):void 0)||void 0===o&&s!==p)return!1}return!0}},OeXx:function(e,t,n){"use strict";n("f3/d");var r=n("q1tI"),o=n.n(r);t.a=function(e){return o.a.createElement("div",{className:"module client_container"},o.a.createElement("h2",{className:"module_heading"},e.title),o.a.createElement("ul",{className:"client_list"},e.clientData.map((function(e){return o.a.createElement("li",{className:"client_item",key:e.name},o.a.createElement("img",{src:e.url,alt:e.name}))}))))}},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,i=n("kJMx").f,c=n("quPj"),l=n("C/va"),u=r.RegExp,s=u,p=u.prototype,d=/a/g,f=/a/g,T=new u(d)!==d;if(n("nh4g")&&(!T||n("eeVq")((function(){return f[n("K0xU")("match")]=!1,u(d)!=d||u(f)==f||"/a/i"!=u(d,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),a=void 0===t;return!n&&r&&e.constructor===u&&a?e:o(T?new s(r&&!a?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&a?l.call(e):t),n?this:p,u)};for(var m=function(e){e in u||a(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},E=i(s),h=0;E.length>h;)m(E[h++]);p.constructor=u,u.prototype=p,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=p(n("q1tI")),i=p(n("17x9")),c=p(n("8+s/")),l=p(n("bmMU")),u=n("v1p5"),s=n("hFT/");function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var f,T,m,E=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),h=(f=E,m=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},a,((t={})[o.type]=c,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=d(o,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=d(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(f,o)},o(t,null,[{key:"canUseDOM",set:function(e){f.canUseDOM=e}}]),t}(a.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=f.peek,T.rewind=function(){var e=f.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);h.renderStatic=h.rewind,t.Helmet=h,t.default=h},UWgG:function(e,t,n){"use strict";n.r(t);n("KKXr");var r=n("q1tI"),o=n.n(r),a=n("sQGc"),i=n("Uatp"),c=function(e){var t=e.children;e.location;return o.a.createElement("div",{className:"main-container"},o.a.createElement(a.a,null),o.a.createElement("article",{className:"content"},o.a.createElement("main",null,t)),o.a.createElement(i.a,null))},l=n("vrFN"),u=n("wYmO"),s=n("OeXx"),p=[{name:"Jio",url:"https://www.equalexperts.com/wp-content/uploads/2019/08/Jio-300x121.png"},{name:"ONS",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/ONS.png"},{name:"NBC",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/NBC-e1562592650761.png"},{name:"Tesco Mobile",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/Tesco_Mobile.png"},{name:"Shop Direct",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/Shop_Direct.png"},{name:"Sainsburys",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/Sainsburys.png"},{name:"MeetUp",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/MeetUp.png"},{name:"Lloyds Pharmacy",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/Lloyds_Pharmacy.png"},{name:"Siemens Healthineers",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/Siemens_Healthineers.png"},{name:"The Economist",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/The_Economist-e1562592666642.png"},{name:"Sky_Bet",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/Sky_Bet_-e1562592683365.png"},{name:"HMPO",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/HMPO.png"},{name:"Border Force",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/Border_Force-e1562586725548.png"},{name:"Thames Water",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/Thames_Water_-e1562592736456.png"},{name:"ZOPA",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/ZOPA.png"},{name:"Santander",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/Santander.png"},{name:"itv",url:"https://www.equalexperts.com/wp-content/uploads/2019/07/itv-300x81.png"},{name:"GOV.UK",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Gov.UK_-300x54.png"},{name:"Legal General",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Legal-General-300x153.png"},{name:"Companies House",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Companies-House-300x96.png"},{name:"Experian",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Experian-300x114.png"},{name:"UBS",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/UBS-300x92.png"},{name:"Fidelity",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Fidelity-300x74.png"},{name:"Vocalink",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Vocalink-300x70.png"},{name:"Rightmove",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Rightmove-300x97.png"},{name:"Bookatable",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Bookatable-300x67.png"},{name:"Telefonica",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Telefonica-300x89.png"},{name:"Tesco",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Tesco-300x78.png"},{name:"Klarna",url:"https://www.equalexperts.com/wp-content/uploads/2018/02/Klarna-300x81-V2-300x81.png"},{name:"Springer",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Springer-300x83.png"},{name:"M&amp;S",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/MS-300x114.png"},{name:"BBC",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/BBC-300x81.png"},{name:"LMAX",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Lmax-300x81.png"},{name:"Compare The Market",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Compare-the-Market-300x40.png"},{name:"Barclays",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Barclays-300x61.png"},{name:"Barclaycard",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Barclaycard-300x73.png"},{name:"Visa",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Visa-300x67.png"},{name:"Tesco Bank",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Tesco-Bank-300x67.png"},{name:"American Express",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Amex-300x154.png"},{name:"BGL Group",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/bglgroup-300x133.png"},{name:"Informa",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/Informa-300x67.png"},{name:"TUI",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/TUI-300x111.png"},{name:"WEVE",url:"https://www.equalexperts.com/wp-content/uploads/2016/10/WEVE2-30-300x93.png"}],d=function(e){var t=u.data;return o.a.createElement(s.a,{clientData:p,title:t.allContentfulClientsModule.edges[0].node.title})},f=n("G2at"),T=n("1wmS"),m=function(e){var t=f.data;return o.a.createElement(T.a,{contactCopy:t.allContentfulContactModule.edges[0].node,officeLocations:t.allContentfulOfficeLocation.edges.reverse()})};n("sg+I");n.d(t,"pageQuery",(function(){return h}));var E=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data,t=e.allContentfulModuleTextandCta.edges,n=e.allContentfulHeroModule.edges,r=e.allContentfulModuleTextOnly.edges[0];return o.a.createElement(c,{location:this.props.location},o.a.createElement(l.a,{title:"Home"}),n.map((function(e){var t=e.node.heroHeading.split(/(?<=\.)/);return o.a.createElement("div",{className:"hero__container",key:e},o.a.createElement("img",{className:"hero__image",src:""+e.node.heroImage.file.url,alt:""}),o.a.createElement("h1",{className:"hero__title"},t[0],o.a.createElement("span",{className:"hero__lastLine"},t[1])))})),o.a.createElement("div",{className:"simple-text-module",dangerouslySetInnerHTML:{__html:r.node.childContentfulModuleTextOnlyContentRichTextNode.childContentfulRichText.html}}),o.a.createElement(d,null),o.a.createElement(m,null),t.map((function(e){return o.a.createElement("div",{className:"module",key:e},o.a.createElement("div",{className:"module__title"},e.node.moduleTitle),o.a.createElement("div",{className:"module__content",dangerouslySetInnerHTML:{__html:e.node.moduleContent.childContentfulRichText.html}}),e.node.moduleCtAlink.childContentfulRichText.html?o.a.createElement("div",{className:"module__link",dangerouslySetInnerHTML:{__html:e.node.moduleCtAlink.childContentfulRichText.html}}):"")})))},r}(o.a.Component),h=(t.default=E,"2402734227")},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,u,s=r(t),p=r(n);if(s&&p){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=p)return!1;var d=t instanceof Date,f=n instanceof Date;if(d!=f)return!1;if(d&&f)return t.getTime()==n.getTime();var T=t instanceof RegExp,m=n instanceof RegExp;if(T!=m)return!1;if(T&&m)return t.toString()==n.toString();var E=o(t);if((l=E.length)!==o(n).length)return!1;for(c=l;0!=c--;)if(!a.call(n,E[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(u=E[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=l(n("q1tI")),i=l(n("MgzW")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=E(e,c.TAG_NAMES.TITLE),n=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},m=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],u=l.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),l=0;l<a.length;l++){var u=a[l],s=(0,i.default)({},o[u],r[u]);o[u]=s}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){h(e)}),0)}),w=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||w:e.cancelAnimationFrame||w,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,p=e.styleTags,d=e.title,f=e.titleAttributes;M(c.TAG_NAMES.BODY,r),M(c.TAG_NAMES.HTML,o),b(d,f);var T={baseTag:O(c.TAG_NAMES.BASE,n),linkTags:O(c.TAG_NAMES.LINK,a),metaTags:O(c.TAG_NAMES.META,i),noscriptTags:O(c.TAG_NAMES.NOSCRIPT,l),scriptTags:O(c.TAG_NAMES.SCRIPT,s),styleTags:O(c.TAG_NAMES.STYLE,p)},m={},E={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=T[e].oldTags)})),t&&t(),u(e,m,E)},v=function(e){return Array.isArray(e)?e.join(""):e},b=function(e,t){void 0!==e&&document.title!==e&&(document.title=v(e)),M(c.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var p=a.indexOf(u);-1!==p&&a.splice(p,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},O=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},R=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=x(n,r),[a.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=R(n),a=v(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){_&&y(_),e.defer?_=A((function(){g(e,(function(){_=null}))})):(g(e),_=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,p=e.title,d=void 0===p?"":p,f=e.titleAttributes;return{base:C(c.TAG_NAMES.BASE,t,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,o,r),link:C(c.TAG_NAMES.LINK,a,r),meta:C(c.TAG_NAMES.META,i,r),noscript:C(c.TAG_NAMES.NOSCRIPT,l,r),script:C(c.TAG_NAMES.SCRIPT,u,r),style:C(c.TAG_NAMES.STYLE,s,r),title:C(c.TAG_NAMES.TITLE,{title:d,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=S}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("EH9Q"),o=n("q1tI"),a=n.n(o),i=n("TJpk"),c=n.n(i);function l(e){var t=e.description,n=e.lang,o=e.meta,i=e.title,l=r.data.site,u=t||l.siteMetadata.description;return a.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(o)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},wYmO:function(e){e.exports=JSON.parse('{"data":{"allContentfulClientsModule":{"edges":[{"node":{"title":"Unser Kunden"}}]}}}')},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-de-js-6e858037aa1ff3757da0.js.map