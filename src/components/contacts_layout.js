import React from "react";

const Clients = (props) => (
  <div>
    <div className={"module contact"}>
      <h2 className={"module_heading"}>{props.contactCopy.contactIntroductionTitle}</h2>
      {props.contactCopy.contactIntroduction.json.content.map(item => {
          return item.content.map(content => {
            return (<p className="module_intro" key={content.value}>{content.value}</p>)
          })
      })}
    </div>
    <div className="contact_locations">
      <a 
        href={`#${props.contactCopy.contactSectionHeading}`} 
        className={"inPageLink"} 
        name={props.contactCopy.contactSectionHeading}
        id={props.contactCopy.contactSectionHeading}>&nbsp;</a>
      <h2 className="module_heading">{props.contactCopy.contactSectionHeading}</h2>
      <div className="contact_locationsContainers">
        {props.officeLocations.map(location => {
          return (
            <div className={"contact_location"} key={location.node.city}>
              <h3 className="contact__region">{location.node.region}</h3>
              <h4 className="contact__city">{location.node.city}</h4>
              <a className="contact__tel" href="tel:">{location.node.tel}</a>
              <a className="contact__email" href="mailto:{location.node.email}">{location.node.email}</a>
              {/* <a href={location.node.link} className="btn btn--secondary">
                  {location.node.linkText}
              </a> */}
            </div>
          )
        })}
      </div>
  </div>
</div>
)


export default Clients
