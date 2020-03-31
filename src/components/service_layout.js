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
        <div className={'simple-text-module'}>
        {documentToReactComponents(props.whyNow, options)}
        </div>
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
    <div className={`services__contentWrapper`}>
      <div className={`services__contentWrapper__container`}>
        <h2>{props.formularForSuccessHeading}</h2>
        <div className={"services__formularForSuccess"}>
        {props.formularForSuccess.map((item, i) => {
          let plusSymbol = "";
          if(i < props.formularForSuccess.length-1) {
            plusSymbol = (<div className={"services__formularForSuccessPlus"}></div>);
          }
          return (<>
                    <div className={"services__formularForSuccessComponent"}>{item.formulaTitle}</div>
                    {plusSymbol}
                  </>);
        })}
        </div>
        <div className={"services__results"}>
          <div className={"services__formularForSuccessEquals"}></div>
          <div className={"services__formularForSuccessResult"}>
            <h2>{props.whatIsSuccess}</h2>
          </div>
        </div>
      </div>
    </div>
    <div className={'services__uspsWrapper'}>
      <div className={'services__uspsContainer'}>
        <h2>Why it works...</h2>
        <div className={'services__usps'}>
        {props.formularForSuccess.map((item, i) => {
          return (
            <div 
              key={`services__usps_${i}`}
              className={'services__usp'}
            >
              <div className={'services__decorativeBar'} />
              <h3 className={'services__uspHeading'}>{item.formulaTitle}</h3>
              <div className={'services__uspDescription'}>{item.formulaExplanation.formulaExplanation}</div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
    <div className={`services__contentWrapper`}>
      <div className={`services__contentWrapper__container`}>
          <h2>Higher productivity is just around the corner...</h2>      
          <div className={"services__formularForSuccessInfo simple-text-module"}>
            {documentToReactComponents(props.whatSuccessLooksLike, options)}
          </div>
          <div className={"services__ctas"}>
            <div className={"services__cta"}>
              <h2>Join our exclusive 1-hour Enterprise Mobility webinar</h2>
              <p>Want to hear the insights of how to succeed in enterprise mobility? Save the date - our next webinar is on the : 29/03/2020</p>
              <a href={"#"} className="btn btn--secondary">Get a free pass to our EXPERT online webinar</a>
            </div>
            <div className={"services__cta"}>
              <h2>Download the secrets of Enterprise mobility PDF</h2>
              <p>Would you like to understand more about enterprise mobility?</p>
              <a href={"#"} className="btn btn--secondary">Download your PDF with EXPERT insights</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`services__contentWrapper`}>
        <div className={`services__contentWrapper__container`}>
            <h2>You may also be interested in...</h2>
        </div>
      </div>
  </div>
);


export default serviceLayout
