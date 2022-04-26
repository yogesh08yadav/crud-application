import { combineReducers, createStore } from "redux";
import { geekReducer } from "./reducers";

const reducer = combineReducers({
    geekReducer: geekReducer
})

export const store = createStore(reducer)