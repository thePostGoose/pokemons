import {
  GETING_POKEMON_STARTS,
  GETED_POKEMON_ERROR,
  GETING_POKEMON_ENDS,
  GETED_POKEMON_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  stats: [],
  types: [],
  abilities: [],
  loading: false,
};

export function pokemonPageReducer(state = initialState, action) {
  switch (action.type) {
    case GETING_POKEMON_STARTS:
      return {
        ...state,
        loading: true,
      };
    case GETED_POKEMON_SUCCESS:
      return {
        ...state,
        error: null,
        types: action.payload.types,
        abilities: action.payload.abilities,
        stats: action.payload.stats,
      };
    case GETED_POKEMON_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GETING_POKEMON_ENDS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
