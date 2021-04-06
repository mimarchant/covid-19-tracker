import React, { useRef, useState } from "react";
import Card from "./components/Card";


function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState({});
  let inputRef = useRef(null);
  let url = `https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query%20`;

  const handleChange = (e) => {
    setCountry(
      inputRef.value
        .trim()
        .toLowerCase()
        .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))
    );
  };

  const getData = (url) => {
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>{
      console.log(data)
      setData(data)
    })
    .catch((err)=>console.log(err))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(url);

    inputRef.value = "";
  };
  return (
    <>
      <div className="container">
        <h1 className="text-danger text-center">hola</h1>
        <div className="text-center">
          <form onSubmit={handleSubmit}>
            <input
              ref={(r) => (inputRef = r)}
              onChange={handleChange}
              name="country"
              type="text"
            />
            <label htmlFor="country">Selecciona un pais</label>
            <button type="submit">submit</button>
          </form>
        </div>
        <Card name={data.country} flag={data.countryInfo.flag} abr={data.countryInfo.iso2} population={data.population}/>
      </div>
    </>
  );
}

export default App;
