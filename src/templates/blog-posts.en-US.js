import React from "react"
import {graphql} from "gatsby"
import HeaderEn from "../components/header.de";
import Footer from "../components/footer";
import {getCurrentLangKey, getLangs, getUrlForLang} from "ptz-i18n";

class BlogPost extends React.Component{
render(){
    const {data} = this.props;
    const url = window.location.pathname;
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
    debugger;
    const blogPost = data.contentfulBlogPost;
    const date =new Date(Date.parse(blogPost.blogDate));
    return (
        <div>
            <HeaderEn siteTitle={data.site.siteMetadata.title} langs={langsMenu} />
            <div className={`blog__container`}>
                <h1 className={`blog__title`}>{blogPost.blogTitle}</h1>
                <div className={`blog__author-date-wrapper`}>
                    <p className={`blog__author`}>{blogPost.blogAuthor}</p> | <p className={`blog__date`}>{date.toDateString()}</p>
                </div>
                <p className={`blog__content`} dangerouslySetInnerHTML={{__html:blogPost.blogContent.childContentfulRichText.html}}></p>
            </div>
        <Footer/>
        </div>
    )
}
}
export default BlogPost

export const pageQuery = graphql`
    query BlogPostByQuery($slug: String!){
        contentfulBlogPost(slug:{eq: $slug}){
            blogTitle
            blogDate
            blogAuthor
            slug
            node_locale
            blogContent {
              childContentfulRichText {
                html
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
`
