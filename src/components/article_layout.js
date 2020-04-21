import React from "react"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <span className="bold">{text}</span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="blog__list">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <div className="blog__image">
          <img
            src={node.data.target.fields.file.de.url}
            alt={node.data.target.fields.title.de}
          />
        </div>
      )
    },
  },
}

const articleLayout = props => (
  <div>
    <div
      className={`blog__hero`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${props.heroImage.file.url})`,
      }}
    >
      <div className={`blog__hero__container`}>
        <h1 className={`blog__title`}>{props.blogTitle}</h1>
        <div className={`blog__author-date-wrapper`}>
          <p className={`blog__author`}>{props.blogAuthor}</p>
          <span className={"blog__author-date-separator"}>|</span>
          <p className={`blog__date`}>{props.date.toDateString()}</p>
        </div>
      </div>
    </div>

    <div className={`blog__contentWrapper`}>
      <div className={`blog__contentWrapper__container`}>
        <div className={"blog__postOverview"}>
          {props.blogPostOverview.blogPostOverview}
        </div>
        {documentToReactComponents(props.blogContent, options)}
      </div>
    </div>
  </div>
)

export default articleLayout
