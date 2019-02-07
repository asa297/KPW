import { actionTypes } from "../type";

export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_GENDER:
      return action.payload;
    default:
      return state;
  }
}
