import React from "react";
import styled from "styled-components";

import { Container } from "@mui/material";
import Card from "./Card";
import gattoHome from "../img/gattoHome.png";
import canehome from "../img/canehome.png";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { BrowserView, MobileView } from "react-device-detect";
import ButtonGreen from "./ButtonGreen";
import { Link } from "react-router-dom";

import { Footer } from "./Footer";

import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <BrowserView>
        <Container
          maxWidth="100%"
          style={{
            position: "relative",
            backgroundColor: "#262631",
            padding: "5rem 10rem",
            color: "white",
            height: "100vh",
            overflowY: "hidden",
          }}
        >
          <H1Home>
            Il tuo amico &egrave; in
            <br />
            pericolo.
          </H1Home>
          <p>
            Il mesotelioma maligno negli animali pu&ograve; essere causato da{" "}
            <br />
            un'esposizione alle fibre di amianto.
          </p>
          <img
            src={gattoHome}
            style={{
              position: "absolute",
              zIndex: "100",
              right: "0",
              bottom: "0%",
              width: "50%",
            }}
          />
          <div
            style={{
              height: "60%",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <SvgContainer>
                <a href="https://www.instagram.com/save.yourpets/">
                  <FaInstagram />
                </a>
              </SvgContainer>
              <SvgContainer>
                <a href="https://m.facebook.com/SaveyourPets-103108672470413/">
                  <FaFacebook />
                </a>
              </SvgContainer>
              <SvgContainer>
                <a href="https://vm.tiktok.com/ZMNDv8vqW/">
                  <FaTiktok />
                </a>
              </SvgContainer>
            </div>
          </div>
        </Container>
      </BrowserView>

      <MobileView>
        <Container
          maxWidth="100%"
          style={{
            backgroundColor: "#262631",
          }}
        >
          <img
            src={gattoHome}
            style={{
              width: "100%",
            }}
          />
        </Container>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DivCards
            style={{
              margin: "2rem 0",
              backgroundColor: "#323242",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#323242",
                padding: "2rem",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <p className="raleway" style={{ lineHeight: "20px" }}>
                Proprio come negli esseri umani, i casi di mesotelioma maligno
                negli animali possono esser fatti risalire ad un???esposizione
                alle fibre di amianto.
              </p>
            </div>
          </DivCards>
        </div>
      </MobileView>

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
          <DivCards style={{ margin: "3rem 0" }}>
            <Card
              icon={1}
              title="Petizione"
              descr="Firma la petizione: ???No alla miniera nel comprensorio del Parco Naturale Regionale del Beigua???."
              link="/petizione"
            >
              skald
            </Card>
            <Card
              icon={2}
              title="Notizie"
              descr="Articoli su quello che comporta l???amianto e aggiornamenti del caso."
              link="/articoli"
            >
              skald
            </Card>
            <Card
              icon={3}
              title="Chi siamo"
              descr="Scopri di pi?? su chi siamo."
              link="/chi-siamo"
            >
              skald
            </Card>
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
            <H1HomeSecond>Casi tra gli animali</H1HomeSecond>
            <p className="raleway">
              Proprio come negli esseri umani,i casi di mesotelioma maligno
              negli animali possono esser fatti risalire ad un???esposizione alle
              fibre di amianto.
            </p>
          </SessantaPerc>
          <QuarantaPerc>
            <img src={canehome} alt="canehome" />
          </QuarantaPerc>
        </FlexDiv>
        <BrowserView>
          <Link to="/articoli">
            <ButtonGreen style={{ margin: "3rem auto" }}>
              Leggi di pi&ugrave;
            </ButtonGreen>
          </Link>
        </BrowserView>
        <MobileView>
          <FlexDiv>
            <Link to="/articoli">
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
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 3rem;

  @media screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

const DivCards = styled.div`
  width: 70%;
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
  }
`;

const QuarantaPerc = styled(FlexDiv)`
  width: 40%;

  @media screen and (max-width: 767px) {
    margin: 2rem 0;
  }
`;

const MyLink = styled(Link)`
  color: white !important;
  text-decoration: none !important;

  &.pet {
    color: #98c63b !important;
  }

  @media screen and (max-width: 600px) {
    margin: 1rem 0;
  }
`;

export default HomePage;
