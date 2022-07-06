import React from "react";
import styled from "styled-components";

import {Box, Container } from "@mui/material";



import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { BrowserView, MobileView } from "react-device-detect";
import ButtonGreen from "./ButtonGreen";

const Petition = () => {
    return(
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
                <Testo>
                    <h2
                        style={{
                            alignItems: "left",
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "62px",
                            lineHeight: "126%",
                            letterSpacing: "0.01em",
                            color: "#000000",
                        }}
                    >
                    Firma la petizione
                    </h2>
                        <br></br>

                    <p
                        style={{
                            fontFamily: "Raleway",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "30px",
                            letterSpacing: "-0.015em",
                            color: "#000000",
                            gap: "12px",
                        }}
                    >
                    Con questa nostra petizione chiediamo che VENGA RITIRATO il decreto in considerazione del fatto che le comunità locali da anni si oppongono a qualunque ipotesi di apertura di una miniera nel comprensorio del Beigua.
                    </p>

                    <ButtonGreen style={{ marginBottom: "3rem" }}>
                    FIRMA QUI
                    </ButtonGreen>

                </Testo>
                <ContenitoreImmagine>
                    dsadsadssadds
                </ContenitoreImmagine>

            </BoxStyled>


        </Container>

        <Container maxWidth="100%" style={{ backgroundColor: "#20202A" }}>
            <div>
            <h1>Casi tra gli animali</h1>
            </div>
            <div>

            </div>
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
    margin:auto;
    margin-top:25px;
    margin-left:50px;
`;

const ContenitoreImmagine = styled.div`
    margin:auto;
    width:80%;
    height: 70%;
    background-color: red;
`;

const BoxStyled = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.8);
    width: 1269px;
    height: 536px;
    margin:auto;
    margin-top:70px;
    margin-bottom:70px;

    @media screen and (max-width: 767px) {
        display:grid;
        grid-template-columns: 80%;
  }
`;

export default Petition;
