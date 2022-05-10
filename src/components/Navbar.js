import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import { mainGreen } from "../var";

import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <AppBar style={{ background: mainGreen }}>
      <Toolbar>
        <IconButton size="small" edge="start" color="inherit" aria-label="logo">
          <img src={logo} width="100px" color="white" />
        </IconButton>
        <Typography variant="h6" component="div"></Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
