import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import rootSaga from "../saga/rootSaga";
import rootReducer from "./reducer/rootReducer";



const sagaMiddleware=createSagaMiddleware()

export default function configureStore() {
  const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}


