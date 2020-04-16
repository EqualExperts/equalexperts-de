import React from "react"
import LayoutDe from "../components/layout.de-DE"
import SEO from "../components/seo"
import Clients from "../components/clients.de-DE"
import Contacts from "../components/contacts.de-DE"
import Roles from "../components/roles.de-DE"
import "../styles/index.scss"
import {graphql} from "gatsby"


class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    //const modules = data.allContentfulModuleTextandCta.edges;
    const heroModule = data.allContentfulHeroModule.edges;
    const textModule= data.allContentfulModuleTextOnly.edges[0];
    return (
      <LayoutDe location={this.props.location}>
        <SEO 
          title="Home"
          image={heroModule[0].node.heroImage.file.url}
        />
        {heroModule.map((module) => {
          const headingParts = module.node.heroHeading.split(/(?<=\.)/);
          return (
            <div className={`hero__container`} key={module}>
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
        {/* <Roles></Roles> */}
      </LayoutDe>
    )
  }
  componentDidMount() {
    const { hash } = window.location;
    if (hash !== '') {
      setTimeout(() => {
        const id = decodeURI(hash.replace('#', ''));
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
  }
}

export default IndexPage

export const pageQuery = graphql`
query {
  allContentfulModuleTextandCta(filter: {node_locale: {eq: "de"}}) {
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
  allContentfulHeroModule(filter: {node_locale: {eq: "de"}}) {
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