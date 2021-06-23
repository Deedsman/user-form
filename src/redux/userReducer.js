import { GET_USERS_FETCHING } from "./types";
import { GET_USERS_SUCCESS } from "./types";
import { GET_USERS_FILED } from "./types";
import { SET_CURRENT_NUMBER } from "./types";
import { SET_USERS_FETCHING } from "./types";
import { SET_USERS_SUCCESS } from "./types";
import { SET_USERS_FILED } from "./types";
import { PUT_USERS_SUCCESS } from "./types";
import { DELETE_USERS_SUCCESS } from "./types";
import {DELETE_USERS_FILED} from "./types"
import {PUT_USERS_FILED} from "./types"




const initialState = {
  users: [],
  loading: false,
  addUser:false,
  error: null,
  errorDel:null,
  setError:null,
  putError:null,
  totalCount: 10,
  pageSize: 2,
  currentPage: 1,
  pages: [],
  newUsers: [],
  putUser:[{
    "id":2,
    "name": "Pika",
    "surname": "Lom",
    "desc":"reload",
     "avatar":null
}],
  deleteUser:[{
    "id":1,
    "name": "Nill",
    "surname": "mak",
    "desc":"del",
     "avatar":null
}]

};

export default function userReducer(state = initialState, action) {
    debugger;
  switch (action.type) {
    case GET_USERS_FETCHING:
      return { ...state, loading: true };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
        pages: pageCount(action.users.length, state.pageSize),
      };
    case GET_USERS_FILED:
      return { ...state, loading: false, error: action.message };
    case SET_USERS_SUCCESS:
      return { ...state, newUsers: [...state.newUsers, action.payload], addUser:true};
    case SET_USERS_FILED:
        return { ...state, loading: false, setError: action.message ,addUser:false};
    case DELETE_USERS_FILED:
        return { ...state, errorDel: action.message};
    case SET_USERS_FETCHING:
    return { ...state, loading: true };  
    case SET_CURRENT_NUMBER:
      return { ...state, currentPage: action.payload };
    case PUT_USERS_SUCCESS:
      return { ...state, putUser: [action.payload] };
      case PUT_USERS_FILED:
        return { ...state, putError: action.message };  
    case DELETE_USERS_SUCCESS:
         
      return { ...state, deleteUser: ''};
    default:
      return state;
  }
}

function pageCount(t, p) {
  let pCount = Math.ceil(t / p);
  let pArr = [];
  for (let i = 1; i <= pCount; i++) {
    pArr.push(i);
  }
  return pArr;
}

export const setUserCreator = (new_user) => ({
  type: SET_USERS_FETCHING,
  payload: new_user,
});
export const setCurrentNumber = (number) => ({
  type: SET_CURRENT_NUMBER,
  payload: number,
});
export const getUserCreator = (users) => ({
  type: GET_USERS_FETCHING,
  payload: users,
});
export const puttUserCreator = (users) => ({
    type: PUT_USERS_SUCCESS,
    payload: users,
  });
export const deleteUserCreator = () => ({
    type: DELETE_USERS_SUCCESS,
});
  
