// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// import { Box, Button, TextField, Typography, Stack } from "@mui/material";
// import axios from "axios";
// import { useState } from "react";
// import { Link, Link as RouterLink } from "react-router-dom";
// import { toast } from "react-toastify";


// // eslint-disable-next-line react/prop-types
// const LoginPage = ({setToken}) => {
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
  
//   const BASE_URL = "https://myres.me/chilis/api";
  
//   const login = async (e) => {
//     e.preventDefault();
  
//     try {
//       const APIURL = `/login?phone=${phone}&password=${password}&email=${phone}`;
//       const response = await axios.post(`${BASE_URL}${APIURL}`);
  
//       // تسجيل الاستجابة بالكامل لتفهم ما يحدث
//       console.log("Response:", response.data);
  
//       if (response.data.response) {
//         const token =response.data.data.token;
//         if (token) {
//           setToken(token);
//           toast.success("Login successful!");
//         } else {
//           throw new Error("Token not found");
//         }
//       } else {
//         throw new Error("Login failed");
//       }
//     } catch (error) {
//       toast.error("Login failed. Please check your credentials.");
//       console.error("Error logging in: ", error);
//     }
//   };
  



//   return (
//     <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       minHeight: "100vh",
//       backgroundColor: "#f5f5f5",
//       padding: "20px",
//     }}
//   >
//     <Stack
//       direction={{ xs: "column", md: "row" }}
//       spacing={4}
//       sx={{ width: "100%", maxWidth: "800px" }}
//     >
//       <Box
//         component="form"
//         onSubmit={login}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           backgroundColor: "#fff",
//           padding: "20px",
//           borderRadius: "8px",
//           boxShadow: 1,
//           flex: 1,
//         }}
//       >
//         <Typography variant="h6" gutterBottom>
//           Welcome Back
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           Sign in to continue
//         </Typography>
//         <TextField
//           label="Enter Your Phone"
//           variant="outlined"
//           fullWidth
//           required
//           onChange={(e) => setPhone(e.target.value)}
//           value={phone}
//           InputProps={{ style: { fontSize: "1.6rem", fontWeight: "bold" } }}
//           InputLabelProps={{ fontSize: "1.6rem", fontWeight: "bold" }}
//         />
//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           required
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           InputProps={{ style: { fontSize: "1.6rem", fontWeight: "bold" } }}
//           InputLabelProps={{ fontSize: "1.6rem", fontWeight: "bold" }}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           sx={{ fontSize: "15px" }}
//         >
//           Login
//         </Button>
//         <Typography
//           variant="body2"
//           align="center"
//           sx={{ mt: 1, fontSize: "18px" }}
//         >
//           <Link component={RouterLink} to="/forgot-password">
//             Forgot Your Password?
//           </Link>
//         </Typography>
//         <Typography
//           variant="body2"
//           align="center"
//           sx={{ mt: 2, fontSize: "18px" }}
//         >
//           <Link component={RouterLink} to="/register">
//             Don't have an account? Sign up
//           </Link>
//         </Typography>
//       </Box>
//     </Stack>
//   </Box>
//   );
// }

// export default LoginPage;

// // LoginPage.jsx
// import { useNavigate } from "react-router-dom";
// import { Box, Button, TextField, Typography, Stack } from "@mui/material";
// import axios from "axios";
// import { useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import { toast } from "react-toastify";

// const LoginPage = ({ setToken }) => {
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
  
//   const BASE_URL = "https://myres.me/chilis/api";
  
//   const login = async (e) => {
//     e.preventDefault();
    
//     const APIURL = `/login?phone=${phone}&password=${password}&email=${phone}`;
//     try {
//       const response = await axios.post(`${BASE_URL}${APIURL}`);

//       console.log("Response:", response.data);
  
//       if (response.data.response) {
//         const token = response.data.data.token;
//         if (token) {
//           setToken(token);
//           toast.success("Login successful!");
//           navigate("/");
//         } else {
//           throw new Error("Token not found");
//         }
//       } else {
//         throw new Error("Login failed");
//       }
//     } catch (error) {
//       toast.error("Login failed. Please check your credentials.");
//       console.error("Error logging in: ", error);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f5f5f5",
//         padding: "20px",
//       }}
//     >
//       <Stack
//         direction={{ xs: "column", md: "row" }}
//         spacing={4}
//         sx={{ width: "100%", maxWidth: "800px" }}
//       >
//         <Box
//           component="form"
//           onSubmit={login}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//             backgroundColor: "#fff",
//             padding: "20px",
//             borderRadius: "8px",
//             boxShadow: 1,
//             flex: 1,
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Welcome Back
//           </Typography>
//           <Typography variant="h6" gutterBottom>
//             Sign in to continue
//           </Typography>
//           <TextField
//             label="Enter Your Phone"
//             variant="outlined"
//             fullWidth
//             required
//             onChange={e => setPhone(e.target.value) }
//             value={phone}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             required
//             onChange={e => setPassword(e.target.value) }
//             value={password}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//           >
//             Login
//           </Button>
//           <Typography
//             variant="body2"
//             align="center"
//             sx={{ mt: 1 }}
//           >
//             <RouterLink to="/forgot-password">
//               Forgot Your Password?
//             </RouterLink>
//           </Typography>
//           <Typography
//             variant="body2"
//             align="center"
//             sx={{ mt: 2 }}
//           >
//             <RouterLink to="/register">
//               Don't have an account? Sign up
//             </RouterLink>
//           </Typography>
//         </Box>
//       </Stack>
//     </Box>
//   );
// }

// export default LoginPage;

// Login.jsx
// LoginPage.jsx
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = ({ setToken }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const BASE_URL = "https://myres.me/chilis/api";
  
  const login = async (e) => {
    e.preventDefault();
    
    const APIURL = `/login?phone=${phone}&password=${password}&email=${phone}`;
    try {
      const response = await axios.post(`${BASE_URL}${APIURL}`);

      console.log("Response:", response.data);
  
      if (response.data.response) {
        const token = response.data.data.token;
        if (token) {
          setToken(token);
          localStorage.setItem("token", token);
          toast.success("Login successful!");
          navigate("/");
        } else {
          throw new Error("Token not found");
        }
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Error logging in: ", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ width: "100%", maxWidth: "800px" }}
      >
        <Box
          component="form"
          onSubmit={login}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: 1,
            flex: 1,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="h6" gutterBottom>
            Sign in to continue
          </Typography>
          <TextField
            label="Enter Your Phone"
            variant="outlined"
            fullWidth
            required
            onChange={e => setPhone(e.target.value) }
            value={phone}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            onChange={e => setPassword(e.target.value) }
            value={password}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 1 }}
          >
            <RouterLink to="/forgot-password">
              Forgot Your Password?
            </RouterLink>
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2 }}
          >
            <RouterLink to="/register">
              Don't have an account? Sign up
            </RouterLink>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default LoginPage;
