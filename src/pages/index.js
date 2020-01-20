import React from "react"
import "../styles/index.scss"
import { graphql, navigate, withPrefix } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n';


class IndexPage extends React.Component {

  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
      const langKey = getUserLangKey(langs, defaultLangKey);
      console.log(langKey);
      const homeUrl = withPrefix(`/${langKey}/`);

      navigate(homeUrl);
    }
  }
  render() {
    return (<div />);
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site{
      siteMetadata{
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;