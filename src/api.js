import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK 1b7afecb0cf1f8d7bbf63125a1e9dfcd",
  },
});

// search book api
export const bookSearch = (params) => {
  return Kakao.get("/v3/search/book", { params });
};
