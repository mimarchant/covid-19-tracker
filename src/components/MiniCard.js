import React from "react";

const MiniCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      
      <div className="card-body">
        <h5 className="card-title text-center">{props.name}</h5>

      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Population:</b> {props.population} people</li>
        <li className="list-group-item"><b>Today cases:</b> {props.today}</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">

      </div>
    </div>
  );
};

export default MiniCard;