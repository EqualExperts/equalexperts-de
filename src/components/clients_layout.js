import React from "react"

const Clients = props => (
  <div className={"module client_container"}>
    <a
      href={`#${props.title}`}
      className={"inPageLink"}
      name={props.title}
      id={props.title}
    >
      &nbsp;
    </a>
    <h2 className={"module_heading"}>{props.title}</h2>
    <ul className={"client_list"}>
      {props.clientData.map(item => {
        return (
          <li className={"client_item"} key={item.title}>
            <img src={item.file.url} alt={item.title} />
          </li>
        )
      })}
    </ul>
  </div>
)

export default Clients
