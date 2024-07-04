import { Container, Typography, Box } from "@mui/material";
import img from "../Hero/images/game-01.jpg";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
function box() {
  return (
    <Container sx={{display:"flex", gap:1, flexWrap:"wrap"}}>
      <Card sx={{ maxWidth: 230, p: 1 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 2, textTransform: "uppercase" }}
        >
          appetizers
        </Typography>

        <img src={img} width="50px" style={{ display: "flex" }} alt="" />
        <Typography variant="h4" sx={{ fontSize: "20px", my: 1 }}>
          CHips & cola
        </Typography>
        <Typography sx={{ fontSize: "18px", fontFamily: "Beiruti" }}>
          شيبسي وصلصة
        </Typography>
        <Typography variant="body2" sx={{ my: 1, fontSize: "12px" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography>gunmale 65 EGP</Typography>
          <Typography>house made ratfch 40 EGP</Typography>
        </Box>
      </Card>
      <Card sx={{ maxWidth: 230, p: 1 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 2, textTransform: "uppercase" }}
        >
          appetizers
        </Typography>

        <img src={img} width="50px" style={{ display: "flex" }} alt="" />
        <Typography variant="h4" sx={{ fontSize: "20px", my: 1 }}>
          CHips & cola
        </Typography>
        <Typography sx={{ fontSize: "18px", fontFamily: "Beiruti" }}>
          شيبسي وصلصة
        </Typography>
        <Typography variant="body2" sx={{ my: 1, fontSize: "12px" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography>gunmale 65 EGP</Typography>
          <Typography>house made ratfch 40 EGP</Typography>
        </Box>
      </Card>
      <Card sx={{ maxWidth: 230, p: 1 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 2, textTransform: "uppercase" }}
        >
          appetizers
        </Typography>

        <img src={img} width="50px" style={{ display: "flex" }} alt="" />
        <Typography variant="h4" sx={{ fontSize: "20px", my: 1 }}>
          CHips & cola
        </Typography>
        <Typography sx={{ fontSize: "18px", fontFamily: "Beiruti" }}>
          شيبسي وصلصة
        </Typography>
        <Typography variant="body2" sx={{ my: 1, fontSize: "12px" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography>gunmale 65 EGP</Typography>
          <Typography>house made ratfch 40 EGP</Typography>
        </Box>
      </Card>
    </Container>
  );
}

export default box;
