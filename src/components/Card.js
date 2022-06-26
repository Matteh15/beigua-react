import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ButtonGreen from "./ButtonGreen";
import { ClassNames } from "@emotion/react";

const useStyles = styled((theme) => ({
  card: {
    marginBottom: theme.spacing,
  },
  media: {
    height: 250,
  },
}));

export default function MultiActionAreaCard() {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 307, height: 446 }}>
      <CardActionArea>
        <CardMedia className={classes.media} image="" titele="MyPost" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonGreen variant="contained" href="#contained-buttons">
          Continua sul sito
        </ButtonGreen>
      </CardActions>
    </Card>
  );
}
