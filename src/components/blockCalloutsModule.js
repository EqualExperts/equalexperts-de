import React from "react"

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
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
      <ul className="services__list">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <div className="services__image">
          <img
            src={node.data.target.fields.file.de.url}
            alt={node.data.target.fields.title.de}
          />
        </div>
      )
    },
    [INLINES.HYPERLINK]: node => {
      let link = (<a href={node.data.uri}>{node.content[0].value}</a>);
      let videoFlag = /IframeVideoLink/g;
      if(node.content[0].value.match(videoFlag) !== null) {
        let attributes = node.content[0].value.replace(videoFlag, "").replace(/"/g, "").split(" ");
        let attributesObject = {};
        attributes.forEach(element => {
          let nameValue = element.split("=");
          attributesObject[nameValue[0]] = nameValue[1];
        });
        link = (<iframe title={"inpageIframe"} src={node.data.uri} {...attributesObject} />);
      }
      return link;
    },
  },
}

const blockCalloutsModule = props => (
  <div className={`services__contentWrapper`}>
    <div className={`services__contentWrapper__container`}>
      <div className={"simple-text-module"}>
        {documentToReactComponents(props.whyNow, options)}
      </div>
      <h2>{props.whatYouGetHeading}</h2>
      <div className={"services__blockCallouts"}>
        {props.whatYouGet.map((item, i) => {
          return (
            <div
              key={`services__blockCallout_${i}`}
              className={"services__blockCallout"}
              style={{
                backgroundImage: `url(${props.whatYouGetIcon.file.url})`,
              }}
            >
              {item}
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default blockCalloutsModule
