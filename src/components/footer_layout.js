import React from "react"

const Footer = (props) => (
  <footer className={`footer`}>
      <div className={"footer-content"}>
        <div className={"footer-strapline"}>
            <p>Simple solutions to big business problems.</p>
        </div>
        <div className={"footer-social-links-menu"}>
            <a href="https://www.linkedin.com/company/equal-experts" title="linkedin" className={"icon icon-ic_linkedin social-link"}>linkedin</a>
            <a href="https://twitter.com/EqualExperts" title="twitter" className={"icon icon-ic_twitter social-link"}>twitter</a>
            <a href="https://github.com/EqualExperts" title="github" className={"icon icon-ic_github social-link"}>github</a>
            <a href="https://www.youtube.com/user/EqualExperts" title="youtube" className={"icon icon-ic_youtube social-link"}>youtube</a>
            <a href="https://www.facebook.com/EqualExperts/" title="facebook" className={"icon icon-ic_facebook social-link"}>facebook</a>
        </div>
    </div>
    <div className="footer-content">
        <nav role="navigation" className="footer-navigation">
            {props.navLinks}
        </nav>  
    </div>
    <div className="footer-content">
        <nav role="navigation">
            <ul class="legal-navigation">
                {props.legalLinks}
            </ul>
        </nav>
    </div>
      
  </footer>
)


export default Footer
