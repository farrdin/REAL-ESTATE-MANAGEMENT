const Asearch = () => {
  return (
    <div className="p-5">
      <div className="text-center space-y-2 my-10">
        <h1 className="text-3xl font-semibold ">Advanced Search Functionality</h1>
        <p>
          Search from Home is made with the idea to give site visitors all the
          power to find the exact property of their needs.
        </p>
      </div>
      <div className="lg:flex gap-5">
        <img src="https://i.ibb.co/D9xMg1j/advanced.png" alt="" />
        <div className="flex flex-col gap-8">
          <div>
            <h1>Unlimited Search Field </h1>
            <p>
              You can select which fields you want to display and what data will
              be displayed in those fields.
            </p>
          </div>
          <div>
            <h1>Autocomplete Search Suggestions </h1>
            <p>
              Including the option to search with the auto-complete feature,
              helping visitors complete their search quickly by providing
              suggestions.
            </p>
          </div>
          <div>
            <h1>AJAX Search </h1>
            <p>
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
