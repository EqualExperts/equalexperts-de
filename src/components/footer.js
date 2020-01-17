import React from "react"

const Footer = () => (
  <footer className={`footer`}>
      <div className={`footer__content-wrapper`}>
          <div className={`footer__copyright`}>
          © {`2020`}, {` `}
          <a href="https://www.equalexperts.com">Equal Experts</a></div>
          <div className={`footer__social-media`}>
              <a className={`linkedin`} href={`https://www.linkedin.com/company/equal-experts`}>Linkedin</a>
              <a className={`twitter`} href={`https://twitter.com/EqualExperts`}>Twitter</a>
              <a className={`github`} href={`https://github.com/EqualExperts`}>Github</a>
              <a className={`youtube`} href={`https://www.youtube.com/user/EqualExperts`}>Youtube</a>
              <a className={`facebook`} href={`https://www.facebook.com/EqualExperts/`}>Facebook</a>
          </div>
      </div>
  </footer>
)


export default Footer
