import { Box, Container, Typography } from "@mui/material";
import { borderRadius, height } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#23252f", pb: 10, pt: 1 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: "0 24px",
            height: "100vh",
            display: { xs: "none", md: "flex", flexDirection: "column" },
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ color: "#f2f2f2" }}>
              About Me
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: 5 }}>
            <Box>
              <img
                src="../images/picture-1.jpg"
                style={{
                  width: "350px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  opacity: "0.2",
                }}
                alt="yohanes"
              />
            </Box>
            <Box sx={{ color: "#f2f2f2", marginLeft: 2 }}>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
              <Typography sx={{ color: "f2f2f2" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
              <Typography sx={{ color: "f2f2f2" }}>
                Lorem Ipsum is simply dummy text of the printing.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
