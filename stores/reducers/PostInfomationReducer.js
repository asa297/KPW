import { actionTypes } from "../type";

export default function(state = null, action) {
  switch (action.type) {
    case actionTypes.POST_INFORMATION_SUCESS:
      return action.payload;
    case actionTypes.POST_INFORMATION_FAIL:
      return state;
    default:
      return state;
  }
}
