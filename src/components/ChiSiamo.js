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
                Chi siamo
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
                Siamo un gruppo di studenti che mira a sensibilizzare la
                comunità circa gli effetti devastanti che una miniera nel Beigua
                comporterebbe sia sulle persone che sugli animali. Un modo per
                evitare tutto questo è firmare la petizione.
                <br />
                <br />
              </p>
            </Testo>
          </div>
          <div>
            <ContenitoreImmagine>
              <img src={Noi} alt="" />
            </ContenitoreImmagine>
          </div>
          <ButtonGreen style={{ marginBottom: "3rem" }}>
            Leggi di pi&ugrave;
          </ButtonGreen>
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

  img {
    width: 100%;
    object-fit: fill;
  }
`;

const BoxStyled = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.8);
  margin: 2rem 0;
  padding-bottom: 2rem;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export default ChiSiamo;
