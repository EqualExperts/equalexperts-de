(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+A0O":function(e,t,o){"use strict";var a=o("vwxV"),n=o("q1tI"),r=o.n(n),i=o("x0lo"),s=o("gD8t");t.a=function(){var e=a.data,t="undefined"!=typeof window?window.location.pathname:"",o=e.site.siteMetadata.languages,n=o.langs,l=o.defaultLangKey,d=Object(i.getCurrentLangKey)(n,l,t),g=d===l?"":"/"+d+"/";return r.a.createElement(s.a,{homeLink:g,navLinks:e.allContentfulMainNav.edges[0].node.navItems,switcherLinks:n})}},"4ubb":function(e,t,o){"use strict";o("a1Th"),o("Btvt"),o("9XZr");var a=o("q1tI"),n=o.n(a),r=o("Wbzz");t.a=function(e){return n.a.createElement("div",{className:"articlesList"},n.a.createElement("h2",null,e.title),e.articlesIntro.map((function(e,t){return e.content.map((function(o,a){return"paragraph"===e.nodeType?n.a.createElement("p",{key:"articlesList_IntroPara_"+t+"_"+a},o.value):[]}))})),n.a.createElement("ul",{className:"blogs__list"},e.articles.map((function(t){var o=new Date(Date.parse(t.node.blogDate));return n.a.createElement("li",{key:"articlesList_"+t.node.blogDate},n.a.createElement("article",null,n.a.createElement(r.Link,{to:""+e.homeLink+t.node.slug},t.node.blogTitle),n.a.createElement("div",{className:"articlesList_metaData"},n.a.createElement("span",null,(o.getMonth()+1).toString().padStart(2,"0"),"/",o.getFullYear()),n.a.createElement("span",null,"- ",t.node.blogAuthor)),n.a.createElement("p",{className:"articlesList_blogOverview"},t.node.blogPostOverview.blogPostOverview)))}))))}},"9XZr":function(e,t,o){"use strict";var a=o("XKFU"),n=o("Lgjv"),r=o("ol8x"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);a(a.P+a.F*i,"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},B92p:function(e,t,o){"use strict";o.r(t);var a=o("nsMM"),n=o("q1tI"),r=o.n(n),i=o("+A0O"),s=o("4ubb"),l=o("h0xc"),d=(o("sg+I"),o("x0lo"));t.default=function(e){e.children,e.location;var t=a.data,o="undefined"!=typeof window?window.location.pathname:"",n=t.site.siteMetadata.languages,g=n.langs,u=n.defaultLangKey,c=Object(d.getCurrentLangKey)(g,u,o),v=c===u?"":"/"+c+"/",h=t.allContentfulBlogPost.edges,m=t.allContentfulBlogList.edges[0].node;return r.a.createElement("div",{className:"main-container"},r.a.createElement(i.a,null),r.a.createElement(s.a,{homeLink:v,title:m.blogListTitle,articlesIntro:m.childContentfulBlogListBlogListContentRichTextNode.json.content,articles:h}),r.a.createElement(l.a,null))}},Lgjv:function(e,t,o){var a=o("ne8i"),n=o("l0Rn"),r=o("vhPU");e.exports=function(e,t,o,i){var s=String(r(e)),l=s.length,d=void 0===o?" ":String(o),g=a(t);if(g<=l||""==d)return s;var u=g-l,c=n.call(d,Math.ceil(u/d.length));return c.length>u&&(c=c.slice(0,u)),i?c+s:s+c}},h0xc:function(e,t,o){"use strict";var a=o("tHJ9"),n=o("q1tI"),r=o.n(n),i=o("m8XL"),s=o("x0lo");t.a=function(){var e=a.data,t="undefined"!=typeof window?window.location.pathname:"",o=e.site.siteMetadata.languages,n=o.langs,l=o.defaultLangKey,d=Object(s.getCurrentLangKey)(n,l,t),g=d===l?"":"/"+d+"/";return r.a.createElement(i.a,{homeLink:g,navLinks:e.allContentfulMainNav.edges[0].node.navItems,legalLinks:e.allContentfulLegalNav.edges[0].node.navItems,switcherLinks:n})}},l0Rn:function(e,t,o){"use strict";var a=o("RYi7"),n=o("vhPU");e.exports=function(e){var t=String(n(this)),o="",r=a(e);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(o+=t);return o}},nsMM:function(e){e.exports=JSON.parse('{"data":{"allContentfulBlogPost":{"edges":[{"node":{"slug":"worlds-simplest-agile-maturity-model","blogTitle":"Welcome to the world’s simplest agile maturity model","blogAuthor":"Dave Hewett","blogDate":"2017-11-30T00:00+01:00","blogPostOverview":{"blogPostOverview":"At Equal Experts we get to work with a large variety of clients and we keep getting asked about agile maturity and our view on what a good model might look like."}}},{"node":{"slug":"blogpost2","blogTitle":"R-ee-mote Working Playbook","blogAuthor":"  Dave Hewett","blogDate":"2019-12-02T00:00+05:30","blogPostOverview":{"blogPostOverview":"This remote working playbook takes learnings from a variety of EE consultants who have spent time working remotely with a view to help our network collaborate more effectively and provide ways to improve the distributed work experience."}}},{"node":{"slug":"role-engineers&techLeads","blogTitle":"Our Roles : Engineers & Tech leads","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"As the title suggests, Tech Leads provide technical leadership within their teams and steer technical decisions on their projects. And of course, all this happens in a consultative, collaborative fashion – in keeping with our values.\\n"}}},{"node":{"slug":"role-DevSecOps&Security","blogTitle":"Our Roles : DevSecOps & Security","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"We’re primarily interested in positive outcomes – and making sure the end user is happy is about as positive as it gets. We look for UX practitioners who are advocates of research-driven design, and for whom user data is a core part of the design toolbox, alongside deep knowledge of best practice and user behaviour.\\n"}}},{"node":{"slug":"role-dataAnalysts","blogTitle":"Our Roles : Data Analysts","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"We’re primarily interested in positive outcomes – and making sure the end user is happy is about as positive as it gets. We look for UX practitioners who are advocates of research-driven design, and for whom user data is a core part of the design toolbox, alongside deep knowledge of best practice and user behaviour.\\n"}}},{"node":{"slug":"role-DataEngineers&Scientists","blogTitle":"Our Roles : Data Engineers & Data Scientists","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"We’re primarily interested in positive outcomes – and making sure the end user is happy is about as positive as it gets. We look for UX practitioners who are advocates of research-driven design, and for whom user data is a core part of the design toolbox, alongside deep knowledge of best practice and user behaviour.\\n"}}},{"node":{"slug":"role-UX","blogTitle":"Our Roles : UX","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"We’re primarily interested in positive outcomes – and making sure the end user is happy is about as positive as it gets. We look for UX practitioners who are advocates of research-driven design, and for whom user data is a core part of the design toolbox, alongside deep knowledge of best practice and user behaviour.\\n"}}},{"node":{"slug":"role-QA","blogTitle":"Our Roles : QA","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"At EE, testing is not carried within a vacuum; our QAs form a core part of the delivery team throughout an engagement, ensuring that relevant tests are fully considered, designed and performed at the appropriate points.\\n"}}},{"node":{"slug":"role-ProductOwners&BusinessAnalysts","blogTitle":"Our Roles : Product Owners & Business Analysts","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Our product owners and business analysts champion the client and the product. They understand the context and domain of an initiative and support clients and teams in focusing on the right goals, articulating objectives and formulating a strategy to achieve these. They also provide thought leadership, and do not shy away from challenging the client to do the right thing; of course they will also support the client as they transform and change where appropriate.\\n"}}},{"node":{"slug":"role-deliveryLeads","blogTitle":"Our Roles : Delivery Leads","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"Our Delivery Leads have extensive experience in delivering enterprise-level software, and are responsible for the successful delivery of projects.\\n"}}},{"node":{"slug":"role-DevOps&OperabilityEngineers","blogTitle":"Our Roles : DevOps & Operability Engineers","blogAuthor":"Becky Smith","blogDate":"2020-03-02T00:00+01:00","blogPostOverview":{"blogPostOverview":"We’ve come to see operability as a fundamental tenet of our DevOps work. The reasoning? The role is not simply about facilitating the continuous delivery of quality software; we focus on the operational requirements we deliver to ensure that software runs in production, as desired.\\n"}}},{"node":{"slug":"empowerment-and-tech","blogTitle":"Empowerment and Tech","blogAuthor":"Becky Smith","blogDate":"2020-03-01T00:00+01:00","blogPostOverview":{"blogPostOverview":"Empowerment and Tech is a community of women in Berlin, that represent the diversity of roles within the Tech Industry. It is important to get more women into IT, but equally important to highlight the broad range of roles and expertise needed throughout the tech lifecycle. Our females represent HR, Sales, PR, Product, Coders and many many more."}}},{"node":{"slug":"blogpost1","blogTitle":"How we helped a long-term client cut its AWS costs by 66%","blogAuthor":"Matt Ralph","blogDate":"2020-01-15T00:00+05:30","blogPostOverview":{"blogPostOverview":"We’re often asked to help our clients build out their capability in the cloud or to help them reduce infrastructure costs. Being able to do both at the same time is the icing on the cake!"}}}]},"allContentfulBlogList":{"edges":[{"node":{"blogListTitle":"Blog","childContentfulBlogListBlogListContentRichTextNode":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Industry and tech insight from our leading team of experts","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"heading-2"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}}}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')},tHJ9:function(e){e.exports=JSON.parse('{"data":{"allContentfulMainNav":{"edges":[{"node":{"navItems":[{"navItemText":"Customers","navItemUrl":"#Our Clients"},{"navItemText":"Career","navItemUrl":"#Our Experts"},{"navItemText":"Empowerment and Tech","navItemUrl":"empowerment-and-tech"},{"navItemText":"Blog","navItemUrl":"blogs-list/"},{"navItemText":"Contact","navItemUrl":"#Get in touch"}]}}]},"allContentfulLegalNav":{"edges":[{"node":{"navItems":[{"navItemText":"Privacy Policy","navItemUrl":"privacy-policy/"},{"navItemText":"Imprint","navItemUrl":"imprint"},{"navItemText":"Modern Slavery Policy","navItemUrl":"modernSlaveryPolicy"}]}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')},vwxV:function(e){e.exports=JSON.parse('{"data":{"allContentfulMainNav":{"edges":[{"node":{"navItems":[{"navItemText":"Customers","navItemUrl":"#Our Clients"},{"navItemText":"Career","navItemUrl":"#Our Experts"},{"navItemText":"Empowerment and Tech","navItemUrl":"empowerment-and-tech"},{"navItemText":"Blog","navItemUrl":"blogs-list/"},{"navItemText":"Contact","navItemUrl":"#Get in touch"}]}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')}}]);
//# sourceMappingURL=component---src-pages-blogs-list-en-us-js-4fc2c5eadb8542badf71.js.map