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
  },
}

class SummaryModule extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      lightboxVisible : false
    };
  }

  handleCollectEmail = event => {
    event.preventDefault();
    this.setState({lightboxVisible : true});
  }

  handleSubmit = event => {
    this.setState({lightboxVisible : false});
  }

  render() {
    let lightboxClass = this.state.lightboxVisible ? "services__lightBoxVisible" : "";
    return (
      <div className={`services__contentWrapper`}>
        <div className={`services__contentWrapper__container`}>
          <h2>{this.props.summaryTitle}</h2>
          <div
            className={"services__formularForSuccessInfo simple-text-module"}
          >
            {documentToReactComponents(
              this.props.whatSuccessLooksLike,
              options
            )}
          </div>
          <div className={"services__ctas"}>
            {this.props.ctas.map(item => {
              let description = item.description.description
              if (description.indexOf("[DATE]") !== -1) {
                let date = new Date()
                let resultDate = new Date(date.getTime())
                let dayOfWeek = 4
                resultDate.setDate(
                  date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7)
                )
                description = description.replace(
                  /\[DATE\]/g,
                  resultDate.toLocaleDateString()
                )
              }
              return (
                <div
                  className={`services__cta ${lightboxClass}`}
                  key={`summaryCTA_${item.title}`}
                >
                  <div className="services__trigger">
                    <h2>{item.title}</h2>
                    <p>{description}</p>
                    <a href={"#"} className="btn btn--secondary" onClick={this.handleCollectEmail}>
                      {item.buttonText}
                    </a>
                  </div>
                  <div className="services__capture">
                    <form action="https://equalexperts.us4.list-manage.com/subscribe/post?u=d9b4db288634cb8d64f31f167&amp;id=3adf996a98" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate onSubmit={this.handleSubmit}>
                        <div id="mc_embed_signup_scroll">
                      <h2>{item.title}</h2>
                      <input type="email" placeholder="Enter your email address here" name="EMAIL" className={"required email services__inputField"} id="mce-EMAIL" />
                      <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                        <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                      </div>
                        <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" readOnly name="b_d9b4db288634cb8d64f31f167_3adf996a98" tabIndex="-1" value="" /></div>
                        <div className="clear"><input type="submit" value="Get free pass" name="subscribe" id="mc-embedded-subscribe" className="btn btn--secondary" /></div>
                        </div>
                    </form>
                    </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={`services__lightboxOverlay ${lightboxClass}`}>
        
        </div>
      </div>
    )
  }
}

export default SummaryModule
