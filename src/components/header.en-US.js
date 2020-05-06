import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { getCurrentLangKey } from "ptz-i18n"
import HeaderLayout from "./header_layout"

const HeaderDe = (location) => {
  const dataQuery = useStaticQuery(graphql`
    query headerEn {
      allContentfulMainNav(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            navItems {
              navItemText
              navItemUrl
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `)
  const url = typeof window !== "undefined" ? window.location.pathname : ""
  const { langs, defaultLangKey } = dataQuery.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = langKey === defaultLangKey ? "" : `/${langKey}/`;

  return (
    <HeaderLayout
      homeLink={homeLink}
      navLinks={dataQuery.allContentfulMainNav.edges[0].node.navItems}
      switcherLinks={langs}
    ></HeaderLayout>
  )
}

export default HeaderDe
