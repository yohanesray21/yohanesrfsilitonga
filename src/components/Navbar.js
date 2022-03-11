import React from "react";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { MaterialUISwitch } from "../buttons/MaterialUISwitch";

const pages = ["HOME", "ABOUT", "PROJECT", "CONTACT"];

const ITEM_HEIGHT = 48;

const Navbar = ({ themeStorage, setThemeStorage }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="absolute"
      sx={{ backgroundColor: "primary.dark", boxShadow: "none" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* medium size */}
          <Box
            justifyContent="space-between"
            alignItems="center"
            display="flex"
            width="100%"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box sx={{ flexGrow: 0 }} display="flex" hre>
              <img
                src={
                  themeStorage === "dark"
                    ? "../../images/Vector.svg"
                    : "../../images/Logov2.svg"
                }
                alt="Yohanes Silitonga"
                style={{
                  height: "3rem",
                  cursor: "pointer",
                }}
              />
            </Box>

            {/* Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginRight: "1.6rem",
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  variant="body1"
                  key={page}
                  sx={{
                    color: "primary.light",
                    ":hover": {
                      color: "primary.main",
                    },
                    transition: "color 0.5s",
                    fontWeight: "semibold",
                    scrollBehavior: "smooth",
                  }}
                  underline="hover"
                  href={`#${page.toLowerCase()}`}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <MaterialUISwitch
                checked={themeStorage === "light" ? false : true}
                onChange={() => {
                  if (themeStorage === "dark") {
                    setThemeStorage("light");
                  } else {
                    setThemeStorage("dark");
                  }
                }}
              />
            </Box>
          </Box>

          {/* Responsive */}
          <Box
            justifyContent="space-between"
            alignItems="center"
            display="flex"
            width="100%"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex" },
              }}
            >
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ color: "primary.light" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {pages.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "home"}
                    onClick={handleClose}
                    href={`#${option.toLowerCase()}`}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <img
                src={
                  themeStorage === "dark"
                    ? "../../images/Vector.svg"
                    : "../../images/Logov2.svg"
                }
                alt="Yohanes Silitonga"
                style={{ height: "2rem", cursor: "pointer" }}
              />
            </Box>

            {/* Switch */}
            <Box sx={{ display: "flex" }}>
              <MaterialUISwitch
                checked={themeStorage === "light" ? false : true}
                onChange={() => {
                  if (themeStorage === "dark") {
                    setThemeStorage("light");
                  } else {
                    setThemeStorage("dark");
                  }
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
