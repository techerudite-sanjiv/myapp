import { takeEvery, put, call } from 'redux-saga/effects'
import { API_URL, BASE_URL } from '../axios/config';
import axios from "../axios/index"
import { FETCH_POST, SET_POST_DATA } from '../redux/constant';


async function callPostApi(data) {
  return axios.request({
    method: "get",
    url: BASE_URL + API_URL.GET_POSTS,
    data: data
  });
}

export function* postAsync(action) {
  let response = yield call(callPostApi);
  yield put({
    type: SET_POST_DATA,
    data: response.data
  })
}

export function* watchPostAsync() {
  yield takeEvery(FETCH_POST, postAsync)
}