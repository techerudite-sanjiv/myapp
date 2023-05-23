import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
