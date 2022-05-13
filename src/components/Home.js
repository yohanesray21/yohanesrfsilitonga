import {
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MainButton from "../buttons/MainButton";
import SocialMedia from "./SocialMedia";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "primary.dark", pt: 1 }} id="home">
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
              color: "primary",
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">Hi, my name is</Typography>
            <Typography variant="h3" fontWeight="bold" mt={2} color="primary">
              YOHANES R F SILITONGA
            </Typography>
            <Typography variant="h5" mt={2}>
              Frontend Developer
            </Typography>
            <Typography variant="h6" mt={2}>
              I am an empathetic, enthusiastic, responsible and hardworking
              person. I can work as a team or work on my own initiative and I am
              passionate about building software used by other people, and want
              to learn new technology
            </Typography>
            <Box sx={{ marginTop: "2rem" }}>
              <MainButton title="MORE ABOUT ME" href="#about" />
              <Button
                variant="contained"
                size="large"
                sx={{
                  color: "primary",
                  backgroundColor: "primary.light",
                  ":hover": {
                    backgroundColor: "primary.main",
                  },
                  transition: "ease 0.5s",
                  marginLeft: 2,
                }}
                href="https://drive.google.com/file/d/1m_pS0mC8V5m-yf06Ck77DyyJ7JzYYYEO/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Button>
            </Box>
            <SocialMedia />
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
          id="home"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 3,
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
              color: "primary",
              flexGrow: 1,
              justifyContent: "flex-start",
              alignContent: "center",
            }}
          >
            <Typography variant="h6" my={3} textAlign="center">
              Hi, my name is
            </Typography>
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight={700}
              color="primary"
            >
              YOHANES R F SILITONGA
            </Typography>
            <Typography variant="h5" mt={2} textAlign="center">
              Frontend Developer
            </Typography>
            <Typography mt={2} textAlign="center">
              I am an empathetic, enthusiastic, responsible and hardworking
              person. I can work as a team or work on my own initiative and I am
              passionate about building software used by other people, and want
              to learn new technology
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
                size="medium"
                sx={{
                  color: "primary",
                  ":hover": { paddingLeft: "1rem" },
                  transition: "ease 0.3s",
                }}
                endIcon={<ArrowForwardIcon />}
                href="#about"
              >
                More About me
              </Button>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  color: "primary",
                  backgroundColor: "primary.light",
                  ":hover": {
                    backgroundColor: "primary.main",
                  },
                  transition: "ease 0.5s",
                  marginLeft: 2,
                }}
                href="https://drive.google.com/file/d/1m_pS0mC8V5m-yf06Ck77DyyJ7JzYYYEO/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Button>
            </Box>
            <Box sx={{ paddingTop: 2 }}>
              <Stack direction="row" spacing={1} justifyContent="center">
                <IconButton aria-label="email">
                  <EmailIcon
                    sx={{
                      color: "#f2f2f2",
                      ":hover": { color: "primary.main" },
                    }}
                  />
                </IconButton>
                <IconButton aria-label="github">
                  <GitHubIcon
                    sx={{
                      color: "#f2f2f2",
                      ":hover": { color: "primary.main" },
                    }}
                  />
                </IconButton>
                <IconButton aria-label="twitter">
                  <TwitterIcon
                    sx={{
                      color: "#f2f2f2",
                      ":hover": { color: "primary.main" },
                    }}
                  />
                </IconButton>
                <IconButton aria-label="linkedIn">
                  <LinkedInIcon
                    sx={{
                      color: "#f2f2f2",
                      ":hover": { color: "primary.main" },
                    }}
                  />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
