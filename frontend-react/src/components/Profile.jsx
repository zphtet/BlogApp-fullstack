import React from "react";

// import Card from "./Card";
import useUser from "../Hook/useUser";
import MyPostContainer from "./MyPostContainer";
const Profile = () => {
  const [tabActive, setTabActive] = React.useState(true);
  const { user } = useUser();

  const profileImgUrl = `${import.meta.env.VITE_BACKEND_URL_STATIC}/${
    user.profile
  }`;
  return (
    <div className=" py-8 ">
      <div className="flex items-center gap-8 px-5 ml:px-0 ml:gap-4">
        <img
          src={profileImgUrl}
          className="w-[150px] ml:w-[100] rounded-xl"
          alt="author image"
        />
        <p className="name font-bold text-3xl ml:text-xl">{user.name}</p>
      </div>
      <div className="mt-5 flex items-center gap-5  pb-1 px-5 ml:px-0">
        <button
          className={`profile-tab ${tabActive && "active-tab"} `}
          onClick={() => setTabActive(true)}
        >
          My Posts
        </button>
        <button
          className={`profile-tab ${!tabActive && "active-tab"} `}
          onClick={() => setTabActive(false)}
        >
          Saved Posts
        </button>
      </div>
      <div className="profile-card-container mt-7 flex flex-col gap-4">
        {tabActive ? <MyPostContainer /> : <MyPostContainer />}
      </div>
    </div>
  );
};

export default Profile;
