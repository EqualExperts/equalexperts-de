const path =require('path')

exports.createPages =({graphql, boundActionCreators}) =>{
    const {createPage} = boundActionCreators
    return new Promise((resolve,reject)=>{
        const BlogPostTemplate =path.resolve('src/templates/blog-posts.js')
        resolve(
            graphql(`{
            allContentfulBlogPost {
                edges {
                  node {
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
              }}
            `).then((result)=>{
                if(result.errors){
                    reject(result.errors)
                }
                debugger;
                result.data.allContentfulBlogPost.edges.forEach((edge)=>{
                    createPage({
                        path:edge.node.slug,
                        component: BlogPostTemplate,
                        context:{
                            slug: edge.node.slug
                        }
                    })
                    }
                )
                return
            }
            )
        )
    })
}