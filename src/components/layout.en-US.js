import React from "react"
import PropTypes from "prop-types"
import HeaderEn from "./header.en-US"
import Footer from "./footer.en-US"

const LayoutDe = ({ children, location }) => {
  return (
    <div className={`main-container`}>
      <HeaderEn />
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
