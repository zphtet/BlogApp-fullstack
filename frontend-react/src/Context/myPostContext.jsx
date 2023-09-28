import { createContext, useReducer } from "react";
const initialState = {
  posts: [],
  currentPost: null,
  fetchDone: false,
  editData: null,
};
export const MyPostContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    case "CLEAR_POSTS":
      return {
        ...state,
        posts: [],
      };
    case "SET_CURR_POST":
      return {
        ...state,
        currentPost: action.payload,
      };
    case "SET_FETCH_DONE":
      return {
        ...state,
        fetchDone: action.payload,
      };

    case "SET_EDIT_DATA":
      return {
        ...state,
        editData: action.payload,
      };
    case "CLEAR_EDIT_DATA":
      return {
        ...state,
        editData: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export const MyPostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyPostContext.Provider value={{ state, dispatch }}>
      {children}
    </MyPostContext.Provider>
  );
};
