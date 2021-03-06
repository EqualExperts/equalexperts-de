import React from "react"

const Roles = props => (
  <div>
    <div className={"module roles"}>
      <a
        href={`#${props.rolesIntroContent.rolesTitle}`}
        className={"inPageLink"}
        name={props.rolesIntroContent.rolesTitle}
        id={props.rolesIntroContent.rolesTitle}
      >
        &nbsp;
      </a>
      <h2 className={"module_heading"}>{props.rolesIntroContent.rolesTitle}</h2>
      {props.rolesIntroContent.rolesIntroduction.json.content.map(item => {
        return item.content.map(content => {
          return (
            <p className="module_intro" key={content.value}>
              {content.value}
            </p>
          )
        })
      })}
    </div>
    <div className="roleTypes">
      {props.roles.map(role => {
        let uri = encodeURI(`${props.homeLink}${role.node.roleLink}`)
        let key = `roleType_${role.node.roleTitle}`
        let image = ""
        if (role.node.roleImage) {
          image = role.node.roleImage.file.url
        }
        return (
          <a
            style={{
              backgroundImage: `url(${image})`,
            }}
            key={key}
            href={uri}
            className={"roleTypes_type"}
          >
            {role.node.roleTitle}
          </a>
        )
      })}
    </div>
  </div>
)

export default Roles
