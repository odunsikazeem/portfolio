import React from "react";
import Detail from "../detail/Detail";
import "./style.css"


function Card(props) {
  return (
    <a href={props.project} className="card">
      <div className="img-container">
        <img src={props.image} alt="screenshot"/>
      </div>
      <div className="content">
      <h2>
            {props.title}
      </h2>
          
        <ul>
          <li>
            <Detail detailurl={props.info} />
          </li>
          
        </ul>
      </div>
    </a>
  );
}

export default Card;
