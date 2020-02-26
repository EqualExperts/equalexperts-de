import React from "react";

const Clients = (props) => (
  <div className={"module client_container"}>
    <a className={"inPageLink"} name={props.title} />
    <h2 className={"module_heading"}>{props.title}</h2>
    <ul className={"client_list"}>
        {props.clientData.map((item) => {
        return (<li className={"client_item"} key={item.name}><img src={item.url} alt={item.name}/></li>)  
        })}
    </ul>
  </div>
)


export default Clients
