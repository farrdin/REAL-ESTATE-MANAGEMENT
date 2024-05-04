import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { buyLater } from "../Utilities/LocalStorage";

const DetailProperty = () => {
  const detailProperty = useLoaderData();
  const { id } = useParams();
  const details = detailProperty.find((details) => details.id === id);
  const {
    estate_title,
    area,
    description,
    facilities,
    image,
    location,
    price,
    segment_name,
    status,
  } = details;

  const buyLaterWish = () => {
    buyLater(id);
  };
  return (
    <div>
      <Helmet>
        <title>EstateVista | {id} Details</title>
      </Helmet>
      <img src={image} alt="" />
      {estate_title}
      {area}
      {description}
      {facilities}
      {location}
      {price}
      {segment_name}
      {status}
      <button onClick={buyLaterWish} className="btn btn-secondary">
        Buy Later
      </button>
    </div>
  );
};

export default DetailProperty;
