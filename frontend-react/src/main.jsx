import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import Detail from "./components/Detail.jsx";
import Profile from "./components/Profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardContainer from "./components/CardContainer.jsx";
// import Card from "./components/Card.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Card from "./components/Card.jsx";
import SavedPosts from "./components/SavedPosts.jsx";
import Other from "./components/Other.jsx";
import CreatePost from "./components/CreatePost.jsx";
import EditPost from "./components/EditPost.jsx";
import { PostContextProvider } from "./Context/postContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h2>Error Ocuured</h2>,
    children: [
      {
        path: "/",
        element: <CardContainer />,
      },
      {
        path: "/otherauthor",
        element: <Other />,
      },
      {
        path: "/editor",
        element: <CreatePost />,
      },
      {
        path: "/editpost/:slug",
        element: <EditPost />,
      },
      {
        path: "/posts/:slug",
        element: <Detail />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile",
            element: <Card />,
          },
          {
            path: "/profile/savedposts",
            element: <SavedPosts />,
          },
        ],
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider>
    <PostContextProvider>
      <RouterProvider router={router} />
    </PostContextProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
