import { useLoaderData } from "react-router-dom";
import State from "./State";

const Estate = () => {
  const estates = useLoaderData();

  return (
    <div className="border rounded-2xl my-20 p-5">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-[#150B2B]">
          Estate : Property Page
        </h1>
        <p className="text-base text-[#150B2B99] font-normal leading-7">
          Choose from these different single property pages to display property
          details according to the information you want to see.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5  my-10">
        {estates.map((estate) => (
          <State key={estate.id} estates={estate}></State>
        ))}
      </div>
    </div>
  );
};

export default Estate;
