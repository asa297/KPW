import { combineReducers } from "redux";

import TitleReducer from "./TitleReducer";
import NationalityReducer from "./NationalityReducer";
import GenderReducer from "./GenderReducer";
import PhoneCodeReducer from "./PhoneCodeReducer";
import MemberReducer from "./MemberReducer";
import PostInfomationReducer from "./PostInfomationReducer";
import ListReducer from "./ListReducer";

export default combineReducers({
  TitleReducer,
  NationalityReducer,
  GenderReducer,
  PhoneCodeReducer,
  MemberReducer,
  PostInfomationReducer,
  ListReducer
});
