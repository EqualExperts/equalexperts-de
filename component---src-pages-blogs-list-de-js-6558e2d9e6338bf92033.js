(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4ubb":function(e,n,t){"use strict";t("a1Th"),t("Btvt"),t("9XZr");var r=t("q1tI"),i=t.n(r),a=t("Wbzz");n.a=function(e){return i.a.createElement("div",{className:"articlesList"},i.a.createElement("h2",null,e.title),e.articlesIntro.map((function(e,n){return e.content.map((function(t,r){return"paragraph"===e.nodeType?i.a.createElement("p",{key:"articlesList_IntroPara_"+n+"_"+r},t.value):[]}))})),i.a.createElement("ul",{className:"blogs__list"},e.articles.map((function(n){var t=new Date(Date.parse(n.node.blogDate));return i.a.createElement("li",{key:"articlesList_"+n.node.blogDate},i.a.createElement("article",null,i.a.createElement(a.Link,{to:""+e.homeLink+n.node.slug},n.node.blogTitle),i.a.createElement("div",{className:"articlesList_metaData"},i.a.createElement("span",null,(t.getMonth()+1).toString().padStart(2,"0"),"/",t.getFullYear()),i.a.createElement("span",null,"- ",n.node.blogAuthor)),i.a.createElement("p",{className:"articlesList_blogOverview"},n.node.blogPostOverview.blogPostOverview)))}))))}},"9XZr":function(e,n,t){"use strict";var r=t("XKFU"),i=t("Lgjv"),a=t("ol8x"),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);r(r.P+r.F*s,"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},Lgjv:function(e,n,t){var r=t("ne8i"),i=t("l0Rn"),a=t("vhPU");e.exports=function(e,n,t,s){var l=String(a(e)),o=l.length,u=void 0===t?" ":String(t),d=r(n);if(d<=o||""==u)return l;var g=d-o,c=i.call(u,Math.ceil(g/u.length));return c.length>g&&(c=c.slice(0,g)),s?c+l:l+c}},M8UE:function(e,n,t){"use strict";t.r(n);var r=t("rd1M"),i=t("q1tI"),a=t.n(i),s=t("sQGc"),l=t("4ubb"),o=t("Uatp"),u=(t("sg+I"),t("x0lo"));n.default=function(e){e.children,e.location;var n=r.data,t="undefined"!=typeof window?window.location.pathname:"",i=n.site.siteMetadata.languages,d=i.langs,g=i.defaultLangKey,c=Object(u.getCurrentLangKey)(d,g,t),h=c===g?"":"/"+c+"/",v=n.allContentfulBlogPost.edges,b=n.allContentfulBlogList.edges[0].node;return a.a.createElement("div",{className:"main-container"},a.a.createElement(s.a,null),a.a.createElement(l.a,{homeLink:h,title:b.blogListTitle,articlesIntro:b.childContentfulBlogListBlogListContentRichTextNode.json.content,articles:v}),a.a.createElement(o.a,null))}},Uatp:function(e,n,t){"use strict";var r=t("bovL"),i=t("q1tI"),a=t.n(i),s=t("m8XL"),l=t("x0lo");n.a=function(){var e=r.data,n="undefined"!=typeof window?window.location.pathname:"",t=e.site.siteMetadata.languages,i=t.langs,o=t.defaultLangKey,u=Object(l.getCurrentLangKey)(i,o,n),d=u===o?"/":"/"+u+"/";return a.a.createElement(s.a,{homeLink:d,navLinks:e.allContentfulMainNav.edges[0].node.navItems,legalLinks:e.allContentfulLegalNav.edges[0].node.navItems,switcherLinks:i})}},bovL:function(e){e.exports=JSON.parse('{"data":{"allContentfulMainNav":{"edges":[{"node":{"navItems":[{"navItemText":"Kunde","navItemUrl":"#Unser Kunden"},{"navItemText":"Karriere","navItemUrl":"#Unser Experten"},{"navItemText":"Empowerment and Tech","navItemUrl":"empowerment-and-tech"},{"navItemText":"Blog","navItemUrl":"blogs-list/"},{"navItemText":"Kontact","navItemUrl":"#Kontakten"}]}}]},"allContentfulLegalNav":{"edges":[{"node":{"navItems":[{"navItemText":"Datenschutz","navItemUrl":"datenschutz/"},{"navItemText":"Impressum","navItemUrl":"impressum"},{"navItemText":"Modern Slavery Policy","navItemUrl":"modernSlaveryPolicy"}]}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')},h5lK:function(e){e.exports=JSON.parse('{"data":{"allContentfulMainNav":{"edges":[{"node":{"navItems":[{"navItemText":"Kunde","navItemUrl":"#Unser Kunden"},{"navItemText":"Karriere","navItemUrl":"#Unser Experten"},{"navItemText":"Empowerment and Tech","navItemUrl":"empowerment-and-tech"},{"navItemText":"Blog","navItemUrl":"blogs-list/"},{"navItemText":"Kontact","navItemUrl":"#Kontakten"}]}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')},l0Rn:function(e,n,t){"use strict";var r=t("RYi7"),i=t("vhPU");e.exports=function(e){var n=String(i(this)),t="",a=r(e);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(n+=n))1&a&&(t+=n);return t}},rd1M:function(e){e.exports=JSON.parse('{"data":{"allContentfulBlogPost":{"edges":[{"node":{"slug":"einfachsten-agilen-reifegradmodell-der-welt","blogTitle":"Willkommen zum einfachsten Agilen Reifegradmodell der Welt","blogAuthor":"Dave Hewett","blogDate":"2017-11-30T00:00+01:00","blogPostOverview":{"blogPostOverview":"Bei Equal Experts arbeiten wir mit den unterschiedlichsten Kunden und wir werden häufig nach Agiler Reife gefragt und wie denn ein gutes Modell aussehen könnte."}}},{"node":{"slug":"blogpost2","blogTitle":"R-ee-mote Working Spielbuch","blogAuthor":"  Dave Hewett","blogDate":"2019-12-02T00:00+05:30","blogPostOverview":{"blogPostOverview":"Dieses Spielbuch über das Arbeiten aus der Ferne nimmt die Erfahrungen einer Vielzahl von EE-Beratern auf, die Zeit damit verbracht haben, aus der Ferne zu arbeiten, um unserem Netzwerk zu helfen, effektiver zusammenzuarbeiten und Wege zu finden, die verteilte Arbeitserfahrung zu verbessern."}}},{"node":{"slug":"role-engineers&techLeads","blogTitle":"unser Rollen : Engineers & Tech leads","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Wie der Titel schon andeutet, übernehmen die Tech Leads die technische Leitung innerhalb ihrer Teams und steuern die technischen Entscheidungen für ihre Projekte. Und natürlich geschieht all dies in einer beratenden, kooperativen Weise - in Übereinstimmung mit unseren Werten."}}},{"node":{"slug":"role-DevSecOps&Security","blogTitle":"unser Rollen : DevSecOps & Security","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Wir sind in erster Linie an positiven Ergebnissen interessiert - und dafür zu sorgen, dass der Endnutzer zufrieden ist, ist so positiv wie nur möglich. Wir suchen nach UX-Praktikern, die sich für forschungsgetriebenes Design einsetzen und für die Benutzerdaten neben fundierten Kenntnissen über bewährte Verfahren und Benutzerverhalten ein Kernstück der Design-Toolbox darstellen."}}},{"node":{"slug":"role-dataAnalysts","blogTitle":"unser Rollen : Data Analysts","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Wir sind in erster Linie an positiven Ergebnissen interessiert - und dafür zu sorgen, dass der Endnutzer zufrieden ist, ist so positiv wie nur möglich. Wir suchen nach UX-Praktikern, die sich für forschungsgetriebenes Design einsetzen und für die Benutzerdaten neben fundierten Kenntnissen über bewährte Verfahren und Benutzerverhalten ein Kernstück der Design-Toolbox darstellen."}}},{"node":{"slug":"role-DataEngineers&Scientists","blogTitle":"unser Rollen : Data Engineers & Data Scientists","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Wir sind in erster Linie an positiven Ergebnissen interessiert - und dafür zu sorgen, dass der Endnutzer zufrieden ist, ist so positiv wie nur möglich. Wir suchen nach UX-Praktikern, die sich für forschungsgetriebenes Design einsetzen und für die Benutzerdaten neben fundierten Kenntnissen über bewährte Verfahren und Benutzerverhalten ein Kernstück der Design-Toolbox darstellen."}}},{"node":{"slug":"role-UX","blogTitle":"unser Rollen : UX","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Wir sind in erster Linie an positiven Ergebnissen interessiert - und dafür zu sorgen, dass der Endnutzer zufrieden ist, ist so positiv wie nur möglich. Wir suchen nach UX-Praktikern, die sich für forschungsgetriebenes Design einsetzen und für die Benutzerdaten neben fundierten Kenntnissen über bewährte Verfahren und Benutzerverhalten ein Kernstück der Design-Toolbox darstellen."}}},{"node":{"slug":"role-QA","blogTitle":"unser Rollen : QA","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Bei EE werden die Tests nicht im luftleeren Raum durchgeführt; unsere QAs bilden während eines gesamten Auftrags ein Kernstück des Auslieferungsteams und stellen sicher, dass relevante Tests vollständig berücksichtigt, entworfen und an den entsprechenden Stellen durchgeführt werden."}}},{"node":{"slug":"role-ProductOwners&BusinessAnalysts","blogTitle":"unser Rollen : Product Owners & Business Analysts","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Unsere Produkteigentümer und Geschäftsanalysten setzen sich für den Kunden und das Produkt ein. Sie verstehen den Kontext und den Bereich einer Initiative und unterstützen Kunden und Teams dabei, sich auf die richtigen Ziele zu konzentrieren, Ziele zu artikulieren und eine Strategie zu formulieren, um diese zu erreichen. Sie bieten auch Denkanstöße und schrecken nicht davor zurück, den Kunden herauszufordern, das Richtige zu tun; natürlich unterstützen sie den Kunden auch bei der Transformation und Veränderung, wo dies angebracht ist."}}},{"node":{"slug":"role-deliveryLeads","blogTitle":"unser Rollen : Delivery Leads","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Unsere Delivery Leads verfügen über umfassende Erfahrung bei der Bereitstellung von Software auf Unternehmensebene und sind für die erfolgreiche Durchführung von Projekten verantwortlich."}}},{"node":{"slug":"role-DevOps&OperabilityEngineers","blogTitle":"unser Rollen : DevOps & Operability Engineers","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Wir haben die Funktionsfähigkeit als einen fundamentalen Grundsatz unserer Arbeit der DevOps erkannt. Die Begründung? Es geht nicht nur darum, die kontinuierliche Bereitstellung von Qualitätssoftware zu erleichtern; wir konzentrieren uns auf die operativen Anforderungen, die wir liefern, um sicherzustellen, dass die Software wie gewünscht in Produktion geht."}}},{"node":{"slug":"empowerment-and-tech","blogTitle":"Empowerment and Tech","blogAuthor":"Becky Smith","blogDate":"2020-03-01T00:00+01:00","blogPostOverview":{"blogPostOverview":"Empowerment und Tech ist eine Gemeinschaft von Frauen in Berlin, die die Vielfalt der Rollen innerhalb der Technikindustrie repräsentieren. Es ist wichtig, mehr Frauen in die IT-Branche zu bringen, aber ebenso wichtig ist es, das breite Spektrum der Rollen und des Fachwissens hervorzuheben, das während des gesamten technischen Lebenszyklus benötigt wird. Unsere Frauen repräsentieren HR, Vertrieb, PR, Produkt, Codierer und viele viele andere."}}},{"node":{"slug":"blogpost1","blogTitle":"Wie wir einem langfristigen Kunden geholfen haben, seine AWS-Kosten um 66% zu senken","blogAuthor":"Matt Ralph","blogDate":"2020-01-15T00:00+05:30","blogPostOverview":{"blogPostOverview":"Wir werden oft gebeten, unsere Kunden beim Ausbau ihrer Fähigkeiten in der Cloud zu unterstützen oder ihnen dabei zu helfen, ihre Infrastrukturkosten zu senken. Beides gleichzeitig tun zu können, ist das Sahnehäubchen auf dem Kuchen!"}}}]},"allContentfulBlogList":{"edges":[{"node":{"blogListTitle":"Blog","childContentfulBlogListBlogListContentRichTextNode":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Branchen- und Technologie-Einblicke von unserem führenden Expertenteam","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}}}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')},sQGc:function(e,n,t){"use strict";var r=t("h5lK"),i=t("q1tI"),a=t.n(i),s=t("x0lo"),l=t("gD8t");n.a=function(){var e=r.data,n="undefined"!=typeof window?window.location.pathname:"",t=e.site.siteMetadata.languages,i=t.langs,o=t.defaultLangKey,u=Object(s.getCurrentLangKey)(i,o,n),d=u===o?"/":"/"+u+"/";return a.a.createElement(l.a,{homeLink:d,navLinks:e.allContentfulMainNav.edges[0].node.navItems,switcherLinks:i})}}}]);
//# sourceMappingURL=component---src-pages-blogs-list-de-js-6558e2d9e6338bf92033.js.map