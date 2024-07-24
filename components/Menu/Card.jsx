import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
  RadioGroup,
  FormControlLabel,
  TextField,
  Radio,
  Button,
  IconButton,
  CircularProgress,
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  Stack,
} from "@mui/material";
import Counter from "./counter.jsx";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./card.css";
import "./sliderMenu.css";
import imgLogo from "../Hero/images/logo.png";
const APIURL = "https://myres.me/chilis/api/menu/2/1";
const BASE_URL = "https://myres.me/chilis/";

function Boxx() {
  const [showCards, setShowCards] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [tempSelectedItemImage, setTempSelectedItemImage] = useState(null);
  const [tempSelectedItemName, setTempSelectedItemName] = useState(null);
  const [tempSelectedItemDescription, setTempSelectedItemDescription] =
    useState(null);
  const [tempSelectedItemPrice, setTempSelectedItemPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(APIURL);
        setMenuItems(response.data.data.menu[0].sections || []);
        console.log(response.data.data.menu[0].sections);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = (index) => {
    setSelectedItem(menuItems[index]);
    setShowCards(false);
  };

  const handleBackClick = () => {
    setShowCards(true);
    setSelectedItem(null);
    setOpenDialog(false);
  };

  const handleItemClick = (item) => {
    setTempSelectedItemImage(`${BASE_URL}${item.image}`);
    setTempSelectedItemName(item.name_en);
    setTempSelectedItemDescription(item.description_en);
    setTempSelectedItemPrice(item.price);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box className="box">
      {showCards ? (
        <>
          <Typography
            sx={{
              textAlign: "center !important",
              fontSize: "45px",
              fontWeight: "bold",
              my: 3,
              fontFamily:"cairo"
            }}
            variant="h2"
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
  className="swiper-menu"
  slidesPerView={1}
  spaceBetween={.5}
  pagination={{ clickable: true }}
  loop={true}
  navigation={true}
  modules={[Navigation]}
  breakpoints={{
    0: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1300: { slidesPerView: 4 },
  }}
>
  {Array.isArray(menuItems) &&
    menuItems.map((menuItem, index) => (
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
          onClick={() => handleCardClick(index)}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 2,
              textTransform: "uppercase",
              fontSize: " 2.4rem",
              fontWeight: "bold",
              color: "#c0b56e",
               fontFamily:"cairo"
            }}
          >
            {menuItem.name_en}
          </Typography>
          <CardMedia
            component="img"
            height="140"
            image={`${BASE_URL}${menuItem.image}`}
            alt={menuItem.description_ar}
           sx={{ objectFit: "cover", width: "100%"}}
          />
          <Typography
            variant="h5"
            sx={{
              fontSize: "20px",
              my: 1,
              color: "#bbb6b6",
              fontFamily: "uniform !important",
              lineHeight: 1.3
            }}
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
        <Box sx={{  mt: 4 }}>
            <Button variant="contained" color="error" onClick={handleBackClick}>
              Back
            </Button>
          </Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 2,
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            {selectedItem ? selectedItem.name_en : ""}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {Array.isArray(selectedItem?.items) &&
              selectedItem.items.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      p: 1,
                      border: "2px solid #fff",
                      background: "#000",
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleItemClick(item)}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 2,
                        textAlign: "center",
              textTransform: "uppercase",
              fontSize: "2.4rem",
              fontWeight: "bold",
              color: "#c0b56e",
               fontFamily:"cairo"
                      }}
                    >
                      {item.name_en}
                    </Typography>

                    <CardMedia
                      component="img"
                      height="140"
                      image={`${BASE_URL}${item.image}`}
                      alt={item.description_ar}

                      sx={{ objectFit: "cover", width: "100%"}}
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        textAlign: "left",
                        mb: 2,
                        textTransform: "uppercase",
                        fontSize: "1.5rem",
                        color: "#e8d56a",
                        marginBottom: 0,
                        marginTop: "10px",
                         fontFamily:"Brother  !important"
                      }}
                    >
                      {item.name_ar}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "20px",
                        my: 1,
                        color: "#fff",
                        textAlign: "left",
                        fontFamily:"uniform !important"
                      }}
                    >
                      {item.description_en}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", color: "#777" }}>
                      {item.price}
                    </Typography>
                    <IconButton onClick={() => handleItemClick(item)}>
                      <Button variant="contained" color="error">
                        ORDER
                      </Button>
                    </IconButton>
                  </Card>
                </Grid>
              ))}
          </Grid>
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="item-dialog-title"
            aria-describedby="item-dialog-description"
            maxWidth="lg"
            sx={{ border: "2px solid #c0b56e" }}
          >
            <DialogContent
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Box>
                <img
                  src={tempSelectedItemImage}
                  alt={tempSelectedItemName}
                  width={300}
                  height={200}
                  className="imgDialog"
                />
              </Box>
              <DialogContentText id="item-dialog-description" sx={{ mx: 3 }}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <DialogTitle id="item-dialog-title">
                    {tempSelectedItemName}
                  </DialogTitle>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Counter />
                    <span style={{ color: "#000", fontSize: "12px" }}>
                      {tempSelectedItemPrice}
                    </span>
                  </Stack>
                </Stack>
                <div className="borderItem"></div>
                          <Typography variant="h5"  sx={{ mb: 2, color: "#000",fontFamily:"uniform" }}>
                  {tempSelectedItemDescription}
                </Typography>
                <Stack>
                  <FormControl component="fieldset">
                    <Typography variant="h6" sx={{ color: "#000" }}>
                      Any special request?
                    </Typography>
                  </FormControl>
                  <TextField
                    multiline
                    rows={2}
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 0, mb: 1 }}
                  />
                  <Stack>
                    <Typography
                      variant="h6"
                      sx={{ color: "#000", textAlign: "left" }}
                    >
                      Option
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#000",
                        textTransform: "capitalize",
                        textAlign: "left",
                      }}
                    >
                      Add one
                    </Typography>
                    <RadioGroup sx={{ display: "flex " }}>
                      <Stack direction={"row"}>
                        <FormControlLabel
                          sx={{ color: "#000" }}
                          value="chicken"
                          control={<Radio sx={{ color: "#000" }} />}
                          label="Chicken 510 EGP"
                        />
                        <FormControlLabel
                          sx={{ color: "#000" }}
                          value="beef"
                          control={<Radio sx={{ color: "#000" }} />}
                          label="Beef 650 EGP"
                        />
                        <FormControlLabel
                          sx={{ color: "#000" }}
                          value="combo"
                          control={<Radio sx={{ color: "#000" }} />}
                          label="Combo 610 EGP"
                        />
                      </Stack>
                    </RadioGroup>
                  </Stack>
                </Stack>
              </DialogContentText>
            </DialogContent>
          </Dialog>
          
        </Box>
      )}
      <Stack className="stackContainer">
  <img src={imgLogo} className="logoImgMenu" alt="logomenu" />
</Stack>

    </Box>
  );
}

export default Boxx;
