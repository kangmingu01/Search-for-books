import React from "react";
import { useState } from "react";
import { bookReport } from "../util/bookReport.js";

export default function Bestseller() {
  const [best, setBest] = useState(bookReport);
  console.log(best);
  return (
    <section id="bestseller" className="max-w-[1280px] mx-auto mt-10">
      <h1 className="text-3xl text-center font-Jua tracking-wide">
        밥풀이가 뽑은 베스트셀러
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 pt-4 mx-4 ">
        {best.map((best) => {
          return (
            <div
              key={best.id}
              className="border-8 rounded-lg border-yellow-600 h-48 truncate break-words shadow-lg hover:scale-105 duration-300 flex"
            >
              <img className="w-32" src={best.image} alt="" />
              <div className="pl-2 ">
                <p className="text-xl font-bold text-yellow-800">{best.name}</p>
                <p>
                  저자: {best.writer} | 출간: {best.date}
                </p>
                <div>
                  <p className="  whitespace-normal">
                    책 소개: {best.shortIntroduce}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
