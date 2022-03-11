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
        <IconButton
          aria-label="email"
          href="mailto:yohanessilitonga21@gmail.com"
        >
          <EmailIcon
            sx={{
              color: "primary.light",
              ":hover": { color: "primary.main" },
            }}
          />
        </IconButton>
        <IconButton
          aria-label="github"
          href="https://github.com/yohanesray21"
          target="_blank"
        >
          <GitHubIcon
            sx={{
              color: "primary.light",
              ":hover": { color: "primary.main" },
            }}
          />
        </IconButton>
        <IconButton
          aria-label="twitter"
          href="https://twitter.com/YohanesRay21"
          target="_blank"
        >
          <TwitterIcon
            sx={{
              color: "primary.light",
              ":hover": { color: "primary.main" },
            }}
          />
        </IconButton>
        <IconButton
          aria-label="linkedIn"
          href="https://www.linkedin.com/in/yohanes-silitonga/"
          target="_blank"
        >
          <LinkedInIcon
            sx={{
              color: "primary.light",
              ":hover": { color: "primary.main" },
            }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default SocialMedia;
