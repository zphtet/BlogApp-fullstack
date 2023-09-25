// eslint-disable
import { useContext } from "react";
import { themeContext } from "../Context/ThemeContext";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
// import authorImg from "../assets/author.jpg";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const { state, dispatch } = useContext(themeContext);
  // const navigate = useNavigate();
  const modeHandler = () => {
    // alert("Hello");
    if (state === "light") dispatch({ type: "DARK" });
    if (state === "dark") dispatch({ type: "LIGHT" });
  };
  const isLight = state === "light";
  return (
    <div className="shadow mx-auto max-w-container px-5 py-5 flex items-center justify-between dark:bg-dark ml:py-3">
      <h1 className="text-3xl text-theme font-bold tb:text-2xl">
        <Link to={"/"}>EpicDev</Link>
      </h1>
      <div className="flex items-center gap-8 tb:gap-3">
        <button className="btn tb:text-xs">
          <Link to={"/signup"}>Register</Link>
        </button>
        <button className="btn tb:text-xs">
          <Link to={"/editor"}>Create Post</Link>
        </button>
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

        {/* <Link to={"/profile"}>
          <div
            className="cursor-pointer flex flex-col items-center"
    
          >
            <img
              className="w-10 h-10 object-cover rounded-full text-center ml:w-6 ml:h-6"
              src={authorImg}
              alt="your profile"
            />
            <p className="profile-name dark:text-white ml:text-xs">Tony Abra</p>
          </div>
        </Link> */}

        {/* <button className="btn tb:text-xs">logout</button> */}
      </div>
    </div>
  );
};

export default Header;
