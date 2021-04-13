import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import SingleCountry from './views/SingleCountry';
import Home from "./views/Home";

import NavBar from './shared/NavBar';
import Footer from "./shared/Footer";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
        <Route path="/country">
            <SingleCountry />
          </Route>
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
