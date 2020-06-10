import {
  GETING_ABILITY_STARTS,
  GETED_ABILITY_ERROR,
  GETING_ABILITY_ENDS,
  GETED_ABILITY_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  ability: {},
  loading: false,
  error: null,
};

export function aboutAbilityReducer(state = initialState, action) {
  switch (action.type) {
    case GETING_ABILITY_STARTS:
      return {
        ...state,
        loading: true,
      };
    case GETED_ABILITY_SUCCESS:
      return {
        ...state,
        error: null,
        ability: action.payload,
      };
    case GETED_ABILITY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GETING_ABILITY_ENDS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
