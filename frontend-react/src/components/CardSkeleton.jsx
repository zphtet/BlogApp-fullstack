import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className=" p-5">
      <div className="flex gap-5 items-center">
        <Skeleton width={"50px"} height={"50px"} circle />
        <Skeleton width={"200px"} />
      </div>
      <div className="w-[min(500px,100%)]">
        <Skeleton className="mt-5 " />
      </div>
      <Skeleton height={"100px"} />
      <div className="w-[min(300px,100%)]">
        <Skeleton />
      </div>
    </div>
  );
};

export default CardSkeleton;
