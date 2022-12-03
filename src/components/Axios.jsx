import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Axios() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  const API = process.env.REACT_APP_KAKAO_REST;

  useEffect(() => {
    axios
      .get("https://dapi.kakao.com/v3/search/book?target=title", {
        params: {
          // 검색어
          query: "",
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
      .catch((err) => console.log(err));
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
    <div>
      <div className="bg-gray">
        <input type="text" className="bg-slate-500" onChange={onchange} />
        <button onClick={handleClick}>검색</button>
      </div>

      {data.map((data, i) => {
        return (
          <div key={i}>
            <h2>{data.title}</h2>
            <img className="w-[200px] h-[200px]" src={data.thumbnail} />
            <div>{data.contents}</div>
            <div>
              {data.price}원 저자 {data.authors.map((v) => v)}
            </div>
            <div>
              링크 <a href={data.url}>클릭</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
