import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  // { idea }
  // navbar의 높이를 구해서 navbar/2의 높이를 넘는다면 className에 fixed를 추가
  // 아니면 state에 담아서 동작시키면 될 듯?

  const navigate = useNavigate();

  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      id="navbar"
      className={
        shadow
          ? "w-full bg-white sticky top-0 duration-700 shadow-lg z-[100] transform:"
          : "w-full bg-white sticky top-0 z-[100]"
      }
    >
      <div className="max-w-[1280px] bg-white mx-auto flex justify-between items-center py-2 px-5 font-Jua">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo4.png`}
            alt="로고"
            className="w-[7.5rem]"
          />
          <h1 className="text-3xl tracking-wide hidden md:block">
            밥풀이의 독서 여행
          </h1>
        </div>
        <div>
          <button className="md:text-3xl sm:text-2xl text-xl p-4 hover:underline">
            <a
              href="#bestseller"
              onClick={() => {
                navigate("/");
              }}
            >
              베스트셀러
            </a>
          </button>
          <button className="md:text-3xl sm:text-2xl text-xl p-4 hover:underline">
            <a
              // href="#search"
              onClick={() => {
                navigate("/search");
              }}
            >
              책 검색
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
