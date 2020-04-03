import React from "react"

const SimilarServices = (props) => (
 
  <div className={`services__contentWrapper`}>
    <div className={`services__contentWrapper__container`}>
      <h2>You may also be interested in...</h2>
      <div className={'services__similarServices'}>
        {props.similarServices.map((item, i) => {
          return (
            <div
              key={`services__blockCallout_${i}`}
              className={'services__blockCallout'}
            >
              <img src="#" />
              <h3>{item.serviceTitle}</h3>
              <div>{item.serviceDescription}</div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);


export default SimilarServices
