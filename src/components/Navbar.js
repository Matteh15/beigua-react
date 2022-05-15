import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Item,
} from "@mui/material";

import styled from "styled-components";

import { mainGreen } from "../var";

import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <AppBar style={{ background: mainGreen, padding: "1rem 10rem" }}>
      <Toolbar>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <img src={logo} width="100px" color="white" />
          </IconButton>
          <Typography variant="h6" component="div" letterSpacing={5}>
            SAVE PETS
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={10}
          flexGrow={1}
        >
          <p>HOME</p>
          <p>CHI SIAMO</p>
          <p>NOTIZIE</p>
          <p>PETIZIONE</p>
          <p>CONTATTI</p>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
