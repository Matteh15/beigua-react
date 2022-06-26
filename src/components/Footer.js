import React from "react";

import styled from "styled-components";

import { Typography } from "@mui/material";
import logo from "../img/logo.png";

import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <MyFooter>
      <FooterWrapper>
        <FlexDiv className="sameWidth">
          <img src={logo} alt="" />
          <p>
            SAVE <br /> YOUR <br /> PETS
          </p>
        </FlexDiv>
        <FlexDiv className="sameWidth">
          <FlexSpaceAround>
            <FaInstagram />
            <FaFacebook />
            <FaTiktok />
          </FlexSpaceAround>
        </FlexDiv>
        <FlexDiv className="sameWidth">
          <FlexSpaceAround>
            <span>CHI SIAMO</span>
            <span>PETIZIONE</span>
            <span>NOTIZIE</span>
          </FlexSpaceAround>
        </FlexDiv>
      </FooterWrapper>
    </MyFooter>
  );
};

const MyFooter = styled.footer`
  padding: 1.5rem 1rem;
  color: white;
  background-color: #20202a;
  margin-top: 3rem;
  box-shadow: 10px 0 10px rgb(0 0 0 / 0.4);

  .sameWidth {
    width: 33.3%;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexSpaceAround = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  svg {
    font-size: 48px;
  }
`;
