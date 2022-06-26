import * as React from 'react';
import { styled } from '@mui/material/styles';
import cat from "../img/sadcat.png";
import Image from '@mui/material';
import ButtonGreen from "./ButtonGreen"
import { BrowserView, isMobile, MobileView } from "react-device-detect";
import useMediaQuery from '@mui/material/useMediaQuery';

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



export default function ComplexGrid() {
  return (
    <Grid container  spacing={0} style={{ backgroundColor: "#20202A", minHeight:"100vh"}} >
      <Grid item xs container direction="column" spacing={0}>
        <Grid item xs>
            <Typography component="div" color="white" fontFamily={"Poppins"} fontWeight={"800"} fontSize={"228px"} marginTop={"90px"} marginLeft={"90px"}>
              404
            </Typography>
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
          <img src={cat} width="100%" height="100%"/>
      </Grid>
    </Grid>



  );
}
