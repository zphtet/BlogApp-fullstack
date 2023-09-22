import React from "react";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
const CardContainer = () => {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  let [pageNumber, setPageNumber] = React.useState(1);
  const [done, setDone] = React.useState(false);
  const [fetching, setFetching] = React.useState(false);

  async function fetchData(pageNum) {
    setFetching(true);
    console.log("Page Numbner form fun", pageNum);
    const resp = await fetch(`http://localhost:3000/api/posts?page=${pageNum}`);
    const data = await resp.json();
    console.log(data.data);
    if (data.count === 0) {
      setDone(true);
    }

    setPosts((prev) => [...prev, ...data.data]);
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
    fetchData(pageNumber);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageNumber]);
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
        <Card data={post} key={`${post._id}-${Date.now()}`} />
      ))}
      {/* {!done && (
        <div className="p-5">
          <p>fetching more ... </p>
        </div>
      )}*/}
      {done && (
        <div className="p-5">
          <p className="bg-theme text-white p-2 rounded">All Posts Loaded</p>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
