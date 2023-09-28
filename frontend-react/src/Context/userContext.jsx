import { useReducer } from "react";
import { createContext } from "react";
const initialState = {
  user: null,
  //   ready: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CLEAR_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
