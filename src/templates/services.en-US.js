import React from "react"
import {graphql} from "gatsby"
import LayoutUS from "../components/layout.en-US"
import SEO from "../components/seo"
import "../styles/index.scss"
import "../styles/services.scss"
import ServiceLayout from "../components/service_layout"

const Services = (props) => {

  const {data} = props;
  const services = data.contentfulServices;

    return (
      <LayoutUS location={props.location}>
      <SEO 
        title={services.topicTitle}
        image={services.heroImage.file.url}
        description={services.shortExplanation.shortExplanation}
        links={[
          {
            rel : "alternate",
            hreflang : "en-US",
            href : `//services/${services.slug}`
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
      >
      </ServiceLayout>
    </LayoutUS>
    )
}
export default Services

export const pageQuery = graphql`
    query ServiceEn($slug: String!){
      contentfulServices(slug:{eq: $slug}){
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
