import {graphql, Link, useStaticQuery} from "gatsby"
import React from "react"
import image from '../images/logo.svg'

const HeaderEn = (props) => {
  const dataQuery = useStaticQuery(graphql`
        query MyQuery3 {
          allContentfulHeaderMenu(filter: {node_locale: {eq: "en-US"}}){
            edges {
              node {
                contactLink
                blogLink
              }
            }
          }
        }
      `);
  const links = props.langs.map(lang => {
        return (
            <li>
              <Link to={lang.link} key={lang.langKey}>
              <span selected={lang.selected}>
                {lang.langKey}
              </span>
              </Link>
            </li>
        )
      }
  );

  return (
    <header className={`header`}>
      <div className={`header__content-wrapper`}>
        <Link to={'/'}>
        <img className={`header__logo`} src={image} alt={`Equal Experts logo`} />
        </Link>
        <nav className={`header__navigation`}>
          <Link to="/en-US/blogs-list/" className={`header__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.blogLink}</Link>
          <Link to="/en-US/contact/" className={`header__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.contactLink}</Link>
        </nav>
        <div className={`header__lang-switcher`}>
          <ul>
            {links}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeaderEn
