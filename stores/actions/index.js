import uuidv4 from "uuid";
import { actionTypes } from "../type";
import {
  title,
  nationality,
  gender,
  phoneCode,
  member,
  list
} from "../../static/data.json";

const root = `/api`;

export const FetchTitle = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_TITLE, payload: title });
};

export const FetchNationality = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_NATIONALITY, payload: nationality });
};

export const FetchGender = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_GENDER, payload: gender });
};

export const FetchPhoneCode = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_PHONECODE, payload: phoneCode });
};

export const FetchMember = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_MEMBER, payload: member });
};

export const PostInformation = value => async dispatch => {
  try {
    localStorage.setItem(uuidv4(), JSON.stringify(value));
    dispatch({ type: actionTypes.POST_INFORMATION_SUCESS, payload: value });
  } catch (e) {
    dispatch({ type: actionTypes.POST_INFORMATION_FAIL, payload: null });
  }
};

export const FetchList = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_LIST, payload: list });
};

export const DeleteList = (status, data, key) => async dispatch => {
  if (status === "SINGLE") {
    data = data.filter(value => value.key !== key);
    dispatch({ type: actionTypes.DELETE_SINGLE_LIST, payload: data });
  } else if (status === "ALL") {
    data = data.filter(value => value.checked === false);
    dispatch({ type: actionTypes.DELETE_ALL_LIST, payload: data });
  }
};

export const ChangeChecked = (status, data, key, checked) => dispatch => {
  if (status === "SINGLE") {
    const index = data.findIndex(value => value.key === key);
    data[index].checked = !data[index].checked;
    dispatch({ type: actionTypes.CHANGE_SINGLE_CHECKED, payload: data });
  } else if (status === "ALL") {
    data = data.map(value => {
      value.checked = checked;
      return value;
    });
    dispatch({ type: actionTypes.CHANGE_ALL_CHECKED, payload: data });
  }
};
