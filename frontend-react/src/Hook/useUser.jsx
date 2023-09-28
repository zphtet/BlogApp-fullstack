import { useContext } from "react";
import { UserContext } from "../Context/userContext";

const useUser = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);

  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  const clearUser = () => dispatch({ type: "CLEAR_USER" });

  return {
    user,
    setUser,
    clearUser,
  };
};

export default useUser;
