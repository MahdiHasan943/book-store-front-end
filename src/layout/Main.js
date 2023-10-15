import React, { useEffect, useState } from "react";
import Header from "../component/shared/Header/Header";
import Headere from "../component/shared/Header/Header";

import Footer from "../component/shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import GoToTop from "../component/shared/goto-top/GotoTop";
import TopBtn from "../component/shared/goto-top/TopBtn";
import Loading from "../component/shared/loading/Loading";

const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false); // Set loading to false after 500ms delay
    }, 1500);
  },[])

  return (
    <div>
      <Header></Header>

      {loading ? (
        <Loading />
      ) : (
        <div className=" mx-auto ">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>

      <GoToTop />
      <TopBtn />
    </div>
  );
};

export default Main;
