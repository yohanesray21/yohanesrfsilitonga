import { IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialMedia = () => {
  return (
    <Box sx={{ paddingTop: 2 }}>
      <Stack direction="row" spacing={1}>
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
  );
};

export default SocialMedia;
