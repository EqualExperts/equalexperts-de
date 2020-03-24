import React from "react"

import { BLOCKS, MARKS} from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <span className="bold">{text}</span>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="services__list">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (<div className="services__image"><img src={node.data.target.fields.file.de.url} alt={node.data.target.fields.title.de} /></div>);
    }
  },
}

const serviceLayout = (props) => (
  <div>
    <div className={`services__hero`} style={
      {
        backgroundImage : `linear-gradient(0deg, rgba(25, 107, 152, 0.6), rgba(25, 107, 152, 0.6)), url(${props.heroImage.file.url})`
      }
    }>
      <div className={`services__hero__container`}>
        <h1 className={`services__title`}>{props.topicTitle}</h1>
        <div className={'services__postOverview'}>{props.shortExplanation}</div>
      </div>
    </div>

    <div className={`services__contentWrapper`}>
      <div className={`services__contentWrapper__container`}>
        {documentToReactComponents(props.whyNow, options)}
        <h2>{props.whatYouGetHeading}</h2>
        <div className={'services__blockCallouts'}>
          {props.whatYouGet.map((item, i) => {
            return (
              <div
                key={`services__blockCallout_${i}`}
                className={'services__blockCallout'} 
                style={{backgroundImage : `url(${props.whatYouGetIcon.file.url})`}}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div className={'services__uspsWrapper'}>
      <div className={'services__uspsContainer'}>
        <h2>{props.whyEEHeading}</h2>
        <div className={'services__usps'}>
          {props.ourUsps.map((item, i) => {
            return (
              <div 
                key={`services__usps_${i}`}
                className={'services__usp'}
              >
                <div className={'services__decorativeBar'} />
                <h3 className={'services__uspHeading'}>{item.usp}</h3>
                <div className={'services__uspDescription'}>{item.uspDescription.uspDescription}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);


export default serviceLayout
