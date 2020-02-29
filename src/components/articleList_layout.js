import React from "react"
import {Link} from "gatsby"

const articleListLayout = (props) => (
  <div className={"articlesList"}>
    <h2>{props.title}</h2>
    {props.articlesIntro.map((item, i) => {
      return item.content.map((content, j) => {
        if(item.nodeType === "paragraph") {
          return (<p key={`articlesList_IntroPara_${i}_${j}`}>{content.value}</p>);
        }
        return [];
      });
    })}
    <ul className={`blogs__list`}>
    {props.articles.map(blog => {
        const date = new Date(Date.parse(blog.node.blogDate));
        return (
          <li key={`articlesList_${blog.node.blogDate}`}>
            <article>
              <Link to={`${props.homeLink}${blog.node.slug}`}>{blog.node.blogTitle}</Link>
              <div className={'articlesList_metaData'}>
                <span>{(date.getMonth() + 1).toString().padStart(2, "0")}/{date.getFullYear()}</span>
                <span>- {blog.node.blogAuthor}</span>
              </div>  
              <p className={'articlesList_blogOverview'}>{blog.node.blogPostOverview.blogPostOverview}</p>
            </article>
          </li>
        )
      })}
      </ul>
  </div>
)


export default articleListLayout
