import { FaSearchDollar, FaTasks } from "react-icons/fa";
import { FaJarWheat } from "react-icons/fa6";

const Asearch = () => {
  return (
    <div className="mt-20">
      <div className="text-center space-y-2 my-10">
        <h1 className="text-3xl font-semibold text-[#150B2B]">
          Advanced Search Functionality
        </h1>
        <p className="text-base text-[#150B2B99] font-normal leading-7">
          Search from Home is made with the idea to give site visitors all the
          power to find the exact property of their needs.
        </p>
      </div>
      <div className="lg:flex gap-10 border-b border-x p-4 rounded-b-2xl">
        <img src="https://i.ibb.co/D9xMg1j/advanced.png" alt="" />
        <div className="flex flex-col gap-8 ">
          <div>
            <FaSearchDollar className="text-3xl" />
            <h1 className="text-xl text-[#282828] font-semibold">
              Unlimited Search Field
            </h1>
            <p className="text-base text-[#878787] font-normal leading-8">
              You can select which fields you want to display and what data will
              be displayed in those fields.
            </p>
          </div>
          <div>
            <FaTasks className="text-3xl" />
            <h1 className="text-xl text-[#282828] font-semibold">
              Autocomplete Search Suggestions
            </h1>
            <p className="text-base text-[#878787] font-normal leading-8">
              Including the option to search with the auto-complete feature,
              helping visitors complete their search quickly by providing
              suggestions.
            </p>
          </div>
          <div>
            <FaJarWheat className="text-3xl" />
            <h1 className="text-xl text-[#282828] font-semibold">
              AJAX Search
            </h1>
            <p className="text-base text-[#878787] font-normal leading-8">
              Provide visitors with a smooth searching experience when they are
              looking for their dream home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asearch;
