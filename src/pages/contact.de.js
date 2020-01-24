import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import HeaderDe from "../components/header.de";
import Footer from "../components/footer";

const Contact = ({ children, location }) => {
    const data = useStaticQuery(graphql`
    query Site4Query {
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
  `)
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
            </article>
            <Footer />
        </div>
    )
}

Contact.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
}

export default Contact
