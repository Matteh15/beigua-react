import React from "react";
import styled from "styled-components";

import { Typography } from "@mui/material";
import { Box, Container } from "@mui/material";
import Card from "./Card";
import gattoHome from "../img/gattoHome.png";
import canehome from "../img/canehome.png";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { BrowserView, MobileView } from "react-device-detect";
import ButtonGreen from "./ButtonGreen";
import Noi from "../img/Noi.png";

const ChiSiamo = () => {
  return (
    <>
      <Container
        maxWidth="100%"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BoxStyled>
          <div>
            <Testo>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                style={{
                  marginTop: "1rem",
                }}
                sx={{
                  fontFamily: "Poppins",
                }}
              >
                Firma la petizione
              </Typography>

              <p
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "30px",
                  letterSpacing: "-0.015em",
                  color: "#000000",
                }}
              >
                <br />
                <br />
                Con questa nostra petizione chiediamo che VENGA RITIRATO il
                decreto in considerazione del fatto che le comunità locali da
                anni si oppongono a qualunque ipotesi di apertura di una miniera
                nel comprensorio del Beigua.
              </p>

              <ButtonGreen style={{ marginBottom: "3rem" }}>
                Leggi di pi&ugrave;
              </ButtonGreen>
            </Testo>
          </div>
          <div>
            <ContenitoreImmagine>
              <img src={Noi} alt="" />
            </ContenitoreImmagine>
          </div>
        </BoxStyled>
      </Container>
    </>
  );
};

const H1ChiSiamo = styled.h1`
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 3rem;
`;

const Testo = styled.div`
  margin: auto;
  margin-top: 25px;
  margin-left: 50px;
`;

const ContenitoreImmagine = styled.div`
  margin: auto;
  width: 80%;
  height: 70%;
`;

const BoxStyled = styled(Box)`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.8);
  width: 1269px;
  height: 536px;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 70px;

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: 80%;
  }
`;

export default ChiSiamo;
