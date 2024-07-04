import "./Header.css";
import { Box, Stack, Container } from "@mui/material";
function Header() {
  return (
    // <Box >
      <Stack sx={{ bgcolor: "#050304" }} >
        <ul className="headerMenu" >
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Locaiton</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>
      </Stack>
    // </Box>
  );
}

export default Header;
