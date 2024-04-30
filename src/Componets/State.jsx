import { Link } from "react-router-dom";

const State = ({ estates }) => {
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
    <div className="border rounded-xl p-4">
      <img className="rounded-xl" src={image} alt="" />
      {estate_title} <br />
      {area} <br />
      {description.length > 50 ? (
        <p>{description.slice(0, 50)}</p>
      ) : (
        <p> {description}</p>
      )}
      <br />
      {facilities} <br />
      {location} <br />
      {price} <br />
      {segment_name} <br />
      {status} <br />
      <Link to={`/details/${id}`}>
        <button key={id} className="btn btn-secondary">
          View Property
        </button>
      </Link>
    </div>
  );
};

export default State;
