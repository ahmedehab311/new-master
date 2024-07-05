import { Stack, Container, Typography } from "@mui/material";

import Box from "./box";
function Menu() {
  return (
    <Box sx={{ ".css-1oqqzyl-MuiContainer-root": { p: "100px" } }}>
      <div id="menu">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "33px",
            fontWeight: "bold",
            color: "#fff",
            my: 2,
          }}
        >
          MENU
        </Typography>
        <Stack>
          <Box />
        </Stack>
        {/* <Stack>
          <img src="" alt="logo" />
        </Stack> */}
      </div>
    </Box>
  );
}

export default Menu;
