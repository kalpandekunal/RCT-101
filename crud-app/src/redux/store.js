import {legacy_createStore,  applyMiddleware } from "redux";
import { reducer as productReducer } from "./productReducer/reducer";
import thunk from "redux-thunk";

export const store = legacy_createStore(productReducer,applyMiddleware(thunk));