import React from "react"
import BlockCalloutModule from "./blockCalloutsModule";
import USPsModule from "./USPsModule";
import FormularModule from "./formularModule";
import SummaryModule from "./summaryModule";
import SimilarServices from "./similarServicesModule";

const serviceLayout = (props) => (
  <div>
    <div className={`services__hero`} style={
      {
        backgroundImage : `linear-gradient(0deg, rgba(25, 107, 152, 0.6), rgba(25, 107, 152, 0.6)), url(${props.heroImage.file.url})`
      }
    }>
      <div className={`services__hero__container`}>
        <h1 className={`services__title`}>{props.topicTitle}</h1>
        <div className={'services__postOverview'}>{props.shortExplanation}</div>
      </div>
    </div>
      <BlockCalloutModule 
        whyNow={props.whyNow}
        whatYouGet={props.whatYouGet} 
        whatYouGetIcon={props.whatYouGetIcon} 
      />
      <USPsModule
        whyEEHeading={props.whyEEHeading}
        ourUsps={props.ourUsps}
      />
      <FormularModule
        formularForSuccessHeading={props.formularForSuccessHeading}
        formularForSuccess={props.formularForSuccess}
        whatIsSuccess={props.whatIsSuccess}
      />
      <USPsModule
        whyEEHeading={"Why it works..."}
        ourUsps={props.formularForSuccess.map(item => {return {usp : item.formulaTitle, uspDescription: {uspDescription: item.formulaExplanation.formulaExplanation}}})}
      />
      <SummaryModule 
        summaryTitle={props.summaryTitle}
        whatSuccessLooksLike={props.whatSuccessLooksLike}
        ctas={props.ctas}
      />
      <SimilarServices
          similarServices={props.similarServices}
      />
  </div>
);


export default serviceLayout
