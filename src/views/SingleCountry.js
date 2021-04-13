import React, { useState } from 'react';

const SingleCountry = props => {
  const [country, setCountry] = useState("");
  const [data, setData] = useState();

  let url = `https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query%20`;

  const getData = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setData(data);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          alert(err.message);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(url);
  };
    return (
        <h1 className='text-dark'>hola, esto un single conutry jeje</h1>
    );
};

export default SingleCountry;