import React, { useEffect, useState } from "react";
import TopBtn from "../components/TopBtn";

export default function Footer() {
  const [top, setTop] = useState(false);

  // useEffect(() => {
  //   const handleTop = () => {
  //     if (window.scrollY >= 50) {
  //       setTop(true);
  //     } else {
  //       setTop(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleTop);
  // }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  return (
    <>
      <footer className="bg-yellow-800 h-44 mt-12 flex flex-col justify-center items-center">
        <TopBtn />
        <a className="text-3xl font-bold text-white duration-700 mb-6	 hover:text-yellow-200">
          Mango
        </a>

        <small className="text-lg text-white">main by Mango</small>
      </footer>
    </>
  );
}
