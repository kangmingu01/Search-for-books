import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";

export default function TopBtn() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={
          "fixed bottom-8 right-8 w-20 h-20 rounded-full bg-yellow-500"
        }
      >
        <BiUpArrowAlt size={80} className="text-white" />
      </button>
    </>
  );
}
