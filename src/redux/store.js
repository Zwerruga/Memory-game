import { createStore } from "redux";
import { rootReducer } from "./reducers/index.js";

const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem("records", JSON.stringify(store.getState().records));
});

export default store;
