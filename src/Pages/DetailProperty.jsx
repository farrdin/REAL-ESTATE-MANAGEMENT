import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const DetailProperty = () => {
  const {
    id,
    estate_title,
    area,
    description,
    facilities,
    image,
    location,
    price,
    segment_name,
    status,
  } = useParams();
  return (
    <div>
      <Helmet>
        <title>EstateVista | {id} Details</title>
      </Helmet>
      <h1>{id}</h1>
    </div>
  );
};

export default DetailProperty;
