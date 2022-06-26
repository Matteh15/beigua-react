import * as React from 'react';

import cat from "../img/sadcat.png";
import Image from '@mui/material';
import ButtonGreen from "./ButtonGreen"
import { BrowserView, isMobile, MobileView } from "react-device-detect";
import styled from "styled-components";

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


const Div404 = styled(Typography)`

 
  font-size:228px !important; 

  @media screen and (max-width: 767px) {
    flex-direction: column;
    font-size:20px;
  }
`;



export default function ComplexGrid() {
  return (
   
    <Grid container  spacing={0} style={{ backgroundColor: "#20202A", minHeight:"100vh"}} > 
           
      <Grid item xs container direction="column" spacing={0}> 
     
        <Grid item xs>
          <Div404> 
            <Typography component="div" color="white" fontFamily={"Poppins"} fontWeight={"800"}  marginTop={"90px"} marginLeft={"90px"}>
              404
            </Typography>
          </Div404> 
        
            <Typography  variant="h2" color="white" fontFamily={"Poppins"} fontWeight={"800"}  marginLeft={"90px"}>
              OPS!!! PAGINA NON TROVATA
            </Typography>
     
 
            <Typography  color="white" fontFamily={"Poppins"} fontWeight={"800"} fontSize={"40px"}  marginLeft={"90px"}>
              Non siamo riusciti a trovare quello che stavi cercando potrebbe essere stato trivellato... 
            </Typography>

            <Typography  color="white" fontFamily={"Poppins"}  marginLeft={"90px"} fontSize={"22px"} >
              Non ti abbattere, Firma la petizione per salvare te e il tuo cucciolo.
            </Typography>
      
          <Grid item marginTop={"30px"}  marginLeft={"90px"}>
            <ButtonGreen variant="contained" href="#contained-buttons">Firma qui</ButtonGreen>
            <ButtonWhite variant="contained" href="#contained-buttons" style={{color:'black'}} >Torna alla home</ButtonWhite>
          </Grid>
        </Grid>
      </Grid>
         
      <Grid item xs container direction="column" spacing={0}>
          <img src={cat}/>
      </Grid>
    
    </Grid> 
  );
}

