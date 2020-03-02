import React from "react"
import {graphql} from "gatsby"
import LayoutUS from "../components/layout.en-US"
import ArticleLayout from "../components/article_layout"

const BlogPost = (props) => {
        const {data} = props;
        const blogPost = data.contentfulBlogPost;
        const date =new Date(Date.parse(blogPost.blogDate));

    return (
        <LayoutUS>
          <ArticleLayout
            heroImage={blogPost.heroImage}
            blogTitle={blogPost.blogTitle}
            blogAuthor={blogPost.blogAuthor}
            date={date}
            blogPostOverview={blogPost.blogPostOverview}
            blogContent={blogPost.blogContent.json.content}
          />
        </LayoutUS>
    )
}
export default BlogPost

export const pageQuery = graphql`
    query BlogPostEn($slug: String!){
        contentfulBlogPost(slug:{eq: $slug}){
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