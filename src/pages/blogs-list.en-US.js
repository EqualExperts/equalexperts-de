import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql, Link} from "gatsby"
import HeaderEn from "../components/header.en-US";
import Footer from "../components/footer";

const BlogListDe = ({ children, location }) => {
    const data = useStaticQuery(graphql`
    query BlogListEn {
          allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
            edges {
              node {
                slug,
                blogTitle,
                blogAuthor,
                blogDate,
                blogContent {
                  childContentfulRichText {
                    html
                  }
                }
              }
            }
          }
          allContentfulBlogList(filter: {node_locale: {eq: "en-US"}}) {
            edges {
              node {
                blogListTitle
                childContentfulBlogListBlogListContentRichTextNode {
                  childContentfulRichText {
                    html
                  }
                }
              }
            }
          }
        }
  `)
    const blogPosts =data.allContentfulBlogPost.edges;
    const blogList = data.allContentfulBlogList.edges[0].node;

    return (
        <div className={`main-container`}>
            <HeaderEn/>
            <article className={`content`}>
                <main>{children}</main>
                <h1 className={`blog-list__heading`}>{blogList.blogListTitle}</h1>
                <div className={`blog-list__title`} dangerouslySetInnerHTML={{__html: blogList.childContentfulBlogListBlogListContentRichTextNode.childContentfulRichText.html}}/>
                <ul className={`blogs__list`}>
                    {blogPosts.map((blog)=> {
                        const date = new Date(Date.parse(blog.node.blogDate));
                        return <li><span>{date.getMonth() + 1}/{date.getFullYear()}</span><Link
                            to={`en-US/${blog.node.slug}`}>{blog.node.blogTitle}</Link><span> Author - {blog.node.blogAuthor}</span>
                            <p className={`blog-list__content`} dangerouslySetInnerHTML={{__html:blog.node.blogContent.childContentfulRichText.html}} />
                        </li>
                    })}
                </ul>
            </article>
            <Footer />
        </div>
    )
}

BlogListDe.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
}

export default BlogListDe
