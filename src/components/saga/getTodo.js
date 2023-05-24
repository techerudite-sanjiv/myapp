import { takeEvery,put, call } from 'redux-saga/effects'
import { API_URL, BASE_URL } from '../axios/config';
import axios from "../axios/index"
import { FETCH_TODO, SET_TODO_DATA } from '../redux/constant';


async function callPostApi(data) {
    return axios.request({
        method: "get",
        url: BASE_URL + API_URL.GET_TODOS,
        data: data
    });
}

export function* todoAsync(action) {
    let response = yield call(callPostApi);
    yield put({
        type: SET_TODO_DATA,
        data: response.data
      })
}

export function* watchTodoAsync() {
    yield takeEvery(FETCH_TODO, todoAsync)
}