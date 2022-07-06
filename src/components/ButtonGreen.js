import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontStyle } from "@mui/system";

const ButtonGreen = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  "&:hover": { backgroundColor: theme.palette.secondary.dark },
  marginTop: 10,
  marginBottom: 10,
  color: "white",
  fontStyle: "Poppins",
  borderRadius: "10px",
}));

export default ButtonGreen;
