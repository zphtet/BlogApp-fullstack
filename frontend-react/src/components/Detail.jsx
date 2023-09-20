import React from "react";
import authorImg from "../assets/author.jpg";
import Output from "editorjs-react-renderer";

const url = "http://localhost:3000/api";
//   time: 1564767102436,
//   blocks: [
//     {
//       type: "header",
//       data: {
//         level: 4,
//         text: "Editor.js React Renderer",
//       },
//     },
//     {
//       type: "header",
//       data: {
//         text: "Why Telegram is the best messenger",
//         level: 2,
//       },
//     },
//     {
//       type: "warning",
//       data: {
//         title: "Note:",
//         message:
//           "Avoid using this method just for lulz. It can be very dangerous opposite your daily fun stuff.",
//       },
//     },
//     {
//       type: "codeBox",
//       data: {
//         code: "consttest = newTest();.codeBoxTextArea{\n  width: 100%;\n  min-height: 30px;\n  padding: 10px;\n  border-radius: 2px 2px 2px 0;\n  border: none !important;\n  outline: none !important;\n  font: 14px monospace;\n}\n\n.codeBoxSelectDiv{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: relative;\n}",
//         language: "css",
//         theme:
//           "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-dark.min.css",
//       },
//     },
//     {
//       type: "delimiter",
//       data: {},
//     },

//     {
//       type: "paragraph",
//       data: {
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium veritatis dolorum cum amet! Ipsa ullam nisi, dolor explicabo ut nobis repudiandae saepe illo error facilis consectetur, quisquam assumenda dolorum.",
//       },
//     },
//     {
//       type: "table",
//       data: {
//         withHeadings: true,
//         content: [
//           ["Kine", "Pigs", "Chicken"],
//           ["1 pcs", "3 pcs", "12 pcs"],
//           ["100$", "200$", "150$"],
//         ],
//       },
//     },
//   ],
//   version: "2.14.0",
// };

const style = {
  header: {
    h3: {
      fontSize: "30px",
      fontWeight: "bold",
      // color: "#000000",
    },
  },
  table: {
    table: {
      marginBlock: "20px",
    },
    th: {
      backgroundColor: "#6246EA",
      color: "#fff",
    },
  },
};

const classes = {
  header: {
    h3: {
      fontSize: "30px",
      fontWeight: "bold",
      // color: "#000000",
    },
  },
  table: {
    table: "my-5",
    th: "bg-theme text-white",
  },
  codeBox: {
    container: "dark:bg-white",
    code: "dark:bg-white",
  },
};

const Detail = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    fetch(`${url}/posts/650b0b97f8749f48d9abd2c1`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);

  // console.log(post)
  if (!post) return <div>Loading ... </div>;
  const imgUrl = `http://localhost:3000/${post.data.photo}`;
  return (
    <div
      id="detail"
      className="w-[min(800px,100%)] mx-auto [&>*:not(:last-child)]:mb-5 "
    >
      <h6 className="text-3xl font-bold">{post.data.title}</h6>
      <div className="flex justify-between">
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
                {post.data.read} min Read
                {post.data.category}
              </span>{" "}
            </p>
          </div>
        </div>
        <button className="btn self-end">Unpublish</button>
      </div>

      <div className="">
        <img
          // src={postImg}
          src={imgUrl}
          className="max-h-[300px]  w-full h-full object-cover"
          alt="post img"
        />
      </div>
      {/* <p className="indent-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab enim
        modi illum consequatur, temporibus necessitatibus impedit nesciunt
        magnam minima veniam expedita repellat eius dolorum asperiores quaerat
        ipsum, repellendus voluptatum? Hic cupiditate veniam eos corrupti odit
        obcaecati veritatis nobis, porro nihil nulla non, voluptatem eaque harum
        fugit iure deleniti impedit!
      </p> */}
      <Output data={post.data.blogData} style={style} classNames={classes} />
    </div>
  );
};

export default Detail;
