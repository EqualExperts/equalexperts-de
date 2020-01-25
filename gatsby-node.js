const path =require('path')
exports.createPages =({graphql, boundActionCreators}) =>{
    const {createPage} = boundActionCreators
    return new Promise((resolve,reject)=>{
        const BlogPostTemplateDe =path.resolve('src/templates/blog-posts.de.js')
        const BlogPostTemplateEn =path.resolve('./src/templates/blog-posts.en-US.js')
        resolve(
            graphql(`{
            allContentfulBlogPost {
                edges {
                  node {
                    slug
                    node_locale
                  }
                }
              }}
            `).then((result)=>{
                if(result.errors){
                    reject(result.errors)
                }
                result.data.allContentfulBlogPost.edges.forEach((edge)=> {
                    edge.node.node_locale === "de"?
                        createPage({
                            path: "/de/"+ edge.node.slug,
                            component: BlogPostTemplateDe,
                            context: {
                                slug: edge.node.slug,
                            }
                        }):
                        createPage({
                            path:  "/en-US/"+ edge.node.slug,
                            component: BlogPostTemplateEn,
                            context: {
                                slug: edge.node.slug,
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
