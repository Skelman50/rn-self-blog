import { LOAD_POSTS, TOGGLE_BOOKED } from "../types";
import { DATA } from "../../data";

export const loadPost = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA
  };
};

export const togglePost = id => {
  return {
    type: TOGGLE_BOOKED,
    payload: id
  };
};
