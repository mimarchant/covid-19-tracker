import React, { useEffect, useState } from "react";

import Jumbotron from "../components/Jumbotron";
import Legend from "../components/Legend";
import MiniCard from "../components/MiniCard";


const Home = (props) => {
  const [continents, setContinents] = useState(null);
  const url = "https://corona.lmao.ninja/v2/continents?yesterday=false&sort";
  const totalCountries =
    !!continents &&
    continents[0].countries.length +
      continents[1].countries.length +
      continents[2].countries.length +
      continents[3].countries.length +
      continents[4].countries.length +
      continents[5].countries.length;

  const getData = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setContinents(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <div className="container mt-auto">
      <div className="row">
        <div className="col">
          {!!continents && <Jumbotron countryNumbers={totalCountries} />}
        </div>
        <Legend />
      </div>
      <div className="row ml-4 pt-3">
        {!!continents &&
          continents.map((continent, index) => {
            return (
              <div className="col pb-5" key={index}>
                <MiniCard
                  name={continent.continent}
                  population={continent.population}
                  today={continent.todayCases}
                  totalcases={continent.cases}
                  todaydeaths={continent.todayDeaths}
                  totaldeaths={continent.deaths}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
