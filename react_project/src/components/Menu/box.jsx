import { Container, Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import "./box.css";
import { itemes } from "./itemes.js";
function box() {
  return (
    <Container
      // sx={{ display: "flex", gap: 2, flexWrap: "wrap", color: "#fff" }}
      className="box"
    >
      {itemes.map((item) => {
        return (
          <Card
            sx={{
              maxWidth: 230,
              p: 1,
              border: "2px solid #fff",
              background: "#000",
              borderRadius: "20px",
            }}
            key={item.id}
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
              style={{ display: "flex" }}
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
        );
      })}


    </Container>
  );
}

export default box;
