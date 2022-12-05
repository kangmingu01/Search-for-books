import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Axios() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  // const API = process.env.REACT_APP_KAKAO_REST;

  // https://velog.io/@97godo/React-React-%EB%A1%9C-kakao-%EC%B1%85-%EA%B2%80%EC%83%89-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0

  useEffect(() => {
    axios
      .get("https://dapi.kakao.com/v3/search/book?target=title", {
        params: {
          // 검색어
          query: "",
          sort: "accuracy",
          /*
          필수아닌 검색 조건들

          결과 문서 정렬 방식
          sort	String	, accuracy(정확도순) 또는 latest(발간일순), 기본값 accuracy

          결과 페이지 번호
          page	Integer	, 1~50 사이의 값, 기본 값 1

          한 페이지에 보여질 문서 수
          size	Integer	, 1~50 사이의 값, 기본 값 10

          target	String	검색 필드 제한
          사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
          */
        },
        headers: {
          Authorization: `KakaoAK 1b7afecb0cf1f8d7bbf63125a1e9dfcd`,
        },
      })
      .then((res) => setData(res.data.documents))
      .then(console.log())
      .catch((err) => console.log(data[0]));
  }, []);

  // input에 값이 들어오면
  // const onchange = (e) => {
  //   e.target.value &&
  //     axios
  //       .get("https://dapi.kakao.com/v3/search/book?target=title", {
  //         params: {
  //           query: e.target.value,
  //         },
  //         headers: {
  //           Authorization: `KakaoAK 1b7afecb0cf1f8d7bbf63125a1e9dfcd`,
  //         },
  //       })
  //       .then((res) => setData(res.data.documents))
  //       .catch((err) => console.log(err));
  // };

  //  input에 값이 들어오고 엔터를 누르면 검색할 수 있게
  const onchange = (e) => {
    setTitle(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    axios
      .get("https://dapi.kakao.com/v3/search/book?target=title", {
        params: {
          query: title,
        },
        headers: {
          Authorization: `KakaoAK 1b7afecb0cf1f8d7bbf63125a1e9dfcd`,
        },
      })
      .then((res) => setData(res.data.documents))
      .catch((err) => console.log(err));
  };
  return (
    <section id="search" className="mt-2 w-full h-screen mx-auto">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center">
          <input
            type="text"
            placeholder="책 제목을 입력해주세요"
            className="border-2 mt-8 border-gray-500 rounded-md h-10 px-2 sm:w-1/2 md:w-1/3 placeholder:text-center"
            onKeyPress={onKeyPress}
            onChange={onchange}
          />

          {/* <button onClick={handleClick}>검색</button> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 pt-4 mx-4 ">
          {data.map((data, i) => {
            return (
              <div
                key={data.isbn}
                className="border-8 rounded-lg border-yellow-700  h-48 truncate break-words shadow-lg hover:scale-105 duration-300 flex"
              >
                <img
                  className="border-2 border-black w-32"
                  src={data.thumbnail}
                />
                <div className="pl-2">
                  <h2 className="text-xl font-bold text-yellow-800">
                    {data.title}
                  </h2>

                  <div>{data.contents}</div>
                  <div>
                    {data.price}원 | 저자:{data.authors.map((v) => v)}
                  </div>
                  {/* <div>
                    링크 <a href={data.url}>클릭</a>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
