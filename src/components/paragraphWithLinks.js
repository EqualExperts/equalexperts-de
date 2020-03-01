import React from "react"
import shortHash from "short-hash";

const isURL = /([-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*))/g;
const ParagraphWithLinks = (props) => (
  <p>
    {props.content.split(isURL).map((item,i) => {
      if(item.match(isURL)) {
        const link = item.match(/\/\//g) ? item : "//"+item;
        return(<a href={link} key={`link_${link}`}>{item}</a>);
      } else {
        const hash = shortHash(item);
        return(<React.Fragment key={hash}>{item}</React.Fragment>);
      }
    })}
  </p>
);


export default ParagraphWithLinks