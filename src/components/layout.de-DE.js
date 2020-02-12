import React from "react"
import PropTypes from "prop-types"
import HeaderDe from "./header.de-DE"
import FooterDe from "./footer.de-DE";

const LayoutDe = ({ children, location }) => {
  return (
    <div className={`main-container`}>
      <HeaderDe/>
      <article className={`content`}>
        <main>{children}</main>
      </article>
      <FooterDe />
    </div>
  )
}

LayoutDe.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default LayoutDe
