import { Pokedex } from "pokeapi-js-wrapper";
import {
  GETING_STARTS,
  GETING_ENDS,
  GETED_SUCCESS,
  GETED_ERROR,
  SEARCH_HANDLER,
} from "./actionsTypes";

const pokeApi = new Pokedex();

export function getingStarts() {
  return {
    type: GETING_STARTS,
  };
}
export function getingEnds() {
  return {
    type: GETING_ENDS,
  };
}
export function getingSuccess(pokemons) {
  return {
    type: GETED_SUCCESS,
    payload: pokemons,
  };
}
export function getingError(error) {
  return {
    type: GETED_ERROR,
    payload: error,
    error: true,
  };
}

export function getPokemons() {
  return async (dispatch, getState) => {
    dispatch(getingStarts());
    const { limit, offset } = getState().pokemons;
    try {
      const response = await pokeApi.getPokemonsList({ limit, offset });
      const pokemonsNames = response.results.map((item) => item.name);
      dispatch(getingSuccess(pokemonsNames));
    } catch (error) {
      dispatch(getingError(error));
    }
    dispatch(getingEnds());
  };
}

export function searchHandler(value) {
  return {
    type: SEARCH_HANDLER,
    payload: value,
  };
}
