import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ButtonGreen from "./ButtonGreen";
import { ClassNames } from "@emotion/react";

import { FaClipboardList, FaBook } from "react-icons/fa";
import { BsFillBinocularsFill } from "react-icons/bs";

import styleds from "styled-components";

const useStyles = styled((theme) => ({
  card: {
    marginBottom: theme.spacing,
  },
  media: {
    height: 250,
  },
}));

export default function MultiActionAreaCard({ icon, title, descr }) {
  const classes = useStyles();
  return (
    <MyCard>
      <CardActionArea>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-beetwen",
            alignItems: "center",
          }}
        >
          {(icon == 1 && (
            <FaClipboardList style={{ width: "48px", height: "48px" }} />
          )) ||
            (icon == 2 && (
              <FaBook style={{ width: "48px", height: "48px" }} />
            )) ||
            (icon == 3 && (
              <BsFillBinocularsFill style={{ width: "48px", height: "48px" }} />
            ))}
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ marginTop: "1rem" }}
          >
            {title}
          </Typography>
          <Typography style={{ height: "100px" }}>{descr}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonGreen variant="contained" href="#contained-buttons">
          Leggi di più
        </ButtonGreen>
      </CardActions>
    </MyCard>
  );
}

const MyCard = styleds(Card)`
  width: 350px;

  @media screen and (max-width: 767px) {
    width: 250px;
    margin-bottom: 3rem;
  }

`;
