import { AppBar, CssBaseline, Link, Toolbar, Typography } from "@mui/material";
import { GlobalStyles } from "@mui/styled-engine";
import { Box } from "@mui/system";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <Box>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Yohanes
            </Typography>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Home
              </Link>
            </nav>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Project
              </Link>
            </nav>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                About
              </Link>
            </nav>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Contact
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default HomePage;
