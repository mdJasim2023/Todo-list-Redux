
import {createStore } from "redux";
import registerReducer from "./Reducers/registerReducer";
export let store = createStore(registerReducer)

export default store