(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4ubb":function(e,t,n){"use strict";n("a1Th"),n("Btvt"),n("9XZr");var a=n("q1tI"),r=n.n(a),i=n("Wbzz");t.a=function(e){return r.a.createElement("div",{className:"articlesList"},r.a.createElement("h2",null,e.title),e.articlesIntro.map((function(e,t){return e.content.map((function(n,a){return"paragraph"===e.nodeType?r.a.createElement("p",{key:"articlesList_IntroPara_"+t+"_"+a},n.value):[]}))})),r.a.createElement("ul",{className:"blogs__list"},e.articles.map((function(t){var n=new Date(Date.parse(t.node.blogDate));return r.a.createElement("li",{key:"articlesList_"+t.node.blogDate},r.a.createElement("article",null,r.a.createElement(i.Link,{to:""+e.homeLink+t.node.slug},t.node.blogTitle),r.a.createElement("div",{className:"articlesList_metaData"},r.a.createElement("span",null,(n.getMonth()+1).toString().padStart(2,"0"),"/",n.getFullYear()),r.a.createElement("span",null,"- ",t.node.blogAuthor)),r.a.createElement("p",{className:"articlesList_blogOverview"},t.node.blogPostOverview.blogPostOverview)))}))))}},"9XZr":function(e,t,n){"use strict";var a=n("XKFU"),r=n("Lgjv"),i=n("ol8x"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);a(a.P+a.F*l,"String",{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},Lgjv:function(e,t,n){var a=n("ne8i"),r=n("l0Rn"),i=n("vhPU");e.exports=function(e,t,n,l){var o=String(i(e)),s=o.length,d=void 0===n?" ":String(n),u=a(t);if(u<=s||""==d)return o;var g=u-s,c=r.call(d,Math.ceil(g/d.length));return c.length>g&&(c=c.slice(0,g)),l?c+o:o+c}},M8UE:function(e,t,n){"use strict";n.r(t);var a=n("X4O1"),r=n("q1tI"),i=n.n(r),l=n("sQGc"),o=n("4ubb"),s=n("Uatp"),d=(n("sg+I"),n("x0lo"));t.default=function(e){e.children,e.location;var t=a.data,n="undefined"!=typeof window?window.location.pathname:"",r=t.site.siteMetadata.languages,u=r.langs,g=r.defaultLangKey,c=Object(d.getCurrentLangKey)(u,g,n),m=c===g?"":"/"+c+"/",v=t.allContentfulBlogPost.edges,h=t.allContentfulBlogList.edges[0].node;return i.a.createElement("div",{className:"main-container"},i.a.createElement(l.a,null),i.a.createElement(o.a,{homeLink:m,title:h.blogListTitle,articlesIntro:h.childContentfulBlogListBlogListContentRichTextNode.json.content,articles:v}),i.a.createElement(s.a,null))}},Uatp:function(e,t,n){"use strict";var a=n("wRtG"),r=n("q1tI"),i=n.n(r),l=n("m8XL"),o=n("x0lo");t.a=function(){var e=a.data,t="undefined"!=typeof window?window.location.pathname:"",n=e.site.siteMetadata.languages,r=n.langs,s=n.defaultLangKey,d=Object(o.getCurrentLangKey)(r,s,t),u=d===s?"/":"/"+d+"/";return i.a.createElement(l.a,{homeLink:u,navLinks:e.allContentfulMainNav.edges[0].node.navItems,legalLinks:e.allContentfulLegalNav.edges[0].node.navItems,switcherLinks:r})}},X4O1:function(e){e.exports=JSON.parse('{"data":{"allContentfulBlogPost":{"edges":[{"node":{"slug":"aws-cost-reduction-consultation","blogTitle":"Wie wir einem langfristigen Kunden geholfen haben, seine AWS-Kosten um 66% zu senken","blogAuthor":"Matt Ralph","blogDate":"2020-01-15T00:00+05:30","blogPostOverview":{"blogPostOverview":"Wir werden oft gebeten, unsere Kunden beim Ausbau ihrer Fähigkeiten in der Cloud zu unterstützen oder ihnen dabei zu helfen, ihre Infrastrukturkosten zu senken. Beides gleichzeitig tun zu können, ist das Sahnehäubchen auf dem Kuchen!"}}},{"node":{"slug":"blogpost2","blogTitle":"R-ee-mote Working Playbook","blogAuthor":"  Dave Hewett","blogDate":"2019-12-02T00:00+05:30","blogPostOverview":{"blogPostOverview":"Dieses Spielbuch über das Arbeiten aus der Ferne nimmt die Erfahrungen einer Vielzahl von EE-Beratern auf, die Zeit damit verbracht haben, aus der Ferne zu arbeiten, um unserem Netzwerk zu helfen, effektiver zusammenzuarbeiten und Wege zu finden, die verteilte Arbeitserfahrung zu verbessern."}}},{"node":{"slug":"einfachsten-agilen-reifegradmodell-der-welt","blogTitle":"Willkommen zum einfachsten Agilen Reifegradmodell der Welt","blogAuthor":"Dave Hewett","blogDate":"2017-11-30T00:00+01:00","blogPostOverview":{"blogPostOverview":"Bei Equal Experts arbeiten wir mit den unterschiedlichsten Kunden und wir werden häufig nach Agiler Reife gefragt und wie denn ein gutes Modell aussehen könnte."}}},{"node":{"slug":"empowerment-and-tech","blogTitle":"Empowerment and Tech","blogAuthor":"Becky Smith","blogDate":"2020-03-01T00:00+01:00","blogPostOverview":{"blogPostOverview":"Empowerment und Tech ist eine Gemeinschaft von Frauen in Berlin, die die Vielfalt der Rollen innerhalb der Technikindustrie repräsentieren. Es ist wichtig, mehr Frauen in die IT-Branche zu bringen, aber ebenso wichtig ist es, das breite Spektrum der Rollen und des Fachwissens hervorzuheben, das während des gesamten technischen Lebenszyklus benötigt wird. Unsere Frauen repräsentieren HR, Vertrieb, PR, Produkt, Codierer und viele viele andere."}}}]},"allContentfulBlogList":{"edges":[{"node":{"blogListTitle":"Blog","childContentfulBlogListBlogListContentRichTextNode":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Branchen- und Technologie-Einblicke von unserem führenden Expertenteam","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}}}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')},l0Rn:function(e,t,n){"use strict";var a=n("RYi7"),r=n("vhPU");e.exports=function(e){var t=String(r(this)),n="",i=a(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},sQGc:function(e,t,n){"use strict";var a=n("tW6Y"),r=n("q1tI"),i=n.n(r),l=n("x0lo"),o=n("gD8t");t.a=function(){var e=a.data,t="undefined"!=typeof window?window.location.pathname:"",n=e.site.siteMetadata.languages,r=n.langs,s=n.defaultLangKey,d=Object(l.getCurrentLangKey)(r,s,t),u=d===s?"/":"/"+d+"/";return i.a.createElement(o.a,{homeLink:u,navLinks:e.allContentfulMainNav.edges[0].node.navItems,switcherLinks:r})}},tW6Y:function(e){e.exports=JSON.parse('{"data":{"allContentfulMainNav":{"edges":[{"node":{"navItems":[{"navItemText":"Kunden","navItemUrl":"#Unser Kunden"},{"navItemText":"Karriere","navItemUrl":"#Unser Experten"},{"navItemText":"Empowerment and Tech","navItemUrl":"empowerment-and-tech"},{"navItemText":"Blog","navItemUrl":"blogs-list/"},{"navItemText":"Kontakt","navItemUrl":"#Kontakt"}]}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')},wRtG:function(e){e.exports=JSON.parse('{"data":{"allContentfulMainNav":{"edges":[{"node":{"navItems":[{"navItemText":"Kunden","navItemUrl":"#Unser Kunden"},{"navItemText":"Karriere","navItemUrl":"#Unser Experten"},{"navItemText":"Empowerment and Tech","navItemUrl":"empowerment-and-tech"},{"navItemText":"Blog","navItemUrl":"blogs-list/"},{"navItemText":"Kontakt","navItemUrl":"#Kontakt"}]}}]},"allContentfulLegalNav":{"edges":[{"node":{"navItems":[{"navItemText":"Datenschutz","navItemUrl":"datenschutz/"},{"navItemText":"Impressum","navItemUrl":"impressum"},{"navItemText":"Modern Slavery Policy","navItemUrl":"modernSlaveryPolicy"}]}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')}}]);
//# sourceMappingURL=component---src-pages-blogs-list-de-js-0f082a231a7cc18dd679.js.map