import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CollapseButton from "./CollapseButton";
import CollapseButtonResponsive from "./CollapseButtonResponsive";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        pb: 10,
        pt: 1,
        scrollBehavior: "smooth",
      }}
    >
      <Container maxWidth="lg" id="about">
        {/* Desktop */}
        <Box
          p="0 24px"
          minHeight="100vh"
          sx={{
            display: {
              xs: "none",
              md: "flex",
              flexDirection: "column",
            },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            pt={2}
          >
            <Typography variant="h3" sx={{ color: "primary.light" }}>
              About Me
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: 5 }}>
            <Box>
              <img
                src="../images/picture-1.jpg"
                style={{
                  width: "270px",
                  height: "240px",
                  objectFit: "cover",
                  border: "2px solid #ddd",
                  borderRadius: "5px",
                }}
                alt="yohanes"
              />
            </Box>
            <Box ml={3} color="primary.main">
              <Typography
                variant="h2"
                component="h5"
                fontWeight="bold"
                color="primary.main"
                mb={2}
              >
                Hello, I'm Yohanes 👋
              </Typography>
              <Typography variant="h5" component="p" color="primary.light">
                I am an empathetic, enthusiastic, responsible and hardworking
                person. I can work as a team or work on my own initiative and I
                am passionate about building software used by other people, and
                want to learn new technology
              </Typography>
            </Box>
          </Box>
          <Box>
            <CollapseButton />
          </Box>
        </Box>
        {/* Responsive */}
        <Box
          p="0 24px"
          minHeight="100vh"
          sx={{
            display: {
              xs: "flex",
              md: "none",
              flexDirection: "column",
            },
          }}
          id="about"
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h4" sx={{ color: "primary.light" }}>
              About Me
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            sx={{
              marginTop: 3,
            }}
          >
            <Box>
              <img
                src="../images/picture-1.jpg"
                style={{
                  width: "300px",
                  height: "270px",
                  objectFit: "cover",
                  border: "2px solid #ddd",
                  borderRadius: "5px",
                }}
                alt="yohanes"
              />
            </Box>
            <Box sx={{ color: "#f2f2f2" }}>
              <Typography
                variant="h3"
                component="h5"
                mb={1}
                fontWeight="bold"
                color="primary.main"
                mt={1}
                textAlign="center"
              >
                Hello, I'm Yohanes 👋
              </Typography>
              <Typography
                variant="h6"
                component="p"
                textAlign="center"
                color="primary.light"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Box>
          <Box>
            <CollapseButtonResponsive />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
