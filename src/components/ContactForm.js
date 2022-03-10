import React from "react";
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SocialMedia from "./SocialMedia";

const ContactForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        pb: 10,
        pt: 1,
      }}
      id="contact"
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
              Contact 📧
            </Typography>
          </Box>
          <Typography
            variant="h5"
            component="p"
            mt={5}
            mb={5}
            color="primary.light"
          >
            Dropping the line to say hi, ask for my resume or see if we can
            build something awesome together?
            <br /> I want to hear from you!
            <br />
            <br />
            Fill in your info in the form below and I look forward to hearing
            from you!
          </Typography>

          <Box display="flex" flexDirection="row" mb={5}>
            {/* Form */}
            <Box display="flex" flexDirection="column">
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  focused
                  sx={{ color: "primary" }}
                  inp
                />
              </Box>
            </Box>
            {/* Social Media */}
            <Box display="flex" justifyContent="center" alignItems="center">
              <SocialMedia />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
