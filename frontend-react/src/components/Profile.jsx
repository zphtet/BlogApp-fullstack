import React from "react";

import authorImg from "../assets/author.jpg";

// import { Outlet, Link, NavLink } from "react-router-dom";
import Card from "./Card";
const Profile = () => {
  const [tabActive, setTabActive] = React.useState(true);
  return (
    <div className=" py-8 ">
      <div className="flex items-center gap-8 px-5 ml:px-0 ml:gap-4">
        <img
          src={authorImg}
          className="w-[150px] ml:w-[100] rounded-xl"
          alt="author image"
        />
        <p className="name font-bold text-3xl ml:text-xl">Tomy Abraham</p>
      </div>
      <div className="mt-5 flex items-center gap-5  pb-1 px-5 ml:px-0">
        <button
          className={`profile-tab ${tabActive && "active-tab"} `}
          onClick={() => setTabActive(true)}
        >
          Your Posts
        </button>
        <button
          className={`profile-tab ${!tabActive && "active-tab"} `}
          onClick={() => setTabActive(false)}
        >
          Saved Posts
        </button>
      </div>
      <div className="profile-card-container mt-7 flex flex-col gap-4">
        {/* <Outlet /> */}
        {tabActive ? (
          <Card mine />
        ) : (
          <div>
            <Card saved />
            <Card saved />
            <Card saved />
            <Card saved />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
