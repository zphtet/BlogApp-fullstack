import React, { useContext } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { ParagraphOutput } from "editorjs-react-renderer";
import { formatDistance } from "date-fns";
import { errorToast, successToast } from "../utils/toast";
import useNavi from "../Hook/useNavi";
import { PostContext } from "../Context/postContext";

const Card = ({ mine, saved, data, dis }) => {
  const navigate = useNavi();
  const { dispatch } = useContext(PostContext);
  const {
    title,
    category,
    createdAt,
    duration,
    slug,
    photo,
    blogData,
    author,
    _id,
  } = data;

  const date = new Date(createdAt);

  const formatDate = formatDistance(date, Date.now()) + " ago";
  const photoUrl = `${import.meta.env.VITE_BACKEND_URL_STATIC}/${photo}`;
  const profileUrl = `${import.meta.env.VITE_BACKEND_URL_STATIC}/${
    author?.profile
  }`;
  // const isMyPost = user?._id === author._id;
  const deleteHandler = async () => {
    const url = import.meta.env.VITE_BACKEND_URL;
    try {
      await fetch(`${url}/posts/delete/${_id}`, {
        method: "DELETE",
        credentials: "include",
      });

      dis({ type: "DELETE_POST", payload: _id });
      dispatch({ type: "SET_FETCH_DONE", payload: false });
      dispatch({ type: "CLEAR_POSTS" });

      successToast("Delete post successfully ☑");
    } catch (err) {
      errorToast("Error deleting post 🔥");
    }
  };

  const paragraph = blogData?.blocks?.find(({ type }) => type === "paragraph");

  return (
    <div className="post px-5 dark:text-white ml:px-0">
      <div className="pb-3 border-b border-dgray flex gap-10 tb:gap-4  items-center justify-between">
        <div className=" flex flex-col gap-1 ">
          <div
            className={`flex  items-center gap-2 ${
              (mine || saved) && "hidden"
            }`}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden ">
              <img
                src={profileUrl}
                className="w-full h-full object-cover"
                alt="author image"
              />
            </div>
            <p className="author-name font-semibold cursor-pointer">
              {author.name}
            </p>
            <p className="post-date text-xs text-dgray ">{formatDate}</p>
          </div>

          <h3 className="text-2xl font-bold cursor-pointer ml:text-xl pb-0">
            <Link to={`/posts/${slug}`}>{title}</Link>
          </h3>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            nostrum rerum vero, facilis odio illum sit, ad neque maiores Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum
            rerum vero, facilis odio illum sit, ad neque maiores Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Enim nostrum rerum
            vero, facilis odio illum sit, ad neque maiores
          </p> */}
          <ParagraphOutput data={paragraph.data} />
          <div className="text-xs flex gap-5 items-center">
            <p className="category  pb-1 px-3 text-white rounded-xl bg-theme">
              {category}
            </p>
            <p>{duration}min read</p>
            {saved ? (
              <BsFillBookmarkPlusFill className="cursor-pointer w-5 h-5 " />
            ) : mine ? (
              <>
                <AiOutlineEdit
                  className="cursor-pointer text-2xl"
                  onClick={() => navigate(`/editpost/${slug}`)}
                />
                <AiOutlineDelete
                  onClick={deleteHandler}
                  className="cursor-pointer text-2xl"
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="post-img-container max-w-[150px] tb:hidden">
          <Link to={`/posts/${slug}`}>
            <img className="cursor-pointer" src={photoUrl} alt="post img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
