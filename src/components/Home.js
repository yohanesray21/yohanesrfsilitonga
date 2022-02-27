import React, { useState } from "react";
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
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("money");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDescriptionError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }

    if (title && description) {
      console.log(title, description, category);
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
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          onChange={(e) => setDescription(e.target.value)}
          error={descriptionError}
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
