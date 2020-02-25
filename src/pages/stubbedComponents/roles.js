import React from "react"
import RolesLayout from "../../components/roles_layout";
import "../../styles/index.scss"


class IndexPage extends React.Component {
  render() {

    const rolesIntroContent = {
      "rolesTitle": "Unser Experten",
      "rolesIntroduction": {
        "json": {
          "content": [
            {
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Um erfolgreiche Teams zu bilden, streben wir an, dass alle Positionen abgedeckt werden. Obwohl jeder Auftrag unterschiedlich ist, sind funktionsübergreifende Teams, die von einer Reihe von Experten aus unseren Fachgebieten unterstützt werden, für die Bereitstellung großartiger Software entscheidend.",
                  "nodeType": "text"
                }
              ]
            }
          ]
        }
      }
    };

    const roles = [
      {
        "node": {
          "roleTitle": "Engineers & Tech leads",
          "roleImage": {
            "file": {
              "fileName": "code-24px.svg",
              "url": "//images.ctfassets.net/2mx9j3gfirje/3AIb91hzWHROmMJDK6xSNC/b00feadecc352249f6788bd812921ce6/code-24px.svg"
            }
          }
        }
      },
      {
        "node": {
          "roleTitle": "Data Analysts",
          "roleImage": {
            "file": {
              "fileName": "assessment-24px.svg",
              "url": "//images.ctfassets.net/2mx9j3gfirje/7x9fdTTj8flMKDx1hjRXZK/ec750c98ac1563e368a55094aa8c1d57/assessment-24px.svg"
            }
          }
        }
      },
      {
        "node": {
          "roleTitle": "DevSecOps & Security",
          "roleImage": {
            "file": {
              "fileName": "lock-24px.svg",
              "url": "//images.ctfassets.net/2mx9j3gfirje/1bXVXmXwnbqqcpMcBwhZ5W/b9f086546bb3b7234bc3bb9e19b4de96/lock-24px.svg"
            }
          }
        }
      },
      {
        "node": {
          "roleTitle": "Data Engineers & Data Scientists",
          "roleImage": {
            "file": {
              "fileName": "build-24px.svg",
              "url": "//images.ctfassets.net/2mx9j3gfirje/7BU0LDOs4yZp215R1nzqoZ/9266c3864b5803d91bcd9af6a6375035/build-24px.svg"
            }
          }
        }
      },
      {
        "node": {
          "roleTitle": "UX",
          "roleImage": {
            "file": {
              "fileName": "gesture-24px.svg",
              "url": "//images.ctfassets.net/2mx9j3gfirje/27B6mmq3LWfX3K7Y9lOKoD/f9ff4c6d1ba53e4954e0d8fd70483ffe/gesture-24px.svg"
            }
          }
        }
      },
      {
        "node": {
          "roleTitle": "QA",
          "roleImage": {
            "file": {
              "fileName": "bug_report-24px.svg",
              "url": "//images.ctfassets.net/2mx9j3gfirje/2rCVhPB1RCFRTQ1B7RPnHs/7df6ca3881f4897a78d8d46c1dbbc52e/bug_report-24px.svg"
            }
          }
        }
      },
      {
        "node": {
          "roleTitle": "Delivery Leads",
          "roleImage": {
            "file": {
              "fileName": "date_range-24px.svg",
              "url": "//images.ctfassets.net/2mx9j3gfirje/5EJkY5xIyane64I2IjQYSG/49796f0c54ad4c1c5373b06d38475cb6/date_range-24px.svg"
            }
          }
        }
      },
      {
        "node": {
          "roleTitle": "DevOps & Operability Engineers",
          "roleImage": {
            "file": {
              "fileName": "storage-24px.svg",
              "url": "//images.ctfassets.net/2mx9j3gfirje/2eUFWpz0QJzIOQMbzp4Aon/e64ba65c629ca1b18b0c9ac88d802dd7/storage-24px.svg"
            }
          }
        }
      },
      {
        "node": {
          "roleTitle": "Product Owners & Business Analysts",
          "roleImage": {
            "file": {
              "fileName": "ballot-24px.svg",
              "url": "//images.ctfassets.net/2mx9j3gfirje/3ItfEdu5LQizONlq4Vmuec/15fa9815233ee8cc7bf3025605b21d9e/ballot-24px.svg"
            }
          }
        }
      }
    ];

    return (
      <div className={`main-container`}>
        <RolesLayout 
             rolesIntroContent={rolesIntroContent}
             roles={roles}
        />
      </div>
    )
  }
}

export default IndexPage
