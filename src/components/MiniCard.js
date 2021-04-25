import React from "react";
import './MiniCard.css';

const MiniCard = (props) => {
  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <div className={props.todaydeaths>200 && props.todaydeaths<1000 ? "card-body text-center warning" : props.todaydeaths < 200 ? "card-body text-center not-warning" : props.todaydeaths > 1000  ?"card-body text-center warning-danger" : ""}>
        <h5 className="card-title text-center "><strong>{props.name}</strong></h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item pr-0">
          <b>Population:</b><span className="float-right">{props.population} people</span>
        </li>
        <li className="list-group-item pr-0">
          <b>Today cases:</b><span className="float-right">{props.today}</span> 
        </li>
        <li className="list-group-item pr-0">
          <b>Total cases:</b><span className="float-right">{props.totalcases}</span> 
        </li>
        <li className="list-group-item pr-0">
          <b>Today deaths:</b><span className="float-right">{props.todaydeaths}</span> 
        </li>
        <li className="list-group-item pr-0">
          <b>Total deaths:</b><span className="float-right">{props.totaldeaths}</span> 
        </li>
      </ul>
    </div>
  );
};

export default MiniCard;
