const Faq = () => {
  return (
    <div className="mt-20">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-[#150B2B] text-center">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 border-x border-t rounded-t-2xl p-4">
        <div className="lg:w-[40%]">
          <img
            className="lg:h-[80%]"
            src="https://i.ibb.co/H44hzS0/11.png"
            alt=""
          />
        </div>
        <div className="lg:w-[60%]">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is included in my purchase?
            </div>
            <div className="collapse-content">
              <p className="text-base text-[#878787] font-normal leading-8">
                Customer support for 6 months from the purchase date.This is
                One-Time-Fee no monthly or annual subscription is needed.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Will I receive future updates?
            </div>
            <div className="collapse-content">
              <p className="text-base text-[#878787] font-normal leading-8">
                Yes, you will receive all future Houzez updates for life time.
                Each time a new update is available you will be notified
                automatically by email.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Does the theme come in Spanish language?
            </div>
            <div className="collapse-content">
              <p className="text-base text-[#878787] font-normal leading-8">
                Yes, the theme includes the Spanish language.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Does the theme support the Arabic language?
            </div>
            <div className="collapse-content">
              <p className="text-base text-[#878787] font-normal leading-8">
                Yes, the theme comes with support for the Arabic language.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I do a bulk upload of properties to my website?
            </div>
            <div className="collapse-content">
              <p className="text-base text-[#878787] font-normal leading-8">
                Yes, it is possible to do a bulk upload of properties to your
                website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
