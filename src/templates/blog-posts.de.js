import React from "react"
import {graphql} from "gatsby"
import LayoutDe from "../components/layout.de-DE"
import ArticleLayout from "../components/article_layout"

const BlogPost = (props) => {
        const {data} = props;
        const blogPost = data.contentfulBlogPost;
        const date =new Date(Date.parse(blogPost.blogDate));
        return (
          <LayoutDe location={props.location}>
            <ArticleLayout
              heroImage={blogPost.heroImage}
              blogTitle={blogPost.blogTitle}
              blogAuthor={blogPost.blogAuthor}
              date={date}
              blogPostOverview={blogPost.blogPostOverview}
              blogContent={blogPost.blogContent.json.content}
            />
          </LayoutDe>
        )
}
export default BlogPost

export const pageQuery = graphql`
    query BlogPostDe($slug: String!){
         contentfulBlogPost(slug: {eq: $slug}, node_locale: {eq: "de"}) {
            blogTitle
            blogDate
            blogAuthor
            slug
            node_locale
            heroImage {
              file {
                fileName
                url
              }
            }
            blogPostOverview {
              blogPostOverview
            }
            blogContent {
              json
            }
          }
    }
`
