import React from "react"

const SimilarServices = props => (
  <div className={`services__contentWrapper`}>
    <div className={`services__contentWrapper__container`}>
      <h2>You may also be interested in...</h2>
      <div className={"services__similarServices"}>
        {props.similarServices.map((item, i) => {
          return (
            <div
              key={`services__similarServices_${i}`}
              className={"services__similarService"}
            >
              <img alt={item.serviceThumbnail.file.filename} src={item.serviceThumbnail.file.url} />
              <h3>{item.serviceTitle}</h3>
              <p>{item.serviceDescription.serviceDescription}</p>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default SimilarServices
