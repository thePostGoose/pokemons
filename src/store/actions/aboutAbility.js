import { Pokedex } from "pokeapi-js-wrapper";
import {
  GETING_ABILITY_STARTS,
  GETED_ABILITY_ERROR,
  GETING_ABILITY_ENDS,
  GETED_ABILITY_SUCCESS,
} from "./actionsTypes";

const pokeApi = new Pokedex();

export function getingAbilityStarts() {
  return {
    type: GETING_ABILITY_STARTS,
  };
}
export function getingAbilityEnds() {
  return {
    type: GETING_ABILITY_ENDS,
  };
}
export function getingAbilitySuccess(abilityInfo) {
  return {
    type: GETED_ABILITY_SUCCESS,
    payload: abilityInfo,
  };
}
export function getingAbilityError(error) {
  return {
    type: GETED_ABILITY_ERROR,
    payload: error,
    error: true,
  };
}

export function getAbility(ability) {
  return async (dispatch) => {
    dispatch(getingAbilityStarts());

    try {
      const abilityInfo = await pokeApi.getAbilityByName(ability);
      const effect = abilityInfo["effect_entries"].find(
        (item) => item.language.name === "en"
      ).effect;
      const pokemonsList = abilityInfo.pokemon.map((item) => item.pokemon.name);

      dispatch(getingAbilitySuccess({ effect, pokemonsList }));
    } catch (error) {
      dispatch(getingAbilityError(error));
    }
    dispatch(getingAbilityEnds());
  };
}
