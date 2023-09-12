import React from "react";
import cardImg from "../assets/default-card.jpg";
import authorImg from "../assets/author.jpg";
const Card = () => {
  return (
    <div className="post px-5 dark:text-white ml:px-0">
      <div className="pb-3 border-b border-dgray flex gap-10 tb:gap-4  items-center justify-between">
        <div className=" flex flex-col gap-2 ">
          <div className="flex  items-center gap-2">
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
            <p className="post-date text-sm text-dgray ">April 6 2023</p>
          </div>

          <h3 className="text-2xl font-bold cursor-pointer">
            How to use UseEffect efficiently in React{" "}
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
            <p className="category py-1 px-3 rounded-xl bg-gray dark:bg-slate-700">
              Web developement
            </p>
            <p>6 min read</p>
          </div>
        </div>
        <div className="post-img-container max-w-[150px] tb:hidden">
          <img className="cursor-pointer" src={cardImg} alt="post img" />
        </div>
      </div>
    </div>
  );
};

export default Card;
