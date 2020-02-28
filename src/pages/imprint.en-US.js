import React from "react"
import LayoutUS from "../components/layout.en-US"
import SEO from "../components/seo"
import "../styles/index.scss"
import {graphql} from "gatsby"
import LegalLayout from "../components/legal_layout";


class ImprintPage extends React.Component {
  render() {
    
    const { data } = this.props;
    const pageData = data.allContentfulModuleTitleAndText.edges[0].node;
    return (
      <LayoutUS location={this.props.location}>
        <SEO title={pageData.title} />
        <LegalLayout
          title={pageData.title}
          data={pageData.childContentfulModuleTitleAndTextTextRichTextNode.json.content}
        />
      </LayoutUS>
    )
  }
}

export default ImprintPage

export const pageQuery = graphql`
query {
  allContentfulModuleTitleAndText(filter: {node_locale: {eq: "en-US"}, title : {eq : "Imprint"}}) {
    edges {
      node {
        title
        childContentfulModuleTitleAndTextTextRichTextNode {
          json
        }
      }
    }
  }
}
`