import React from "react";

import { Button, createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ navigationLink='', title=''}) => {
    const navigate = useNavigate();

    const theme = createTheme({
        typography: {
          fontFamily: "Cambria, Cochin, Georgia, 'Times New Roman', Times, serif",
        },
      });
    
    return (
        <ThemeProvider theme={theme}>
            <Button variant="outlined" sx={{':hover': { bgcolor:  'rgb(194, 161, 63)', color:'white',},}} color="inherit" size="large" onClick={() => {window.scrollTo(0, 0); return navigate({navigationLink});}}>{title}</Button> 
        </ThemeProvider>
    );
};

export default CustomButton