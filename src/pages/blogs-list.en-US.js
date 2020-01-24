import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql, Link} from "gatsby"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import HeaderEn from "../components/header.en-US";
import Footer from "../components/footer";

const BlogListEn = ({ children, location }) => {
    const data = useStaticQuery(graphql`
    query BlogListEn {
          allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
            edges {
              node {
                slug,
                blogAuthor,
                blogDate
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
                <ul className={`blogs__list`}>
                    {data.allContentfulBlogPost.edges.map((edge)=>{
                        const date= new Date(Date.parse(edge.node.blogDate));
                        return <li><span>{date.getMonth()+1}/{date.getFullYear()}</span><Link to={`en-US/${edge.node.slug}`}>{edge.node.slug}</Link> - {edge.node.blogAuthor}</li>
                    })}
                </ul>
            </article>
            <Footer />
        </div>
    )
}

BlogListEn.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
}

export default BlogListEn
