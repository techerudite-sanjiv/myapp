import { takeEvery ,put,call} from 'redux-saga/effects'
import { API_URL, BASE_URL } from '../axios/config';
import axios from "../axios/index"
import { FETCH_COMMENT, SET_COMMENT_DATA } from '../redux/constant';


async function callPostApi(data) {
      return axios.request({
        method: "get",
        url: BASE_URL+API_URL.GET_COMMENTS,
        data: data
      });
    }

export function* commentAsync(action) {
  let { payload } = action;   
    let response = yield call(callPostApi);
    yield put({
        type: SET_COMMENT_DATA,
        data: response.data
      })
}


export function* watchCommentAsync() {
  yield takeEvery(FETCH_COMMENT, commentAsync)
}