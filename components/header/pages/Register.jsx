/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/SignUpForm.js
// src/components/SignUpForm.js
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import signUpSchema from "../../vaildations/signUpSchema";
import useCheckEmailAvailability from "../../hooks/useCheckEmailAvailability";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Register = ({ setToken }) => {
  const [first_name, setFirst_name] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const BASE_URL = "https://myres.me/chilis/api";

  const registerUser = async (e) => {
    e.preventDefault();

    const APIURL = `/register?first_name=${first_name}&email=${email}&password=${password}&phone=${phone}`;

    try {
      const response = await axios.post(`${BASE_URL}${APIURL}`);

      console.log("Response:", response.data);
      if (response.data.response) {
        const token = response.data.data.user.token;
        
        setToken(token);
        toast.success("Register successful!");
      } else {
        throw new Error("Register failed");
      }
    } catch (error) {
      toast.error("The email or phone has already been taken.");
      console.error("Error registering: ", error);
    }
  };

  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmail,
  } = useCheckEmailAvailability();

  const emailOnBlurHandler = async (e) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && enteredEmail !== value) {
      checkEmailAvailability(value);
    } else if (isDirty && invalid && enteredEmail) {
      resetCheckEmail();
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
      <Box
        component="form"
        onSubmit={registerUser}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: 1,
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <TextField
          label="First Name"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setFirst_name(e.target.value)}
        />

        <TextField
          label="Email Address"
          {...register("email")}
          onBlur={emailOnBlurHandler}
          // error={!!errors.email}
          // helperText={errors.email?.message}
          // error={!!errors.email || emailAvailabilityStatus === "notAvailable"}
          // helperText={errors.email?.message || (emailAvailabilityStatus === "notAvailable" && "Email already in use")}
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Phone"
          type="text"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={emailAvailabilityStatus === "checking"}
        >
          Sign Up
        </Button>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, fontSize: "18px" }}
        >
          <Link component={RouterLink} to="/login" color={"#000"}>
            Already have an account? Sign in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;

// old code
