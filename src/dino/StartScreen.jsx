import { Box, styled } from '@mui/material';
import React from 'react'

const StyledStartScreen = styled(Box)(({ theme }) => ({
  position: "absolute",
  fontSize: "5vmin",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}));

function StartScreen() {
  return (
    <StyledStartScreen>
      PRESIONA CUALQUIER TECLA PARA EMPEZAR
    </StyledStartScreen>
  )
}

export default StartScreen