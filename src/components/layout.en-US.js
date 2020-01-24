import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import HeaderEn from "./header.en-US";
import Footer from "./footer";

const LayoutDe = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query layoutEn {
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
      <HeaderEn siteTitle={data.site.siteMetadata.title} langs={langsMenu} />
      <article className={`content`}>
        <main>{children}</main>
      </article>
      <Footer />
    </div>
  )
}

LayoutDe.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default LayoutDe
