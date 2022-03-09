import {
  Box,
  Container,
  Fade,
  FormControlLabel,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import { borderRadius, height } from "@mui/system";
import React from "react";
import CollapseButton from "./CollapseButton";
import CollapseButtonResponsive from "./CollapseButtonResponsive";

const About = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ backgroundColor: "primary.dark", pb: 10, pt: 1 }}>
      <Container maxWidth="lg">
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
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h3" sx={{ color: "primary.light" }}>
              About Me
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: 5 }}>
            <Box sx={{ opacity: 0.4, ":hover": { opacity: 1 } }}>
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
            <Box sx={{ color: "#f2f2f2", marginLeft: 6 }}>
              <Typography
                variant="h2"
                component="h5"
                mb={5}
                fontWeight="bold"
                color="primary.main"
              >
                Hello, I'm Yohanes 🙂
              </Typography>
              <Typography variant="h5" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
                Hello, I'm Yohanes 🙂
              </Typography>
              <Typography variant="h6" component="p" textAlign="center">
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
