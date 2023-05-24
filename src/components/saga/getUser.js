import { takeEvery,put,call} from 'redux-saga/effects'
import { API_URL, BASE_URL } from '../axios/config';
import axios from "../axios/index"
import { FETCH_USER, SET_USER_DATA } from '../redux/constant';


async function callPostApi(data) {
      return axios.request({
        method: "get",
        url: BASE_URL+API_URL.GET_USERS,
        data: data
      });
    }
 
export function* userAsync(action) {
    let response = yield call(callPostApi);
    yield put({
        type: SET_USER_DATA,
        data: response.data
      })
}

export function* watchUserAsync() {
  yield takeEvery(FETCH_USER, userAsync)
}