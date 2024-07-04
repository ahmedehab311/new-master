import { Stack, Box } from "@mui/material";
import Box1 from "./Box1.jsx";
import Box2 from "./Box2.jsx";
import Box3 from "./Box3.jsx";
function Footer() {
  return (
    <>
      <Box
        sx={{
          mt: "5px",
          py: 3,
          px: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "2px solid #000",
          background: "#e72323",
          position: "relative",
        }}
      >
        <Stack>
          <Box1 />
        </Stack>
        <Stack>
          <Box2 />
        </Stack>
        <Stack>
          <Box3 />
        </Stack>
        {/* <Typography sx={{ mt: 4, color: "red", textAlign: "center" }}>all right to @anadl </Typography> */}
      </Box>
    </>
  );
}

export default Footer;
