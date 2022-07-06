import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { EmailOutlined, Facebook, Instagram } from "@mui/icons-material";

import { BrowserView, isMobile, MobileView } from "react-device-detect";
import { mainColor, mainGreen } from "../var";
import { useState } from "react";

import styled from "styled-components";
import logo from "../img/logo.png";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const openDrawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  const pages = ["HOME", "CHI SIAMO", "NOTIZIE", "CONTATTI", "PETIZIONE"];

  return (
    <AppBar
      style={
        isMobile
          ? { background: mainColor, padding: "0.5rem 0.5rem" }
          : { background: mainColor, padding: "1rem 5rem" }
      }
      position="sticky"
    >
      <BrowserView>
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
              <img src={logo} width="150px" color="white" />
            </IconButton>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={10}
            flexGrow={1}
          >
            {pages.map((value, index) => (
              <MyBtn className={value == "PETIZIONE" ? "pet" : ""}>
                {value}
              </MyBtn>
            ))}
          </Stack>
        </Toolbar>
      </BrowserView>

      <MobileView>
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(!openDrawer)}
          PaperProps={{
            sx: {
              backgroundColor: mainColor,
              padding: "2rem",
            },
          }}
        >
          {pages.map((value, index) => (
            <MyBtn className={value == "PETIZIONE" ? "pet" : ""}>{value}</MyBtn>
          ))}

          <Stack direction="row" alignItems="flex-end" flexGrow={1}>
            <IconButton>
              <Instagram style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <Facebook style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <svg
                style={{ width: "1em", height: "1em", fill: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </IconButton>
          </Stack>
        </Drawer>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={setOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <img src={logo} width="100px" color="white" />
          </IconButton>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <EmailOutlined />
          </IconButton>
        </Stack>
      </MobileView>
    </AppBar>
  );
};

const MyBtn = styled(Button)`
  color: white !important;

  &.pet {
    color: #98c63b !important;
  }

  @media screen and (max-width: 600px) {
    margin: 1rem 0;
  }
`;

export default Navbar;
