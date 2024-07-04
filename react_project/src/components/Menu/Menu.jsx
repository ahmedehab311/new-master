import { Stack, Container, Typography } from "@mui/material";

import Box from "./box";
function Menu() {
  return (
    <Container >
      <Stack>
        <Typography
          sx={{ textAlign: "center", fontSize: "33px", fontWeight: "bold" }}
        >
          MENU
        </Typography>
        <Stack>

          <Box />
        </Stack>
        {/* <Stack>
          <img src="" alt="logo" />
        </Stack> */}
      </Stack>
    </Container>
  );
}

export default Menu;
