import React from "react";
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { MaterialUISwitch } from "./buttons/MaterialUISwitch";

const pages = ["HOME", "PROJECT", "ABOUT", "CONTACT"];

const ITEM_HEIGHT = 48;

const App = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: "#23252f" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* medium size */}
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <img
                src="../../images/Vector.svg"
                alt="Yohanes Silitonga"
                style={{ height: "3rem", cursor: "pointer" }}
              />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginLeft: "1.6rem",
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
                      // backgroundColor: "#454370",
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

            {/* Responsive */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
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
            <Box sx={{ flexGrow: 0 }}>
              <FormGroup>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  label=""
                ></FormControlLabel>
              </FormGroup>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default App;
