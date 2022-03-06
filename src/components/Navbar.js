import React from "react";
import {
  AppBar,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { MaterialUISwitch } from "../buttons/MaterialUISwitch";

const pages = ["HOME", "PROJECT", "ABOUT", "CONTACT"];

const ITEM_HEIGHT = 48;

const Navbar = () => {
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
      position="relative"
      sx={{ backgroundColor: "#23252f", boxShadow: "none" }}
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
            <Box sx={{ flexGrow: 0 }} display="flex">
              <img
                src="../../images/Vector.svg"
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
                    color: "white",
                    ":hover": {
                      color: "#fede2b",
                    },
                    transition: "color 0.5s",
                    fontWeight: "semibold",
                  }}
                  underline="hover"
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <FormGroup>
                <FormControlLabel
                  control={<MaterialUISwitch defaultChecked />}
                  label=""
                ></FormControlLabel>
              </FormGroup>
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
                sx={{ color: "white" }}
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
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <img
                src="../../images/Vector.svg"
                alt="Yohanes Silitonga"
                style={{ height: "2rem", cursor: "pointer" }}
              />
            </Box>

            {/* Switch */}
            <Box sx={{ display: "flex" }}>
              <FormGroup>
                <FormControlLabel
                  control={<MaterialUISwitch defaultChecked />}
                  label=""
                ></FormControlLabel>
              </FormGroup>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
