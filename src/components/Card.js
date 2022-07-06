import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ButtonGreen from "./ButtonGreen";
import { ClassNames } from "@emotion/react";
import canefinestra from "../img/canefinestra.png";
import cani_soccorso from "../img/cani_soccorso.png";
import illustr from "../img/illustr.png";
import fibre_amianto from "../img/fibre_amianto.png";

import { FaClipboardList, FaBook } from "react-icons/fa";
import { BsFillBinocularsFill } from "react-icons/bs";

import styleds from "styled-components";

const useStyles = styled((theme) => ({
  card: {
    marginBottom: theme.spacing,
  },
  media: {
    minHeight: 450,
  },
}));

export default function MultiActionAreaCard({
  icon,
  title,
  descr,
  img,
  articlePage,
  textMob,
}) {
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

          {articlePage && (
            <img style={{ width: "250px", height: "200px" }} src={img} />
          )}
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              marginTop: "1rem",
            }}
            sx={{
              fontFamily: "Poppins",
            }}
          >
            {title}
          </Typography>
          <Typography
            style={{
              minHeight: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            sx={{ fontFamily: "Raleway" }}
          >
            <p className="raleway">{descr}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon != 0 && (
          <ButtonGreen variant="contained" href="#contained-buttons">
            Leggi di più
          </ButtonGreen>
        )}
      </CardActions>
    </MyCard>
  );
}

const MyCard = styled(Card)`
  width: 250px;
  min-height: 350px;
  @media screen and (max-width: 767px) {
    width: 250px;
    margin-bottom: 3rem;
  }
`;
