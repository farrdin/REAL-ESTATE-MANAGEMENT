const Estate = () => {
  return (
    <div className="border rounded-2xl my-20">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-[#150B2B]">
          Single Property Pages
        </h1>
        <p className="text-base text-[#150B2B99] font-normal leading-7">
          Choose from these different single property pages to display property
          details according to the information you want to see.
        </p>
      </div>
      <div className="card-div grid grid-cols-3">
        <div className="cards"></div>
      </div>
    </div>
  );
};

export default Estate;
