import { Helmet } from "react-helmet-async";
import Asearch from "../Componets/Asearch";
import Banner from "../Componets/Banner";
import Estate from "../Componets/Estate";
import Faq from "../Componets/Faq";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EstateVista | Home</title>
      </Helmet>
      <Banner></Banner>
      <Asearch></Asearch>
      <Estate></Estate>
      <Faq></Faq>
    </div>
  );
};

export default Home;
