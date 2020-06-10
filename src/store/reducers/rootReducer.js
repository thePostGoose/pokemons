import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemons";
import { pokemonPageReducer } from "./pokemonPage";
import { aboutAbilityReducer } from "./aboutAbility";

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemonPage: pokemonPageReducer,
  aboutAbility: aboutAbilityReducer,
});
