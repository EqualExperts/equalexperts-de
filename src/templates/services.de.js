import React from "react"
import {graphql} from "gatsby"
import LayoutDe from "../components/layout.de-DE"
import SEO from "../components/seo"
import "../styles/index.scss"
import ServiceLayout from "../components/service_layout"

const Services = (props) => {

    const {data} = props;
    const services = data.contentfulServices;

    return (
      <LayoutDe location={props.location}>
        <SEO 
          title={services.topicTitle}
          image={services.heroImage.file.url}
          description={services.shortExplanation.shortExplanation}
          links={[
            {
              rel : "alternate",
              hreflang : "en-US",
              href : `//en-US/services/${services.slug}`
            }
          ]}
        />
        <ServiceLayout
          heroImage={services.heroImage}
          topicTitle={services.topicTitle || ""}
          shortExplanation={services.shortExplanation.shortExplanation || ""}
          whyNow={services.whyNow ? services.whyNow.json || {content : []} : {content : []}}
          whatYouGetHeading={services.whatYouGetHeading || ""}
          whatYouGetIcon={services.whatYouGetIcon}
          whatYouGet={services.whatYouGet || []}
          whyEEHeading={services.whyEeHeading || ""}
          ourUsps={services.ourUsps || []}
          formularForSuccessHeading={services.formularForSuccessHeading || ""}
          formularForSuccess={services.formularForSuccess || []}
          whatIsSuccess={services.whatIsSuccess || ""}
          whatSuccessLooksLike={services.whatSuccessLooksLike ? services.whatSuccessLooksLike.json || {content : []} : {content : []}}
          summaryTitle={services.summaryTitle}
          ctas={services.ctas}
          similarServices={services.similarServices}
        />
      </LayoutDe>
    )
}
export default Services

export const pageQuery = graphql`
    query ServiceDe($slug: String!){
      contentfulServices(slug: {eq: $slug}, node_locale: {eq: "de"}) {
          topicTitle
          slug
          heroImage {
            file {
              fileName
              url
            }
          }
          shortExplanation {
            shortExplanation
          }
          whyNow {
            json
          }
          whatYouGetHeading
          whatYouGetIcon {
            file {
              fileName
              url
            }
          }
          whatYouGet
          whyEeHeading
          ourUsps {
            usp
            uspDescription {
              uspDescription
            }
          }
          formularForSuccessHeading
          formularForSuccess {
            formulaTitle
            formulaExplanation {
              formulaExplanation
            }
          }
          whatIsSuccess
          summaryTitle
          whatSuccessLooksLike {
            json
          }
          ctas {
            description {
              description
            }
            title
            buttonText
          }
          similarServices {
            serviceTitle
            serviceDescription {
              serviceDescription
            }
            serviceThumbnail {
              file {
                fileName
                url
              }
            }
          }
      }
    }
`
