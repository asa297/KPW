import { actionTypes } from "../type";

export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_LIST:
      return action.payload;
    case actionTypes.DELETE_SINGLE_LIST:
    case actionTypes.DELETE_ALL_LIST:
      return [...action.payload];
    case actionTypes.CHANGE_SINGLE_CHECKED:
    case actionTypes.CHANGE_ALL_CHECKED:
      return [...action.payload];
    default:
      return state;
  }
}
