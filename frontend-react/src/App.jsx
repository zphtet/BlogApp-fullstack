import { themeContext } from "./Context/ThemeContext";
import Header from "./components/Header";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
// import Profile from "./components/Profile";
// import Detail from "./components/Detail";
// import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";

function App() {
  const { state } = useContext(themeContext);
  return (
    <div className={` ${state} `}>
      <Toaster />
      <div className="min-h-screen dark:bg-dark dark:text-white">
        <Header />
        {/* <button
          className="btn"
          onClick={() =>
            toast.success("this is toast message", {
              iconTheme: {
                primary: "#6246EA",
                secondary: "#fff",
              },
            })
          }
        >
          Click me
        </button> */}
        <div className="max-w-container mx-auto p-5">
          {/* <RouterProvider router={router} /> */}
          {/* <CardContainer /> */}
          <Outlet />

          {/* <Signup /> */}
          {/* <Outlet /> */}
          {/* <Profile /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
