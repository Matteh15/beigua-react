import React from "react";
import styled from "styled-components";

import { Container } from "@mui/material";
import ButtonGreen from "./ButtonGreen";
import { Footer } from "./Footer";
import { BrowserView, MobileView } from "react-device-detect";
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

import petizione from "../img/petizione.png";

const ChiSiamo = () => {
  return (
    <>
      <CasiContainer
        style={{
          borderRadius: "10px",
          boxShadow: "5px 5px 10px rgb(0 0 0 / 0.4)",
        }}
      >
        <FlexDiv style={{ marginTop: "5rem" }}>
          <SessantaPerc>
            <H1HomeSecond>Firma la petizione</H1HomeSecond>
            <p>
              Con questa nostra petizione chiediamo che{" "}
              <strong>VENGA RITIRATO</strong> il decreto in considerazione del
              fatto che le comunità locali da anni si oppongono a qualunque
              ipotesi di apertura di una miniera nel comprensorio del Beigua.
            </p>
          </SessantaPerc>
          <QuarantaPerc>
            <img src={petizione} alt="noi" />
          </QuarantaPerc>
        </FlexDiv>
        <BrowserView>
          <ButtonGreen style={{ margin: "3rem auto" }}>
            Leggi di pi&ugrave;
          </ButtonGreen>
        </BrowserView>
        <MobileView>
          <FlexDiv>
            <ButtonGreen style={{ margin: "3rem auto" }}>Firma qui</ButtonGreen>
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
  margin: 2rem 0;

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

  img {
    width: 80%;
    object-fit: fill;
  }

  @media screen and (max-width: 767px) {
    margin: 2rem 0;
    width: 80%;

    img {
      width: 100%;
      object-fit: fill;
    }
  }
`;

export default ChiSiamo;
