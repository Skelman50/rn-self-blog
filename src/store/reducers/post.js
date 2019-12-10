import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from "../types";

const initialState = {
  allPosts: [],
  bookedPosts: [],
  loading: true
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: payload,
        bookedPosts: payload.filter(post => post.booked),
        loading: false
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
    case REMOVE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter(post => post.id !== payload),
        bookedPosts: state.bookedPosts.filter(post => post.id !== payload)
      };
    case ADD_POST:
      return {
        ...state,
        allPosts: [{ ...payload }, ...state.allPosts]
      };
    default:
      return state;
  }
};
