import React from 'react';
import './styles.css'
import { Box, styled } from '@mui/material';

const StyledScore = styled(Box)({
  position: "absolute",
  fontSize: "3vmin",
  right: "1vmin",
  top: "1vmin"
});

function Score() {
  return (
    <StyledScore>0</StyledScore>
  )
}

export default Score