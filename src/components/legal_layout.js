import React from "react";

const LegalLayout = (props) => (
  <div className={"legalModule"}>
    <h2>{props.title}</h2>
    {props.data.map((item,i) => {
        return item.content.map((content, j) => {
          if(item.nodeType === "heading-3") {
            return (<h3 key={`legalHeading_${i}_${j}`}>{content.value}</h3>);
          } else if(item.nodeType === "paragraph") {
            return (<p key={`legalPara_${i}_${j}`}>{content.value}</p>);
          }
          return [];
        });
      })}
  </div>
)


export default LegalLayout
