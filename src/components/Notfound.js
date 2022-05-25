import * as React from 'react';
import { styled } from '@mui/material/styles';
import cat from "../img/sadcat.png";
import ButtonGreen from "./ButtonGreen"

import {
  Grid,
  Typography,
  ButtonBase,
  Button
}from '@mui/material';



const Img = styled(cat)({
  margin: 'auto',
  display: 'block',
  height: '50px'
});



export default function ComplexGrid() {
  return (

      <Grid container spacing={2} style={{ backgroundColor: "#20202A", height:"1024px"}} >
        <Grid item xs={12} sm container style={{ backgroundImage: `url(${cat})`, height:"100%"}}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
           
            <Grid item>
              <ButtonGreen variant="contained" href="#contained-buttons" text="GEnersl">Firma qui</ButtonGreen>
              <ButtonGreen variant="contained" href="#contained-buttons">Torna alla home</ButtonGreen>
            </Grid>
          </Grid>
       
        </Grid>
        
      </Grid>
   
  );
}
