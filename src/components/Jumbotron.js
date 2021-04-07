import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => {
  return (
    <header>
      <div className="p-5 text-center bg-image imagen">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">COVID-19 TRACKER</h1>

              <a
                className="btn btn-outline-light btn-lg"
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                role="button"
                target="_blank"
              >
                Check Covid-19 WHO Website
              </a>
            </div>
            Countries Affected: {props.countryNumbers}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron;
