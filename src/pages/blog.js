import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const blogPosts = data.allContentfulBlogPost.edges

    return (
      <Layout>
        <h1>Blog</h1>
        {blogPosts.map(entry => {
          const blogPost = entry.node;
          return (
            <article>
              <h2>{blogPost.blogTitle}</h2>
              <p>{blogPost.blogAuthor}</p>
              <p>{blogPost.blogDate}</p>
              <p>{blogPost.blogContent.childContentfulRichText.html}></p>
        </article>
          )
        })
        }
      </Layout>
    )
  }
}
export default BlogPage

export const pageQuery = graphql`
query MyQuery {
  allContentfulBlogPost(filter: {node_locale: {eq: "de"}}) {
    edges {
      node {
        blogTitle
        id
        blogAuthor
        blogDate
        slug
        blogContent {
          blogContent
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
}
`