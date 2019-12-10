import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./reducers/post";

const rootreducer = combineReducers({ post: postReducer });

export default createStore(rootreducer, applyMiddleware(thunk));
