import React from "react"
import PropTypes from "prop-types"
import HeaderDe from "./header.de"
import Footer from "./footer";

const LayoutDe = ({ children, location }) => {
  return (
    <div className={`main-container`}>
      <HeaderDe/>
      <article className={`content`}>
        <main>{children}</main>
      </article>
      <Footer />
    </div>
  )
}

LayoutDe.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default LayoutDe
