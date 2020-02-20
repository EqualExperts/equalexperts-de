import React from "react";

const Clients = (props) => (
  <div className={"module client_container"}>
    <h2 className={"client_title"}>{props.title}</h2>
    <ul className={"client_list"}>
        {props.clientData.map((item) => {
        return (<li className={"client_item"} key={item.name}><img src={item.url} alt={item.name}/></li>)  
        })}
    </ul>
  </div>
)


export default Clients
