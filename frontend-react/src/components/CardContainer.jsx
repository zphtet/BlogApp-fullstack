import React, { useContext } from "react";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import { PostContext } from "../Context/postContext";
const CardContainer = () => {
  const [loading, setLoading] = React.useState(true);
  // const [posts, setPosts] = React.useState([]);
  let [pageNumber, setPageNumber] = React.useState(1);
  // const [done, setDone] = React.useState(false);
  const [fetching, setFetching] = React.useState(false);

  const {
    state: { posts, fetchDone },
    dispatch,
  } = useContext(PostContext);

  async function fetchData(pageNum) {
    setFetching(true);

    console.log("Page Numbner form fun", pageNum);
    const resp = await fetch(
      `http://localhost:3000/api/posts?page=${pageNum}`,
      {
        credentials: "include",
      }
    );
    const data = await resp.json();

    if (data.count < 5) {
      dispatch({ type: "SET_FETCH_DONE", payload: true });
    }

    dispatch({ type: "SET_POSTS", payload: data.data });
    setLoading(false);
    setFetching(false);
    console.log("Fetched ALL POSTS");
  }
  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      console.log("hello");
      return;
    }
    if (fetching) return;
    console.log("i am fetching data");
    setPageNumber((prev) => prev + 1);
  };
  React.useEffect(() => {
    if (fetchDone) return;

    fetchData(pageNumber);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageNumber]);
  if (loading && posts.length <= 0)
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
        <Card data={post} key={`${post._id}-${Date.now()}`} />
      ))}
      {!fetchDone && fetching && (
        <div className="px-5">
          <p>Fetching more ... </p>
        </div>
      )}

      {fetchDone && (
        <div className="p-5">
          <p className="bg-theme text-white p-2 rounded">All Posts Loaded</p>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
