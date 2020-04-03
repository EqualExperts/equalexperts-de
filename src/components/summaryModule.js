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
  }
}

class SummaryModule extends React.Component {

  render() {
    return (
      <div className={`services__contentWrapper`}>
        <div className={`services__contentWrapper__container`}>
          <h2>{this.props.summaryTitle}</h2>      
          <div className={"services__formularForSuccessInfo simple-text-module"}>
            {documentToReactComponents(this.props.whatSuccessLooksLike, options)}
          </div>
          <div className={"services__ctas"}>
            {
              this.props.ctas.map(item => {
                let description = item.description.description;
                if(description.indexOf("[DATE]") !== -1) {
                  let date = new Date();
                  let resultDate = new Date(date.getTime());
                  let dayOfWeek = 4;
                  resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
                  description = description.replace(/\[DATE\]/g, resultDate.toLocaleDateString());
                }
                return (
                  <div className={"services__cta"}>
                    <h2>{item.title}</h2>
                    <p>{description}</p>
                    <a href={"#"} className="btn btn--secondary">{item.buttonText}</a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
  
};


export default SummaryModule
