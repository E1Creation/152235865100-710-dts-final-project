import { Box } from "@mui/material";
import React from "react";
import SignForm from "../components/SignForm";

const Login = () => {
  return (
    <Box
      sx={{
        background: "url(background.png)",
        height: "100vh",
        display: "flex",
      }}
    >
      <SignForm text={"Login"} />
    </Box>
  );
};

export default Login;
