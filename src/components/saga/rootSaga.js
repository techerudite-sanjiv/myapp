
import { all } from 'redux-saga/effects'
import { watchCommentAsync } from './getComment'
import { watchPostAsync } from './getPost'
import { watchTodoAsync } from './getTodo'
import { watchUserAsync } from './getUser'

export default function* rootSaga() {
    yield all([
        watchPostAsync(),
        watchTodoAsync(),
        watchUserAsync(),
        watchCommentAsync()
    ])
}