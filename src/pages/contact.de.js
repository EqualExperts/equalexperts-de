import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import HeaderDe from "../components/header.de-DE";
import FooterDe from "../components/footer.de-DE";

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
        }
      `);
    return (
        <div className={`main-container`}>
            <HeaderDe/>
            <article className={`content`}>
                <main>{children}</main>
                <h1 className={`contact__heading`}>{data.allContentfulContact.edges[0].node.contactHeading}</h1>
                <div className={`contact__content-wrapper`}>
                <div className={`contact__content`} dangerouslySetInnerHTML={{__html:data.allContentfulContact.edges[0].node.childContentfulContactContactBodyContentRichTextNode.childContentfulRichText.html}}/>
                <div className={`contact__address`} dangerouslySetInnerHTML={{__html:data.allContentfulContact.edges[0].node.childContentfulContactContactAddressRichTextNode.childContentfulRichText.html}}/>
                </div>
            </article>
            <FooterDe />
        </div>
    )
}

Contact.propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
}

export default Contact;
