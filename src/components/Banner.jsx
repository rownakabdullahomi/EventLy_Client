// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={slide2}
            alt="Slide 1"
            className="w-full h-[550px] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt="Slide 1"
            className="w-full h-[550px] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4}
            alt="Slide 1"
            className="w-full h-[550px] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide5}
            alt="Slide 1"
            className="w-full h-[550px] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide6}
            alt="Slide 1"
            className="w-full h-[550px] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide1}
            alt="Slide 1"
            className="w-full h-[550px] "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
