import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_FETCHING } from "../types";
import { GET_USERS_SUCCESS } from "../types";
import { GET_USERS_FILED } from "../types";
import { SET_USERS_SUCCESS } from "../types";
import { SET_USERS_FILED } from "../types";
import { DELETE_USERS_FILED } from "../types";
import { SET_USERS_FETCHING } from "../types";
import { PUT_USERS_SUCCESS } from "../types";
import { DELETE_USERS_SUCCESS } from "../types";
import { PUT_USERS_FILED } from "../types";

const apiUrl = "http://77.120.241.80:8811/api/users";
const apiPut = "http://77.120.241.80:8811/api/user/19";
const apiDeleted = "http://77.120.241.80:8811/api/user/20";
const postUrl = "https://jsonplaceholder.typicode.com/posts/1";

function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
}

function* usersWorker() {
  try {
    const users = yield call(getApi);
    yield put({ type: GET_USERS_SUCCESS, users: users });
  } catch (e) {
    yield put({ type: GET_USERS_FILED, message: e.message });
  }
}
let id = 1415;
function createAsyncUser({ payload }) {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      id: id + 1,
      name: payload.name,
      surname: payload.surname,
      desc: payload.desc,
      avatar: null,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
}
function createAsyncPutUser({ payload }) {
  return fetch(apiPut, {
    method: "PUT",
    body: JSON.stringify({
      id: id + 1,
      name: payload.name,
      surname: payload.surname,
      desc: payload.desc,
      avatar: null,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
}

function createAsyncDeleteUser() {
  return fetch(apiDeleted, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
}

function* setUsersWorker(action) {
  try {
    const new_users = yield call(createAsyncUser, action.payload);
    yield put({ type: SET_USERS_SUCCESS, new_users: new_users });
  } catch (e) {
    yield put({ type: SET_USERS_FILED, message: e.message });
  }
}

function* putUsersWorker(action) {
  try {
    const new_users = yield call(createAsyncPutUser, action.payload);
    yield put({ type: PUT_USERS_SUCCESS, payload: new_users });
  } catch (e) {
    yield put({ type: PUT_USERS_FILED, message: e.message });
  }
}
function* deleteUsersWorker() {
  try {
    const new_users = yield call(createAsyncDeleteUser);
    yield put({ type: DELETE_USERS_SUCCESS });
  } catch (e) {
    yield put({ type: DELETE_USERS_FILED, message: e.message });
  }
}

export function* usersWatcher() {
  yield takeEvery(GET_USERS_FETCHING, usersWorker);
}

export function* setUsersWatcher() {
  yield takeEvery(SET_USERS_FETCHING, setUsersWorker);
}
export function* putUsersWatcher() {
  yield takeEvery(PUT_USERS_SUCCESS, putUsersWorker);
}
export function* deleteUsersWatcher() {
  yield takeEvery(DELETE_USERS_SUCCESS, deleteUsersWorker);
}
