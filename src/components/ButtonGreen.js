import { createTheme } from '@mui/material/styles';
import { Button }from '@mui/material';
import { styled } from '@mui/material/styles';
import { fontStyle } from '@mui/system';
import "@fontsource/poppins"; 

const ButtonGreen = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.secondary.main,
    "&:hover":{ backgroundColor: theme.palette.secondary.dark},
    margin: 10,
    fontStyle: 'Poppins'
  }));

  export default ButtonGreen;

