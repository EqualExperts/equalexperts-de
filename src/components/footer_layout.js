import React from "react"
import {Link} from "gatsby"

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
            {props.navLinks.map(item => {
                if(item.navItemUrl.indexOf("#") !== -1) {
                    return (<a href={item.navItemUrl} key={`navItem_${item.navItemUrl}`} className={`footer__navigation-link`}>{item.navItemText}</a>);
                } else {
                    return (<Link to={item.navItemUrl} key={`navItem_${item.navItemUrl}`} className={`footer__navigation-link`}>{item.navItemText}</Link>);
                }
            })}
        </nav>  
    </div>
    <div className="footer-content">
        <nav role="navigation">
            <ul className="legal-navigation">
                {props.legalLinks.map(item => {
                    return(<li className="legal-navigation__item" key={`legalItem_${item.navItemUrl}`}><Link to={item.navItemUrl}>{item.navItemText}</Link></li>);
                })}
            </ul>
        </nav>
    </div>
      
  </footer>
)


export default Footer
