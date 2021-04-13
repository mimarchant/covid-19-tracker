import React from "react";
import './MiniCard.css';

const MiniCard = (props) => {
  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <div className={props.todaydeaths>200 && props.todaydeaths<1000 ? "card-body text-center warning" : props.todaydeaths < 200 ? "card-body text-center not-warning" : props.todaydeaths > 1000  ?"card-body text-center warning-danger" : ""}>
        <h5 className="card-title text-center "><strong>{props.name}</strong></h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <b>Population:</b> {props.population} people
        </li>
        <li className="list-group-item">
          <b>Today cases:</b> {props.today}
        </li>
        <li className="list-group-item">
          <b>Total cases:</b> {props.totalcases}
        </li>
        <li className="list-group-item">
          <b>Today deaths:</b> {props.todaydeaths}
        </li>
        <li className="list-group-item">
          <b>Total deaths:</b> {props.totaldeaths}
        </li>
      </ul>
    </div>
  );
};

export default MiniCard;
