import { combineReducers,createStore } from "redux";
import counterReducer from "./Reducers/counterReducer";

import todoReducer from "./Reducers/TodoReducer";

const store = createStore(combineReducers({t:todoReducer,c:counterReducer}))

export default store