import { Outlet } from "react-router-dom";
import Footer from "../Componets/Footer";
import Navbar from "../Componets/Navbar";
import { Helmet } from "react-helmet-async";

const Root = () => {
  return (
    <div className="font-poppins">
      <Helmet>
        <title>EstateVista | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="w-[85%] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
