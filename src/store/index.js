import { createStore, combineReducers } from "redux";
import { postReducer } from "./reducers/post";

const rootreducer = combineReducers({ post: postReducer });

export default createStore(rootreducer);
