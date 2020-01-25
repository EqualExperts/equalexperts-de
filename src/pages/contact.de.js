import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import HeaderDe from "../components/header.de";
import Footer from "../components/footer";

const Contact = ({ children, location }) => {
    const data =useStaticQuery(graphql`
        query ContactUsQueryDe {
            allContentfulContact(filter: {node_locale: {eq: "de"}}) {
            edges {
              node {
                contactHeading
                childContentfulContactContactBodyContentRichTextNode {
                  childContentfulRichText {
                    html
                  }
                }
                childContentfulContactContactAddressRichTextNode {
                  childContentfulRichText {
                    html
                  }
                }
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
    const url = location.pathname;
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
    return (
        <div className={`main-container`}>
            <HeaderDe siteTitle={data.site.siteMetadata.title} langs={langsMenu} />
            <article className={`content`}>
                <main>{children}</main>
                <h1 className={`contact__heading`}>{data.allContentfulContact.edges[0].node.contactHeading}</h1>
                <div className={`contact__content-wrapper`}>
                <div className={`contact__content`} dangerouslySetInnerHTML={{__html:data.allContentfulContact.edges[0].node.childContentfulContactContactBodyContentRichTextNode.childContentfulRichText.html}}/>
                <div className={`contact__address`} dangerouslySetInnerHTML={{__html:data.allContentfulContact.edges[0].node.childContentfulContactContactAddressRichTextNode.childContentfulRichText.html}}/>
                </div>
            </article>
            <Footer />
        </div>
    )
}

Contact.propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
}

export default Contact;
