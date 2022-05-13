import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/system";
import { LinearProgress, Typography } from "@mui/material";

const CollapseButton = () => {
  const [openHistory, setOpenHistory] = React.useState(true);
  const [openExperience, setOpenExperience] = React.useState(false);
  const [openSkills, setOpenSkills] = React.useState(false);

  const handleClickHistory = () => {
    setOpenHistory(!openHistory);
  };
  const handleClickExperience = () => {
    setOpenExperience(!openExperience);
  };
  const handleClickSkills = () => {
    setOpenSkills(!openSkills);
  };

  return (
    <List
      sx={{
        width: "100%",
        marginTop: 2,
        color: "primary.light",
        padding: 0,
        margin: "0 0 2 0",
      }}
      component="nav"
    >
      <ListItemButton onClick={handleClickHistory}>
        {openHistory ? (
          <ArrowRightIcon sx={{ fontSize: 30 }} />
        ) : (
          <ArrowDropDownIcon sx={{ fontSize: 30 }} />
        )}
        <Typography ml={2} variant="h5" fontWeight="bold">
          History
          {openHistory && (
            <Box width={60}>
              <LinearProgress color="info" />
            </Box>
          )}
        </Typography>
      </ListItemButton>
      <Collapse in={openHistory} timeout="auto" unmountOnExit>
        <Box pl={8}>
          <Typography variant="h6">
            Hello! I'm Yohanes. I started studying web development in mid-2021,
            which was the start of my internship. I decided to learn web
            development from many tutorials as well as explore more about web
            development especially frontend development which I found fun.
          </Typography>
          <Typography variant="h6" mt={1}>
            Although there are still many obstacles when studying, mainly
            because I am still doing lectures on campus, I am still motivated to
            learn as much as possible to make myself better and better.
            <br />
            <span> Thanks for reading 😊</span>
          </Typography>
        </Box>
      </Collapse>

      {/* Experience */}
      <ListItemButton onClick={handleClickExperience}>
        {openExperience ? (
          <ArrowRightIcon sx={{ fontSize: 30 }} />
        ) : (
          <ArrowDropDownIcon sx={{ fontSize: 30 }} />
        )}
        <Typography ml={2} variant="h5" fontWeight="bold">
          Experience
          {openExperience && (
            <Box width={60}>
              <LinearProgress color="info" />
            </Box>
          )}
        </Typography>
      </ListItemButton>
      <Collapse in={openExperience} timeout="auto" unmountOnExit>
        <Box mt={2} pl={8}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="h5" fontWeight="bold">
              Front End Developer Internship
            </Typography>
            <Box ml={2} width={30}>
              <LinearProgress />
            </Box>
            <Typography variant="h5" ml={2} fontWeight="semibold">
              PT XTEND OFFICE MANAGEMENT SYSTEM
            </Typography>
          </Box>

          <Typography variant="h6" mt={1}>
            June 2021 - September 2021 | Medan, Indonesia
          </Typography>
          <Typography variant="h6" mt={1}>
            <ul>
              <li>
                Designing high fidelity user interfaces for frontend website
                application
              </li>
              <li>
                Translate design to frontend website application using React as
                javascript library, Chakra UI as Style Framework
              </li>
              <li>
                Consumes the API provided by Backend. This application is used
                as an ERP application for the company such as the Inventory
                Module, Purchasing Module, and Sales Module
              </li>
              <li>Deployed on Heroku</li>
            </ul>
          </Typography>
        </Box>
      </Collapse>

      {/* Skills */}
      <ListItemButton onClick={handleClickSkills}>
        {openSkills ? (
          <ArrowRightIcon sx={{ fontSize: 30 }} />
        ) : (
          <ArrowDropDownIcon sx={{ fontSize: 30 }} />
        )}
        <Typography ml={2} variant="h5" fontWeight="bold">
          Skills
          {openSkills && (
            <Box width={60}>
              <LinearProgress color="info" />
            </Box>
          )}
        </Typography>
      </ListItemButton>
      <Collapse in={openSkills} timeout="auto" unmountOnExit>
        <Box mt={2} pl={8}>
          <Typography variant="h5" mt={1} sx={{ textDecoration: "underline" }}>
            Languages
          </Typography>
          <Typography variant="h6">
            <ul style={{ display: "flex" }}>
              <li style={{ marginLeft: 40 }}>TYPESCRIPT</li>
              <li style={{ marginLeft: 40 }}>JAVASCRIPT</li>
              <li style={{ marginLeft: 40 }}>CSS</li>
              <li>HTML</li>
            </ul>
          </Typography>
        </Box>
        <Box mt={2} pl={8}>
          <Typography variant="h5" mt={1} sx={{ textDecoration: "underline" }}>
            Framework & Libraries
          </Typography>
          <Typography variant="h6">
            <ul style={{ display: "flex" }}>
              <li>REACT</li>
              <li style={{ marginLeft: 40 }}>REACT REDUX</li>
              <li style={{ marginLeft: 40 }}>MUI</li>
              <li style={{ marginLeft: 40 }}>CHAKRA UI</li>
              <li style={{ marginLeft: 40 }}>BOOTSTRAP</li>
            </ul>
          </Typography>
        </Box>
        <Box mt={2} pl={8}>
          <Typography variant="h5" mt={1} sx={{ textDecoration: "underline" }}>
            Design Tools
          </Typography>
          <Typography variant="h6">
            <ul style={{ display: "flex" }}>
              <li>FIGMA</li>
              <li style={{ marginLeft: 40 }}>CANVA</li>
              <li style={{ marginLeft: 40 }}>BALSAMIQ</li>
            </ul>
          </Typography>
        </Box>
        <Box mt={2} pl={8}>
          <Typography variant="h5" mt={1} sx={{ textDecoration: "underline" }}>
            Version Control
          </Typography>
          <Typography variant="h6">
            <ul style={{ display: "flex" }}>
              <li>GIT</li>
              <li style={{ marginLeft: 40 }}>GITHUB</li>
            </ul>
          </Typography>
        </Box>
        <Box mt={2} pl={8}>
          <Typography variant="h5" mt={1} sx={{ textDecoration: "underline" }}>
            CMS
          </Typography>
          <Typography variant="h6">
            <ul style={{ display: "flex" }}>
              <li>WORDPRESS</li>
            </ul>
          </Typography>
        </Box>
      </Collapse>
    </List>
  );
};

export default CollapseButton;
