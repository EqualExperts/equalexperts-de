import React from "react"
import LayoutEn from "../components/layout.en-US"
import SEO from "../components/seo"
import Clients from "../components/clients.en-US"
import Contacts from "../components/contacts.en-US"
import "../styles/index.scss"
import {graphql} from "gatsby"


class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const modules = data.allContentfulModuleTextandCta.edges;
    const heroModule = data.allContentfulHeroModule.edges;
    const textModule= data.allContentfulModuleTextOnly.edges[0];
    return (
      <LayoutEn location={this.props.location}>
        <SEO title="Home" />
        {heroModule.map((module) => {
          const headingParts = module.node.heroHeading.split(/(?<=\.)/);
          return (
            <div className={`hero__container`} key={`heading_${headingParts[1]}`}>
              <img className={`hero__image`} src={`${module.node.heroImage.file.url}`} alt={``} />
              <h1 className={`hero__title`}>{headingParts[0]}<span className="hero__lastLine">{headingParts[1]}</span></h1>
            </div>
          )
        })}
        {
          <div className={`simple-text-module`} dangerouslySetInnerHTML={{__html:textModule.node.childContentfulModuleTextOnlyContentRichTextNode.childContentfulRichText.html}}></div>
        }
        <Clients></Clients>
        <Contacts></Contacts>
        {
          modules.map((module) => {
            return (
              <div className={`module`} key={`module_${module.node.moduleTitle}`}>
                <div className={`module__title`}>{module.node.moduleTitle}</div>
                <div className={`module__content`} dangerouslySetInnerHTML={{ __html: module.node.moduleContent.childContentfulRichText.html }} />
                {module.node.moduleCtAlink.childContentfulRichText.html ?
                  <div className={`module__link`}
                    dangerouslySetInnerHTML={{ __html: module.node.moduleCtAlink.childContentfulRichText.html }} /> : ''
                }
              </div>

            )
          })
        }
      </LayoutEn>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
query {
  allContentfulModuleTextandCta(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        moduleTitle
        moduleContent {
          childContentfulRichText {
           html
          }
        }
        moduleCtAlink {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
  allContentfulHeroModule(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        heroHeading
        heroImage {
          file {
            url
          }
        }
      }
    }
  }
  allContentfulModuleTextOnly(filter: {node_locale: {eq: "de"}}) {
    edges {
      node {
        childContentfulModuleTextOnlyContentRichTextNode {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
}
`