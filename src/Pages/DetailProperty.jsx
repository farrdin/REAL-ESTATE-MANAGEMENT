import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";
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
        <title>EstateVista | Details-{id} Details</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row gap-5 border rounded-2xl p-5">
        <div className="w-1/2 flex flex-col space-y-5 items-center">
          <img className="rounded-xl" src={image} alt="" />
          <button onClick={buyLaterWish} className="btn btn-secondary w-2/3">
            Add to wishlist
          </button>
          <button className="btn btn-primary w-2/3">Book Now</button>
        </div>
        <div className="w-1/2">
          <div className="space-y-3">
            <h1 className="text-xl font-bold font-work text-[#282828]">
              {estate_title}
            </h1>
            <p className="text-[#282828B2] text-sm">
              <span className="text-base font-medium font-work text-[#282828]">
                Space :
              </span>
              {area}
            </p>
            <p className="text-base font-work text-[#282828B2] text-poppins">
              <span className="text-base font-medium font-work text-[#282828]">
                Description :
              </span>
              {description}
            </p>
            <p className="text-base font-work font-medium text-[#282828B2]">
              <span className="text-base font-medium font-work text-[#282828]">
                Facilities :
              </span>
              <ul className="list-disc pl-5">
                <li>{facilities[0]}</li>
                <li>{facilities[1]}</li>
                <li>{facilities[2]}</li>
              </ul>
            </p>
            <p className="text-base font-work text-[#282828B2] text-poppins">
              <span className="text-base font-medium font-work text-[#282828]">
                Location :
              </span>
              {location}
            </p>
            <p className="text-base font-work text-[#282828B2] text-poppins">
              <span className="text-base font-medium font-work text-[#282828]">
                Price :
              </span>
              {price}
            </p>
            <p className="text-base font-work text-[#282828B2] text-poppins">
              <span className="text-base font-medium font-work text-[#282828]">
                Segment :
              </span>
              {segment_name}
            </p>
            <p className="text-base font-work text-[#282828B2] text-poppins">
              <span className="text-base font-medium font-work text-[#282828]">
                Status :
              </span>
              {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProperty;
