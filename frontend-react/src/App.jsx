import { themeContext } from "./Context/ThemeContext";
import Header from "./components/Header";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import useUser from "./Hook/useUser";
import { Toaster } from "react-hot-toast";

function App() {
  const { state } = useContext(themeContext);
  const { setUser } = useUser();
  const [loading, setLoading] = useState(true);

  const hasUserData = async () => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const resp = await fetch(`${url}/auth/isloggedin`, {
      credentials: "include",
    });
    const data = await resp.json();

    if (data?.status !== "success") return false;
    return data.data;
  };

  useEffect(() => {
    const checkUser = async () => {
      const data = await hasUserData();
      if (data) {
        setUser(data);
        console.log(data);
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  if (loading) return <div>Loading ... </div>;
  return (
    <div className={` ${state} `}>
      <Toaster />
      <div className="min-h-screen dark:bg-dark dark:text-white">
        <Header />

        <div className="max-w-container mx-auto p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
