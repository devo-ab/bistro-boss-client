import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import SectionTitle from "../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
        <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-2xl uppercase text-center -mt-12">salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-2xl uppercase text-center -mt-12">pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-2xl uppercase text-center -mt-12">soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-2xl uppercase text-center -mt-12">Deserts</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
