// eslint-disable
import { useContext } from "react";
import { themeContext } from "../Context/ThemeContext";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
const Header = () => {
  const { state, dispatch } = useContext(themeContext);
  const modeHandler = () => {
    if (state === "light") dispatch({ type: "DARK" });
    if (state === "dark") dispatch({ type: "LIGHT" });
  };
  const isLight = state === "light";
  return (
    <div className="shadow mx-auto max-w-container px-5 py-5 flex items-center justify-between dark:bg-dark">
      <h1 className="text-3xl text-theme font-bold tb:text-2xl">EpicDev</h1>
      <div className="flex items-center gap-8 tb:gap-3">
        <button className="btn tb:text-xs">Register</button>
        <button
          className=" btn flex items-center gap-2 tb:text-xs"
          onClick={modeHandler}
        >
          <img
            className="w-6 h-6 invert tb:w-4 tb:h-4"
            src={isLight ? moon : sun}
            alt="mode image"
          />
          {/* <span>Dark Mode</span> */}
        </button>
      </div>
    </div>
  );
};

export default Header;
