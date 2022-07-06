import React from "react";
import styled from "styled-components";
import CardMedia from '@mui/material/CardMedia';
import { Container } from "@mui/material";
import Card from "./Card";
import canefinestra from "../img/canefinestra.png";
import cani_soccorso from "../img/cani_soccorso.png";
import illustr from "../img/illustr.png";
import fibre_amianto from "../img/fibre_amianto.png";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { BrowserView, MobileView } from "react-device-detect";
import ButtonGreen from "./ButtonGreen";

import { Footer } from "./Footer";

import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

const Article = () => {
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
        <DivCards style={{ margin: "7rem 0" }}>
          <Card
            style={{ marginRight: "80px" }}
            img = {fibre_amianto}
            title="Effetti sulla Salute"
            descr="La presenza delle fibre di amianto nell’ambiente comporta danni a carico della salute."
          >
          
            skald
          </Card>

          <Card
          
            img = {canefinestra}
            title="Mesotelioma canino"
            descr="L’esposizione all’amianto nei cani porta ad uno stato di infiammazione cronica."
          >
           
            skald
          </Card>
          <Card 
            
            img = {illustr}
            title="Amianto e animali" 
            descr="I casi di mesotelioma maligno negli animali sono causati dall’ esposizione alle fibre di amianto.">
          </Card>
        </DivCards>
      </Container>

      <Container
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px rgb(0 0 0 / 0.4)",
          
        }}
      >
        <FlexDiv style={{ marginTop: "5rem" }}>
          <FlexDiv style={{ height:"100%" }}>
            <img src={cani_soccorso} alt="canidasoccorso" style={{ height:"400px", width:"700px" }} />
          </FlexDiv>
          <div style={{ width: "60%" }}>
            <h3>«Morti alcuni cani da soccorso a causa dell’amianto»</h3>
            <p>
                secondo il sindacato dei vigili 
                del fuoco Usb la causa andrebbe 
                ricercata nell’esposizione alle 
                polveri sottili di amianto.
            </p>
          </div>
          
        </FlexDiv>
      
          <ButtonGreen style={{  marginBottom: "3rem"}}>
            Leggi di pi&ugrave;
          </ButtonGreen>

      </Container>
    </>
  );
};

const H1Home = styled.h1`
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 3rem;
`;

const H1HomeSecond = styled.h1`
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 3rem;

  @media screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

const DivCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3rem 5rem;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 0rem;
    margin-top: 5rem;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
`;

const SvgContainer = styled.span`
  svg {
    font-size: 48px;
  }
`;

export default Article;
