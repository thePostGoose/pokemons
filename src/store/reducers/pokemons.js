import {
  GETING_STARTS,
  GETED_SUCCESS,
  GETED_ERROR,
  GETING_ENDS,
  SEARCH_HANDLER,
} from "../actions/actionsTypes";

const initialState = {
  pokemonsNames: [],
  limit: 20,
  offset: 0,
  searchValue: "",
  loading: false,
  error: null,
};

export function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case GETING_STARTS:
      return {
        ...state,
        loading: true,
      };
    case GETED_SUCCESS:
      return {
        ...state,
        error: null,
        pokemonsNames: action.paiload,
      };
    case GETED_ERROR:
      return {
        ...state,
        error: action.paiload,
      };
    case GETING_ENDS:
      return {
        ...state,
        loading: false,
      };
    case SEARCH_HANDLER:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
}
