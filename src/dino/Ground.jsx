import { Box, styled } from '@mui/material';
import ground from './img/ground.png'
import React from 'react'


const LEFT = 1;
const StyledGround = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "300%",
  bottom: "0",
  left: `calc(var(${LEFT}) * 1%`
}));

function Ground() {

  return (
    <StyledGround>
      <img src={ground} 
          alt="ground" />
    </StyledGround>
  )
}

export default Ground