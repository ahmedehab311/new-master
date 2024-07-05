import { Container, Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import "./card.css";
import { itemes } from "./itemes.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./sliderMenu.css";

function box() {
  return (
    <Container
      // sx={{ display: "flex", gap: 2, flexWrap: "wrap", color: "#fff" }}
      className="box"
    >
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {itemes.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              sx={{
                maxWidth: 230,
                p: 1,
                border: "2px solid #fff",
                background: "#000",
                borderRadius: "20px",
                mx: "auto", // To center the card
             
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  mb: 2,
                  textTransform: "uppercase",
                  fontSize: "2.5rem",
                }}
              >
                {item.title}
              </Typography>

              <img
                src={item.img}
                width="50px"
                style={{ display: "flex", margin: "0 auto" }}
                alt=""
              />
              <Typography variant="h4" sx={{ fontSize: "20px", my: 1 }}>
                {item.title2}
              </Typography>
              <Typography sx={{ fontSize: "18px", fontFamily: "Beiruti" }}>
                {item.category}
              </Typography>
              <Typography
                variant="body2"
                sx={{ my: 1, fontSize: "12px", color: "#777" }}
              >
                {item.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Typography sx={{ color: "#777" }}>{item.price}</Typography>
                <Typography sx={{ color: "#777" }}>{item.price2}</Typography>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default box;
