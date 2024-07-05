import "./Header.css";
import { Drawer, IconButton, Link, Stack, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useState } from "react";
function Header() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const closeDrawer = () => {
    setState({ ...state, right: false });
  };
  return (
    // <Box >
    <Stack sx={{ bgcolor: "#050304", p: 3 }}>
      {useMediaQuery("(min-width:1000px)") && (
        <Stack
          gap={2}
          direction={"row"}
          alignItems={"center"}
          sx={{ textTransform: "uppercase", p: "10px !important" }}
          className="headerMenu"
        >
          <LanguageOutlinedIcon
            sx={{
              fontSize: "30px",
              cursor: "pointer",
              color: "#777",
              mr: 5,
              // position:"relative"
            }}
          />
          <Link href="#menu">Menu</Link>
          <Link href="#about">About Us</Link>
          <Link href="#footer">Locaiton</Link>
          <Link href="#">order online</Link>
          <Link href="#footer">contact us</Link>
        </Stack>
      )}

      {useMediaQuery("(max-width:1000px)") && (
        <>
          <IconButton
            onClick={toggleDrawer("right", true)}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: "35px",
              cursor: "pointer",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "8px",
              borderRadius: "50%",
              p: "10px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken the background on hover
              },
            }}
          >
            <MenuIcon
              color="#fff"
              sx={{ top: 0, right: 0, fontSize: "35px", cursor: "pointer" }}
            />
          </IconButton>
        </>
      )}

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{ ".MuiPaper-root": { height: "100%" } }}
      >
        <Link href="#menu" onClick={closeDrawer}>
          Menu
        </Link>
        <Link href="#about" onClick={closeDrawer}>
          About Us
        </Link>
        <Link href="#footer" onClick={closeDrawer}>
          Locaiton
        </Link>
        <Link href="#" onClick={closeDrawer}>
          {" "}
          order online
        </Link>
        <Link href="#footer" onClick={closeDrawer}>
          contact us
        </Link>
      </Drawer>
    </Stack>
  );
}

export default Header;
