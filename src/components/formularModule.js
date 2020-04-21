import React from "react"

const FormularModule = props => (
  <div className={`services__contentWrapper`}>
    <div className={`services__contentWrapper__container`}>
      <h2>{props.formularForSuccessHeading}</h2>
      <div className={"services__formularForSuccess"}>
        {props.formularForSuccess.map((item, i) => {
          let plusSymbol = ""
          if (i < props.formularForSuccess.length - 1) {
            plusSymbol = (
              <div className={"services__formularForSuccessPlus"}></div>
            )
          }
          return (
            <React.Fragment key={`formular_part_${i}`}>
              <div className={"services__formularForSuccessComponent"}>
                {item.formulaTitle}
              </div>
              {plusSymbol}
            </React.Fragment>
          )
        })}
      </div>
      <div className={"services__results"}>
        <div className={"services__formularForSuccessEquals"}></div>
        <div className={"services__formularForSuccessResult"}>
          <h2>{props.whatIsSuccess}</h2>
        </div>
      </div>
    </div>
  </div>
)

export default FormularModule
