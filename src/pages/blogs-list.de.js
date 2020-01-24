import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql, Link} from "gatsby"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import HeaderDe from "../components/header.de";
import Footer from "../components/footer";

const BlogListDe = ({ children, location }) => {
    const data = useStaticQuery(graphql`
    query BlogListDe {
          allContentfulBlogPost(filter: {node_locale: {eq: "de"}}) {
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
          allContentfulBlogList(filter: {node_locale: {eq: "de"}}) {
            edges {
              node {
                blogListTitle
                childContentfulBlogListBlogListContentRichTextNode {
                  childContentfulRichText {
                    html
                  }
                }
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
    const blogPosts =data.allContentfulBlogPost.edges;
    const blogList = data.allContentfulBlogList.edges[0].node;

    return (
        <div className={`main-container`}>
            <HeaderDe siteTitle={data.site.siteMetadata.title} langs={langsMenu} />
            <article className={`content`}>
                <main>{children}</main>
                <h1 className={`blog-list__heading`}>{blogList.blogListTitle}</h1>
                <div className={`blog-list__content`} dangerouslySetInnerHTML={{__html: blogList.childContentfulBlogListBlogListContentRichTextNode.childContentfulRichText.html}}/>
                <ul className={`blogs__list`}>
                    {blogPosts.map((blog)=> {
                        const date = new Date(Date.parse(blog.node.blogDate));
                        return <li><span>{date.getMonth() + 1}/{date.getFullYear()}</span><Link
                            to={`de/${blog.node.slug}`}>{blog.node.slug}</Link><span> - {blog.node.blogAuthor}</span></li>
                })}
                </ul>
            </article>
            <Footer />
        </div>
    )
}

BlogListDe.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
}

export default BlogListDe
