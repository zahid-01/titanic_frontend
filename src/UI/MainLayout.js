import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import ScrollToTop from "../components/Header/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
