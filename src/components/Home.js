import React, { useEffect, useState } from "react";

import Jumbotron from './Jumbotron';
import MiniCard from "./MiniCard";
import MiniCardList from "./MiniCardList";

const Home = (props) => {
  const [continents, setContinents] = useState();
  const url = "https://corona.lmao.ninja/v2/continents?yesterday=false&sort";

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
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Jumbotron countryNumbers={221} />
        </div>
      </div>
      <div className="row">
        {
            !!continents &&
            continents.map((continent)=>{
                return (
                    <div className="col">
                        <MiniCard name={continent.continent} population={continent.population} today={continent.todayCases} />
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Home;
