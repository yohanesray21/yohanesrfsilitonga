import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Copyright = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography>&copy; 2022 Yohanes RF Silitonga</Typography>
      <Box>
        <Button
          sx={{
            color: "primary",

            transition: "ease 0.3s",
          }}
          endIcon={<ArrowUpwardIcon sx={{ marginBottom: 0.5 }} />}
          href="#home"
        >
          Back Home
        </Button>
      </Box>
    </Box>
  );
};

export default Copyright;
