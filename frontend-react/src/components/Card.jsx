import React from "react";
import cardImg from "../assets/default-card.jpg";
import authorImg from "../assets/author.jpg";
import { BsBookmarkPlus, BsFillBookmarkPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// BsFillBookmarkPlusFill;
const Card = ({ mine, saved, data }) => {
  const { title, category, createdAt, duration } = data;
  const date = new Date(createdAt);
  const formatDate = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  return (
    <div className="post px-5 dark:text-white ml:px-0">
      <div className="pb-3 border-b border-dgray flex gap-10 tb:gap-4  items-center justify-between">
        <div className=" flex flex-col gap-2 ">
          <div className={`flex  items-center gap-2 ${mine && "hidden"}`}>
            <div className="w-10 h-10 rounded-full overflow-hidden ">
              <img
                src={authorImg}
                className="w-full h-full object-cover"
                alt="author image"
              />
            </div>
            <p className="author-name font-semibold cursor-pointer">
              Tony Abra
            </p>
            <p className="post-date text-sm text-dgray ">{formatDate}</p>
          </div>

          <h3 className="text-2xl font-bold cursor-pointer ml:text-xl">
            <Link to={"/posts/postid"}>{title}</Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            nostrum rerum vero, facilis odio illum sit, ad neque maiores Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum
            rerum vero, facilis odio illum sit, ad neque maiores Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Enim nostrum rerum
            vero, facilis odio illum sit, ad neque maiores
          </p>
          <div className="text-xs flex gap-5 items-center">
            <p className="category  pb-1 px-3 text-white rounded-xl bg-theme">
              {category}
            </p>
            <p>{duration}min read</p>
            {saved ? (
              <BsFillBookmarkPlusFill className="cursor-pointer w-5 h-5 " />
            ) : mine ? (
              <>
                <AiOutlineEdit className="cursor-pointer text-2xl" />
                <AiOutlineDelete className="cursor-pointer text-2xl" />
              </>
            ) : (
              <>
                <BsBookmarkPlus className="cursor-pointer w-5 h-5 " />
              </>
            )}
          </div>
        </div>
        <div className="post-img-container max-w-[150px] tb:hidden">
          <Link to={"/posts/postid"}>
            <img className="cursor-pointer" src={cardImg} alt="post img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
