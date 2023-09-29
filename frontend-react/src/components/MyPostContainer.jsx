import React, { useContext } from "react";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import { MyPostContext } from "../Context/myPostContext.jsx";
const MyPostContainer = () => {
  const [loading, setLoading] = React.useState(true);
  const [pageNum, setPageNum] = React.useState(1);
  const [fetching, setFetching] = React.useState(false);
  const url = import.meta.env.VITE_BACKEND_URL;

  const {
    state: { posts, fetchDone },
    dispatch,
  } = useContext(MyPostContext);

  async function fetchData(pageNum) {
    setFetching(true);
    const resp = await fetch(`${url}/posts/getmyposts?page=${pageNum}`, {
      credentials: "include",
    });
    const data = await resp.json();
    setFetching(false);
    return data;
  }

  const loadHandler = () => {
    if (fetching) return;
    setPageNum((prev) => prev + 1);
  };
  React.useEffect(() => {
    if (fetchDone) return;
    fetchData(pageNum).then((data) => {
      if (data.data.length < 5) {
        dispatch({ type: "SET_FETCH_DONE", payload: true });
      }
      dispatch({ type: "SET_POSTS", payload: [...data.data] });
      setLoading(false);
    });
  }, [pageNum]);
  console.log("MY-POST_CONTSINER RENDER");
  if (loading)
    return (
      <div className="card-container">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );

  return (
    <div className="card-container ">
      {posts?.map((post) => (
        <Card
          data={post}
          key={`${post._id}-${Date.now()}`}
          mine
          dispatch={dispatch}
        />
      ))}

      {!fetchDone && (
        <div className="flex items-center  px-5">
          <button onClick={loadHandler} className="btn">
            {fetching ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

      {/* {!fetchDone && (
        <div className="px-5">
          <p>Fetching more ... </p>
        </div>
      )} */}

      {/* {fetchDone && (
        <div className="p-5">
          <p className="bg-theme text-white p-2 rounded">All Posts Loaded</p>
        </div>
      )} */}
    </div>
  );
};

export default MyPostContainer;
