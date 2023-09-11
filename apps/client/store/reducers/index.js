import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import skillReducer from "./skillReducer";
import { initState as skillState } from "./skillReducer";

let rootState = {
  ...skillState,
};

let rootReducer = combineReducers({
  skillReducer,
});

export const initStore = (initialState = rootState) => {
  // console.log(rootState)

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
