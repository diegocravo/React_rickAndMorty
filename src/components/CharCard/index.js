import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    backgroundColor: "#3a3f47",
    color: "white"
  },
  media: {
    height: 250,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.chars.image}
          title={props.chars.name + "image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.chars.name}
          </Typography>
          <Typography variant="body2" color="#e5e5e5" component="p">
            Location: {props.chars.location.name} <br />
            Status: {props.chars.status} <br />
            Species: {props.chars.species}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Saiba mais
        </Button>
      </CardActions> */}
    </Card>
  );
}