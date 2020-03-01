import React from "react"
import ParagraphWithLinks from "./paragraphWithLinks"

const articleLayout = (props) => (
  <div>
    <div className={`blog__hero`} style={
      {
        backgroundImage : `linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${props.heroImage.file.url})`
      }
    }>
      <div className={`blog__hero__container`}>
        <h1 className={`blog__title`}>{props.blogTitle}</h1>
        <div className={`blog__author-date-wrapper`}>
            <p className={`blog__author`}>{props.blogAuthor}</p>
            <span className={'blog__author-date-separator'}>|</span>
            <p className={`blog__date`}>{props.date.toDateString()}</p>
        </div>
      </div>
    </div>

    <div className={`blog__contentWrapper`}>
      <div className={`blog__contentWrapper__container`}>
        <div className={'blog__postOverview'}>{props.blogPostOverview.blogPostOverview}</div>
        {props.blogContent.map((item,i) => {
          return item.content.map((content, j) => {
            if(item.nodeType === "heading-3") {
              return (<h3 key={`legalHeading_${i}_${j}`}>{content.value}</h3>);
            } else if(item.nodeType === "paragraph") {
              return (<ParagraphWithLinks key={`legalPara_${i}_${j}`} content={content.value}/>);
            }
            return [];
          });
        })}
      </div>
    </div>
  </div>
);


export default articleLayout
