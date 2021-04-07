import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top rounded" src={props.flag} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.name} ({props.abr})</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Population: {props.population} people</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default Card;
