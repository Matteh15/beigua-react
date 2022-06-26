import { createTheme } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';
export const theme = createTheme({
    palette:{
       primary:{ 
           main:'#20202a'
    },
    secondary:{
        main:'#89ba16',
        dark:'#698a1c'
    },
    otherColor:{
        main:'#ffffff'
    }
    }
});
