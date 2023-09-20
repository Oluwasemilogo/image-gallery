import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-[#385A64] border-4-solid"></div>
    </div>
  );
};

export default Spinner;
