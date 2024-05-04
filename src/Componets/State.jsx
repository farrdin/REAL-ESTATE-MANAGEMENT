import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const State = ({ estates }) => {
  useEffect(() => {
    Aos.init();
  }, []);

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
  } = estates;
  return (
    <div
      className="border rounded-xl p-4 flex flex-col "
      data-aos="zoom-in-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      <div className="mb-5">
        <img className="rounded-xl h-44 w-full" src={image} />
      </div>
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
        <span className="text-base font-work text-[#282828B2] text-poppins">
          <span className="text-base font-medium font-work text-[#282828]">
            Description :
          </span>
          {description.length > 50 ? (
            <p>
              {description.slice(0, 50)}{" "}
              <Link to={`/details/${id}`} className="text-blue-700 link">
                Read More...
              </Link>
            </p>
          ) : (
            <p> {description}</p>
          )}
        </span>
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

      <div className="text-center my-5 flex-grow">
        <Link to={`/details/${id}`}>
          <button key={id} className="btn btn-secondary">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default State;
