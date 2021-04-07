import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import Card from "./components/Card";
import Form from "./components/Form";
import Home from "./components/Home";

import NavBar from './shared/NavBar';
import Footer from "./shared/Footer";

function App() {
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
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
