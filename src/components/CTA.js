import React from "react"

class CTAModule extends React.Component {

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
              let image;
              if(item.ctaImage && item.ctaImage.file) {
                image = (<img src={item.ctaImage.file.url} className="services__ctaImage" />);
              }
              return (
                <div
                  className={`services__cta ${lightboxClass}`}
                  key={`summaryCTA_${item.title}`}
                >
                  <div className="services__trigger">
                    <div className="services__triggerCopy">
                      <h2>{item.title}</h2>
                      <p>{description}</p>
                      <a href={"#"} className="btn btn--secondary" onClick={this.handleCollectEmail}>
                        {item.buttonText}
                      </a>
                    </div>
                    <div>
                      {image}
                    </div>
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

export default CTAModule
