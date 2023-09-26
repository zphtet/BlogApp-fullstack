import React, { useContext, useEffect } from "react";
import Editor from "./Editor";
import Categroy from "../utils/Categroy";

import { useParams } from "react-router-dom";
import { PostContext } from "../Context/postContext";

const url = "http://localhost:3000/api";

const EditPost = () => {
  const { slug } = useParams();
  const [title, setTitle] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [category, setCategory] = React.useState("general");
  const [blogData, setBlogData] = React.useState({});
  const [duration, setDuration] = React.useState(0);
  //   const [id, setId] = React.useState(null);
  const {
    state: { posts, editData },
    dispatch,
  } = useContext(PostContext);

  const setAllData = (editPost) => {
    setTitle(editPost.title);
    setBlogData(editPost.blogData);
    setDuration(editPost.duration);
    setCategory(editPost.category);
    setPhoto(editPost.photo);
  };

  const findPost = (posts) => {
    const editPost = posts.find((post) => post.slug === slug);
    if (editPost) {
      console.log(editPost);
      setAllData(editPost);
      dispatch({ type: "SET_EDIT_DATA", payload: editPost });
      // return true;  true to later
      return false;
    }
    return false;
  };

  const fetchPost = () => {
    fetch(`${url}/posts/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setAllData(data.data);
        dispatch({ type: "SET_EDIT_DATA", payload: data.data });
      });
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const photoHandler = (e) => {
    setPhoto(e.target.files[0]);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const durationHandler = (e) => {
    setDuration(+e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(title, photo, category, duration);
    console.log(blogData);
    let content = JSON.stringify(blogData);
    const fdata = new FormData();
    fdata.append("title", title);
    fdata.append("photo", photo);
    fdata.append("category", category);
    fdata.append("duration", duration);
    fdata.append("blogData", content);

    const resp = await fetch(`${url}/posts/${slug}`, {
      method: "PATCH",
      body: fdata,
    });

    const data = await resp.json();
    if (data.status === "success") {
      dispatch({ type: "SET_FETCH_DONE", payload: false });
      dispatch({ type: "CLEAR_POSTS" });
    }
  };

  useEffect(() => {
    if (findPost(posts)) return;
    fetchPost();
    return () => {
      dispatch({ type: "CLEAR_EDIT_DATA" });
    };
  }, [slug]);

  if (!editData)
    return (
      <div className=" p-5 w-[min(100%,720px)] mx-auto ml:p-0">
        Loading ....{" "}
      </div>
    );

  return (
    <div className=" p-5 w-[min(100%,720px)] mx-auto ml:p-0">
      <form className="flex flex-col gap-5" onSubmit={submitHandler}>
        <input
          className="input text-2xl"
          type="text"
          placeholder="Post Title"
          nam="title"
          onChange={titleHandler}
          value={title}
        />
        <div className="flex flex-col gap-1">
          <label htmlFor="cover-photo" className="">
            Post Cover Photo
          </label>
          <input
            className="input cursor-pointer"
            type="file"
            accept="image/*"
            id="cover-photo"
            placeholder="Post cover photo"
            name="cover-photo"
            onChange={photoHandler}
          />
        </div>

        <Editor setData={setBlogData} currentData={blogData} />

        <div className="flex flex-col gap-1">
          <label htmlFor="duration" className="">
            Select category
          </label>

          <select
            className="input"
            value={category}
            onChange={categoryHandler}
            name="category"
            id="category"
            // defaultValue={"general"}
          >
            {Categroy.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="duration" className="">
            Read duration
          </label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={durationHandler}
            className="input"
            min={1}
            placeholder="read duration"
          />
        </div>

        <button className="btn">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
