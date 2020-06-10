import { Pokedex } from "pokeapi-js-wrapper";
import {
  GETING_POKEMON_STARTS,
  GETING_POKEMON_ENDS,
  GETED_POKEMON_SUCCESS,
  GETED_POKEMON_ERROR,
} from "./actionsTypes";

const pokeApi = new Pokedex();

export function getingPokemonStarts() {
  return {
    type: GETING_POKEMON_STARTS,
  };
}
export function getingPokemonEnds() {
  return {
    type: GETING_POKEMON_ENDS,
  };
}
export function getingPokemonSuccess(pokemon) {
  return {
    type: GETED_POKEMON_SUCCESS,
    payload: pokemon,
  };
}
export function getingPokemonError(error) {
  return {
    type: GETED_POKEMON_ERROR,
    payload: error,
    error: true,
  };
}

export function getPokemonAbout(name) {
  return async (dispatch) => {
    dispatch(getingPokemonStarts());

    try {
      const { abilities, stats, types } = await pokeApi.getPokemonByName(name);
      dispatch(getingPokemonSuccess({ abilities, stats, types }));
    } catch (error) {
      dispatch(getingPokemonError(error));
    }
    dispatch(getingPokemonEnds());
  };
}
