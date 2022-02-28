import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
// import { makeStyles } from "@mui/material/styles";

import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";

const Home = () => {
  const [title, setTitle] = useState("");
  let navigate = useNavigate();
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("money");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/notes"));
    }
  };

  return (
    <Box>
      <Typography variant="h3" component="h2">
        Yohanes Silitonga
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          margin="dense"
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        ></TextField>
        <TextField
          label="Details"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        ></TextField>

        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          onClick={() => console.log("you clicked me")}
          color="primary"
          endIcon={<SendIcon />}
        >
          Button
        </Button>
      </form>
    </Box>
  );
};

export default Home;
