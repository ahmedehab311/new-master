import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  CardMedia,
  Container,
  CircularProgress,
} from "@mui/material";
import Card from "@mui/material/Card";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./card.css";
import "./sliderMenu.css";
// import {styleCard} from "./index.jsx"
// import ItemCard from "./ItemCard.jsx";
// import backToMenuClick from "./backToMenuClick.jsx";
import { ItemCard, BackToMenuClick } from "./index.jsx";
function Boxx() {
  const [showCards, setShowCards] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const APIURL = "https://myres.me/chilis/api/menu/2/1";
  const BASE_URL = "https://myres.me/chilis/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(APIURL);
        // console.log(response.data.data.menu[0].sections);
        setMenuItems(response.data.data.menu[0].sections || []);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowCards(false);
  };

  const handleBackClick = () => {
    setShowCards(true);
    setSelectedItem(null);
  };

  return (
    <Box className="box">
      {showCards ? (
        <>
          <Typography
            sx={{
              textAlign: "center !important",
              fontSize: "33px",
              fontWeight: "bold",
              my: 2,
            }}
          >
            MENU
          </Typography>
          <Container sx={{ maxWidth: "100% !important" }}>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  600: { slidesPerView: 2 },
                  900: { slidesPerView: 3 },
                  1300: { slidesPerView: 4 },
                }}
              >
                {menuItems.map((menuItem, index) => (
                  <SwiperSlide key={index}>
                    <Card
                      className="card"
                      sx={{
                        maxWidth: 230,
                        py: 3,
                        px: 6,
                        border: "2px solid #fff",
                        background: "#000",
                        borderRadius: "20px",
                        mx: "auto",
                        cursor: "pointer",
                      }}
                      onClick={() => handleCardClick(menuItem)}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          textAlign: "center",
                          mb: 2,
                          textTransform: "uppercase",
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "#c0b56e",
                        }}
                      >
                        {menuItem.name_en}
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image={`${BASE_URL}${menuItem.image}`}
                        alt={menuItem.description_ar}
                        sx={{ objectFit: "cover", width: "100%" }}
                      />
                      <Typography
                        variant="h4"
                        sx={{ fontSize: "20px", my: 1, color: "#fff" }}
                      >
                        {menuItem.description_en}
                      </Typography>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Container>
        </>
      ) : (
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 2,
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            {selectedItem.name_en}
          </Typography>
          <ItemCard
            selectedItem={selectedItem}
            handleBackClick={handleBackClick}
          />
          <BackToMenuClick handleBackClick={handleBackClick} />
        </Box>
      )}
    </Box>
  );
}

export default Boxx;
