/* eslint-disable react/prop-types */
// import "./Header.css";
// import { useState } from "react";
// import { Drawer, IconButton, Link, Stack, useMediaQuery } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import HeaderBigMedia from "./HeaderBigMedia";
// import { Link as RouterLink } from "react-router-dom";
// function Header() {
//   const [state, setState] = useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };
//   const closeDrawer = () => {
//     setState({ ...state, right: false });
//   };
//   return (
//     <Stack sx={{ bgcolor: "#050304", p: 3 }}>
//       {useMediaQuery("(min-width:1000px)") && (
//   <HeaderBigMedia /> 
//       )}

     
//       {useMediaQuery("(max-width:1000px)") && (
//         <>
//           <IconButton
//             onClick={toggleDrawer("right", true)}
//             sx={{
//               position: "absolute",
//               top: 0,
//               right: 0,
//               fontSize: "35px",
//               cursor: "pointer",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               padding: "8px",
//               borderRadius: "50%",
//               p: "10px",
//               "&:hover": {
//                 backgroundColor: "rgba(0, 0, 0, 0.7)",
//               },
//             }}
//           >
//             <MenuIcon
//               color="#fff"
//               sx={{ top: 0, right: 0, fontSize: "35px", cursor: "pointer" }}
//             />
//           </IconButton>
//         </>
//       )}
//       <Drawer
//         anchor={"right"}
//         open={state["right"]}
//         onClose={toggleDrawer("right", false)}
//         sx={{ ".MuiPaper-root": { height: "100%" } }}
//       >
//         <Link href="#menu" onClick={closeDrawer}>
//           Menu
//         </Link>
//         <Link href="#about" onClick={closeDrawer}>
//           About Us
//         </Link>
//         <Link href="#footer" onClick={closeDrawer}>
//           Locaiton
//         </Link>
//         <Link href="#" onClick={closeDrawer}>
//           order online
//         </Link>
//         <Link href="#footer" onClick={closeDrawer}>
//           contact us
//         </Link>
//         <Link component={RouterLink} to="/login" onClick={closeDrawer}>
//           Login
//         </Link>
//       </Drawer>
//     </Stack>
//   );
// }

// export default Header;

// Header.jsx
import "./Header.css";
import { useState } from "react";
import { Drawer, IconButton, Link, Stack, useMediaQuery, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link as RouterLink } from "react-router-dom";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

function Header({ token, handleLogout }) {
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

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack sx={{ bgcolor: "#050304", p: 3, position: "relative" }}>
      {/* عرض الشاشة الكبيرة */}
      {useMediaQuery("(min-width:1000px)") && (
        <>
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
              }}
            />
            <Link href="#menu">Menu</Link>
            <Link href="#about">About Us</Link>
            <Link href="#footer">Location</Link>
            <Link href="#">Order Online</Link>
            <Link href="#footer">Contact Us</Link>
            {token ? (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  sx={{ color: "#fff", position: "absolute", right: "10px" }}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',  // وضع القائمة أسفل الأيقونة
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',  // بدء التحويل من الأعلى
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  sx={{
                    mt: 1,  // تعديل المسافة بين الأيقونة والقائمة
                  }}
                >
                  <MenuItem onClick={handleClose} component={RouterLink} to="/profile">Profile</MenuItem>
                  <MenuItem onClick={() => { handleLogout(); handleClose(); }}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Link component={RouterLink} to="/login">
                Login
              </Link>
            )}
          </Stack>
        </>
      )}

      {/* عرض الشاشة الصغيرة */}
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
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <MenuIcon sx={{ color: "#fff", fontSize: "35px" }} />
          </IconButton>
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
              Location
            </Link>
            <Link href="#" onClick={closeDrawer}>
              Order Online
            </Link>
            <Link href="#footer" onClick={closeDrawer}>
              Contact Us
            </Link>
            {token ? (
              <>
                <Link component={RouterLink} to="/profile" onClick={closeDrawer}>
                  Profile
                </Link>
                <Link onClick={() => { handleLogout(); closeDrawer(); }}>
                  Logout
                </Link>
              </>
            ) : (
              <Link component={RouterLink} to="/login" onClick={closeDrawer}>
                Login
              </Link>
            )}
          </Drawer>
        </>
      )}
    </Stack>
  );
}

export default Header;
