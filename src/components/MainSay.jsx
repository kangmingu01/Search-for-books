import React from "react";

export default function MainSay() {
  return (
    <>
      <section id="main" className="px-5 bg-yellow-700 mt-2">
        <div className="max-w-[1280px] mx-auto lg:h-96 flex items-center justify-around lg:justify-between bg-yellow-700">
          <div className="h-32 mx-auto flex flex-col justify-center md:mx-0">
            {/* 테블릿, 데스크톱 */}
            <div className="md:block hidden">
              <h1 className="text-2xl font-bold text-white">
                밥풀이와 함께 책을 한 권, 한 권 읽다 보면
              </h1>
              <h1 className="text-2xl font-bold text-white">
                자기 자신에게 강력한 동기를 부여해 줄 거에요
              </h1>
            </div>

            {/* 모바일 */}
            <div className="md:hidden sm:block">
              <h1 className="text-lg font-bold text-white">
                밥풀이와 함께 책을 한 권, 한 권 읽다 보면 자기 자신에게 강력한
                동기를 부여해 줄 거에요
              </h1>
            </div>
          </div>

          <img
            className="w-56 hidden md:block lg:w-96"
            src={`${process.env.PUBLIC_URL}/assets/readBook.png`}
            alt="책 읽는 밥풀이"
          />
        </div>
      </section>
    </>
  );
}
