import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: "center",
        width: "100%",
        color: "white",
      }}
    >
      <Typography variant="h6">Created by: Kurniawan Sudirman</Typography>
    </Box>
  );
};

export default Footer;
