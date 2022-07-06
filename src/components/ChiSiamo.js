import React from "react";
import styled from "styled-components";

import { Container } from "@mui/material";
import ButtonGreen from "./ButtonGreen";
import { Footer } from "./Footer";
import { BrowserView, MobileView } from "react-device-detect";
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

import noi from "../img/Noi.png";

const ChiSiamo = () => {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <CasiContainer
          style={{
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgb(0 0 0 / 0.4)",
          }}
        >
          <FlexDiv style={{ marginTop: "5rem" }}>
            <SessantaPerc>
              <H1HomeSecond>Chi siamo</H1HomeSecond>
              <p className="raleway">
                Siamo un gruppo di studenti che mira a sensibilizzare la
                comunità circa gli effetti devastanti che una miniera nel Beigua
                comporterebbe sia sulle persone che sugli animali.{" "}
                <strong>
                  Un modo per evitare tutto questo è firmare la petizione.
                </strong>
              </p>
            </SessantaPerc>
            <QuarantaPerc>
              <img src={noi} alt="noi" />
            </QuarantaPerc>
          </FlexDiv>
          <BrowserView>
            <ButtonGreen style={{ margin: "3rem auto" }}>
              Leggi di pi&ugrave;
            </ButtonGreen>
          </BrowserView>
          <MobileView>
            <FlexDiv>
              <ButtonGreen style={{ margin: "3rem auto" }}>
                Leggi di pi&ugrave;
              </ButtonGreen>
            </FlexDiv>
          </MobileView>
        </CasiContainer>
      </div>
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
    width: 100%;

    img {
      width: 100%;
      object-fit: fill;
    }
  }
`;

export default ChiSiamo;
