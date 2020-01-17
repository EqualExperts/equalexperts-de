import React from "react"
import {graphql} from "gatsby"

class BlogPost extends React.Component{
render(){
    const {data} = this.props;
    const blogPost = data.contentfulBlogPost;
    debugger;
    return (
        <div>
            <h1>{blogPost.blogTitle}</h1>
            <p>{blogPost.slug}</p>
            <p>{blogPost.blogAuthor}</p>
            <p>{blogPost.blogDate}</p>
            <p dangerouslySetInnerHTML={{__html:blogPost.blogContent.childContentfulRichText.html}}></p>
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
    }
`
