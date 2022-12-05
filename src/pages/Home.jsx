import React from "react";
import Axios from "../components/Axios";
import Bestseller from "../components/Bestseller";
import Footer from "../components/Footer";
import MainSay from "../components/MainSay";

export default function Home() {
  return (
    <>
      <MainSay />
      <Bestseller />
      <Footer />
    </>
  );
}
