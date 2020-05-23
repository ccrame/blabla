import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { Checkers } from "./components/Checkers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Blabla</h1>
      <Switch>
        <Route component={Checkers} exact path="/checkers" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
