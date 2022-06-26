import * as React from 'react';
import { styled } from '@mui/material/styles';
import cat from "../img/sadcat.png";
import Image from '@mui/material';
import ButtonGreen from "./ButtonGreen"
import { BrowserView, isMobile, MobileView } from "react-device-detect";

import {
  Grid,
  Typography,
  ButtonBase,
  Button
}from '@mui/material';




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
                    <Typography  variant="h1" component="div" color="white" fontFamily={"Poppins"} fontWeight={"800"}>
                      404
                    </Typography>
                    <Typography  variant="h2" color="white" fontFamily={"Poppins"} fontWeight={"800"}>
                      OPS!!! PAGINA NON TROVATA
                    </Typography>
                    <Typography  color="white" fontFamily={"Poppins"} fontWeight={"800"} fontSize={"40px"}>
                      Non siamo riusciti a trovare quello che stavi cercando potrebbe essere stato trivellato... 
                    </Typography>
                    <Typography  color="white" fontFamily={"Montserrat"} >
                      Non ti abbattere, Firma la petizione per salvare te e il tuo cucciolo.
                    </Typography>
                  </Grid>
                
                  <Grid item>
                    <ButtonGreen variant="contained" href="#contained-buttons" text="GEnersl">Firma qui</ButtonGreen>
                    <ButtonGreen variant="contained" href="#contained-buttons">Torna alla home</ButtonGreen>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={0}>
                <img src={cat} width="100%" height="100%" color="white"/>
                </Grid>
      </Grid>



  );
}
