import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import HeaderEn from "../components/header.en-US";
import ArticleList from "../components/articleList_layout";
import FooterUS from "../components/footer.en-US";
import "../styles/index.scss"
import {getCurrentLangKey} from "ptz-i18n";

const BlogListUS = ({ children, location }) => {
  const data = useStaticQuery(graphql`
  query BlogListEn {
        allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
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
        allContentfulBlogList(filter: {node_locale: {eq: "en-US"}}) {
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

  const blogPosts =data.allContentfulBlogPost.edges;
  const blogList = data.allContentfulBlogList.edges[0].node;
    
    return (
        <div className={`main-container`}>
            <HeaderEn />
            <ArticleList
              homeLink={homeLink}
              title={blogList.blogListTitle}
              articlesIntro={blogList.childContentfulBlogListBlogListContentRichTextNode.json.content}
              articles={blogPosts}
            />
            <FooterUS />
        </div>
    )
}

export default BlogListUS
