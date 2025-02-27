import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#150B2B] text-center my-8 animate__animated animate__flipInY">
        Find Your Best: Explore Our Website
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full rounded-2xl"
            src="https://i.ibb.co/rbYPS5f/1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full rounded-2xl"
            src="https://i.ibb.co/RHJ9Yrr/2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full rounded-2xl"
            src="https://i.ibb.co/94zhKTP/4.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
