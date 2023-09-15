import React from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
const Root = () => {
  return (
    <div className="min-h-screen dark:bg-dark dark:text-white">
      <Header />
      <div className="max-w-container mx-auto p-5">
        <CardContainer />
      </div>
    </div>
  );
};

export default Root;
