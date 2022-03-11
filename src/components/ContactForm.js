import React, { useState } from "react";
import { Button, Container, Link, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SocialMedia from "./SocialMedia";
import SendIcon from "@mui/icons-material/Send";
import Copyright from "./Copyright";
//
const ContactForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  console.log(name);
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
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
            Dropping the line to say hi <span />
            <img src="../images/emoji.svg" alt="emoji" />
            <br />
            <br />
            Fill in your info in the form below and I look forward to hearing
            from you!
          </Typography>

          <Box display="flex" flexDirection="row" mb={5}>
            {/* Form */}
            <Box display="flex" flexDirection="column" flexGrow={1}>
              <Box
                component="form"
                action="https://formsubmit.co/yohanesrfsilitonga21@gmail.com"
                method="post"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100%" },
                }}
                noValidate
                display="flex"
                flexDirection="column"
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  label="Name : "
                  id="name"
                  sx={{ color: "primary" }}
                  autoComplete="off"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  label="Email : "
                  id="email"
                  sx={{ color: "primary" }}
                  autoComplete="off"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  id="message"
                  label="Message : "
                  multiline
                  rows={9}
                  autoComplete="off"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Box display="flex" m={1}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      color: "primary",
                      backgroundColor: "primary.light",
                      ":hover": {
                        backgroundColor: "primary.main",
                        paddingLeft: 2,
                        fontWeight: "bold",
                      },
                      transition: "ease 0.5s",
                    }}
                    endIcon={<SendIcon sx={{ marginLeft: 1 }} />}
                  >
                    SEND
                  </Button>
                </Box>
              </Box>
            </Box>
            {/* Social Media */}
            <Box
              display="flex"
              flexGrow={0}
              ml={6}
              py={3}
              px={1}
              mt={1}
              height="24rem"
              width="30rem"
              flexDirection="column"
            >
              <Typography variant="h5" fontWeight="bold" color="primary" ml={3}>
                Yohanes Ray F Silitonga
              </Typography>
              <Typography variant="body1" ml={3} mt={2}>
                <span style={{ fontWeight: "bold" }}>RESIDENCE :</span>{" "}
                INDONESIA
              </Typography>
              <Typography variant="body1" ml={3} mt={1}>
                <span style={{ fontWeight: "bold" }}> EMAIL :</span>{" "}
                yohanesrfsilitonga21@gmail.com
              </Typography>
              <Typography variant="body1" ml={3} mt={3}>
                SOCIAL MEDIA :
              </Typography>
              <Box ml={3}>
                <SocialMedia />
              </Box>

              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                mx={3}
              >
                <Typography>👉</Typography>
                <Link
                  sx={{ cursor: "pointer" }}
                  my={3}
                  href="https://drive.google.com/file/d/1m_pS0mC8V5m-yf06Ck77DyyJ7JzYYYEO/view?usp=sharing"
                  target="_blank"
                >
                  Download My Resume
                </Link>
              </Box>
            </Box>
          </Box>
          <Box mt={20}>
            <Copyright />
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
            Dropping the line to say hi <span />
            <img src="../images/emoji.svg" alt="emoji" />
            <br />
            <br />
            Fill in your info in the form below and I look forward to hearing
            from you!
          </Typography>

          <Box display="flex" flexDirection="column" mb={5}>
            {/* Form */}
            <Box display="flex" flexDirection="column" flexGrow={1}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100%" },
                }}
                noValidate
                display="flex"
                flexDirection="column"
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  label="Name : "
                  id="name"
                  sx={{ color: "primary" }}
                  autoComplete="off"
                />
                <TextField
                  fullWidth
                  label="Email : "
                  id="email"
                  sx={{ color: "primary" }}
                  autoComplete="off"
                  type="email"
                />
                <TextField
                  fullWidth
                  id="message"
                  label="Message : "
                  multiline
                  rows={9}
                  autoComplete="off"
                />
                <Box display="flex" my={3} ml={1}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      color: "primary",
                      backgroundColor: "primary.light",
                      ":hover": {
                        backgroundColor: "primary.main",
                        paddingLeft: 2,
                        fontWeight: "bold",
                      },
                      transition: "ease 0.5s",
                      width: "100%",
                    }}
                    endIcon={<SendIcon sx={{ marginLeft: 1 }} />}
                    onClick={() => console.log("hello")}
                  >
                    SEND
                  </Button>
                </Box>
              </Box>
            </Box>
            {/* Social Media */}
            <Box
              display="flex"
              flexGrow={0}
              mt={2}
              ml={1}
              py={3}
              px={1}
              height="100%"
              width="100%"
              flexDirection="column"
            >
              <Typography variant="h6" fontWeight="bold" color="primary" ml={2}>
                Yohanes Ray F Silitonga
              </Typography>
              <Typography variant="body1" ml={2} mt={2}>
                <span style={{ fontWeight: "bold" }}>RESIDENCE :</span>{" "}
                INDONESIA
              </Typography>
              <Typography variant="body1" ml={2} mt={1}>
                <span style={{ fontWeight: "bold" }}> EMAIL :</span>{" "}
                yohanesrfsilitonga21@gmail.com
              </Typography>
              <Typography variant="body1" ml={2} mt={3}>
                SOCIAL MEDIA :
              </Typography>
              <Box display="flex" justifyContent="center">
                <SocialMedia />
              </Box>

              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                mx={2}
              >
                <Typography>👉</Typography>
                <Link
                  sx={{ cursor: "pointer" }}
                  my={3}
                  href="https://drive.google.com/file/d/1m_pS0mC8V5m-yf06Ck77DyyJ7JzYYYEO/view?usp=sharing"
                  target="_blank"
                >
                  Download My Resume
                </Link>
              </Box>
            </Box>
          </Box>
          <Box>
            <Copyright />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
