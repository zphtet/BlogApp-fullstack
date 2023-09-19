import React from "react";
import Editor from "./Editor";
import Categroy from "../utils/Categroy";
const CreatePost = () => {
  const [title, setTitle] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [category, setCategory] = React.useState("general");
  const [blogData, setBlogData] = React.useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const photoHandler = (e) => {
    setPhoto(e.target.files[0]);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, photo, category);
    console.log(blogData);
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
            // value={photo}
            onChange={photoHandler}
          />
        </div>

        <Editor setData={setBlogData} />
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
        <button className="btn">Publish</button>
      </form>
    </div>
  );
};

export default CreatePost;
