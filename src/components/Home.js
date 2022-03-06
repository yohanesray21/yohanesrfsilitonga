import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#23252f", pb: 10, pt: 1 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: "0 24px",
            height: "100vh",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">Hi, my name is</Typography>
            <Typography variant="h2" mt={2}>
              YOHANES R F SILITONGA
            </Typography>
            <Typography variant="h5" mt={2}>
              Frontend Developer
            </Typography>
            <Typography mt={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </Typography>
            <Box sx={{ marginTop: "2rem" }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  ":hover": { paddingLeft: "1rem" },
                  transition: "ease 0.3s",
                }}
                endIcon={<ArrowForwardIcon />}
              >
                More About me
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src="./images/yohanes-profile-2.png"
              style={{ width: "430px" }}
              alt="yohanes-profile"
            />
          </Box>
        </Box>

        {/* Responsive */}
        <Box
          sx={{
            padding: "24px 24px",
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="./images/yohanes-profile-2.png"
              style={{ width: "300px", paddingRight: "25px" }}
              alt="yohanes-profile"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              flexGrow: 1,
              justifyContent: "flex-start",
              alignContent: "center",
            }}
          >
            <Typography variant="h6" my={3} textAlign="center">
              Hi, my name is
            </Typography>
            <Typography variant="h3" textAlign="center">
              YOHANES R F SILITONGA
            </Typography>
            <Typography variant="h5" mt={2} textAlign="center">
              Frontend Developer
            </Typography>
            <Typography mt={2} textAlign="center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </Typography>
            <Box
              sx={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  ":hover": { paddingLeft: "1rem" },
                  transition: "ease 0.3s",
                }}
                endIcon={<ArrowForwardIcon />}
              >
                More About me
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
