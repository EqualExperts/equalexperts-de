import React from "react"
import "../../styles/index.scss"


class IndexPage extends React.Component {
  render() {

    return (
      <div className={`main-container`}>
       
      </div>
    )
  }
  componentDidMount() {
    window.requestAnimationFrame(function() {
      console.log("componentLoaded");
    });
  }
}

export default IndexPage
