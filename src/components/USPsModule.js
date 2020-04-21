import React from "react"

const USPsModule = props => (
  <div className={"services__uspsWrapper"}>
    <div className={"services__uspsContainer"}>
      <h2>{props.whyEEHeading}</h2>
      <div className={"services__usps"}>
        {props.ourUsps.map((item, i) => {
          return (
            <div key={`services__usps_${i}`} className={"services__usp"}>
              <div className={"services__decorativeBar"} />
              <h3 className={"services__uspHeading"}>{item.usp}</h3>
              <div className={"services__uspDescription"}>
                {item.uspDescription.uspDescription}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default USPsModule
