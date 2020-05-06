import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { getCurrentLangKey } from "ptz-i18n"
import HeaderLayout from "./header_layout"

const HeaderDe = () => {
  const dataQuery = useStaticQuery(graphql`
    query headerDe {
      allContentfulMainNav(filter: { node_locale: { eq: "de" } }) {
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
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const { langs, defaultLangKey } = dataQuery.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  let homeLink = langKey === defaultLangKey ? "/" : `/${langKey}/`

  return (
    <HeaderLayout
      homeLink={homeLink}
      navLinks={dataQuery.allContentfulMainNav.edges[0].node.navItems}
      switcherLinks={langs}
    ></HeaderLayout>
  )
}

export default HeaderDe
