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
  console.log(id);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default DetailProperty;
