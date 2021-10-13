import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    backgroundColor: "#3a3f47",
    color: "white",
  },
  media: {
    height: 250,
  },
});

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function MediaCard(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const colorAlive = () => {
    if (props.chars.status === "Alive") {
      return "green";
    } else if (props.chars.status === "Dead") {
      return "red";
    } else {
      return "gray";
    }
  };

  return (
    <Card className={classes.root} onClick={handleModal}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.chars.image}
          title={props.chars.name + "image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.chars.name.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="#e5e5e5" component="p">
            <CircleIcon style={{ fontSize: "10px", color: colorAlive() }} />
            <CircleIcon style={{ fontSize: "10px", color: "#3a3f47" }} />
            {props.chars.status} - {props.chars.species}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Modal open={open} onClose={handleModal}>
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <img src={props.chars.image} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.chars.name.toUpperCase()}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Status - {props.chars.status} <br />
              Species - {props.chars.species} <br />
              Gender - {props.chars.gender} <br />
              Origin - {props.chars.origin.name} <br />
              Location - {props.chars.location.name}
            </Typography>
          </div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "flex-start",
            }}
          >
            <CloseIcon />
          </div> */}
        </Box>
      </Modal>
    </Card>
  );
}
