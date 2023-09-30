import { createContext, useReducer } from "react";
const initialState = {
  posts: [],
  fetchDone: false,
};
export const BookmarkContext = createContext();

const filteredPosts = (posts, filterId) => {
  return posts.filter((post) => post._id !== filterId);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    case "CLEAR_POSTS":
      console.log("CLEAR POST WORKING");
      return {
        ...state,
        posts: [],
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: filteredPosts(state.posts, action.payload),
      };
    case "SET_FETCH_DONE":
      return {
        ...state,
        fetchDone: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export const BookmarkContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BookmarkContext.Provider value={{ state, dispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
};
