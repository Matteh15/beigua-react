import React from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import Card from "./Card";
import canefinestra from "../img/canefinestra.png";
import cani_soccorso from "../img/cani_soccorso.png";
import illustr from "../img/illustr.png";
import fibre_amianto from "../img/fibre_amianto.png";
import { BrowserView, MobileView } from "react-device-detect";
import ButtonGreen from "./ButtonGreen";

import { Link } from "react-router-dom";

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
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DivCards style={{ margin: "7rem 0" }}>
            <Card
              style={{ marginRight: "80px" }}
              img={fibre_amianto}
              title="Effetti sulla Salute"
              descr="La presenza delle fibre di amianto nell’ambiente comporta danni a carico della salute."
              articlePage={true}
              link=""
            >
              skald
            </Card>

            <Card
              img={canefinestra}
              title="Mesotelioma canino"
              descr="L’esposizione all’amianto nei cani porta ad uno stato di infiammazione cronica."
              articlePage={true}
              link=""
            >
              skald
            </Card>
            <Card
              img={illustr}
              title="Amianto e animali"
              descr="I casi di mesotelioma maligno negli animali sono causati dall’ esposizione alle fibre di amianto."
              articlePage={true}
              link=""
            ></Card>
          </DivCards>
        </div>
      </Container>

      <CasiContainer
        style={{
          backgroundColor: "#20202A",
          color: "white",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px rgb(0 0 0 / 0.4)",
        }}
      >
        <FlexDiv style={{ marginTop: "5rem" }}>
          <SessantaPerc>
            <H1HomeSecond>
              Morti alcuni cani da soccorso a causa dell’amianto
            </H1HomeSecond>
            <p className="raleway">
              Secondo il sindacato dei vigili del fuoco la causa andrebbe
              ricercata nell’esposizione alle polveri sottili di amianto.
            </p>
          </SessantaPerc>
          <QuarantaPerc>
            <img src={cani_soccorso} alt="canehome" />
          </QuarantaPerc>
        </FlexDiv>
        <BrowserView>
          <Link to="">
            <ButtonGreen style={{ margin: "3rem auto" }}>
              Leggi di pi&ugrave;
            </ButtonGreen>
          </Link>
        </BrowserView>
        <MobileView>
          <FlexDiv>
            <Link to="">
              <ButtonGreen style={{ margin: "3rem auto" }}>
                Leggi di pi&ugrave;
              </ButtonGreen>
            </Link>
          </FlexDiv>
        </MobileView>
      </CasiContainer>
    </>
  );
};

const H1Home = styled.h1`
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 3rem;
`;

const H1HomeSecond = styled.h1`
  font-size: 32px;
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

  @media screen and (max-width: 767px) {
    flex-direction: column !important;
  }
`;

const SvgContainer = styled.span`
  svg {
    font-size: 48px;
  }
`;

const CasiContainer = styled(Container)`
  @media screen and (max-width: 767px) {
    width: 80% !important;

    h1 {
      font-size: 32px !important;
    }
  }
`;

const SessantaPerc = styled.div`
  width: 60%;

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

const QuarantaPerc = styled(FlexDiv)`
  width: 40%;

  @media screen and (max-width: 767px) {
    margin: 2rem 0;
    width: 80%;
    img {
      width: 100%;
    }
  }
`;

export default Article;
