import React from "react";

const Clients = (props) => (
  <div>
    <div className={"module roles"}>
      <h2 className={"module_heading"}>{props.rolesIntroContent.rolesTitle}</h2>
      {props.rolesIntroContent.rolesIntroduction.json.content.map(item => {
          return item.content.map(content => {
            return (<p className="module_intro" key={content.value}>{content.value}</p>)
          })
      })}
    </div>
    <div className="roleTypes">
      {props.roles.map(role => {
        let uri = encodeURI(`/roles/${role.node.roleTitle}`);
        return (
          <a href={uri} className={"roleTypes_type"} target="_blank" key={role.node.id}>{role.node.roleTitle}</a>
        )
      })}
  </div>
</div>
)


export default Clients
