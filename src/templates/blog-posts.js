import React from "react"
import {graphql} from "gatsby"
import HeaderDe from "../components/header.de-DE";
import FooterDe from "../components/footer.de-DE";

class BlogPost extends React.Component{
    render(){
        const {data} = this.props;
        const blogPost = data.contentfulBlogPost;
        const date =new Date(Date.parse(blogPost.blogDate));
        return (
            <div>
                <HeaderDe/>
                <div className={`blog__container`}>
                    <h1 className={`blog__title`}>{blogPost.blogTitle}</h1>
                    <div className={`blog__author-date-wrapper`}>
                        <p className={`blog__author`}>{blogPost.blogAuthor}</p> | <p className={`blog__date`}>{date.toDateString()}</p>
                    </div>
                    <p className={`blog__content`} dangerouslySetInnerHTML={{__html:blogPost.blogContent.childContentfulRichText.html}}></p>
                    <p className={`blog__slug`}>{blogPost.slug}</p>
                </div>
                <FooterDe />
            </div>
        )
    }
}
export default BlogPost

export const pageQuery = graphql`
    query BlogPostByQuery2($slug: String!){
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
    }
`
