import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import HeaderDe from "../components/header.de-DE";
import ArticleList from "../components/articleList_layout";
import FooterDe from "../components/footer.de-DE";
import "../styles/index.scss"
import {getCurrentLangKey} from "ptz-i18n";

const BlogListDe = ({ children, location }) => {
  const data = useStaticQuery(graphql`
  query BlogListDe {
        allContentfulBlogPost(filter: {node_locale: {eq: "de"}}) {
          edges {
            node {
              slug,
              blogTitle,
              blogAuthor,
              blogDate,
              blogPostOverview {
                blogPostOverview
              }
            }
          }
        }
        allContentfulBlogList(filter: {node_locale: {eq: "de"}}) {
          edges {
            node {
              blogListTitle
              childContentfulBlogListBlogListContentRichTextNode {
                json
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
  `)
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  let homeLink = (langKey === defaultLangKey) ? '' : `/${langKey}/`;

  const blogPosts = data.allContentfulBlogPost.edges;
  const blogList = data.allContentfulBlogList.edges[0].node;

  return (
      <div className={`main-container`}>
          <HeaderDe/>
          <ArticleList
            homeLink={homeLink}
            title={blogList.blogListTitle}
            articlesIntro={blogList.childContentfulBlogListBlogListContentRichTextNode.json.content}
            articles={blogPosts}
          />
          <FooterDe />
      </div>
  )
}

export default BlogListDe
