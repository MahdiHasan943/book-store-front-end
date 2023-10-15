import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="h-[50vh] w-full flex justify-center items-center">
      <ClipLoader size={100} color="#f1592b" />
    </div>
  );
};

export default Loading;
