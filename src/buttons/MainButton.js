import { Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MainButton = ({ title, href, target }) => {
  return (
    <Button
      variant="outlined"
      size="large"
      sx={{
        color: "primary",
        ":hover": { paddingLeft: "1rem" },
        transition: "ease 0.3s",
      }}
      endIcon={<ArrowForwardIcon />}
      href={href}
      target={target}
    >
      {title}
    </Button>
  );
};

export default MainButton;
