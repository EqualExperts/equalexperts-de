import {graphql, Link, useStaticQuery} from "gatsby"
import React from "react"
import FooterLayout from "./footer_layout";

const FooterUS = () => {
    const dataQuery = useStaticQuery(graphql`
        query footerUS {
          allContentfulHeaderMenu(filter: {node_locale: {eq: "en-US"}}){
            edges {
              node {
                contactLink
                blogLink
              }
            }
          }
          site {
                siteMetadata {
                  title,
                  description,
                  languages {
                    defaultLangKey
                    langs
                  }
                }
          }
        }
      `);

    const navLinks = [
      <Link to="/en-US/customers/" key={'blogNavItem1'} className={`footer__navigation-link`}>Customers</Link>,
      <Link to="/en-US/career/" key={'blogNavItem2'} className={`footer__navigation-link`}>Career</Link>,
      <Link to="/en-US/blogs-list/" key={'blogNavItem3'} className={`footer__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.blogLink}</Link>,
      <Link to="/en-US/contact/" key={'blogNavItem4'} className={`footer__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.contactLink}</Link>
    ];
    const legalLinks = [
      <li className="legal-navigation__item" key={'legalNavItem1'}><a href="/privacy-notice">Privacy notice</a></li>,
      <li className="legal-navigation__item" key={'legalNavItem2'}><a href="/modern-slavery-policy">Modern Slavery policy</a></li>,
      <li className="legal-navigation__item" key={'legalNavItem3'}><a href="/brand">Brand resources</a></li>,
    ];

    return (
      <FooterLayout
            navLinks={navLinks}
            legalLinks={legalLinks}
      >
      </FooterLayout>
    );
}

export default FooterUS
