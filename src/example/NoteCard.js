import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography color="secondary">{note.details}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
