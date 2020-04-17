import React from "react"
import LegalLayout from "../../components/legal_layout"
import "../../styles/index.scss"

class IndexPage extends React.Component {
  render() {
    const legalData = {
      title: "Impressum",
      childContentfulModuleTitleAndTextTextRichTextNode: {
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: "Equal Experts Germany GmbH",
                  nodeType: "text",
                },
              ],
              nodeType: "heading-3",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: "Friedrichstraße 68\n10117 Berlin\nGermany",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: "Tel.: +49 171 77 61 20 6\nhelloDE@equalexperts.com",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    "Management:\nNuno Filipe Marques (CEO), Thomas Charles Gabriel Granier",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    "Court of Registry:\nAmtsgericht Charlottenburg (Berlin) HRB 195029 B",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: "\nSales Tax Identification Number: ",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
          ],
          nodeType: "document",
        },
      },
    }

    return (
      <div className={`main-container`}>
        <LegalLayout
          title={legalData.title}
          data={
            legalData.childContentfulModuleTitleAndTextTextRichTextNode.json
              .content
          }
        />
      </div>
    )
  }
  componentDidMount() {
    window.requestAnimationFrame(function() {
      console.log("componentLoaded")
    })
  }
}

export default IndexPage
