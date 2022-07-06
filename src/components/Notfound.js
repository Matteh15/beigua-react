import * as React from 'react';

import cat from "../img/sadcat.png";
import Image from '@mui/material';
import ButtonGreen from "./ButtonGreen"
import { BrowserView, isMobile, MobileView } from "react-device-detect";
import styled from "styled-components";
import MediaQuery from 'react-responsive';

import {
  Grid,
  Typography,
  ButtonBase,
  Button
}from '@mui/material';
import ButtonWhite from './ButtonWhite';




/*const Img = styled(cat)({
  margin: 'auto',
  display: 'block',
  height: '50px'
});*/


const Div404 = styled.div`
  color: white;
  font-family: 'Poppins';
  font-weight: 800;
  margin-top: 40px;
  margin-left: 90px;
@media screen and (min-width: 802px) {
  font-size:100px ; 
}
  @media screen and (max-width: 801px) {
    flex-direction: column;
    font-size:60px;
    margin-left: 50px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 50px;
  }
`;
const DivOPS = styled.div`
  color: white;
  font-family: 'Poppins';
  font-weight: 800;
  margin-top: 40px;
  margin-left: 90px;
@media screen and (min-width: 802px) {
  font-size:68px; 
}
  @media screen and (max-width: 801px) {
    flex-direction: column;
    font-size:48px;
    margin-left: 50px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 50px;
  }
`;
const Div1 = styled.div`
  color: white;
  font-family: 'Poppins';
  font-weight: 800;
  margin-top: 20px;
  margin-left: 90px;
  text-shadow: 1px 1px 6px #20202A;
@media screen and (min-width: 802px) {
  font-size:25px ; 
}
  @media screen and (max-width: 801px) {
    flex-direction: column;
    font-size:20px;
    margin-left: 50px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 50px;
  }
`;
const Div2 = styled.div`
  color: white;
  font-family: 'Poppins';
  margin-top: 20px;
  margin-left: 90px;
  text-shadow: 1px 1px 6px #20202A;
@media screen and (min-width: 802px) {
  font-size:22px ; 
}
  @media screen and (max-width: 801px) {
    flex-direction: column;
    font-size:19px;
    margin-left: 50px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 50px;
  }
`;


export const ProfilePic = styled(Grid)`
  background-color:#20202A;
  background-size:800px;
  min-height: 100vh;
  background-repeat:no-repeat;
  background-position:right;
  background-image: url(${cat}); 
  @media screen and (min-width: 1230px) {
    background-size:950px;
  }
  @media screen and (max-width: 1029px) {
    background-size:750px;
  
  }
  @media screen and (max-width: 740px) {
    background-size:900px;
    background-position:bottom;
  }

  @media screen and (max-width: 360px) {
    background-size:350px;
    background-position:bottom;
  }
`;

export default function ComplexGrid() {
  return (
   
    <ProfilePic container  spacing={0}> 
          
      <Grid item xs container direction="column" spacing={0} style={{}}> 
     
        <Grid item xs>
       
          <Div404> 
              404
          </Div404> 
          <DivOPS>
              OPS!!! PAGINA NON TROVATA
          </DivOPS>
          <Div1>
              Non siamo riusciti a trovare quello che stavi cercando potrebbe essere stato trivellato... 
          </Div1>

          <Div2>
              Non ti abbattere, Firma la petizione per salvare te e il tuo cucciolo.
          </Div2>
      
          <Grid item marginTop={"30px"}  marginLeft={"90px"}>
            <ButtonGreen variant="contained" href="#contained-buttons">Firma qui</ButtonGreen>
            <ButtonWhite variant="contained" href="#contained-buttons" style={{color:'black'}} >Torna alla home</ButtonWhite>
          </Grid>
        </Grid>
       
      </Grid> 
    </ProfilePic> 
  );
}

