// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { Box } from "@mui/material";
// import "swiper/css";
// import "swiper/css/navigation";
// import "../Slider/Slider.css";
// import { images } from "../imagesArray";
// // import backGroundRed from "../importImages"
// import backGroundRed from "../backGroundRed.png";
// import burgerImg from "../images/Layer 13.png";

// function SwiperHero() {
//   return (
//     <Box className="sli">
//       <Swiper
//         className="swiper-hero"
//         pagination={{ clickable: true }}
//         loop={true}
//         navigation={true}
//         modules={[Navigation]}
//       >
//         {["aa","aaa"].map((item) => (
//           <SwiperSlide key={item.id}>
//           <div className="image-container ">

//           </div>
//           <img src={backGroundRed} alt="" className="image image1" />
//           <img src={burgerImg} alt="" className="image image2" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
     
//     </Box>
//   );
// }

// export default SwiperHero;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "../Slider/Slider.css";
import backGroundRed from "../images/Group 2.png";
import burgerImg from "../images/Layer 13.png";
import word1  from "../images/SAVOR.png";
import layout from "../images/Layer 14.png";

function SwiperHero() {
  return (
    <Box className="sli">
      <Swiper
        className="swiper-hero"
        pagination={{ clickable: true }}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {["aa", "aaa"].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="image-container">
              <img src={backGroundRed} alt="" className="image image1" />
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default SwiperHero;
