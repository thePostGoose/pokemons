import React from "react";
import "./App.module.scss";
import { Route, Switch } from "react-router-dom";
import PokemonsContainer from "./containers/PokemonsContainer";
import PokemonPageContainer from "./containers/PokemonPageContainer";
import AbilityInfoContainer from "./containers/AbilityInfoContainer";
function App() {
  return (
    <Switch>
      <Route path="/pokemons/:name" component={PokemonPageContainer} />
      <Route path="/abilities/:ability" component={AbilityInfoContainer} />
      <Route path="/" component={PokemonsContainer} />
    </Switch>
  );
}

export default App;
