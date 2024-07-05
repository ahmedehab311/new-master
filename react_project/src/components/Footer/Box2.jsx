// import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack, Box } from "@mui/material";
// import PinDropIcon from "@mui/icons-material/PinDrop";

function box2() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            color: "#fff",
            fontSize: "20px",
            color: "#FFF",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Stack>
              {/* <PinDropIcon fontSize="15px" /> */}
            </Stack>
            <Stack>Location</Stack>
            <input type="text" className="inputFooter" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default box2;
