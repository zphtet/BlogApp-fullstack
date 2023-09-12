import { createContext, useReducer } from "react";
import React from "react";

const initialState = "light";

const reducer = (state, action) => {
  switch (action.type) {
    case "DARK":
      return "dark";
    case "LIGHT":
      return "light";
  }
};

const themeContext = createContext("light");

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};

export { themeContext, ThemeProvider };
