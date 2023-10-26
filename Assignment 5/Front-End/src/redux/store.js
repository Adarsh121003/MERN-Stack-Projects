import { createStore } from "redux";
import { combineReducer } from "./combineReducers";

export const store = createStore(
    combineReducer
)