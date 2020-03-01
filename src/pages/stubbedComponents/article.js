import React from "react"
import Article from "../../components/article_layout";
import "../../styles/index.scss"


class ArticlePage extends React.Component {
  render() {

    const blogPost = {
      "heroImage": {
        "file": {
          "fileName": "unsplash-7rXu_HJO9D8-unsplash.jpg",
          "url": "//images.ctfassets.net/2mx9j3gfirje/meYStsSluOXMLMAOVy6pd/3869d4c7dd89eefee050dc7620b5deba/unsplash-7rXu_HJO9D8-unsplash.jpg"
        }
      },
      "blogTitle": "R-ee-mote Working Spielbuch",
      "blogAuthor": "  Dave Hewett",
      "blogDate": "2019-12-01T18:30:00.000Z",
      "blogPostOverview": {
        "blogPostOverview": "Dieses Spielbuch über das Arbeiten aus der Ferne nimmt die Erfahrungen einer Vielzahl von EE-Beratern auf, die Zeit damit verbracht haben, aus der Ferne zu arbeiten, um unserem Netzwerk zu helfen, effektiver zusammenzuarbeiten und Wege zu finden, die verteilte Arbeitserfahrung zu verbessern."
      },
      "blogContent": {
        "json": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Wie es Ihnen helfen kann",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-3"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "\nWir bei Equal Experts sind leidenschaftlich daran interessiert, dass Teams in die Lage versetzt werden, unabhängig von ihrem Standort erfolgreich zu sein und Mehrwert zu liefern. Im Laufe der Jahre haben unsere Teams das gesamte Spektrum abgedeckt, von vollständig gemeinsam angesiedelten Teams, Teams mit Arbeit von zu Hause aus, Teams mit mehreren Standorten, die über verschiedene Regionen und Zeitzonen verteilt sind, bis hin zu vollständig verteilten Teams.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "\nDa sich die durch das Arbeiten aus der Ferne entstandenen Reibungsverluste rasch auflösen und die Generation von Arbeitnehmern, die mit dem Online-Spiel aufgewachsen sind, in die Arbeitswelt eintritt, wird das Arbeiten aus der Ferne zu einem immer wichtigeren Teil unseres Arbeitslebens werden. Mit den richtigen Werkzeugen, Praktiken und der richtigen Denkweise können die einstmals erheblichen Vorteile, die das Arbeiten an einem gemeinsamen Standort bietet, so weit reduziert werden, dass bei der Bildung Ihres nächsten Teams die Fernarbeit eine wichtige Rolle spielen sollte.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "\nTeilen Sie Ihre Gedanken mit uns, finden Sie Updates, Vorlagen und andere Informationen unter www.equalexperts.com, oder nehmen Sie Kontakt mit uns auf, wenn Sie an einer Zusammenarbeit mit uns interessiert sind.",
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

    return (
      <div className={`main-container`}>
        <Article
           heroImage={blogPost.heroImage}
           blogTitle={blogPost.blogTitle}
           blogAuthor={blogPost.blogAuthor}
           date={new Date(blogPost.blogDate)}
           blogPostOverview={blogPost.blogPostOverview}
           blogContent={blogPost.blogContent.json.content}
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

export default ArticlePage
