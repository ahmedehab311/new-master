import "./Slider/Slider.css";
import "swiper/css";

import "swiper/css/pagination";
import { img1, img2, img3 } from "./importImages";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Box, Stack, Container } from "@mui/material";
function Hero() {
  return (
    <Container sx={{ display: "flex", mt: 2.5, alignItems: "center" }}>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation]}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} width={50} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} width={50} alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Hero;
