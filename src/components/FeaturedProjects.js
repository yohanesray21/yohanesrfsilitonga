import { WrapText } from "@mui/icons-material";
import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MainButton from "../buttons/MainButton";

const FeaturedProjects = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        pb: 10,
        pt: 1,
        // display: "flex",
        // alignItems: "flex-start",
      }}
    >
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
            <Typography variant="h3" color="primary.light">
              Featured Projects 💻
            </Typography>
          </Box>
          <Typography
            variant="h5"
            component="p"
            mt={5}
            mb={5}
            color="primary.light"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Typography>

          <Box display="flex" flexDirection="row" mb={5}>
            <Box>
              <img
                src="../images/xtend.png"
                style={{ width: "500px" }}
                alt="xtend"
              />
            </Box>
            <Box display="flex" flexDirection="column" ml={5}>
              <Typography variant="h5" color="primary">
                PT XTEND OFFICE MANAGEMENT SYSTEM
              </Typography>
              <Typography mt={2} variant="h6" color="primary.light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
              <Typography variant="h6" color="primary.light">
                <ul style={{ display: "flex" }}>
                  <li>FIGMA</li>
                  <li style={{ marginLeft: 40 }}>CANVA</li>
                  <li style={{ marginLeft: 40 }}>BALSAMIQ</li>
                </ul>
              </Typography>
              <MainButton title="VISIT SITE" />
            </Box>
          </Box>
          <Divider sx={{ marginBottom: 5 }} variant="middle" color="white" />
          <Box display="flex" flexDirection="row" mb={5}>
            <Box display="flex" flexDirection="column" mr={5}>
              <Typography variant="h5" color="primary">
                PT XTEND OFFICE MANAGEMENT SYSTEM
              </Typography>
              <Typography mt={2} variant="h6" color="primary.light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
              <Typography variant="h6" color="primary.light">
                <ul style={{ display: "flex" }}>
                  <li>FIGMA</li>
                  <li style={{ marginLeft: 40 }}>CANVA</li>
                  <li style={{ marginLeft: 40 }}>BALSAMIQ</li>
                </ul>
              </Typography>
              <MainButton title="VISIT SITE" />
            </Box>
            <Box>
              <img
                src="../images/xtend.png"
                style={{ width: "500px" }}
                alt="xtend"
              />
            </Box>
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
            <Typography variant="h4" color="primary.light">
              Featured Projects 💻
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={5}
            mb={5}
          >
            <Typography
              textAlign="center"
              variant="h6"
              component="p"
              color="primary.light"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" mb={5}>
            <Box display="flex" justifyContent="center" mb={2}>
              <img
                src="../images/xtend.png"
                style={{ width: "300px" }}
                alt="xtend"
              />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="h5" color="primary" textAlign="center">
                PT XTEND OFFICE MANAGEMENT SYSTEM
              </Typography>
              <Typography
                mt={2}
                variant="h6"
                component="p"
                color="primary.light"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
              <Typography variant="body1" color="primary.light">
                <ul style={{ display: "flex", flexDirection: "row" }}>
                  <li>FIGMA</li>
                  <li style={{ marginLeft: 40 }}>CANVA</li>
                  <li style={{ marginLeft: 40 }}>BALSAMIQ</li>
                </ul>
              </Typography>
              <MainButton title="VISIT SITE" />
            </Box>
          </Box>
          <Divider sx={{ marginBottom: 5 }} variant="middle" color="white" />
          <Box display="flex" flexDirection="column" mb={5}>
            <Box display="flex" justifyContent="center" mb={2}>
              <img
                src="../images/xtend.png"
                style={{ width: "300px" }}
                alt="xtend"
              />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="h5" color="primary" textAlign="center">
                PT XTEND OFFICE MANAGEMENT SYSTEM
              </Typography>
              <Typography
                mt={2}
                variant="h6"
                component="p"
                color="primary.light"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
              <Typography variant="body1" color="primary.light">
                <ul style={{ display: "flex", flexDirection: "row" }}>
                  <li>FIGMA</li>
                  <li style={{ marginLeft: 40 }}>CANVA</li>
                  <li style={{ marginLeft: 40 }}>BALSAMIQ</li>
                </ul>
              </Typography>
              <MainButton title="VISIT SITE" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProjects;
