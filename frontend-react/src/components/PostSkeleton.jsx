import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostSkeleton = () => {
  return (
    <div className="w-[min(800px,100%)] mx-auto [&>*:not(:last-child)]:mb-5 ">
      <Skeleton width="100%" />
      <Skeleton width="100%" />
      <div className="mt-5 flex gap-5">
        <Skeleton width="48px" height={"48px"} circle={true} />
        <div>
          <Skeleton width={"150px"} />
          <Skeleton width={"200px"} />
        </div>
      </div>
      <Skeleton width="100%" height={"300px"} />
      <Skeleton count={10} />
    </div>
  );
};

export default PostSkeleton;
