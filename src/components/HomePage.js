import React from "react";
import styled from "styled-components";

import { Card, Container } from "@mui/material";
import gattoHome from "../img/gattoHome.png";

const HomePage = () => {
  return (
    <>
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
      <Container
        maxWidth="100%"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Card variant="outlined">skald</Card>
      </Container>
    </>
  );
};

const H1Home = styled.h1`
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 3rem;
`;

export default HomePage;
