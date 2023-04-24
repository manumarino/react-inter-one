import React from 'react';
import dinoStand from './img/stand.png';
import './styles.css'
import { Box, styled } from '@mui/material';

const BOTTOM = 0;
const StyledDinoStationary = styled(Box)(({ theme }) => ({
    position: "absolute",    
    left: "1%",
    height: "30%",
    bottom: `calc(var(${BOTTOM}) * 1%`
  }));

function DinoStationary() {
  return (
    <StyledDinoStationary>
    <img src={dinoStand} 
    alt="dinoStand" 
    className='dino-stationary'
    style={{ maxWidth: "7rem" }}
    />
    </StyledDinoStationary>
  )
}

export default DinoStationary