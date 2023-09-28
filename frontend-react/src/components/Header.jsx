// eslint-disable
import { useContext } from "react";
import { themeContext } from "../Context/ThemeContext";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import { Link } from "react-router-dom";
import useUser from "../Hook/useUser";
import { successToast, errorToast } from "../utils/toast";
import useNavi from "../Hook/useNavi";
import { TfiWrite } from "react-icons/tfi";
import { GrLogout } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
const Header = () => {
  const { state, dispatch } = useContext(themeContext);
  const { user, clearUser } = useUser();
  const navigate = useNavi();
  const modeHandler = () => {
    if (state === "light") dispatch({ type: "DARK" });
    if (state === "dark") dispatch({ type: "LIGHT" });
  };

  const staticUrl = import.meta.env.VITE_BACKEND_URL_STATIC;

  const logoutHandler = async () => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const res = await fetch(`${url}/auth/logout`, {
      // method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (data.status === "success") {
      clearUser();
      successToast("Logout Successful ✅");
      navigate("/");
      return;
    }
    errorToast("Logout Failed 🔥");
  };
  const isLight = state === "light";
  return (
    <div className="shadow mx-auto max-w-container px-5 py-5 flex items-center justify-between dark:bg-dark ml:py-3">
      <h1 className="text-3xl text-theme font-bold tb:text-2xl">
        <Link to={"/"}>EpicDev</Link>
      </h1>
      <div className="flex items-center gap-8 tb:gap-3">
        {!user && (
          <button className="btn tb:text-xs cursor-pointer">
            <Link to={"/signup"}>Register</Link>
          </button>
        )}

        {user && (
          <>
            <Link to={"/profile"} title="click to view profile">
              <div className="cursor-pointer flex flex-col items-center">
                <img
                  className="w-10 h-10 object-cover rounded-full text-center ml:w-6 ml:h-6"
                  src={`${staticUrl}/${user.profile}`}
                  alt="your profile"
                />
                <p className="profile-name dark:text-white ml:text-xs">
                  {user.name}
                </p>
              </div>
            </Link>

            <button className="btn tb:text-xs" title="writ post">
              <Link to={"/editor"}>
                <TfiWrite className="w-6 h-6" />
              </Link>
            </button>

            <button
              onClick={logoutHandler}
              className="btn tb:text-xs"
              title="logout"
            >
              <AiOutlineLogout className="w-6 h-6 fill-white" />
            </button>
          </>
        )}

        <button
          className=" btn flex items-center gap-2 tb:text-xs"
          onClick={modeHandler}
          title="change light/dark theme"
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
