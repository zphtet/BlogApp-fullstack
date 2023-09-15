import { themeContext } from "./Context/ThemeContext";
import Header from "./components/Header";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
// import Profile from "./components/Profile";
// import Detail from "./components/Detail";
// import Signup from "./components/Signup";

function App() {
  const { state } = useContext(themeContext);
  return (
    <div className={` ${state} `}>
      <div className="min-h-screen dark:bg-dark dark:text-white">
        <Header />
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
