import React from "react"
import ArticleList from "../../components/articleList_layout";
import "../../styles/index.scss"


class IndexPage extends React.Component {
  render() {

    const payload = {
      blogListTitle : "Blog",
      childContentfulBlogListBlogListContentRichTextNode : {
        "json": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Industry and tech insight from our leading team of experts",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        }
      }
    }
    const articlesPayload = [
      {
        "node": {
          "slug": "blogpost1",
          "blogTitle": "How we helped a long-term client cut its AWS costs by 66%",
          "blogAuthor": "Matt Ralph",
          "blogDate": "2020-01-15T00:00+05:30",
          "blogPostOverview": {
            "blogPostOverview": "We’re often asked to help our clients build out their capability in the cloud or to help them reduce infrastructure costs. Being able to do both at the same time is the icing on the cake!"
          }
        }
      },
      {
        "node": {
          "slug": "blogpost2",
          "blogTitle": "R-ee-mote Working Playbook",
          "blogAuthor": "  Dave Hewett",
          "blogDate": "2019-12-02T00:00+05:30",
          "blogPostOverview": {
            "blogPostOverview": "This remote working playbook takes learnings from a variety of EE consultants who have spent time working remotely with a view to help our network collaborate more effectively and provide ways to improve the distributed work experience."
          }
        }
      }
    ];

    return (
      <div className={`main-container`}>
        <ArticleList
              homeLink={"/"}
              title={payload.blogListTitle}
              articlesIntro={payload.childContentfulBlogListBlogListContentRichTextNode.json.content}
              articles={articlesPayload}
        />
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
