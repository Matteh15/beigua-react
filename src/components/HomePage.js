import React from "react";
import styled from "styled-components";

import { Container } from "@mui/material";
import Card from "./Card";
import gattoHome from "../img/gattoHome.png";
import canehome from "../img/canehome.png";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { BrowserView, MobileView } from "react-device-detect";

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
              <span>1</span>
              <span>1</span>
              <span>1</span>
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
      </MobileView>

      <Container
        maxWidth="100%"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DivCards>
          <Card
            icon={1}
            title="Petizione"
            descr="Firma la petizione: “No alla miniera nel comprensorio del Parco Naturale Regionale del Beigua”."
            style={{ marginBottom: "2rem" }}
          >
            skald
          </Card>
          <Card
            icon={2}
            title="Notizie"
            descr="Articoli su quello che comporta l’amianto e aggiornamenti del caso."
          >
            skald
          </Card>
          <Card icon={3} title="Chi siamo" descr="Scopri di più su chi siamo.">
            skald
          </Card>
        </DivCards>
      </Container>

      <Container maxWidth="100%" style={{ backgroundColor: "#20202A" }}>
        <div>
          <H1Home>Casi tra gli animali</H1Home>
        </div>
        <div></div>
      </Container>
    </>
  );
};

const H1Home = styled.h1`
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 3rem;
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

export default HomePage;
