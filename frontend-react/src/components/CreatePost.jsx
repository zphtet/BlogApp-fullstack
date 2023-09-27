import React from "react";
import Editor from "./Editor";
import Categroy from "../utils/Categroy";

const url = "http://localhost:3000/api";

const CreatePost = () => {
  const [title, setTitle] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [category, setCategory] = React.useState("general");
  const [blogData, setBlogData] = React.useState("");
  const [duration, setDuration] = React.useState(0);

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
    console.log(title, photo, category);
    console.log(blogData);
    let content = JSON.stringify(blogData);
    const fdata = new FormData();
    fdata.append("title", title);
    fdata.append("photo", photo);
    fdata.append("category", category);
    fdata.append("duration", duration);
    fdata.append("blogData", content);

    const resp = await fetch(`${url}/posts`, {
      credentials: "include",
      method: "POST",
      body: fdata,
    });

    const data = await resp.json();
    console.log(data);
  };
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
            id="cover-photo"
            placeholder="Post cover photo"
            name="cover-photo"
            accept="image/*"
            // value={photo}
            onChange={photoHandler}
          />
        </div>

        <Editor setData={setBlogData} />

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

        <button className="btn">Publish</button>
      </form>
    </div>
  );
};

export default CreatePost;
