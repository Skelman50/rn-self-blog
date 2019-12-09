import { LOAD_POSTS, TOGGLE_BOOKED } from "../types";

const initialState = {
  allPosts: [],
  bookedPosts: []
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: payload,
        bookedPosts: payload.filter(post => post.booked)
      };
    case TOGGLE_BOOKED:
      const allPosts = state.allPosts.map(post => {
        if (post.id === payload) {
          return {
            ...post,
            booked: !post.booked
          };
        }
        return post;
      });
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter(post => post.booked)
      };
    default:
      return state;
  }
};
