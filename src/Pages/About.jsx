import { Helmet } from "react-helmet-async";
import "animate.css";

const About = () => {
  return (
    <div className="space-y-2">
      <Helmet>
        <title>Estate Vista | About US</title>
      </Helmet>
      <div className="my-10 space-y-10">
        <h1 className="font-bold text-[#150B2B] text-4xl  font-work text-center animate__zoomIn animate__animated ">
          About Estate Vista
        </h1>
        <p className="font-medium text-lg font-work text-[#282828CC] ">
          Welcome to Estate Vista, your trusted partner in real estate
          solutions. At Estate Vista, we are dedicated to providing exceptional
          service and expertise to help you achieve your real estate goals.
        </p>
        <div className="space-y-2">
          <h1 className="font-bold text-[#150B2B] text-xl font-play ">
            Our Mission:
          </h1>
          <p className="font-medium text-lg font-work text-[#282828CC]">
            Estate Vistas mission is to, such as to help clients find their
            dream homes, maximize their investments, and navigate the real
            estate market with confidence.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-[#150B2B] text-xl font-play ">
            Why Choose Us?
          </h1>
          <ul className="font-medium text-lg font-work text-[#282828CC] list-disc">
            <li>
              Experience: With over 12 years of experience in the real estate
              industry, we have the knowledge and expertise to guide you through
              every step of the process.
            </li>
            <li>
              Client-Centered Approach: At Estate Vista, our clients are our top
              priority. We tailor our services to meet your unique needs and
              preferences.
            </li>
            <li>
              Market Insights: Our team stays up-to-date with the latest market
              trends and insights to ensure that you make informed decisions.
            </li>
            <li>
              Exceptional Service: We are committed to providing personalized,
              responsive service to exceed your expectations.
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-[#150B2B] text-xl font-play ">
            Meet Our Team:
          </h1>
          <p className="font-medium text-lg font-work text-[#282828CC]">
            Albert H Jhon: Brief bio and expertise
            <br />
            Leaaser Bayern: Brief bio and expertise
            <br />
            Michel M Mortal: Brief bio and expertise
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-[#150B2B] text-xl font-play ">
            Our Services:
          </h1>
          <ul className="list-disc text-base text-[#282828CC] font-work font-semibold">
            <li>Buying</li>
            <li>Buying</li>
            <li>Renting</li>
            <li>Property Management</li>
            <li>Investment Opportunities</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-[#150B2B] text-xl font-play ">
            Contact Us:
          </h1>
          <p className="font-medium text-lg font-work text-[#282828CC]">
            Ready to get started? Contact us today to schedule a consultation or
            inquire about our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
