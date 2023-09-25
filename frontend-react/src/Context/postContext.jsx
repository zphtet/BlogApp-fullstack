import { createContext, useReducer } from "react";
const initialState = {
  posts: [],
  currentPost: null,
  fetchDone: false,
};
export const PostContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    case "SET_CURR_POST":
      return {
        ...state,
        currentPost: action.payload,
      };
    case "SET_FETCH_DONE":
      return {
        ...state,
        fetchDone: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
