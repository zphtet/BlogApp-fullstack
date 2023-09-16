import React from "react";
import authorImg from "../assets/author.jpg";
import postImg from "../assets/default-card.jpg";
const Detail = () => {
  return (
    <div className="w-[min(800px,100%)] mx-auto [&>*:not(:last-child)]:mb-5 ">
      <h6 className="text-3xl font-bold">
        How To use React useEffect Efficiently in Application
      </h6>
      <div className="mt-6 flex gap-5 text-base">
        <div className="img-container">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={authorImg}
            alt="author image"
          />
        </div>
        <div>
          <p className="font-bold">Tony Abraham</p>
          <p>
            01 jan 2023 .{" "}
            <span className=" text-xs ml-2 rounded px-2 py-0 text-white  bg-[#9f74ed]">
              7 min Read
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="">
        <img
          src={postImg}
          className="max-h-[300px]  w-full h-full object-cover"
          alt="post img"
        />
      </div>
      <p className="indent-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab enim
        modi illum consequatur, temporibus necessitatibus impedit nesciunt
        magnam minima veniam expedita repellat eius dolorum asperiores quaerat
        ipsum, repellendus voluptatum? Hic cupiditate veniam eos corrupti odit
        obcaecati veritatis nobis, porro nihil nulla non, voluptatem eaque harum
        fugit iure deleniti impedit!
      </p>
      <p className="indent-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab enim
        modi illum consequatur, temporibus necessitatibus impedit nesciunt
        magnam minima veniam expedita repellat eius dolorum asperiores quaerat
        ipsum, repellendus voluptatum? Hic cupiditate veniam eos corrupti odit
        obcaecati veritatis nobis, porro nihil nulla non, voluptatem eaque harum
        fugit iure deleniti impedit!
      </p>
      <p className="indent-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab enim
        modi illum consequatur, temporibus necessitatibus impedit nesciunt
        magnam minima veniam expedita repellat eius dolorum asperiores quaerat
        ipsum, repellendus voluptatum? Hic cupiditate veniam eos corrupti odit
        obcaecati veritatis nobis, porro nihil nulla non, voluptatem eaque harum
        fugit iure deleniti impedit!
      </p>
      <p className="indent-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab enim
        modi illum consequatur, temporibus necessitatibus impedit nesciunt
        magnam minima veniam expedita repellat eius dolorum asperiores quaerat
        ipsum, repellendus voluptatum? Hic cupiditate veniam eos corrupti odit
        obcaecati veritatis nobis, porro nihil nulla non, voluptatem eaque harum
        fugit iure deleniti impedit!
      </p>
      <p className="indent-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab enim
        modi illum consequatur, temporibus necessitatibus impedit nesciunt
        magnam minima veniam expedita repellat eius dolorum asperiores quaerat
        ipsum, repellendus voluptatum? Hic cupiditate veniam eos corrupti odit
        obcaecati veritatis nobis, porro nihil nulla non, voluptatem eaque harum
        fugit iure deleniti impedit!
      </p>
      <p className="indent-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab enim
        modi illum consequatur, temporibus necessitatibus impedit nesciunt
        magnam minima veniam expedita repellat eius dolorum asperiores quaerat
        ipsum, repellendus voluptatum? Hic cupiditate veniam eos corrupti odit
        obcaecati veritatis nobis, porro nihil nulla non, voluptatem eaque harum
        fugit iure deleniti impedit!
      </p>
      <p className="indent-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab enim
        modi illum consequatur, temporibus necessitatibus impedit nesciunt
        magnam minima veniam expedita repellat eius dolorum asperiores quaerat
        ipsum, repellendus voluptatum? Hic cupiditate veniam eos corrupti odit
        obcaecati veritatis nobis, porro nihil nulla non, voluptatem eaque harum
        fugit iure deleniti impedit!
      </p>
    </div>
  );
};

export default Detail;
