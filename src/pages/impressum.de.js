import React from "react"
import LayoutDe from "../components/layout.de-DE"
import SEO from "../components/seo"
import "../styles/index.scss"
import {graphql} from "gatsby"
import LegalLayout from "../components/legal_layout";


class ImprintPage extends React.Component {
  render() {
    
    const { data } = this.props;
    const pageData = data.allContentfulModuleTitleAndText.edges[0].node;
    console.log(JSON.stringify(pageData));
    return (
      <LayoutDe location={this.props.location}>
        <SEO title={pageData.title} />
        <LegalLayout
          title={pageData.title}
          data={pageData.childContentfulModuleTitleAndTextTextRichTextNode.json.content}
        />
      </LayoutDe>
    )
  }
}

export default ImprintPage

export const pageQuery = graphql`
query {
  allContentfulModuleTitleAndText(filter: {node_locale: {eq: "de"}, title : {eq : "Impressum"}}) {
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