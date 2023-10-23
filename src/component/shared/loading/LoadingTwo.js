import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingTwo = () => {
  return (
    <div className="h-[20px] w-[20px]  flex justify-center items-center">
      <ClipLoader size={20} color="#f1592b" />
    </div>
  );
};

export default LoadingTwo;
