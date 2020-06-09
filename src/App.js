import React from "react";
import "./App.module.scss";
import { Route, Switch } from "react-router-dom";
import PokemonsContainer from "./containers/PokemonsContainer";
function App() {
  return (
    <Switch>
    
      <Route path="/" component={PokemonsContainer} />
    </Switch>
  );
}

export default App;
